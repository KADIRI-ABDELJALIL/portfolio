if (!window.SITE) {
  document.body.insertAdjacentHTML("afterbegin", '<p style="background:#b91c1c;color:#fff;padding:12px 16px;margin:0;font:600 15px system-ui">Erreur : le fichier content/site.js est introuvable ou invalide. Vérifiez qu\'il est dans le dossier content du dépôt.</p>');
  throw new Error("content/site.js manquant");
}
/* Navigation, bascule FR/EN, génération des projets depuis content/*.js */
const S = window.SITE, P = window.PROJECTS || [];
const $ = (s, r = document) => r.querySelector(s);
let lang = "fr";
try { lang = localStorage.getItem("lang") || "fr"; } catch (e) {}
if (!S.i18n[lang]) lang = "fr";
const t = k => (S.i18n[lang] || {})[k] || S.i18n.fr[k] || k;
const L = o => o[lang] || o.fr;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const page = document.body.dataset.page;

function chrome() {
  const home = page === "home";
  $("#header").innerHTML = `<div class="bar"><a class="logo" href="index.html">${esc(S.name)}</a>
    <nav id="nav" aria-label="Menu"><ul>
      <li><a href="index.html" ${home ? 'aria-current="page"' : ""} data-i18n="nav.home"></a></li>
      <li><a href="projects.html" ${!home ? 'aria-current="page"' : ""} data-i18n="nav.projects"></a></li>
      <li><a href="index.html#contact" data-i18n="nav.contact"></a></li></ul></nav>
    <div class="langsw" role="group" aria-label="Langue / Language"><button type="button" data-l="fr" lang="fr">FR</button><button type="button" data-l="en" lang="en">EN</button></div>
    <button class="iconbtn" id="burger" type="button" aria-expanded="false" aria-controls="nav" aria-label="Menu">☰</button></div>`;
  $("#footer").textContent = `© ${new Date().getFullYear()} ${S.name} — `;
  const f = document.createElement("span"); f.dataset.i18n = "foot"; $("#footer").append(f);
  document.querySelectorAll(".langsw button").forEach(b => b.onclick = () => setLang(b.dataset.l));
  $("#burger").onclick = e => { const o = $("#nav").classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", o); };
  $("#nav").onclick = e => { if (e.target.closest("a")) $("#nav").classList.remove("open"); };
}

function links() {
  document.querySelectorAll("[data-link]").forEach(a => {
    const url = S.links[a.dataset.link];
    if (url) { a.href = url; a.classList.remove("pending"); a.removeAttribute("aria-disabled");
      if (/^https?:/.test(url)) { a.target = "_blank"; a.rel = "noopener"; }
      if (a.dataset.link === "cv") a.setAttribute("download", ""); }
    else { a.removeAttribute("href"); a.classList.add("pending"); a.setAttribute("aria-disabled", "true"); a.dataset.pending = t("pending"); }
  });
  const m = "mailto:" + S.email;
  if ($("#mailLink")) { $("#mailLink").href = m; $("#mailLink").textContent = S.email; $("#mailBtn").href = m; }
}

const status = p => `<span class="status ${p.status}">${t("st." + p.status)}</span>`;
const chips = a => `<ul class="chips">${a.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;

function skills() {
  if (!$("#skills")) return;
  $("#skills").innerHTML = S.skills.map(g => `<div class="card"><h3>${esc(L(g))}</h3>${chips(g.items)}</div>`).join("");
}

function featured() {
  const el = $("#featured"); if (!el) return;
  const p = P.find(x => x.featured) || P[0]; if (!p) return;
  el.innerHTML = `<article class="card featured">${status(p)}<h3>${esc(L(p).title)}</h3><p>${esc(L(p).summary)}</p>
    ${chips(p.tech)}<p><a href="projects.html#${p.id}">${t("feat.more")}</a></p></article>`;
}

function section(title, html) { return html ? `<h3>${t(title)}</h3>${html}` : ""; }

function projects() {
  const el = $("#projectList"); if (!el) return;
  let nav = $("#projectNav");
  if (!nav) { nav = document.createElement("nav"); nav.id = "projectNav"; nav.className = "pnav"; nav.setAttribute("aria-label", "Projets"); el.before(nav); }
  nav.innerHTML = `<div class="pgrid">${P.map(p => { const c = L(p); return `<article class="card"><div class="phead">${status(p)}${p.year ? `<span class="meta">${esc(p.year)}</span>` : ""}</div><h3>${esc(c.title)}</h3>${p.category ? `<p class="meta">${esc(L(p.category))}</p>` : ""}<p>${esc(c.subtitle || c.summary)}</p>${chips(p.tags || [])}<p><a class="btn" href="#${p.id}">${t("p.view")}</a></p></article>`; }).join("")}</div>`;
  const nd = a => esc(typeof a === "string" ? a : L(a));
  const ul = (a, cls) => a && a.length ? `<ul${cls ? ` class="${cls}"` : ""}>${a.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
  el.innerHTML = P.map(p => {
    const c = L(p);
    const steps = p.steps.length ? `<ul class="steps">${p.steps.map(s => `<li class="s-${s.state}">${esc(L(s))}<small>${t("stp." + s.state)}</small></li>`).join("")}</ul>` : "";
    const lim = c.limits && c.limits.length ? `<h4>${t("p.limits")}</h4>${ul(c.limits)}` : "";
    const res = p.results.length
      ? `<ul class="metrics">${p.results.map(r => `<li><strong>${esc(r.value)}</strong><span>${esc(L(r.label))}</span></li>`).join("")}</ul>` + (c.resultsNote ? `<p class="note">${esc(c.resultsNote)}</p>` : "")
      : `<p class="note">${esc(c.resultsNote || "")}</p>` + (c.evalPlan.length ? `<p>${t("p.eval")} :</p>${chips(c.evalPlan)}` : "");
    const flows = !p.architecture.length ? [] : typeof p.architecture[0] === "string" ? [{ nodes: p.architecture }] : p.architecture;
    const arch = flows.map(f => (f.fr || f.en ? `<p><strong>${esc(L(f))}</strong></p>` : "") + `<ol class="flow">${f.nodes.map(a => `<li>${nd(a)}</li>`).join("")}</ol>`).join("");
    const tech = p.techGroups ? p.techGroups.map(g => `<h4>${esc(L(g))}</h4>${chips(g.items)}`).join("") : (p.tech.length ? chips(p.tech) : "");
    const contrib = c.contrib && c.contrib.length ? ul(c.contrib, "check") + (c.contribNote ? `<p class="note">${esc(c.contribNote)}</p>` : "") : "";
    const imgs = p.images.length ? `<div class="gallery">${p.images.map(i => `<figure><a href="${esc(i.src)}"><img src="${esc(i.src)}" alt="${esc(L(i.alt))}" loading="lazy"></a><figcaption>${esc(L(i.alt))}</figcaption></figure>`).join("")}</div>` : "";
    const btns = ["github", "demo"].map(k => p.links[k] ? `<a class="btn" href="${esc(p.links[k])}" target="_blank" rel="noopener">${t("p." + k)}</a>` : "").join(" ");
    return `<article class="project" id="${p.id}"><div class="phead">${status(p)}${p.year ? `<span class="meta">${esc(p.year)}</span>` : ""}${chips(p.tags || [])}</div><h2>${esc(c.title)}</h2>${c.subtitle ? `<p class="meta">${esc(c.subtitle)}</p>` : ""}<p class="lead">${esc(c.summary)}</p>
      ${section("p.context", c.context && `<p>${esc(c.context)}</p>`)}
      ${section("p.obj", ul(c.objectives))}
      ${section("p.arch", arch)}
      ${section("p.tech", tech)}
      ${section("p.contrib", contrib)}
      ${section("p.steps", steps)}
      ${section("p.imgs", imgs)}
      ${section("p.results", res + lim)}
      ${btns ? `<p>${btns}</p>` : ""}</article>`;
  }).join("");
}

function applyI18n() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(e => e.textContent = t(e.dataset.i18n));
  document.querySelectorAll(".langsw button").forEach(b => b.setAttribute("aria-pressed", b.dataset.l === lang));
  skills(); featured(); projects(); links(); reveal();
}
function reveal() {
  if (!("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("js");
  window.__io = window.__io || new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); window.__io.unobserve(e.target); } }), { threshold: 0.08 });
  document.querySelectorAll("main section:not(.hero), .project, #skills .card, #featured .card").forEach(e => {
    if (!e.classList.contains("reveal")) { e.classList.add("reveal"); window.__io.observe(e); }
  });
}
function setLang(l) { lang = l; try { localStorage.setItem("lang", l); } catch (e) {} applyI18n(); }

const X = {
  fr: { "p.contrib": "Ma contribution", "p.limits": "Limites", "p.view": "Voir le projet", "p.arch": "Architecture et fonctionnement", "lb.close": "Fermer" },
  en: { "p.contrib": "My contribution", "p.limits": "Limitations", "p.view": "View project", "p.arch": "Architecture and how it works", "lb.close": "Close" }
};
Object.keys(X).forEach(l => Object.assign(S.i18n[l], X[l]));
document.addEventListener("click", e => {
  const a = e.target.closest(".gallery a"); if (!a) return;
  e.preventDefault();
  let d = $("#lb");
  if (!d) { d = document.createElement("dialog"); d.id = "lb"; d.innerHTML = '<button type="button">×</button><img alt=""><p></p>'; document.body.append(d); d.addEventListener("click", () => d.close()); }
  if (typeof d.showModal !== "function") { window.open(a.href, "_blank", "noopener"); return; }
  const im = $("img", a); $("img", d).src = a.href; $("img", d).alt = im.alt; $("p", d).textContent = im.alt;
  $("button", d).setAttribute("aria-label", t("lb.close")); d.showModal();
});

chrome(); applyI18n();
if (location.hash) { const h = document.getElementById(location.hash.slice(1)); if (h) h.scrollIntoView(); }
