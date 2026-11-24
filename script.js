const S=window.SITE,P=window.PROJECTS,page=document.body.dataset.page,app=document.getElementById("app");
let lang="fr";try{lang=localStorage.getItem("lang")||"fr"}catch(e){}
const L=p=>p?p[lang==="fr"?0:1]:"";
const UI={
home:["Accueil","Home"],projects:["Projets","Projects"],contact:["Contact","Contact"],
see:["Voir les projets","View projects"],cv:["Mon CV","My CV"],cvSoon:["CV bientôt disponible","CV coming soon"],
about:["Profil","Profile"],ints:["Domaines d'intérêt","Areas of interest"],feat:["Projets","Projects"],all:["Tous les projets","All projects"],
skills:["Compétences techniques","Technical skills"],ctaT:["À la recherche d'un PFE","Looking for a final-year project"],
ctaP:["Je recherche un projet de fin d'études en IoT industriel, Edge AI ou Industrie 4.0. Échangeons.","I am looking for a final-year project in industrial IoT, Edge AI or Industry 4.0. Let's talk."],
more:["Voir le projet →","View project →"],back:["← Tous les projets","← All projects"],
ctx:["Contexte et problématique","Context and problem"],goals:["Objectifs","Objectives"],featT:["Fonctionnalités","Features"],
arch:["Architecture technique","Technical architecture"],tech:["Technologies","Technologies"],steps:["Étapes de réalisation","Implementation steps"],
res:["Résultats","Results"],planned:["Mesures envisagées","Planned measurements"],noRes:["Aucun résultat mesuré publié pour l'instant.","No measured result published yet."],
gal:["Images et schémas","Images and diagrams"],addImg:["Image à ajouter dans","Image to add in"],
platform:["Ouvrir la plateforme ↗","Open the platform ↗"],github:["Code sur GitHub ↗","Code on GitHub ↗"],demo:["Démonstration ↗","Demo ↗"],
prev:["← Précédent","← Previous"],next:["Suivant →","Next →"],nf:["Projet introuvable.","Project not found."],
done:["Terminé","Done"],progress:["En cours","In progress"],todo:["À faire","To do"],demoS:["Prototype en ligne","Live prototype"],tbc:["État à confirmer","Status to be confirmed"]
};
const U=k=>L(UI[k]);const stl=s=>U(s==="demo"?"demoS":s);
const e=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const btn=(h,t,c="")=>h?`<a class="b ${c}" href="${e(h)}" target="${h.startsWith("http")?"_blank":"_self"}" rel="noopener">${t}</a>`:"";
const chips=a=>`<div class="chips">${a.map(x=>`<span class="chip">${e(Array.isArray(x)?L(x):x)}</span>`).join("")}</div>`;
const card=(p,i,big)=>`<a class="card rv ${big?"big":""}" href="project.html?id=${p.id}"><div class="cv">${String(i+1).padStart(2,"0")}${p.cover?`<img src="${e(p.cover)}" alt="" loading="lazy" onerror="this.remove()">`:""}</div><div class="t"><span class="st ${p.status}">${stl(p.status)}</span><h3>${e(L(p.title))}</h3><p class="m">${e(L(p.tag))}</p>${chips((p.tech||[]).slice(0,4))}<span class="more">${U("more")}</span></div></a>`;
const head=()=>`<div id="bar"></div><header><div class="w"><a class="logo" href="index.html">&lt;AK/&gt;</a><nav id="nav"><a href="index.html" class="${page==="home"?"on":""}">${U("home")}</a><a href="projects.html" class="${page!=="home"?"on":""}">${U("projects")}</a><a href="index.html#contact">${U("contact")}</a></nav><button class="b s" id="lang" aria-label="Language">${lang==="fr"?"EN":"FR"}</button><button class="b s" id="burger" aria-label="Menu" aria-expanded="false">☰</button></div></header>`;
const foot=()=>`<footer><div class="w">© ${new Date().getFullYear()} ${S.name} · ENSAM Casablanca</div></footer><div id="lb"><img alt=""></div>`;
const social=()=>`<div class="row">${btn(S.links.linkedin,"LinkedIn")}${btn(S.links.github,"GitHub")}${S.links.cv?btn(S.links.cv,U("cv")):`<span class="b d">${U("cvSoon")}</span>`}${btn("mailto:"+S.email,S.email)}</div>`;

function home(){return `<section class="hero"><canvas id="net"></canvas><div class="w"><span class="k">ENSAM Casablanca · MSEI · SIC</span><h1>${S.name.split(" ")[0]} <span>${S.name.split(" ")[1]}</span></h1><div class="role" id="role"></div><p>${L(S.bio)}</p><div class="row">${btn("projects.html",U("see"),"f")}${btn("#contact",U("contact"))}</div></div></section>
<section id="about"><div class="w rv"><span class="k">${U("about")}</span><h2>${U("ints")}</h2><div class="ints">${S.interests.map(x=>`<div>${L(x)}</div>`).join("")}</div></div></section>
<section id="work" style="background:var(--bg2)"><div class="w"><span class="k">${U("feat")}</span><h2>${U("all")}</h2><br><div class="grid">${P.map((p,i)=>card(p,i,i===0)).join("")}</div></div></section>
<section><div class="w rv"><span class="k">${U("skills")}</span><div class="sk">${S.skills.map(g=>`<div><h3>${L(g.n)}</h3>${chips(g.i)}</div>`).join("")}</div></div></section>
<section><div class="w"><div class="cta rv"><h2>${U("ctaT")}</h2><p class="m">${U("ctaP")}</p>${btn("mailto:"+S.email,S.email,"f")}</div></div></section>
<section id="contact"><div class="w rv"><span class="k">${U("contact")}</span><h2>${S.email}</h2><br>${social()}</div></section>`}

function projects(){const sts=[...new Set(P.map(p=>p.status))];
return `<div class="w ph"><span class="k">${U("projects")}</span><h1>${U("all")}</h1><div class="flt" id="flt"><button class="b s f" data-s="all">${U("all")}</button>${sts.map(s=>`<button class="b s" data-s="${s}">${stl(s)}</button>`).join("")}</div><div class="grid" id="pl">${P.map((p,i)=>card(p,i)).join("")}</div></div>`}

function project(){const id=new URLSearchParams(location.search).get("id"),i=P.findIndex(p=>p.id===id),p=P[i];
if(!p)return `<div class="w ph"><p>${U("nf")}</p>${btn("projects.html",U("back"))}</div>`;
document.title=L(p.title)+" — "+S.name;const k=p.links||{},sec=(t,b)=>b?`<div class="rv"><h2>${t}</h2>${b}</div>`:"";
const li=a=>`<ul class="l">${a.map(x=>`<li>${e(L(x))}</li>`).join("")}</ul>`;
const imgs=(p.images||[]).length?(p.images.map(m=>`<figure><img src="${e(m.src)}" alt="${e(L(m.alt))}" loading="lazy">${m.alt?`<figcaption>${e(L(m.alt))}</figcaption>`:""}</figure>`).join("")):`<div class="empty">${U("addImg")}<br><code>assets/images/${p.id}/</code></div>`;
const n=P[(i+1)%P.length],pv=P[(i-1+P.length)%P.length];
return `<div class="w ph"><a class="m" href="projects.html">${U("back")}</a><br><br><span class="st ${p.status}">${stl(p.status)}</span><h1>${e(L(p.title))}</h1><p class="m">${e(L(p.tag))}</p><br><div class="row">${btn(k.platform,U("platform"),"f")}${btn(k.github,U("github"))}${btn(k.demo,U("demo"))}</div></div>
<div class="w pg" style="padding-bottom:4rem"><div class="gal rv">${imgs}</div>
${sec(U("ctx"),`<p>${e(L(p.context))}</p>`+(p.role?`<br><p><strong>${e(L(p.role))}</strong></p>`:""))}
${sec(U("goals"),p.goals&&li(p.goals))}${sec(U("featT"),p.feat&&li(p.feat))}
${sec(U("arch"),p.arch&&`<div class="flow">${p.arch.map((a,j)=>(j?"<i>→</i>":"")+`<span>${e(L(a))}</span>`).join("")}</div>`)}
${sec(U("tech"),p.tech&&p.tech.length&&chips(p.tech))}
${sec(U("steps"),p.steps&&p.steps.length&&`<ul class="tl">${p.steps.map(s=>`<li class="${s[0]}">${e(L(s[1]))}<small>${U(s[0])}</small></li>`).join("")}</ul>`)}
${sec(U("res"),(p.results&&p.results.length?li(p.results):`<p class="m">${U("noRes")}</p>`)+(p.planned?`<br><h3 class="m" style="font-size:1rem">${U("planned")}</h3><br>${chips(p.planned)}`:"")+(p.note?`<br><p class="note">${e(L(p.note))}</p>`:""))}
<div class="pn"><a class="b" href="project.html?id=${pv.id}">${U("prev")}</a><a class="b" href="project.html?id=${n.id}">${U("next")}</a></div></div>`}

let raf,tm;
function net(){const c=document.getElementById("net");cancelAnimationFrame(raf);if(!c||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
const x=c.getContext("2d");let w,h,pt;const init=()=>{w=c.width=c.offsetWidth;h=c.height=c.offsetHeight;pt=Array.from({length:Math.min(70,w/18|0)},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}))};init();onresize=init;
(function f(){x.clearRect(0,0,w,h);pt.forEach((p,i)=>{p.x=(p.x+p.vx+w)%w;p.y=(p.y+p.vy+h)%h;x.fillStyle="rgba(34,211,238,.7)";x.fillRect(p.x,p.y,2,2);for(let j=i+1;j<pt.length;j++){const q=pt[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<120){x.strokeStyle="rgba(34,211,238,"+.2*(1-d/120)+")";x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}});raf=requestAnimationFrame(f)})()}
function type(){const r=document.getElementById("role");clearTimeout(tm);if(!r)return;let i=0,j=0,del=false;
(function s(){const t=L(S.roles[i]);j+=del?-1:1;r.textContent=t.slice(0,j);let d=del?40:80;if(!del&&j===t.length){del=true;d=1400}else if(del&&j===0){del=false;i=(i+1)%S.roles.length;d=300}tm=setTimeout(s,d)})()}

function render(){document.documentElement.lang=lang;app.innerHTML=head()+"<main>"+({home,projects,project}[page]())+"</main>"+foot();
if(page==="home"){document.title=S.name+" — Portfolio";net();type()}if(page==="projects")document.title=U("projects")+" — "+S.name;
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll(".rv").forEach(x=>io.observe(x));
document.getElementById("lang").onclick=()=>{lang=lang==="fr"?"en":"fr";try{localStorage.setItem("lang",lang)}catch(e){}render()};
const nv=document.getElementById("nav"),bg=document.getElementById("burger");bg.onclick=()=>{bg.setAttribute("aria-expanded",nv.classList.toggle("o"))};nv.onclick=()=>nv.classList.remove("o");
const f=document.getElementById("flt");if(f)f.onclick=ev=>{const b=ev.target.closest("button");if(!b)return;f.querySelectorAll("button").forEach(x=>x.classList.toggle("f",x===b));
document.querySelectorAll("#pl .card").forEach((c,i)=>c.style.display=b.dataset.s==="all"||P[i].status===b.dataset.s?"":"none")};
const lb=document.getElementById("lb");document.querySelectorAll(".gal img").forEach(m=>m.onclick=()=>{lb.firstChild.src=m.src;lb.classList.add("o")});lb.onclick=()=>lb.classList.remove("o")}
addEventListener("scroll",()=>{const b=document.getElementById("bar");if(b)b.style.width=scrollY/(document.documentElement.scrollHeight-innerHeight||1)*100+"%"},{passive:true});
document.addEventListener("pointermove",ev=>{const c=ev.target.closest&&ev.target.closest(".card");if(c){const r=c.getBoundingClientRect();c.style.setProperty("--mx",ev.clientX-r.left+"px");c.style.setProperty("--my",ev.clientY-r.top+"px")}});
render();
