(function () {
  const app = document.querySelector("#app");
  const navLinks = Array.from(document.querySelectorAll("nav a"));
  const routePaths = {
    home: "/",
    fsae: "/fsae/",
    robotics: "/robotics/",
    "cad-gallery": "/cad-gallery/",
    "build-gallery": "/build-gallery/"
  };
  const gaMeasurementId = "G-EP197SXRDE";
  let lastTrackedPath = "";

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  function cleanRouteName(value) {
    return value.replace(/\/index\.html$/i, "/").replace(/^#/, "").replace(/^\/+|\/+$/g, "") || "home";
  }

  function routeToPath(route) {
    return routePaths[route] || "/";
  }

  function routeFromPath(pathname) {
    return cleanRouteName(pathname);
  }

  function routeFromHash() {
    return cleanRouteName(window.location.hash);
  }

  function normalizeRoute() {
    const hashRoute = routeFromHash();
    if (window.location.hash && window.portfolioContent.pages[hashRoute]) {
      return hashRoute;
    }
    const route = routeFromPath(window.location.pathname);
    return window.portfolioContent.pages[route] ? route : "home";
  }

  function cleanLegacyHash(route) {
    if (!window.location.hash) return;
    const hashRoute = routeFromHash();
    if (!window.portfolioContent.pages[hashRoute]) return;
    history.replaceState({ route }, "", routeToPath(route));
  }

  function scrollToPageTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (typeof window.scrollTo === "function") {
      window.scrollTo(0, 0);
    }
  }

  function shouldTrackAnalytics() {
    return !["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
  }

  function trackPageView(page) {
    if (!shouldTrackAnalytics() || typeof window.gtag !== "function") return;
    const pagePath = `${window.location.pathname}${window.location.search}`;
    if (pagePath === lastTrackedPath) return;
    lastTrackedPath = pagePath;
    window.gtag("config", gaMeasurementId, {
      page_path: pagePath,
      page_location: `${window.location.origin}${pagePath}`,
      page_title: `${page.title} | Aayu Yadav`
    });
  }

  function escapeAttr(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function image(url, alt) {
    if (!url) return "";
    return `<img src="${escapeAttr(url)}" alt="${escapeAttr(alt || "")}" loading="lazy">`;
  }

  function embedFrame(embed) {
    if (!embed || !embed.src) return "";
    const classes = [
      embed.large ? "embed-large" : "",
      embed.home ? "embed-home" : "",
      embed.fullWidth ? "embed-full-width" : ""
    ].filter(Boolean).join(" ");
    return `<iframe class="${classes}" src="${embed.src}" title="${embed.title || "Interactive embed"}" allowfullscreen></iframe>`;
  }

  function renderLinks(links) {
    if (!links || links.length === 0) return "";
    return `<div class="links">${links.map((link, index) => {
      const external = /^(https?:|mailto:)/i.test(link.href);
      return `<a class="button ${index ? "secondary" : ""}" href="${link.href}"${external ? ' target="_blank" rel="noreferrer"' : ""}>${link.label}</a>`;
    }).join("")}</div>`;
  }

  function renderHero(page) {
    return `
      <section class="hero page-band reveal ${page.heroImage ? "" : "hero-text-only"}" style="${page.backgroundImage ? `--bg-image: url('${page.backgroundImage}')` : ""}">
        <div class="hero-copy">
          ${page.eyebrow ? `<p class="eyebrow">${page.eyebrow}</p>` : ""}
          <h1>${page.title}</h1>
          ${page.lead ? `<p class="lead">${page.lead}</p>` : ""}
          ${(page.body || []).map((paragraph) => `<p>${paragraph}</p>`).join("")}
          ${renderLinks(page.links)}
        </div>
        ${image(page.heroImage, page.title)}
      </section>
    `;
  }

  function renderProjects(projects) {
    if (!projects || projects.length === 0) return "";
    return `
      <section class="section stack wide-section">
        ${projects.map((project) => `
          <article class="project ${project.embed?.fullWidth ? "project-full-embed" : ""} reveal" style="${project.backgroundImage ? `--bg-image: url('${project.backgroundImage}')` : ""}">
            ${project.embed ? embedFrame(project.embed) : image(project.image, project.title)}
            <div class="project-copy">
              ${project.kicker ? `<p class="eyebrow">${project.kicker}</p>` : ""}
              <h2>${project.title}</h2>
              ${project.stats ? `<div class="stats">${project.stats.map((stat) => `<div><strong>${stat.value}</strong><span>${stat.label}</span></div>`).join("")}</div>` : ""}
              ${(project.body || []).map((paragraph) => `<p>${paragraph}</p>`).join("")}
              ${renderLinks(project.links)}
            </div>
          </article>
        `).join("")}
      </section>
    `;
  }

  function renderVisualizers(items) {
    if (!items || items.length === 0) return "";
    return `
      <section class="section home-visualizers">
        ${items.map((item) => `
          <article class="home-visualizer reveal">
            ${embedFrame({ ...item.embed, home: true })}
            <div class="project-copy home-visualizer-copy">
              ${item.kicker ? `<p class="eyebrow">${item.kicker}</p>` : ""}
              <h2>${item.title}</h2>
              ${(item.body || []).map((paragraph) => `<p>${paragraph}</p>`).join("")}
              ${renderLinks(item.links)}
            </div>
          </article>
        `).join("")}
      </section>
    `;
  }

  function renderHighlights(highlights) {
    if (!highlights || highlights.length === 0) return "";
    return `
      <section class="section wide-section reveal">
        <h2>Highlights</h2>
        <div class="cards">
          ${highlights.map((item) => `
            <article class="card">
              <h3>${item.title}</h3>
              <p>${item.body}</p>
              ${renderLinks(item.links)}
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderCadList(items) {
    if (!items || items.length === 0) return "";
    return `
      <section class="section wide-section reveal">
        <h2>CAD Links</h2>
        <ol class="cad-list">
          ${items.map((item) => `<li><a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a></li>`).join("")}
        </ol>
      </section>
    `;
  }

  function renderGallery(items, title, note, cadLinks) {
    if (!items || items.length === 0) return "";
    const cadList = cadLinks && cadLinks.length ? `
          <aside class="gallery-cad-links" aria-label="CAD links">
            <h2>CAD Links</h2>
            <ol class="cad-list">
              ${cadLinks.map((item) => `<li><a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a></li>`).join("")}
            </ol>
          </aside>
        ` : "";
    return `
      <section class="section wide-section reveal">
        <div class="gallery-shell ${cadList ? "with-cad-links" : ""}">
          ${cadList}
          <div class="gallery-main">
            <div class="section-heading">
              <h2>${title}</h2>
              ${note ? `<p>${note}</p>` : ""}
            </div>
            <div class="gallery-grid">
              ${items.map((item, index) => {
                const alt = item.title || `${title} ${index + 1}`;
                return `
                <article class="gallery-card reveal">
                  <button class="gallery-open" type="button" data-gallery-image="${escapeAttr(item.image)}" data-gallery-alt="${escapeAttr(alt)}" aria-label="Open ${escapeAttr(alt)}">
                    ${image(item.image, alt)}
                  </button>
                  ${(item.title || item.body) ? `<div class="caption">${item.title ? `<h3>${item.title}</h3>` : ""}${item.body ? `<p>${item.body}</p>` : ""}</div>` : ""}
                </article>
              `; }).join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function ensureLightbox() {
    let lightbox = document.querySelector(".image-lightbox");
    if (lightbox) return lightbox;
    lightbox = document.createElement("div");
    lightbox.className = "image-lightbox";
    lightbox.hidden = true;
    lightbox.innerHTML = `
      <button class="image-lightbox-close" type="button" aria-label="Close image">Close</button>
      <img alt="">
    `;
    document.body.append(lightbox);
    return lightbox;
  }

  function openLightbox(src, alt) {
    if (!src) return;
    const lightbox = ensureLightbox();
    const img = lightbox.querySelector("img");
    img.src = src;
    img.alt = alt || "";
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    lightbox.querySelector("button").focus({ preventScroll: true });
  }

  function closeLightbox() {
    const lightbox = document.querySelector(".image-lightbox");
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    lightbox.querySelector("img").removeAttribute("src");
    document.body.classList.remove("lightbox-open");
  }

  function renderGalleryLinks(items) {
    if (!items || items.length === 0) return "";
    return `
      <section class="section wide-section reveal">
        <div class="gallery-link-grid">
          ${items.map((item) => `
            <article class="gallery-link-card">
              ${image(item.image, item.title)}
              <div class="gallery-link-copy">
                <h2>${item.title}</h2>
                ${renderLinks(item.links)}
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderEmbeds(embeds, title) {
    if (!embeds || embeds.length === 0) return "";
    return `
      <section class="section wide-section reveal">
        <h2>${title || "Embeds"}</h2>
        <div class="media-grid">
          ${embeds.map((embed) => `
            <article>
              ${embedFrame(embed)}
              <p>${embed.caption}</p>
              ${renderLinks(embed.links)}
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderPage() {
    const route = normalizeRoute();
    const page = window.portfolioContent.pages[route];
    cleanLegacyHash(route);
    document.title = `${page.title} | Aayu Yadav`;
    navLinks.forEach((link) => {
      const linkRoute = routeFromPath(new URL(link.getAttribute("href"), window.location.origin).pathname);
      link.classList.toggle("is-active", linkRoute === route);
    });
    const galleryOwnsCadLinks = page.gallery && page.gallery.length && page.cadLinks && page.cadLinks.length;
    app.innerHTML = [
      page.hideHero ? "" : renderHero(page),
      renderHighlights(page.highlights),
      renderVisualizers(page.visualizers),
      renderEmbeds(page.featuredEmbeds, page.featuredEmbedsTitle),
      renderProjects(page.projects),
      renderGalleryLinks(page.galleryLinks),
      galleryOwnsCadLinks ? "" : renderCadList(page.cadLinks),
      renderGallery(page.gallery, page.galleryTitle || "Gallery", page.galleryNote, galleryOwnsCadLinks ? page.cadLinks : null),
      renderEmbeds(page.embeds, page.embedsTitle || "Video Embeds")
    ].join("");
    observeReveals();
    app.focus({ preventScroll: true });
    scrollToPageTop();
    requestAnimationFrame(scrollToPageTop);
    trackPageView(page);
  }

  function observeReveals() {
    const reveals = Array.from(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window)) {
      reveals.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((item) => observer.observe(item));
  }

  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : event.target.parentElement;
    if (!target) return;
    const galleryButton = target.closest(".gallery-open");
    if (galleryButton) {
      openLightbox(galleryButton.dataset.galleryImage, galleryButton.dataset.galleryAlt);
      return;
    }
    if (target.closest(".image-lightbox-close") || target.classList.contains("image-lightbox")) {
      closeLightbox();
      return;
    }
    const link = target.closest("a[href]");
    if (!link || link.target && link.target !== "_self") return;
    const url = new URL(link.getAttribute("href"), window.location.href);
    if (url.origin !== window.location.origin) return;
    const route = routeFromPath(url.pathname);
    if (!window.portfolioContent.pages[route]) return;
    event.preventDefault();
    const nextPath = routeToPath(route);
    if (window.location.pathname !== nextPath || window.location.hash) {
      history.pushState({ route }, "", nextPath);
    }
    renderPage();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });

  window.addEventListener("popstate", renderPage);
  window.addEventListener("hashchange", renderPage);
  renderPage();
})();
