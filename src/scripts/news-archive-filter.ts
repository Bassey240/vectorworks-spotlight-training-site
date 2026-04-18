const archivePage = document.querySelector<HTMLElement>("[data-news-archive]");

if (archivePage) {
  const params = new URLSearchParams(window.location.search);
  const searchTerm = (params.get("s") || "").trim().toLowerCase();
  const archiveMonth = (params.get("archief") || "").trim();
  const items = Array.from(
    archivePage.querySelectorAll<HTMLElement>("[data-archive-item]")
  );
  const searchInput = archivePage.querySelector<HTMLInputElement>("[data-archive-search]");
  const archiveLinks = Array.from(
    archivePage.querySelectorAll<HTMLAnchorElement>("[data-archive-link]")
  );
  const toolbar = archivePage.querySelector<HTMLElement>("[data-archive-toolbar]");
  const results = archivePage.querySelector<HTMLElement>("[data-archive-results]");
  const clearLink = archivePage.querySelector<HTMLAnchorElement>("[data-archive-clear]");

  if (searchInput) {
    searchInput.value = params.get("s") || "";
  }

  const activeFilters = searchTerm.length > 0 || archiveMonth.length > 0;
  let visibleCount = 0;

  items.forEach((item) => {
    const title = (item.dataset.archiveTitle || "").toLowerCase();
    const excerpt = (item.dataset.archiveExcerpt || "").toLowerCase();
    const month = item.dataset.archiveMonth || "";
    const matchesSearch =
      searchTerm.length === 0 || title.includes(searchTerm) || excerpt.includes(searchTerm);
    const matchesArchive = archiveMonth.length === 0 || month === archiveMonth;
    const visible = matchesSearch && matchesArchive;

    item.hidden = !visible;

    if (visible) {
      visibleCount += 1;
    }
  });

  archiveLinks.forEach((link) => {
    const url = new URL(link.href, window.location.origin);
    const linkMonth = url.searchParams.get("archief") || "";
    link.toggleAttribute("aria-current", linkMonth === archiveMonth && archiveMonth.length > 0);
  });

  if (toolbar && results && clearLink) {
    toolbar.hidden = !activeFilters;
    toolbar.classList.toggle("archive-toolbar--active", activeFilters);

    if (activeFilters) {
      const parts: string[] = [];

      if (archiveMonth) {
        const activeLink = archiveLinks.find((link) => {
          const url = new URL(link.href, window.location.origin);
          return (url.searchParams.get("archief") || "") === archiveMonth;
        });

        if (activeLink) {
          parts.push(activeLink.textContent?.trim() || archiveMonth);
        }
      }

      if (searchTerm) {
        parts.push(`zoekterm "${searchInput?.value.trim() || searchTerm}"`);
      }

      results.textContent =
        visibleCount > 0
          ? `${visibleCount} bericht${visibleCount === 1 ? "" : "en"} gevonden${parts.length ? ` voor ${parts.join(" en ")}` : ""}.`
          : `Geen berichten gevonden${parts.length ? ` voor ${parts.join(" en ")}` : ""}.`;

      const clearUrl = new URL(clearLink.href, window.location.origin);
      clearUrl.search = "";
      clearLink.href = clearUrl.pathname;
    } else {
      results.textContent = "";
    }
  }
}
