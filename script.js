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
  el.innerHTML = `<article class="card">${status(p)}<h3>${esc(L(p).title)}</h3><p>${esc(L(p).summary)}</p>
    ${chips(p.tech)}<p><a href="projects.html#${p.id}">${t("feat.more")}</a></p></article>`;
}

function section(title, html) { return html ? `<h3>${t(title)}</h3>${html}` : ""; }

function projects() {
  const el = $("#projectList"); if (!el) return;
  el.innerHTML = P.map(p => {
    const c = L(p);
    const steps = p.steps.length ? `<ul class="steps">${p.steps.map(s => `<li>${esc(L(s))} — <small>${t("stp." + s.state)}</small></li>`).join("")}</ul>` : "";
    const res = p.results.length
      ? `<ul>${p.results.map(r => `<li>${esc(L(r.label))} : <strong>${esc(r.value)}</strong></li>`).join("")}</ul>`
      : `<p class="note">${esc(c.resultsNote || "")}</p>` + (c.evalPlan.length ? `<p>${t("p.eval")} :</p>${chips(c.evalPlan)}` : "");
    const imgs = p.images.map(i => `<figure><img src="${esc(i.src)}" alt="${esc(L(i.alt))}" loading="lazy"></figure>`).join("");
    const btns = ["github", "demo"].map(k => p.links[k] ? `<a class="btn" href="${esc(p.links[k])}" target="_blank" rel="noopener">${t("p." + k)}</a>` : "").join(" ");
    return `<article class="project" id="${p.id}" style="border-top:1px solid var(--line)">${status(p)}<h2>${esc(c.title)}</h2><p class="lead">${esc(c.summary)}</p>
      ${section("p.context", c.context && `<p>${esc(c.context)}</p>`)}
      ${section("p.obj", c.objectives.length && `<ul>${c.objectives.map(o => `<li>${esc(o)}</li>`).join("")}</ul>`)}
      ${section("p.arch", p.architecture.length && `<ol class="flow">${p.architecture.map(a => `<li>${esc(a)}</li>`).join("")}</ol>`)}
      ${section("p.tech", p.tech.length && chips(p.tech))}
      ${section("p.steps", steps)}
      ${section("p.results", res)}
      ${section("p.imgs", imgs)}
      ${btns ? `<p>${btns}</p>` : ""}</article>`;
  }).join("");
}

function applyI18n() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(e => e.textContent = t(e.dataset.i18n));
  document.querySelectorAll(".langsw button").forEach(b => b.setAttribute("aria-pressed", b.dataset.l === lang));
  skills(); featured(); projects(); links();
}
function setLang(l) { lang = l; try { localStorage.setItem("lang", l); } catch (e) {} applyI18n(); }

chrome(); applyI18n();
if (location.hash) { const h = document.getElementById(location.hash.slice(1)); if (h) h.scrollIntoView(); }
