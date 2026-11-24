const S=window.SITE,P=window.PROJECTS,page=document.body.dataset.page,app=document.getElementById("app");
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
let lang="fr",th="dark";try{lang=localStorage.getItem("lang")||"fr";th=localStorage.getItem("theme")||"dark"}catch(e){}
const L=p=>p?p[lang==="fr"?0:1]:"";
const UI={
home:["Accueil","Home"],projects:["Projets","Projects"],contact:["Contact","Contact"],
see:["Voir les projets","View projects"],cv:["Mon CV","My CV"],cvSoon:["CV bientôt disponible","CV coming soon"],
ints:["Domaines d'intérêt","Areas of interest"],all:["Tous les projets","All projects"],feat:["Réalisations","Work"],about:["Profil","Profile"],
skills:["Compétences techniques","Technical skills"],more:["Découvrir le projet →","Discover the project →"],back:["← Tous les projets","← All projects"],
sP:["Projets","Projects"],sD:["Terminés","Completed"],sC:["En cours","In progress"],
ctx:["Contexte et problématique","Context and problem"],detail:["Description détaillée","Detailed description"],goals:["Objectifs","Objectives"],featT:["Fonctionnalités","Features"],
arch:["Architecture technique","Technical architecture"],tech:["Technologies","Technologies"],steps:["Étapes de réalisation","Implementation steps"],
res:["Résultats","Results"],planned:["Mesures envisagées","Planned measurements"],noRes:["Aucun résultat mesuré publié pour l'instant.","No measured result published yet."],
gal:["Images","Images"],addImg:["Image à ajouter dans","Image to add in"],
platform:["Ouvrir la plateforme ↗","Open the platform ↗"],github:["Code sur GitHub ↗","Code on GitHub ↗"],demo:["Démonstration ↗","Demo ↗"],
prev:["← Précédent","← Previous"],next:["Suivant →","Next →"],nf:["Projet introuvable.","Project not found."],
done:["Terminé","Done"],progress:["En cours","In progress"],todo:["À faire","To do"],demoS:["Prototype en ligne","Live prototype"],tbc:["État à confirmer","Status to be confirmed"]
};
const U=k=>L(UI[k]);const stl=s=>U(s==="demo"?"demoS":s);
const e=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const btn=(h,t,c="")=>h?`<a class="b ${c}" href="${e(h)}" target="${h.startsWith("http")?"_blank":"_self"}" rel="noopener">${t}</a>`:"";
const chips=a=>`<div class="chips">${a.map(x=>`<span class="chip">${e(Array.isArray(x)?L(x):x)}</span>`).join("")}</div>`;
const ART={
ccps:'<rect x="72" y="32" width="56" height="56" rx="8"/><rect class="fl" x="86" y="46" width="28" height="28" rx="4"/><path d="M84 32V18M100 32V18M116 32V18M84 88v14M100 88v14M116 88v14M72 46H58M72 60H58M72 74H58M128 46h14M128 60h14M128 74h14"/><circle class="pl" cx="100" cy="60" r="44"/>',
qualivision:'<rect x="48" y="22" width="104" height="76" rx="8"/><circle class="fl" cx="112" cy="58" r="16"/><circle class="pl" cx="112" cy="58" r="16"/><path d="M48 40h104M48 76h104" stroke-dasharray="4 5" opacity=".5"/>',
atlas:'<path d="M42 98h116M42 98V22"/><rect class="fl bar" x="56" y="58" width="16" height="40"/><rect class="fl bar" x="82" y="40" width="16" height="58"/><rect class="fl bar" x="108" y="68" width="16" height="30"/><rect class="fl bar" x="134" y="30" width="16" height="68"/>',
lorawan:'<path d="M100 98V52M88 98h24"/><circle class="fl" cx="100" cy="46" r="6"/><circle class="pl" cx="100" cy="46" r="18"/><circle class="pl d2" cx="100" cy="46" r="34"/><rect x="28" y="84" width="16" height="16" rx="3"/><rect x="156" y="84" width="16" height="16" rx="3"/><path d="M44 88L90 52M156 88L110 52" stroke-dasharray="3 4"/>',
radar:'<circle cx="100" cy="60" r="46"/><circle cx="100" cy="60" r="30"/><circle cx="100" cy="60" r="14"/><path d="M54 60h92M100 14v92" opacity=".5"/><path class="fl sweep" d="M100 60L146 60A46 46 0 0 0 132.5 27.5Z"/><circle class="fl pl" cx="124" cy="42" r="4"/>',
vrar:'<rect x="46" y="44" width="108" height="46" rx="16"/><circle cx="80" cy="67" r="11"/><circle cx="120" cy="67" r="11"/><path d="M46 67H34M154 67h12M92 90l8 8 8-8"/><path class="fl float" d="M100 10l16 9v18l-16 9-16-9V19z"/>',
def:'<path class="fl" d="M100 18l36 21v42l-36 21-36-21V39z"/><circle class="pl" cx="100" cy="60" r="30"/>'};
const vis=p=>`<div class="vis"><svg viewBox="0 0 200 120" fill="none" stroke="currentColor" aria-hidden="true">${ART[p.id]||ART.def}</svg>${p.cover?`<img src="${e(p.cover)}" alt="" loading="lazy" onerror="this.remove()">`:""}</div>`;
const card=p=>`<a class="card rv" href="project.html?id=${p.id}">${vis(p)}<div class="t"><span class="st ${p.status}">${stl(p.status)}</span><h3>${e(L(p.title))}</h3><p class="m">${e(L(p.tag))}</p>${chips((p.tech||[]).slice(0,4))}<span class="more">${U("more")}</span></div></a>`;
const head=()=>`<div id="bar"></div><header><div class="w"><a class="logo" href="index.html">&lt;AK/&gt;</a><nav id="nav"><a href="index.html" class="${page==="home"?"on":""}">${U("home")}</a><a href="projects.html" class="${page!=="home"?"on":""}">${U("projects")}</a><a href="index.html#contact">${U("contact")}</a></nav><button class="b s" id="th" aria-label="Theme">${th==="dark"?"☀":"☾"}</button><button class="b s" id="lang" aria-label="Language">${lang==="fr"?"EN":"FR"}</button><button class="b s" id="burger" aria-label="Menu" aria-expanded="false">☰</button></div></header>`;
const foot=()=>`<footer><div class="w">© ${new Date().getFullYear()} ${S.name} · ENSAM Casablanca</div></footer><div id="lb"><img alt=""></div>`;
const social=()=>`<div class="row">${btn("mailto:"+S.email,S.email,"f")}${btn(S.links.linkedin,"LinkedIn")}${btn(S.links.github,"GitHub")}${S.links.cv?btn(S.links.cv,U("cv")):`<span class="b d">${U("cvSoon")}</span>`}</div>`;
const techs=()=>[...new Set([...P.flatMap(p=>p.tech||[]),...S.skills.flatMap(g=>g.i)])];

function home(){const n=s=>P.filter(p=>p.status===s).length,t=techs().map(x=>`<span class="chip">${e(x)}</span>`).join("");
return `<section class="hero"><canvas id="net"></canvas><div class="w"><span class="k">ENSAM Casablanca · MSEI · SIC</span><h1>${S.name.split(" ")[0]} <span>${S.name.split(" ")[1]}</span></h1><div class="role" id="role"></div><p>${L(S.bio)}</p><div class="row">${btn("projects.html",U("see"),"f")}${btn("#contact",U("contact"))}</div></div><div class="hint">↓</div></section>
<section class="alt" style="padding:3rem 0"><div class="w"><div class="stats rv"><div><b data-n="${P.length}">0</b><span>${U("sP")}</span></div><div><b data-n="${n("done")}">0</b><span>${U("sD")}</span></div><div><b data-n="${n("progress")}">0</b><span>${U("sC")}</span></div></div><div class="mq"><div class="mt">${t}${t}</div></div></div></section>
<section id="work"><div class="w"><span class="k">${U("feat")}</span><h2>${U("projects")}</h2><br><div class="sc rv" id="sc"></div></div></section>
<section class="alt"><div class="w"><span class="k">${U("all")}</span><div class="grid">${P.map(card).join("")}</div></div></section>
<section><div class="w rv"><span class="k">${U("about")}</span><h2>${U("ints")}</h2><div class="ints">${S.interests.map(x=>`<div>${L(x)}</div>`).join("")}</div><br><br><h2>${U("skills")}</h2><div class="sk">${S.skills.map(g=>`<div><h3>${L(g.n)}</h3>${chips(g.i)}</div>`).join("")}</div></div></section>
<section id="contact" class="alt"><div class="w rv"><span class="k">${U("contact")}</span><h2 class="gt">${S.email}</h2><br>${social()}</div></section>`}

function projects(){const sts=[...new Set(P.map(p=>p.status))];
return `<div class="w ph"><span class="k">${U("projects")}</span><h1>${U("all")}</h1><div class="flt" id="flt"><button class="b s f" data-s="all">${U("all")}</button>${sts.map(s=>`<button class="b s" data-s="${s}">${stl(s)}</button>`).join("")}</div><div class="grid" id="pl">${P.map(card).join("")}</div></div>`}

function project(){const id=new URLSearchParams(location.search).get("id"),i=P.findIndex(p=>p.id===id),p=P[i];
if(!p)return `<div class="w ph"><p>${U("nf")}</p>${btn("projects.html",U("back"))}</div>`;
document.title=L(p.title)+" — "+S.name;const k=p.links||{},sec=(t,b)=>b?`<div class="rv"><h2>${t}</h2>${b}</div>`:"";
const li=a=>`<ul class="l">${a.map(x=>`<li>${e(L(x))}</li>`).join("")}</ul>`;
const imgs=(p.images||[]).length?p.images.map(m=>`<figure><img src="${e(m.src)}" alt="${e(L(m.alt))}" loading="lazy">${m.alt?`<figcaption>${e(L(m.alt))}</figcaption>`:""}</figure>`).join(""):"";
const n=P[(i+1)%P.length],pv=P[(i-1+P.length)%P.length];
return `<div class="w ph"><a class="m" href="projects.html">${U("back")}</a><br><br><div class="ph2"><div><span class="st ${p.status}">${stl(p.status)}</span><h1>${e(L(p.title))}</h1><p class="m">${e(L(p.tag))}</p><br><div class="row">${btn(k.platform,U("platform"),"f")}${btn(k.github,U("github"))}${btn(k.demo,U("demo"))}</div></div>${vis(p)}</div></div>
<div class="w pg" style="padding:2.5rem 1.25rem 4rem">${imgs?`<div class="gal rv">${imgs}</div>`:""}
${sec(U("ctx"),`<p>${e(L(p.context))}</p>`+(p.role?`<br><p><strong>${e(L(p.role))}</strong></p>`:""))}
${sec(U("detail"),p.detail&&`<div class="dt">${p.detail.map(d=>`<div><h3>${e(L(d[0]))}</h3><p class="m">${e(L(d[1]))}</p></div>`).join("")}</div>`)}
${sec(U("goals"),p.goals&&li(p.goals))}${sec(U("featT"),p.feat&&li(p.feat))}
${sec(U("arch"),p.arch&&`<div class="flow">${p.arch.map((a,j)=>(j?"<i>→</i>":"")+`<span>${e(L(a))}</span>`).join("")}</div>`)}
${sec(U("tech"),p.tech&&p.tech.length&&chips(p.tech))}
${sec(U("steps"),p.steps&&p.steps.length&&`<ul class="tl">${p.steps.map(s=>`<li class="${s[0]}">${e(L(s[1]))}<small>${U(s[0])}</small></li>`).join("")}</ul>`)}
${sec(U("res"),(p.results&&p.results.length?li(p.results):`<p class="m">${U("noRes")}</p>`)+(p.planned?`<br><h3 class="m" style="font-size:1rem">${U("planned")}</h3><br>${chips(p.planned)}`:"")+(p.note?`<br><p class="note">${e(L(p.note))}</p>`:""))}
<div class="pn"><a class="b" href="project.html?id=${pv.id}">${U("prev")}</a><a class="b" href="project.html?id=${n.id}">${U("next")}</a></div></div>`}

let raf,tm,sct,si=0;
function net(){const c=document.getElementById("net");cancelAnimationFrame(raf);if(!c||reduce)return;
const x=c.getContext("2d");let w,h,pt,mx=-999,my=-999;const init=()=>{w=c.width=c.offsetWidth;h=c.height=c.offsetHeight;pt=Array.from({length:Math.min(80,w/16|0)},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5}))};init();onresize=init;
c.parentNode.onpointermove=ev=>{const r=c.getBoundingClientRect();mx=ev.clientX-r.left;my=ev.clientY-r.top};
(function f(){x.clearRect(0,0,w,h);pt.forEach((p,i)=>{p.x=(p.x+p.vx+w)%w;p.y=(p.y+p.vy+h)%h;x.fillStyle="rgba(34,211,238,.8)";x.fillRect(p.x,p.y,2.2,2.2);
const dm=Math.hypot(p.x-mx,p.y-my);if(dm<150){x.strokeStyle="rgba(129,140,248,"+.6*(1-dm/150)+")";x.beginPath();x.moveTo(p.x,p.y);x.lineTo(mx,my);x.stroke()}
for(let j=i+1;j<pt.length;j++){const q=pt[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<120){x.strokeStyle="rgba(34,211,238,"+.22*(1-d/120)+")";x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}});raf=requestAnimationFrame(f)})()}
function type(){const r=document.getElementById("role");clearTimeout(tm);if(!r)return;let i=0,j=0,del=false;
(function s(){const t=L(S.roles[i]);j+=del?-1:1;r.textContent=t.slice(0,j);let d=del?40:80;if(!del&&j===t.length){del=true;d=1400}else if(del&&j===0){del=false;i=(i+1)%S.roles.length;d=300}tm=setTimeout(s,d)})()}
function showcase(){const el=document.getElementById("sc");clearInterval(sct);if(!el)return;
const draw=()=>{const p=P[si];el.innerHTML=`<div class="scT"><span class="st ${p.status}">${stl(p.status)}</span><h3>${e(L(p.title))}</h3><p class="m">${e(L(p.tag))}</p>${chips((p.tech||[]).slice(0,5))}<div class="row"><a class="b f" href="project.html?id=${p.id}">${U("more")}</a></div><div class="dots">${P.map((_,j)=>`<button aria-label="${j+1}" class="${j===si?"on":""}" data-i="${j}"></button>`).join("")}</div></div><div class="scI">${vis(p)}</div>`};
draw();el.onclick=ev=>{const b=ev.target.closest("[data-i]");if(b){si=+b.dataset.i;draw()}};
if(!reduce){const go=()=>{si=(si+1)%P.length;draw()},on=()=>{clearInterval(sct);sct=setInterval(go,5500)};on();el.onmouseenter=()=>clearInterval(sct);el.onmouseleave=on}}
const count=el=>{const n=+el.dataset.n;if(reduce||!n){el.textContent=n;return}let v=0;(function s(){v++;el.textContent=v;if(v<n)setTimeout(s,160)})()};

function render(){document.documentElement.lang=lang;document.documentElement.dataset.theme=th;app.innerHTML=head()+"<main>"+({home,projects,project}[page]())+"</main>"+foot();
if(page==="home"){document.title=S.name+" — Portfolio";net();type();showcase()}if(page==="projects")document.title=U("projects")+" — "+S.name;
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");x.target.querySelectorAll("[data-n]").forEach(count);io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll(".rv").forEach(x=>io.observe(x));
document.getElementById("lang").onclick=()=>{lang=lang==="fr"?"en":"fr";try{localStorage.setItem("lang",lang)}catch(e){}render()};
document.getElementById("th").onclick=()=>{th=th==="dark"?"light":"dark";try{localStorage.setItem("theme",th)}catch(e){}render()};
const nv=document.getElementById("nav"),bg=document.getElementById("burger");bg.onclick=()=>{bg.setAttribute("aria-expanded",nv.classList.toggle("o"))};nv.onclick=()=>nv.classList.remove("o");
const f=document.getElementById("flt");if(f)f.onclick=ev=>{const b=ev.target.closest("button");if(!b)return;f.querySelectorAll("button").forEach(x=>x.classList.toggle("f",x===b));
document.querySelectorAll("#pl .card").forEach((c,i)=>c.style.display=b.dataset.s==="all"||P[i].status===b.dataset.s?"":"none")};
const lb=document.getElementById("lb");document.querySelectorAll(".gal img").forEach(m=>m.onclick=()=>{lb.firstChild.src=m.src;lb.classList.add("o")});lb.onclick=()=>lb.classList.remove("o")}
addEventListener("scroll",()=>{const b=document.getElementById("bar");if(b)b.style.width=scrollY/(document.documentElement.scrollHeight-innerHeight||1)*100+"%"},{passive:true});
document.addEventListener("pointermove",ev=>{const c=ev.target.closest&&ev.target.closest(".card");if(c){const r=c.getBoundingClientRect();c.style.setProperty("--mx",ev.clientX-r.left+"px");c.style.setProperty("--my",ev.clientY-r.top+"px")}});
render();
