const currentPage = window.location.pathname.split("/").pop() || "index.html";
const riskProfilerLink = "https://goalchicapital.github.io/risk-profiler/";
const blogLink = "https://www.thelogicaladvisor.com/blog/";
const loginLink = "https://goalchicapital.my-portfolio.co.in/app/#/login";

const planningPages = new Set([
  "goal-based-planning.html",
  "wealth-management.html",
  "multi-asset-allocation.html",
  "portfolio-review.html",
  "retirement-planning.html",
  "nri-financial-planning.html",
  "will-planning.html",
  "family-trusts.html"
]);

const aboutPages = new Set(["about.html"]);
const insightPages = new Set(["insights.html"]);

const planningMenu = [
  {
    title: "Core Approach",
    links: [
      {
        href: "goal-based-planning.html",
        title: "Life Value Financial Planning",
        copy: "Aligning financial decisions with what truly matters in your life.",
        featured: true
      },
      {
        href: "goal-based-planning.html",
        title: "Goal-Based Planning",
        copy: "Translating life goals into structured, executable financial plans."
      }
    ]
  },
  {
    title: "Life Planning",
    links: [
      {
        href: "retirement-planning.html",
        title: "Retirement Strategy",
        copy: "Designing long-term income, stability, and financial independence."
      },
      {
        href: "retirement-planning.html",
        title: "Lifestyle & Cashflow Structuring",
        copy: "Bringing control, visibility, and balance to your ongoing finances."
      }
    ]
  },
  {
    title: "Capital Stewardship",
    links: [
      {
        href: "wealth-management.html",
        title: "Investment Strategy & Portfolio Management",
        copy: "Allocating capital with defined roles, risk, and long-term purpose."
      },
      {
        href: "goal-based-planning.html",
        title: "Risk & Protection Planning",
        copy: "Protecting your financial life from unforeseen disruptions."
      }
    ]
  },
  {
    title: "Continuity & Structure",
    links: [
      {
        href: "will-planning.html",
        title: "Succession & Continuity Planning",
        copy: "Ensuring smooth transfer of wealth, intent, and responsibility."
      },
      {
        href: "nri-financial-planning.html",
        title: "Tax Structuring & Optimisation",
        copy: "Structuring decisions to improve post-tax outcomes over time."
      }
    ]
  }
];

const aboutMenu = [
  {
    title: "Philosophy",
    links: [
      { href: "about.html", title: "Our Philosophy" },
      { href: "goal-based-planning.html", title: "Our Approach" }
    ]
  },
  {
    title: "Firm",
    links: [
      { href: "about.html", title: "About Goalchi" },
      { href: "about.html", title: "Founders" },
      { href: "goal-based-planning.html", title: "Our Process" }
    ]
  },
  {
    title: "Why Us",
    links: [
      { href: "about.html", title: "Why Goalchi" },
      { href: "wealth-management.html", title: "Who We Work With" },
      { href: "about.html", title: "Our Core Values" }
    ]
  }
];

const insightsMenu = [
  {
    title: "Editorial",
    links: [
      {
        href: blogLink,
        title: "The Goalchi Journal",
        copy: "Long-form commentary on planning, investing, and stewardship-led wealth decisions.",
        external: true
      }
    ]
  },
  {
    title: "Learning",
    links: [
      {
        href: "insights.html",
        title: "Financial Concepts",
        copy: "Clear explanations of the ideas clients encounter in financial planning."
      }
    ]
  },
  {
    title: "Clarity",
    links: [
      {
        href: "insights.html",
        title: "Visual Thinking",
        copy: "We translate complex financial ideas into original visual frameworks for clarity and better decision-making."
      }
    ]
  },
  {
    title: "Media",
    links: [
      {
        href: "insights.html",
        title: "Video Library",
        copy: "Short-form video perspectives on money, decisions, and long-term thinking."
      }
    ]
  }
];

const footerSections = [
  {
    title: "Core Platform",
    links: [
      { href: "goal-based-planning.html", label: "Goal-Based Planning" },
      { href: "wealth-management.html", label: "Wealth Management" },
      { href: "multi-asset-allocation.html", label: "Multi-Asset Allocation" },
      { href: "portfolio-review.html", label: "Portfolio Review" }
    ]
  },
  {
    title: "Specialist Planning",
    links: [
      { href: "retirement-planning.html", label: "Retirement Planning" },
      { href: "nri-financial-planning.html", label: "NRI Financial Planning" },
      { href: "will-planning.html", label: "Will Planning" },
      { href: "family-trusts.html", label: "Family Trusts" }
    ]
  },
  {
    title: "Insights & Contact",
    links: [
      { href: "insights.html", label: "Insights Hub" },
      { href: "about.html", label: "About Goalchi" },
      { href: blogLink, label: "The Logical Advisor Blog", external: true },
      { href: riskProfilerLink, label: "Risk Profile Score", external: true },
      { href: "mailto:hello@goalchicapital.com", label: "hello@goalchicapital.com" },
      { href: "tel:+911141234567", label: "+91 11 4123 4567" }
    ],
    note: "India | NRI | Global Families"
  }
];

const aboutMobileLinks = [
  { href: "about.html", label: "Our Philosophy" },
  { href: "goal-based-planning.html", label: "Our Approach" },
  { href: "about.html", label: "About Goalchi" },
  { href: "about.html", label: "Founders" },
  { href: "goal-based-planning.html", label: "Our Process" },
  { href: "about.html", label: "Why Goalchi" },
  { href: "wealth-management.html", label: "Who We Work With" },
  { href: "about.html", label: "Our Core Values" }
];

const planningMobileLinks = [
  { href: "goal-based-planning.html", label: "Life Value Financial Planning" },
  { href: "goal-based-planning.html", label: "Goal-Based Planning" },
  { href: "retirement-planning.html", label: "Retirement Strategy" },
  { href: "retirement-planning.html", label: "Lifestyle & Cashflow Structuring" },
  { href: "wealth-management.html", label: "Investment Strategy & Portfolio Management" },
  { href: "goal-based-planning.html", label: "Risk & Protection Planning" },
  { href: "will-planning.html", label: "Succession & Continuity Planning" },
  { href: "nri-financial-planning.html", label: "Tax Structuring & Optimisation" }
];

const insightMobileLinks = [
  { href: blogLink, label: "The Goalchi Journal", external: true },
  { href: "insights.html", label: "Financial Concepts" },
  { href: "insights.html", label: "Visual Thinking" },
  { href: "insights.html", label: "Video Library" }
];

const retiremeantItems = [
  { letter: "R", detail: "Retirement Strategy" },
  { letter: "E", detail: "Emergency Reserves" },
  { letter: "T", detail: "Taxation Restructuring" },
  { letter: "I", detail: "Investment Strategy" },
  { letter: "R", detail: "Risk Management" },
  { letter: "E", detail: "Estate Planning" },
  { letter: "M", detail: "Money Management" },
  { letter: "E", detail: "Expense Discipline" },
  { letter: "A", detail: "Asset Allocation" },
  { letter: "N", detail: "Net Worth Planning" },
  { letter: "T", detail: "Time Horizon Alignment" }
];

function linkMarkup(link) {
  const attrs = link.external ? ' target="_blank" rel="noreferrer"' : "";
  const currentClass = !link.external && currentPage === link.href ? " is-current" : "";
  const featuredClass = link.featured ? " is-featured" : "";
  const compactClass = link.copy ? "" : " is-compact";
  const copyMarkup = link.copy ? `<span class="mega-link-copy">${link.copy}</span>` : "";

  return `
    <a class="mega-link${currentClass}${featuredClass}${compactClass}" href="${link.href}"${attrs}>
      <span class="mega-link-title">${link.title}</span>
      ${copyMarkup}
    </a>
  `;
}

function columnMarkup(column) {
  return `
    <div class="mega-col">
      <span class="mega-col-title">${column.title}</span>
      ${column.links.map(linkMarkup).join("")}
    </div>
  `;
}

function renderMega(label, sections, isActive, options = {}) {
  const slot = options.slot || label.toLowerCase();
  const columns = options.columns || Math.min(sections.length, 4);
  const width = options.width ? `${options.width}px` : null;
  const panelId = `mega-panel-${slot}`;
  const panelStyle = [`--mega-columns:${columns}`];

  if (width) panelStyle.push(`--mega-width:${width}`);

  return `
    <div class="nav-mega nav-mega--${slot}${isActive ? " is-active" : ""}">
      <button
        class="mega-trigger nav-disclosure${isActive ? " active" : ""}"
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="${panelId}"
        data-disclosure-trigger
      >
        ${label}
      </button>
      <div
        class="mega-panel mega-panel--${slot}"
        id="${panelId}"
        data-mega-slot="${slot}"
        style="${panelStyle.join("; ")}"
        role="group"
        aria-label="${label}"
        data-mega-width="${options.width || ""}"
        hidden
      >
        ${sections.map(columnMarkup).join("")}
      </div>
    </div>
  `;
}

function renderMobileSection(title, links) {
  return `
    <span class="mobile-menu-heading">${title}</span>
    ${links
      .map((link) => {
        const attrs = link.external ? ' target="_blank" rel="noreferrer"' : "";
        return `<a href="${link.href}"${attrs}>${link.label || link.title}</a>`;
      })
      .join("")}
  `;
}

function renderHeader() {
  const nav = document.getElementById("siteNav");
  if (!nav) return;

  nav.innerHTML = `
    <div class="container nav-inner">
      <a class="brandmark" href="index.html" aria-label="Goalchi Capital home">
        <img class="brandmark-logo" src="assets/logos/goalchi-logo-primary.png" alt="Goalchi Capital" />
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a class="nav-home${currentPage === "index.html" ? " active" : ""}" href="index.html">Home</a>
        ${renderMega("About", aboutMenu, aboutPages.has(currentPage), { slot: "about", columns: 3, width: 620 })}
        ${renderMega("Planning", planningMenu, planningPages.has(currentPage), { slot: "planning", columns: 4, width: 920 })}
        ${renderMega("Insights", insightsMenu, insightPages.has(currentPage), { slot: "insights", columns: 4, width: 700 })}
      </nav>

      <div class="nav-actions">
        <a href="${loginLink}" class="nav-login" target="_blank" rel="noreferrer" title="Access your portfolio">Access Portfolio</a>

        <details class="mobile-menu" data-mobile-menu>
          <summary>Menu</summary>
          <div class="mobile-menu-panel">
            <a href="index.html">Home</a>
            ${renderMobileSection("About", aboutMobileLinks)}
            ${renderMobileSection("Planning", planningMobileLinks)}
            ${renderMobileSection("Insights", insightMobileLinks)}
          </div>
        </details>
      </div>
    </div>
  `;
}

function renderFooter() {
  const footer = document.querySelector("footer.footer");
  if (!footer) return;

  footer.innerHTML = `
    <div class="container footer-grid">
      <div class="footer-intro">
        <a class="brandmark footer-brand" href="index.html" aria-label="Goalchi Capital home">
          <img src="assets/logos/goalchi-logo-primary.png" alt="Goalchi Capital" />
        </a>
        <p class="footer-summary">
          Goalchi Capital helps clients move from scattered financial decisions to a structured wealth-management relationship centered on life goals, portfolio clarity, retirement confidence, and family continuity.
        </p>
      </div>

      ${footerSections
        .map((section) => {
          const isContactColumn = section.title === "Insights & Contact";
          const contactLinks = isContactColumn
            ? section.links.filter((link) => link.href.startsWith("mailto:") || link.href.startsWith("tel:"))
            : [];
          const standardLinks = isContactColumn
            ? section.links.filter((link) => !link.href.startsWith("mailto:") && !link.href.startsWith("tel:"))
            : section.links;

          return `
            <div class="footer-col${isContactColumn ? " footer-col--contact" : ""}">
              <h4>${section.title}</h4>
              ${standardLinks
                .map((link) => {
                  const attrs = link.external ? ' target="_blank" rel="noreferrer"' : "";
                  return `<a href="${link.href}"${attrs}>${link.label}</a>`;
                })
                .join("")}
              ${
                isContactColumn
                  ? `<div class="footer-contact-group">
                      ${contactLinks
                        .map((link) => {
                          const attrs = link.external ? ' target="_blank" rel="noreferrer"' : "";
                          return `<a href="${link.href}"${attrs}>${link.label}</a>`;
                        })
                        .join("")}
                    </div>`
                  : ""
              }
              ${section.note ? `<p class="footer-note">${section.note}</p>` : ""}
            </div>
          `;
        })
        .join("")}
    </div>

    <div class="container copyright">&copy; 2026 Goalchi Capital Services LLP. All rights reserved.</div>
  `;
}

function toggleNav() {
  const nav = document.getElementById("siteNav");
  if (!nav) return;
  nav.classList.toggle("scrolled", window.scrollY > 18);
}

function positionMegaPanels() {
  const nav = document.getElementById("siteNav");
  const navInner = nav?.querySelector(".nav-inner");
  const navLinks = nav?.querySelector(".nav-links");
  const brandmark = nav?.querySelector(".brandmark");

  if (!navInner || !navLinks || !brandmark) return;

  const panels = nav.querySelectorAll(".mega-panel");

  if (window.innerWidth <= 960) {
    panels.forEach((panel) => panel.style.removeProperty("--mega-left"));
    return;
  }

  const navInnerRect = navInner.getBoundingClientRect();
  const brandmarkRect = brandmark.getBoundingClientRect();
  const zoneStart = Math.max(navInnerRect.left + 22, brandmarkRect.right + 44);
  const viewportPadding = 24;
  const slotOffsets = {
    about: 0,
    planning: 78,
    insights: 224
  };

  panels.forEach((panel) => {
    const slot = panel.dataset.megaSlot || "planning";
    const trigger = panel.closest(".nav-mega");
    const triggerRect = trigger?.getBoundingClientRect();

    if (!triggerRect) return;

    const baseWidth = Number(panel.dataset.megaWidth || 0) || panel.getBoundingClientRect().width || 0;
    const panelWidth = Math.min(baseWidth || 920, window.innerWidth - viewportPadding * 2);
    let desiredLeft = zoneStart + (slotOffsets[slot] ?? 0);
    const maxLeft = Math.max(viewportPadding, window.innerWidth - viewportPadding - panelWidth);

    if (desiredLeft > maxLeft) desiredLeft = maxLeft;
    if (desiredLeft < viewportPadding) desiredLeft = viewportPadding;

    const relativeLeft = desiredLeft - triggerRect.left;
    panel.style.setProperty("--mega-left", `${relativeLeft}px`);
  });
}

function closeMegaMenus(options = {}) {
  const { except = null, returnFocus = false } = options;
  const nav = document.getElementById("siteNav");
  if (!nav) return;

  nav.querySelectorAll("[data-disclosure-trigger]").forEach((trigger) => {
    const controls = trigger.getAttribute("aria-controls");
    const panel = controls ? document.getElementById(controls) : null;
    const shouldStayOpen = except && trigger === except;

    if (shouldStayOpen) return;

    trigger.setAttribute("aria-expanded", "false");
    trigger.closest(".nav-mega")?.classList.remove("is-open");

    if (panel) {
      window.clearTimeout(panel.hideTimer);
      panel.hideTimer = window.setTimeout(() => {
        if (trigger.getAttribute("aria-expanded") === "false") {
          panel.hidden = true;
        }
      }, 200);
    }
  });

  if (returnFocus && options.focusTrigger) {
    options.focusTrigger.focus();
  }
}

function openMegaMenu(trigger, options = {}) {
  const controls = trigger.getAttribute("aria-controls");
  const panel = controls ? document.getElementById(controls) : null;

  if (!panel) return;

  closeMegaMenus({ except: trigger });
  window.clearTimeout(panel.hideTimer);
  panel.hidden = false;
  trigger.setAttribute("aria-expanded", "true");

  requestAnimationFrame(() => {
    trigger.closest(".nav-mega")?.classList.add("is-open");
    positionMegaPanels();

    if (options.moveFocus) {
      const firstLink = panel.querySelector("a[href]");
      firstLink?.focus();
    }
  });
}

function bindDisclosures() {
  const nav = document.getElementById("siteNav");
  if (!nav) return;

  const triggers = nav.querySelectorAll("[data-disclosure-trigger]");
  if (!triggers.length) return;

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const isOpen = trigger.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        closeMegaMenus();
        return;
      }

      openMegaMenu(trigger);
    });

    trigger.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowDown") return;
      event.preventDefault();
      openMegaMenu(trigger, { moveFocus: true });
    });
  });

  nav.querySelectorAll(".mega-panel a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMegaMenus();
    });
  });

  document.addEventListener("click", (event) => {
    if (nav.contains(event.target)) return;
    closeMegaMenus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    const openTrigger = nav.querySelector('[data-disclosure-trigger][aria-expanded="true"]');
    if (!openTrigger) return;

    event.preventDefault();
    closeMegaMenus({ returnFocus: true, focusTrigger: openTrigger });
  });
}

function bindMobileMenu() {
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  if (!mobileMenu) return;

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.removeAttribute("open");
    });
  });

  document.addEventListener("click", (event) => {
    if (!mobileMenu.hasAttribute("open")) return;
    if (mobileMenu.contains(event.target)) return;
    mobileMenu.removeAttribute("open");
  });
}

function polarToCartesian(cx, cy, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy + radius * Math.sin(angleInRadians)
  };
}

function describeArc(cx, cy, radius, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, radius, startAngle);
  const end = polarToCartesian(cx, cy, radius, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
}

function describeDonutSegment(cx, cy, innerRadius, outerRadius, startAngle, endAngle) {
  const outerStart = polarToCartesian(cx, cy, outerRadius, startAngle);
  const outerEnd = polarToCartesian(cx, cy, outerRadius, endAngle);
  const innerEnd = polarToCartesian(cx, cy, innerRadius, endAngle);
  const innerStart = polarToCartesian(cx, cy, innerRadius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}`,
    "Z"
  ].join(" ");
}

function buildRetiremeantSvg(svg) {
  const svgNs = "http://www.w3.org/2000/svg";
  const center = 50;
  const outerRadius = 47;
  const innerRadius = 31;
  const letterRadius = 39;
  const glowRadius = 39;
  const segmentAngle = 360 / retiremeantItems.length;
  const gap = 2.4;
  const startOffset = -90 - segmentAngle / 2;

  svg.replaceChildren();
  svg.setAttribute("viewBox", "0 0 100 100");

  const orbit = document.createElementNS(svgNs, "circle");
  orbit.setAttribute("class", "retiremeant-orbit");
  orbit.setAttribute("cx", String(center));
  orbit.setAttribute("cy", String(center));
  orbit.setAttribute("r", String((outerRadius + innerRadius) / 2));
  svg.appendChild(orbit);

  const ring = document.createElementNS(svgNs, "circle");
  ring.setAttribute("class", "retiremeant-ring");
  ring.setAttribute("cx", String(center));
  ring.setAttribute("cy", String(center));
  ring.setAttribute("r", String((outerRadius + innerRadius) / 2));
  svg.appendChild(ring);

  retiremeantItems.forEach((item, index) => {
    const segmentStart = startOffset + index * segmentAngle + gap / 2;
    const segmentEnd = startOffset + (index + 1) * segmentAngle - gap / 2;
    const midAngle = (segmentStart + segmentEnd) / 2;
    const letterPoint = polarToCartesian(center, center, letterRadius, midAngle);

    const segment = document.createElementNS(svgNs, "g");
    segment.setAttribute("class", "retiremeant-segment");
    segment.setAttribute("data-retiremeant-segment", "");
    segment.setAttribute("data-retiremeant-index", String(index));
    segment.setAttribute("role", "button");
    segment.setAttribute("tabindex", "0");
    segment.setAttribute("aria-label", `${item.letter} — ${item.detail}`);
    segment.setAttribute("aria-pressed", "false");

    const glow = document.createElementNS(svgNs, "path");
    glow.setAttribute("class", "retiremeant-arc-glow");
    glow.setAttribute("d", describeArc(center, center, glowRadius, segmentStart, segmentEnd));

    const body = document.createElementNS(svgNs, "path");
    body.setAttribute("class", "retiremeant-arc-body");
    body.setAttribute("d", describeDonutSegment(center, center, innerRadius, outerRadius, segmentStart, segmentEnd));

    const letter = document.createElementNS(svgNs, "text");
    letter.setAttribute("class", "retiremeant-letter");
    letter.setAttribute("x", String(letterPoint.x));
    letter.setAttribute("y", String(letterPoint.y));
    letter.textContent = item.letter;

    segment.append(glow, body, letter);
    svg.appendChild(segment);
  });
}

function initRetiremeantFramework() {
  const section = document.querySelector("[data-retiremeant-framework]");
  if (!section) return;

  const svg = section.querySelector("[data-retiremeant-svg]");
  const detail = section.querySelector("[data-retiremeant-detail]");
  if (!svg || !detail) return;

  buildRetiremeantSvg(svg);

  const segments = Array.from(svg.querySelectorAll("[data-retiremeant-segment]"));
  const defaultDetail = detail.textContent.trim();
  let pinnedIndex = -1;

  function syncActive(index) {
    detail.textContent = index >= 0 ? retiremeantItems[index].detail : defaultDetail;

    segments.forEach((segment, segmentIndex) => {
      const isActive = segmentIndex === index;
      segment.classList.toggle("retiremeant-active", isActive);
      segment.setAttribute("aria-pressed", String(isActive));
    });
  }

  function activate(index, options = {}) {
    if (options.persist) {
      pinnedIndex = index;
    }

    syncActive(index);
  }

  function restoreActiveState() {
    if (pinnedIndex >= 0) {
      syncActive(pinnedIndex);
      return;
    }

    syncActive(-1);
  }

  segments.forEach((segment, index) => {
    segment.addEventListener("mouseenter", () => {
      activate(index);
    });

    segment.addEventListener("focus", () => {
      activate(index);
    });

    segment.addEventListener("click", (event) => {
      event.preventDefault();
      activate(index, { persist: true });
    });

    segment.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate(index, { persist: true });
        return;
      }

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        const nextIndex = (index + 1) % segments.length;
        segments[nextIndex].focus();
        activate(nextIndex);
        return;
      }

      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        const previousIndex = (index - 1 + segments.length) % segments.length;
        segments[previousIndex].focus();
        activate(previousIndex);
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        pinnedIndex = -1;
        restoreActiveState();
      }
    });
  });

  svg.addEventListener("mouseleave", () => {
    restoreActiveState();
  });

  section.addEventListener("focusout", () => {
    window.requestAnimationFrame(() => {
      if (!section.contains(document.activeElement)) {
        restoreActiveState();
      }
    });
  });

  syncActive(-1);
}

function initShell() {
  renderHeader();
  renderFooter();
  bindDisclosures();
  bindMobileMenu();
  toggleNav();
  positionMegaPanels();
  initRetiremeantFramework();
  window.addEventListener("scroll", toggleNav, { passive: true });
  window.addEventListener("resize", () => {
    closeMegaMenus();
    positionMegaPanels();
  });
  window.addEventListener("load", positionMegaPanels, { once: true });
  requestAnimationFrame(positionMegaPanels);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initShell);
} else {
  initShell();
}
