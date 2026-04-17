document.querySelectorAll("[data-js-timestamp]").forEach((field) => {
  if (field instanceof HTMLInputElement) {
    field.value = String(Math.floor(Date.now() / 1000));
  }
});
