const runtimeMessageSelector = "[data-form-runtime-message]";
const statusMessageSelector = "[data-form-status]";

const statusMessages: Record<string, { tone: "success" | "error"; text: string }> = {
  success: {
    tone: "success",
    text: "Je bericht is verzonden. Ik neem zo snel mogelijk contact met je op."
  },
  invalid: {
    tone: "error",
    text: "Controleer de verplichte velden, het e-mailadres en de privacyverklaring."
  },
  throttled: {
    tone: "error",
    text: "Er zijn net meerdere pogingen ontvangen. Wacht even en probeer het daarna opnieuw."
  },
  blocked: {
    tone: "error",
    text: "De inzending is geblokkeerd. Neem contact op per e-mail als dit onterecht lijkt."
  },
  captcha: {
    tone: "error",
    text: "De spambeveiliging is niet gelukt. Probeer het opnieuw."
  },
  blocked_spam: {
    tone: "error",
    text: "De inzending is tegengehouden. Neem contact op per e-mail als dit onterecht lijkt."
  },
  review: {
    tone: "success",
    text: "Je bericht is ontvangen en wordt handmatig gecontroleerd. Ik kom zo snel mogelijk bij je terug."
  },
  mail_unavailable: {
    tone: "error",
    text: "Er ging iets mis bij het verzenden. Probeer het opnieuw of mail direct naar info@vectorworks-spotlight-training.nl."
  },
  error: {
    tone: "error",
    text: "Er ging iets mis bij het verzenden. Probeer het opnieuw of mail direct naar info@vectorworks-spotlight-training.nl."
  }
};

function clearFieldValidity(form: HTMLFormElement) {
  for (const field of Array.from(form.elements)) {
    if (
      field instanceof HTMLInputElement ||
      field instanceof HTMLTextAreaElement ||
      field instanceof HTMLSelectElement
    ) {
      field.setCustomValidity("");
    }
  }
}

function labelForField(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): string {
  const wrapper = field.closest("label");
  const span = wrapper?.querySelector("span");
  return span?.textContent?.replace(/\s*\*$/, "").trim() || "Dit veld";
}

function setCustomMessage(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) {
  if (field.validity.valueMissing) {
    if (field instanceof HTMLInputElement && field.type === "checkbox" && field.name === "privacy_accepted") {
      field.setCustomValidity("Akkoord gaan met de privacyverklaring is verplicht.");
      return;
    }

    field.setCustomValidity(`${labelForField(field)} is verplicht.`);
    return;
  }

  if (field instanceof HTMLInputElement && field.type === "email" && field.validity.typeMismatch) {
    field.setCustomValidity("Vul een geldig e-mailadres in.");
    return;
  }

  field.setCustomValidity("");
}

document.querySelectorAll<HTMLFormElement>(".site-form").forEach((form) => {
  const shell = form.closest(".form-shell");
  const runtimeMessage = shell?.querySelector<HTMLElement>(runtimeMessageSelector) ?? null;
  const statusMessage = shell?.querySelector<HTMLElement>(statusMessageSelector) ?? null;
  const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const submitLabel = submitButton?.textContent ?? "Verzenden";
  const currentStatus = new URLSearchParams(window.location.search).get("status");

  if (statusMessage && currentStatus) {
    const message = statusMessages[currentStatus];
    if (message) {
      statusMessage.textContent = message.text;
      statusMessage.hidden = false;
      statusMessage.classList.remove("form-status--success", "form-status--error");
      statusMessage.classList.add(message.tone === "success" ? "form-status--success" : "form-status--error");
    }
  }

  const hideRuntimeMessage = () => {
    if (!runtimeMessage) {
      return;
    }

    runtimeMessage.hidden = true;
    runtimeMessage.textContent = "";
  };

  const showRuntimeMessage = (text: string) => {
    if (!runtimeMessage) {
      return;
    }

    runtimeMessage.textContent = text;
    runtimeMessage.hidden = false;
  };

  form.addEventListener(
    "invalid",
    (event) => {
      const field = event.target;
      if (
        !(field instanceof HTMLInputElement) &&
        !(field instanceof HTMLTextAreaElement) &&
        !(field instanceof HTMLSelectElement)
      ) {
        return;
      }

      setCustomMessage(field);
      showRuntimeMessage("Controleer de verplichte velden en probeer het opnieuw.");
    },
    true
  );

  form.addEventListener("input", () => {
    clearFieldValidity(form);
    hideRuntimeMessage();
  });

  form.addEventListener("change", () => {
    clearFieldValidity(form);
    hideRuntimeMessage();
  });

  form.addEventListener("submit", (event) => {
    clearFieldValidity(form);
    hideRuntimeMessage();

    if (!form.checkValidity()) {
      event.preventDefault();
      showRuntimeMessage("Controleer de verplichte velden en probeer het opnieuw.");
      form.reportValidity();
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Verzenden...";
    }
  });

  window.addEventListener("pageshow", () => {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = submitLabel;
    }
  });
});
