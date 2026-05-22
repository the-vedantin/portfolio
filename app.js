(function () {
  const app = document.querySelector("#app");
  const navLinks = Array.from(document.querySelectorAll("nav a"));

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  function normalizeRoute() {
    const route = window.location.hash.replace("#", "") || "home";
    return window.portfolioContent.pages[route] ? route : "home";
  }

  function scrollToPageTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (typeof window.scrollTo === "function") {
      window.scrollTo(0, 0);
    }
  }

  function image(url, alt) {
    if (!url) return "";
    return `<img src="${url}" alt="${alt || ""}" loading="lazy">`;
  }

  function embedFrame(embed) {
    if (!embed || !embed.src) return "";
    return `<iframe class="${embed.large ? "embed-large" : ""}" src="${embed.src}" title="${embed.title || "Interactive embed"}" allowfullscreen loading="lazy"></iframe>`;
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
      <section class="hero page-band reveal" style="${page.backgroundImage ? `--bg-image: url('${page.backgroundImage}')` : ""}">
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
          <article class="project reveal" style="${project.backgroundImage ? `--bg-image: url('${project.backgroundImage}')` : ""}">
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

  function renderGallery(items, title) {
    if (!items || items.length === 0) return "";
    return `
      <section class="section wide-section reveal">
        <h2>${title}</h2>
        <div class="gallery-grid">
          ${items.map((item, index) => `
            <article class="gallery-card reveal" tabindex="0">
              ${image(item.image, item.title || `${title} ${index + 1}`)}
              ${(item.title || item.body) ? `<div class="caption">${item.title ? `<h3>${item.title}</h3>` : ""}${item.body ? `<p>${item.body}</p>` : ""}</div>` : ""}
            </article>
          `).join("")}
        </div>
      </section>
    `;
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
    document.title = `${page.title} | Aayu Yadav`;
    navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${route}`));
    app.innerHTML = [
      renderHero(page),
      renderHighlights(page.highlights),
      renderEmbeds(page.featuredEmbeds, page.featuredEmbedsTitle),
      renderProjects(page.projects),
      renderGalleryLinks(page.galleryLinks),
      renderCadList(page.cadLinks),
      renderGallery(page.gallery, page.galleryTitle || "Gallery"),
      renderEmbeds(page.embeds, page.embedsTitle || "Video Embeds")
    ].join("");
    observeReveals();
    app.focus({ preventScroll: true });
    scrollToPageTop();
    requestAnimationFrame(scrollToPageTop);
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

  window.addEventListener("hashchange", renderPage);
  renderPage();
})();
