/* ==========================================================================
   Prudent Technology & Logistics - Main JavaScript Application
   Organized under /js/ directory
   ========================================================================== */

/* ===== EDITABLE CONTENT ===== */
const WA = "2348036070300"; // WhatsApp number: country code first, digits only (08036070300 -> 2348036070300)
const wa = m => `https://wa.me/${WA}?text=${encodeURIComponent(m)}`;
const BOOK = wa("Hello Prudent, I would like to book a free consultation.");
const SOC = [["Instagram", "#"], ["LinkedIn", "#"], ["X", "#"], ["Facebook", "#"]]; // [PLACEHOLDER URLs]
const P = {
  d: "M3 5h18v11H3z M8 20h8 M12 16v4",
  bag: "M4 8h16v12H4z M9 8V5h6v3",
  sch: "M12 3l9 5-9 5-9-5 9-5z M7 11v5c0 1.2 2.2 3 5 3s5-1.8 5-3v-5",
  ch: "M12 2v6 M9 5h6 M5 22V12l7-4 7 4v10z M10 22v-5h4v5",
  ac: "M8 12a3.5 3.5 0 100-7 3.5 3.5 0 000 7 M2 20a6 6 0 0112 0 M17 8h5 M19.5 5.5v5",
  flow: "M4 6h16 M4 12h16 M4 18h16 M9 4v4 M15 10v4 M7 16v4",
  bolt: "M13 2L4 14h7l-1 8 9-12h-7l1-8z",
  code: "M8 8l-5 4 5 4 M16 8l5 4-5 4 M14 5l-4 14",
  ai: "M12 3l2.6 6.2 6.7.5-5.1 4.4 1.6 6.6L12 17.3 6.2 20.7l1.6-6.6L2.7 9.7l6.7-.5z",
  doc: "M7 3h7l4 4v14H7z M14 3v4h4 M10 12h5 M10 16h5",
  chv: "M6 9l6 6 6-6",
  chart: "M4 19V11 M10 19V5 M16 19v-6 M2 19h20"
};

const ic = (p, s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${p}"/></svg>`;

const DIV = [
  { id: "business", n: "Prudent Business Solutions", s: "Business", a: "For SMEs and businesses", b: "Digitize your processes, automate repetitive work, and run your business on systems instead of memory.", c: "#9F01F1", t: "#F3E9FE", i: "bag", off: ["Process mapping", "Digital forms", "Records management", "Approval flows", "Dashboards", "Workflow automation"], who: ["SMEs", "Retailers", "Service firms", "Growing teams"] },
  { id: "education", n: "Prudent Education Solutions", s: "Education", a: "For schools and educational institutions", b: "Education technology that simplifies administration, engages teachers and students, and improves outcomes.", c: "#4073FF", t: "#E6EDFF", i: "sch", off: ["School management", "Student & parent portals", "e-Learning setup", "Results & fee systems", "Staff training"], who: ["Primary & secondary schools", "Colleges", "Training centres"] },
  { id: "church-ministry", n: "Prudent Church & Ministry Solutions", s: "Church & Ministry", a: "For churches and Christian organizations", b: "Technology that helps ministries manage people, giving, communication and outreach with excellence.", c: "#C56A00", t: "#FFF0DD", i: "ch", off: ["Member management", "Giving & finance tracking", "Attendance", "Communication tools", "Online ministry setup"], who: ["Churches", "Ministries", "Christian NGOs", "Fellowships"] },
  { id: "academy", n: "Prudent Digital Training Academy", s: "Academy", a: "For staff, teachers, entrepreneurs and ministry workers", b: "Practical digital training that turns your people into confident, capable users of modern tools.", c: "#0E9E5C", t: "#E3FBEF", i: "ac", off: ["Staff training", "Teacher digital skills", "Entrepreneur bootcamps", "Ministry workers training", "Custom corporate programs"], who: ["Staff", "Teachers", "Entrepreneurs", "Ministry workers"] }
];

const SOL = [
  { id: "process-digitization", n: "Business Process Digitization", b: "Process mapping, digital forms, approval flows", c: "#9F01F1", i: "doc", off: ["Process mapping", "Digital forms", "Records management", "Approval flows", "Dashboards"] },
  { id: "workflow-automation", n: "Workflow Automation", b: "Task routing, auto-reminders, automated reports", c: "#C56A00", i: "bolt", off: ["Task routing", "Auto-reminders", "Report generation", "Notifications", "Integrations"] },
  { id: "software-saas", n: "Software & SaaS", b: "Custom web apps, portals and mobile apps", c: "#7A00BC", i: "code", off: ["Custom web apps", "Management portals", "Subscription platforms", "Mobile apps"] },
  { id: "education-technology", n: "Education Technology", b: "School management, portals, results and fees", c: "#0E9E5C", i: "sch", off: ["School management", "Student & parent portals", "e-Learning setup", "Results & fee systems"] },
  { id: "church-ministry-technology", n: "Church & Ministry Technology", b: "Members, giving, attendance, online ministry", c: "#C56A00", i: "ch", off: ["Member management", "Giving & finance tracking", "Attendance", "Communication tools", "Online ministry setup"] },
  { id: "ai-solutions", n: "AI-Powered Solutions", b: "AI assistants, smart reporting, knowledge bases", c: "#9F01F1", i: "ai", off: ["AI assistants", "Smart reporting", "Knowledge bases", "Process intelligence"] }
];

const LONG = {
  business: { o: "Most growing businesses still run on paper, chats and memory. We map how your work really flows, then move it onto simple digital systems your team will use, so nothing gets lost and decisions get faster.", p: ["Records spread across files, phones and chats", "Approvals stuck waiting on one person", "No clear view of what is done, late or owed"], g: ["One place for forms, records and approvals", "Hours of repeat work removed every week", "Live dashboards instead of guesswork"] },
  education: { o: "Schools lose precious time to registers, result sheets and fee chasing. We digitize administration and give teachers, parents and students simple tools, so staff can focus on teaching and parents stay informed.", p: ["Slow result compilation and report cards", "Fees tracked by hand", "Parents hard to reach and update"], g: ["Results, fees and attendance in one system", "Parents informed without visiting the school", "Teachers spend less time on paperwork"] },
  "church-ministry": { o: "Ministry grows on relationships, yet member lists, giving and attendance often live in notebooks. We give your team tools to know their people, steward finances clearly and communicate with excellence.", p: ["Member details scattered and out of date", "Giving and finances hard to report", "Follow-up and communication done ad hoc"], g: ["A clear, secure record of every member", "Transparent giving and finance reports", "Timely follow-up and online reach"] },
  academy: { o: "Tools only create value when people can use them. The Academy trains staff, teachers, entrepreneurs and ministry workers with practical, hands-on programs that turn software into daily habits.", p: ["New systems that staff avoid or misuse", "Teachers unsure how to use digital tools", "Entrepreneurs working without digital skills"], g: ["Confident, capable users of modern tools", "Faster adoption of every system you install", "Skills your people keep and build on"] },
  "process-digitization": { o: "Digitization starts with understanding. We document each process, remove steps that add no value, then rebuild it as digital forms, records and approvals that run the same way every time.", p: ["Paper forms that get lost or filled wrongly", "Files nobody can find quickly", "Approvals with no trail of who decided what"], g: ["Clean digital records, searchable in seconds", "A clear approval trail for every request", "One process the whole team follows"] },
  "workflow-automation": { o: "If someone repeats the same task every week, a system should be doing it. We automate routing, reminders and reports so work moves forward without anyone chasing it.", p: ["Manual follow-ups and reminders", "Reports built by hand every month", "Tasks forgotten between teams"], g: ["Tasks routed to the right person automatically", "Reminders and reports sent on schedule", "Fewer errors and less chasing"] },
  "software-saas": { o: "When off-the-shelf tools do not fit, we design and build software around your process: web apps, portals, subscription platforms and mobile apps that you own and can grow.", p: ["Tools that do not fit how you work", "Several disconnected apps and logins", "No way to offer your service online"], g: ["Software built around your workflow", "One login and one source of truth", "A platform ready to scale with you"] },
  "education-technology": { o: "We set up the digital backbone of a modern school: management, portals, e-learning, results and fees, so administrators, teachers, parents and students all work from the same information.", p: ["Separate files for students, staff and fees", "No online option for lessons or notices", "Manual result and fee reports"], g: ["One system for the whole school", "Online learning and parent access", "Accurate, printable results and fee reports"] },
  "church-ministry-technology": { o: "From first-time visitors to long-time members, we set up the systems that help your team care for people: records, giving, attendance, messaging and online services.", p: ["No single list of members and visitors", "Attendance and giving recorded on paper", "Hard to reach people between services"], g: ["Every member and visitor in one record", "Clear giving and attendance reports", "Easy group and personal communication"] },
  "ai-solutions": { o: "We bring practical AI into everyday operations: assistants that answer routine questions, reports that explain your data, and tools that show where your processes slow down.", p: ["Staff answering the same questions daily", "Data nobody has time to analyse", "Bottlenecks that go unnoticed"], g: ["Faster answers for staff and customers", "Plain-language insight from your data", "Clear view of where time is lost"] }
};

const OFF = {
  "Process mapping": "We document how work flows today and find the steps to remove or simplify.",
  "Digital forms": "Replace paper forms with online forms that save straight to the right record.",
  "Records management": "Keep files, contacts and histories organized, secure and easy to find.",
  "Approval flows": "Requests move to the right approver automatically, with a clear trail.",
  "Dashboards": "See what is done, late and pending at a glance, in real time.",
  "Workflow automation": "Routine steps, reminders and reports run on their own.",
  "School management": "Admissions, classes, attendance and staff handled in one system.",
  "Student & parent portals": "Parents and students see results, fees and notices online.",
  "e-Learning setup": "Launch online classes, lessons and assessments your teachers can manage.",
  "Results & fee systems": "Compile results and track fees accurately, with printable reports.",
  "Staff training": "Hands-on sessions that get your team confident with new tools.",
  "Member management": "A secure, searchable record of every member and their journey.",
  "Giving & finance tracking": "Record giving and spending clearly, with simple, transparent reports.",
  "Attendance": "Take and track attendance quickly for services, classes and events.",
  "Communication tools": "Reach members by message and email, in groups or one by one.",
  "Online ministry setup": "Streaming, online giving and digital outreach set up properly.",
  "Teacher digital skills": "Practical training for teachers on digital tools for the classroom.",
  "Entrepreneur bootcamps": "Short, intensive programs on tools that help small businesses grow.",
  "Ministry workers training": "Digital skills for pastors, leaders and volunteers to serve better.",
  "Custom corporate programs": "Training designed around your organization's tools and goals.",
  "Task routing": "Work is assigned to the right person the moment it is requested.",
  "Auto-reminders": "Automatic nudges for deadlines, payments and approvals.",
  "Report generation": "Weekly and monthly reports built and sent without manual effort.",
  "Notifications": "Instant alerts by email or message when something needs attention.",
  "Integrations": "Connect the tools you already use so data flows between them.",
  "Custom web apps": "Web applications designed around your exact process.",
  "Management portals": "Secure portals for staff, clients, members or parents.",
  "Subscription platforms": "Sell memberships or services online with recurring payments.",
  "Mobile apps": "Mobile experiences for your team, customers or congregation.",
  "AI assistants": "Assistants that answer routine questions and handle simple requests.",
  "Smart reporting": "AI-assisted summaries that explain what your data is telling you.",
  "Knowledge bases": "Searchable answers from your own documents and policies.",
  "Process intelligence": "Spot bottlenecks and delays in your workflows with data."
};

const REL = {
  business: ["process-digitization", "workflow-automation", "software-saas"],
  education: ["education-technology", "software-saas", "academy"],
  "church-ministry": ["church-ministry-technology", "workflow-automation", "academy"],
  academy: ["education", "church-ministry", "business"],
  "process-digitization": ["business", "education", "church-ministry"],
  "workflow-automation": ["business", "process-digitization", "ai-solutions"],
  "software-saas": ["business", "education", "ai-solutions"],
  "education-technology": ["education", "academy", "software-saas"],
  "church-ministry-technology": ["church-ministry", "academy", "workflow-automation"],
  "ai-solutions": ["business", "workflow-automation", "software-saas"]
};

const STEPS = [
  ["Assess", "We study how your organization really works today.", "All divisions"],
  ["Digitize", "Paper, spreadsheets and chats become structured digital systems.", "Business + Education + Church"],
  ["Automate", "Repetitive approvals, reminders and reports run themselves.", "Workflow Automation"],
  ["Train", "Your people learn to use the tools with confidence.", "Digital Training Academy"],
  ["Scale", "Add AI, analytics and new services as you grow.", "AI-Powered Solutions"]
];

const TILES = [
  ["M3 5h18v14H3z M3 6l9 7 9-7", "#9F01F1", "10%", "6%", "-8deg", "6.5s", "0s"],
  ["M4 5h16v11H9l-5 4z", "#4073FF", "6%", "40%", "6deg", "7.2s", ".6s"],
  ["M3 6h6l2 2h10v11H3z", "#C56A00", "11%", "74%", "-4deg", "6.8s", "1.1s"],
  ["M4 6h16v14H4z M4 10h16 M9 3v4 M15 3v4", "#0E9E5C", "85%", "6%", "7deg", "7s", ".3s"],
  ["M7 3h7l4 4v14H7z M14 3v4h4 M10 12h5 M10 16h5", "#9F01F1", "89%", "40%", "-6deg", "6.2s", ".9s"],
  ["M6 16V11a6 6 0 0112 0v5l2 2H4z M10 21h4", "#4073FF", "84%", "74%", "5deg", "7.6s", "1.4s"]
];

const WORDS = ["systems", "clarity", "intelligence", "growth"];

const TOOLS = [
  ["Records", "in paper files"],
  ["Approvals", "in WhatsApp chats"],
  ["Fees & payments", "in spreadsheets"],
  ["Attendance", "in registers"],
  ["Member data", "in notebooks"],
  ["Reports", "buried in email"]
];

const STORY = [
  "[PLACEHOLDER testimonial about digitizing our school's records]|School Administrator",
  "[PLACEHOLDER testimonial about automating our approvals]|SME Founder",
  "[PLACEHOLDER testimonial about managing members and giving]|Pastor",
  "[PLACEHOLDER testimonial about staff digital training]|Ministry Leader",
  "[PLACEHOLDER testimonial about our new management portal]|Operations Manager",
  "[PLACEHOLDER testimonial about the entrepreneur bootcamp]|Entrepreneur"
];

const SPLIT = [
  { d: "education", h: "Technology that makes schools run smoothly.", p: "We help schools replace paperwork with systems that teachers, parents and administrators actually enjoy using.", u: ["School management systems", "Student & parent portals", "Results and fee automation"] },
  { d: "church-ministry", h: "Technology that helps ministries serve with excellence.", p: "From membership to giving to online ministry, we give your team tools that free them to focus on people.", u: ["Member management", "Giving & attendance tracking", "Communication & online ministry"] },
  { d: "academy", h: "Technology only works when your people do.", p: "We train staff, teachers, entrepreneurs and ministry workers to use digital tools and lead confidently.", u: ["Staff & teacher digital training", "Entrepreneur bootcamps", "Ministry workers training"], cnt: 500 }
];

/* ===== HELPERS ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const dv = id => DIV.find(d => d.id === id);

const divCard = d => `<a class="card rv" href="#/services/${d.id}" style="background:${d.t}"><span class="ico" style="background:${d.c}">${ic(P[d.i], 22)}</span><h3 style="font-size:23px;margin:18px 0 6px">${d.n}</h3><p style="font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${d.c}">${d.a}</p><p class="lead" style="font-size:15px;margin:12px 0 18px">${d.b}</p><b style="color:${d.c}">Read more →</b></a>`;

const solCard = s => `<a class="card rv hv" href="#/solutions/${s.id}" style="background:#fff;border:1px solid #36025512;display:flex;gap:14px;align-items:center;padding:20px"><span class="ico" style="background:${s.c}">${ic(P[s.i])}</span><span><b style="display:block;font-size:16px">${s.n}</b><span style="font-size:14px;color:var(--mu)">${s.b}</span><b style="display:block;margin-top:8px;font-size:13px;color:${s.c}">Read more →</b></span></a>`;

const bookBtn = (c = "") => `<a class="btn ${c}" href="${BOOK}" target="_blank" rel="noopener">Book a free consultation</a>`;

const form = () => `<div class="fc" id="contactForm"><h3 style="font-size:24px;margin-bottom:6px">Request a consultation</h3><p style="color:var(--mu);margin-bottom:18px;font-size:15px">We reply within 24 hours. No spam.</p>
<form id="cf"><input name="name" placeholder="Your name" required aria-label="Name"><input name="email" type="email" placeholder="you@organization.com" required aria-label="Email"><select name="type" aria-label="Organization type"><option>Business</option><option>School</option><option>Church or Ministry</option><option>Individual training</option></select><textarea name="msg" rows="3" placeholder="Tell us what you want to improve" aria-label="Message"></textarea><button class="btn" type="submit">Request consultation</button></form></div>`;

const contact = () => `<section id="contact" style="background:linear-gradient(140deg,#D9FBE9 0%,#DCE9FF 24%,#F1E4FB 50%,#F7DAF3 72%,#FFE8CA 100%)"><div class="w c"><span class="k">Contact</span><h2>Let's transform your organization</h2><div class="grid" style="margin-top:44px;text-align:left">${[["Free consultation", "A no-pressure conversation about your goals."], ["Process audit", "We map how work really flows today."], ["Tailored roadmap", "A clear plan with priorities and timelines."]].map(x => `<div class="card rv" style="background:#ffffffcc"><b style="font-size:17px">${x[0]}</b><p style="color:var(--mu);font-size:14px;margin-top:6px;line-height:1.6">${x[1]}</p></div>`).join("")}</div>${form()}</div></section>`;

/* ===== PAGES ===== */
function home() {
  return `
<section id="top"><div class="bl" style="width:55%;height:50%;top:-5%;left:-8%;background:#33FF9A"></div><div class="bl" style="width:45%;height:45%;top:10%;right:-8%;background:#4073FF;animation-delay:-8s"></div><div class="bl" style="width:40%;height:40%;bottom:0;left:30%;background:#9F01F1;animation-delay:-14s"></div><div class="glow" id="glow"></div>
<div class="hi"><div class="tiles" aria-hidden="true">${TILES.map(t => `<div class="tile" style="left:${t[2]};top:${t[3]}"><div class="tb" style="--r:${t[4]};animation-duration:${t[5]};animation-delay:${t[6]}"><svg viewBox="0 0 24 24" fill="none" stroke="${t[1]}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${t[0]}"/></svg></div></div>`).join("")}</div><span class="badge"><i></i>Now onboarding partner organizations</span>
<h1>Stop running your organization on paper and guesswork.<br><span class="bl2">Start building with </span><span id="rw">systems</span>.</h1>
<p class="lead" style="font-size:18px">Prudent Technology &amp; Logistics helps businesses, schools, churches and ministries digitize operations, automate workflows, adopt AI, and train their people, so they can serve better and grow faster.</p>
<div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center">${bookBtn()}<a class="btn gl" href="#" data-go="services">Explore our solutions</a></div>
<div class="pills">${DIV.map(d => `<a class="pill" href="#/services/${d.id}"><span class="ico" style="background:${d.c}">${ic(P[d.i], 13)}</span>${d.s}</a>`).join("")}</div></div>
<div class="peek"><div class="dash" id="dash"><div class="bar"><div class="dots"><i style="background:#FF9810"></i><i style="background:#0E9E5C"></i><i style="background:#9F01F1"></i></div><span class="url">prudent.app / overview</span><span class="chip ok" style="margin-left:auto">Synced</span></div>
<div style="padding:20px;display:grid;gap:14px;text-align:left"><div class="st">${[["24", "Active workflows", "#F3E9FE"], ["1,280", "Tasks automated", "#E3FBEF"], ["340", "Staff trained", "#FFF0DD"], ["960", "Hours saved", "#F3E9FE"]].map(x => `<div style="background:${x[2]}"><b>${x[0]}</b>${x[1]}</div>`).join("")}</div>
<div style="border:1px solid #36025512;border-radius:13px;overflow:hidden">${[["Fee collection", "Accounts", "Active", "ok"], ["Staff onboarding", "HR", "In review", "wt"], ["Attendance report", "Admin", "Scheduled", "in2"]].map(r => `<div class="row"><b>${r[0]}</b><span style="color:var(--mu)">${r[1]}</span><span class="chip ${r[3]}">${r[2]}</span></div>`).join("")}</div></div></div></div></section>
<section id="services"><div class="w"><div class="c" style="margin-bottom:48px"><span class="k">Our services</span><h2>Four divisions. One mission.</h2><p class="lead">Transforming organizations. Enabling people. Powering growth.</p></div><div class="grid g2">${DIV.map(divCard).join("")}</div></div></section>
<section style="background:#F7F1FD"><div class="w two"><div><span class="k">How we work</span><h2>From scattered operations to a system that scales</h2><p class="lead" style="margin-top:16px">Every engagement follows the same five steps, so you always know where you are and what comes next.</p></div>
<div id="flow"><div class="seg" role="tablist">${STEPS.map((s, i) => `<button role="tab" data-i="${i}">${s[0]}</button>`).join("")}</div><div class="stepc" id="sc"></div></div></div></section>
<section class="dark" id="desk"><div class="w"><div class="c"><span class="badge" style="background:#ffffff1f;color:#fff;border-color:#ffffff33">★ One connected platform</span><h2 style="font-size:clamp(34px,5vw,60px);margin:18px 0 16px">Your organization. One clear command desk.</h2><p class="lead">Running an organization should not mean juggling paper files, WhatsApp groups, spreadsheets and email. We bring the essentials into one focused workspace.</p></div>
<div class="scat">${TOOLS.map(t => `<div class="glass hv rv">${t[0]}<small>${t[1]}</small></div>`).join("")}</div>
<div class="app"><div class="bar"><div class="dots"><i style="background:#FF9810"></i><i style="background:#0E9E5C"></i><i style="background:#9F01F1"></i></div><span class="url">prudent.app / workspace</span><span class="chip ok" style="margin-left:auto">Synced</span></div>
<div class="ab"><div class="sd" id="dt">${["Operations|12", "Workflows|6", "People|4", "At a glance|·"].map((t, i) => { t = t.split("|"); return `<button data-t="${i}"><span>${t[0]}</span><span>${t[1]}</span></button>`; }).join("")}<div style="margin-top:10px;padding:12px;border-radius:13px;background:#F3E9FE;font-size:13px;font-weight:600;color:var(--mu)">This week: 5 approvals · 3 reports due</div></div><div class="pn" id="dp"></div></div></div>
<p class="c" style="margin-top:44px"><a class="btn gd" href="#/solutions/process-digitization">See how it works</a></p></div></section>
<section id="solutions"><div class="w"><div class="c" style="margin-bottom:48px"><span class="k">Prudent Solutions</span><h2>Everything your organization needs to go digital.</h2><p class="lead">Six solution areas that work alone or together, built around how your people already work.</p></div><div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">${SOL.map(solCard).join("")}</div><p class="c" style="margin-top:36px"><button class="btn gl" style="border-color:#36025522" id="vall">View all solutions</button></p></div></section>
<section style="background:#F7F1FD"><div class="w">${SPLIT.map(x => {
    const d = dv(x.d);
    return `<div class="two sp rv"><div><span class="k" style="color:${d.c}">${d.n}</span><h2 style="font-size:clamp(28px,3.6vw,44px)">${x.h}</h2><p class="lead" style="margin-top:14px">${x.p}</p><ul class="ul">${x.u.map(u => `<li>${u}</li>`).join("")}</ul><a class="btn" style="background:${d.c};--gc:${d.c}" href="#/services/${d.id}">Read more →</a></div>
<div class="vis" style="background:${d.t}"><span class="ico" style="background:${d.c}">${ic(P[d.i], 44)}</span>${x.cnt ? `<div style="position:absolute;bottom:24px;left:24px;right:24px;background:#fff;border-radius:20px;padding:18px 22px;box-shadow:0 14px 34px #3602551f"><div class="cnt"><span id="cnt" data-n="${x.cnt}">0</span>+</div><p style="font-size:14px;font-weight:600;margin-top:6px">people trained and equipped by the Academy</p></div>` : ""}</div></div>`;
  }).join("")}</div></section>
<section id="stories" style="padding-left:0;padding-right:0"><div class="w c" style="margin-bottom:38px;padding:0 20px"><span class="k">Stories</span><h2>Organizations already building with structure</h2></div><div class="mq"><div class="mqt">${STORY.concat(STORY).map(s => { s = s.split("|"); return `<div class="tc"><p>${s[0]}</p><div style="display:flex;gap:12px;align-items:center"><span class="av">${s[1][0]}</span><div><b style="color:var(--ink);font-size:14px">[Name]</b><div style="font-size:12px">${s[1]}</div></div></div></div>`; }).join("")}</div></div></section>
${contact()}`;
}

function page(kind, id) {
  const it = (kind === "services" ? DIV : SOL).find(x => x.id === id);
  if (!it) return `<section><div class="w c"><h2>Page not found</h2><p class="lead">Check the address or go back <a href="#/" style="color:var(--b)">home</a>.</p></div></section>`;
  const c = it.c, t = it.t || "#F3E9FE", desc = it.b + " Built around your people, your processes and your pace.";
  const rel = (REL[id] || []).map(r => dv(r) ? divCard(dv(r)) : solCard(SOL.find(x => x.id === r))).join("");
  return `<section style="padding-top:calc(68px + 70px);background:linear-gradient(150deg,${t},#FDFBFF)"><div class="w" style="max-width:860px"><p class="crumb"><a href="#/">Home</a> / ${kind === "services" ? "Services" : "Solutions"} / ${it.s || it.n}</p><span class="ico" style="background:${c};margin-bottom:20px">${ic(P[it.i], 22)}</span><h1 style="font-size:clamp(34px,5vw,60px)">${it.n}</h1><p class="lead" style="margin:18px 0 26px;font-size:18px">${desc}</p><div style="display:flex;gap:12px;flex-wrap:wrap">${bookBtn()}<a class="btn gl" href="#/">Back to home</a></div></div></section>
${(() => {
    const L = LONG[id] || { o: "", p: [], g: [] };
    return `<section><div class="w two" style="align-items:start"><div><span class="k">Overview</span><h2 style="font-size:clamp(28px,3.6vw,44px)">Why it matters</h2><p class="lead" style="margin-top:16px">${L.o}</p></div><div style="display:grid;gap:14px"><div class="card" style="background:#FFF0DD"><b style="color:#C56A00">The problem today</b><ul class="ul x" style="margin:12px 0 0;font-weight:500">${L.p.map(x => `<li>${x}</li>`).join("")}</ul></div><div class="card" style="background:#E3FBEF"><b style="color:#0B7A48">What you gain</b><ul class="ul" style="margin:12px 0 0;font-weight:500">${L.g.map(x => `<li>${x}</li>`).join("")}</ul></div></div></div></section>`;
  })()}<section><div class="w"><div class="c" style="margin-bottom:44px"><span class="k">What we offer</span><h2>Built for the way you work</h2></div><div class="grid">${it.off.map(o => `<div class="card rv" style="background:#fff;border:1px solid #36025512"><span class="ico" style="background:${c};width:38px;height:38px;border-radius:12px">${ic(P.doc, 18)}</span><h3 style="font-size:18px;margin:14px 0 6px">${o}</h3><p style="color:var(--mu);font-size:14px;line-height:1.6">${OFF[o] || "A practical setup tailored to your organization."}</p></div>`).join("")}</div></div></section>
<section style="background:#F7F1FD"><div class="w"><div class="c" style="margin-bottom:44px"><span class="k">How it works</span><h2>Three simple steps</h2></div><div class="grid">${[["Discovery", "We learn your goals, tools and bottlenecks."], ["Build & setup", "We configure and connect the right systems."], ["Train & support", "Your team learns it and we stay on call."]].map((s, i) => `<div class="card rv" style="background:#fff"><div style="font-size:44px;font-weight:700;color:${c}33">0${i + 1}</div><h3 style="font-size:20px;margin:6px 0">${s[0]}</h3><p style="color:var(--mu);line-height:1.6">${s[1]}</p></div>`).join("")}</div><div style="margin-top:40px" class="c"><span class="k">Who it's for</span><div>${(it.who || ["Businesses", "Schools", "Churches", "Teams"]).map(w => `<span class="chp">${w}</span>`).join("")}</div></div></div></section>
<section><div class="w"><div class="c" style="margin-bottom:40px"><span class="k">Related</span><h2>Explore more</h2></div><div class="grid">${rel}</div></div></section>
<section class="dark"><div class="w c"><h2>Ready to get started?</h2><p class="lead">Book a free consultation and we'll map out your next step.</p><p style="margin-top:28px">${bookBtn("gd")}</p></div></section>${contact()}`;
}

/* ===== SHELL ===== */
function shell() {
  const dd = (l, body, w) => `<div class="dw ${w ? "sw" : ""}"><button class="nb" aria-haspopup="menu" aria-expanded="false">${l}${ic(P.chv, 14)}</button><div class="dd ${w || ""}" role="menu">${body}</div></div>`;
  const a = (h, i, c, n, s) => `<a role="menuitem" href="${h}"><span class="ico" style="background:${c}">${ic(P[i], 18)}</span><span><b>${n}</b><span class="s">${s}</span></span></a>`;
  $("#nav").innerHTML = `<a href="#/">Home</a>${dd("Services", DIV.map(d => a("#/services/" + d.id, d.i, d.c, d.s, d.a)).join("") + `<a role="menuitem" class="ft" href="#/" data-go="services">View all services</a>`)}${dd("Solutions", SOL.map(s => a("#/solutions/" + s.id, s.i, s.c, s.n, s.b)).join("") + `<a role="menuitem" class="ft" href="#" data-go="contact">Not sure what you need? Book a free consultation →</a>`, "wide")}<a href="#" data-go="stories">Stories</a><a href="#" data-go="contact">Contact</a>`;
  $("#mm").innerHTML = `<a href="#/">Home</a><details><summary>Services</summary>${DIV.map(d => `<a href="#/services/${d.id}">${d.s}</a>`).join("")}</details><details><summary>Solutions</summary>${SOL.map(s => `<a href="#/solutions/${s.id}">${s.n}</a>`).join("")}</details><a href="#" data-go="stories">Stories</a><a href="#" data-go="contact">Contact</a><a class="btn" style="text-align:center;margin-top:8px;color:#fff" href="#" data-go="contact">Book a consultation</a>`;
  $("#ft").innerHTML = `<div class="w"><div style="flex-wrap:wrap;display:flex;justify-content:space-between;align-items:flex-end;gap:24px;padding-bottom:44px;margin-bottom:44px;border-bottom:1px solid #ffffff29"><h2 style="font-size:clamp(34px,5vw,60px);max-width:760px">Let's build something that lasts.</h2><a class="btn" style="background:#fff;color:var(--ink);--gc:#33FF9A" href="${BOOK}">Get in touch →</a></div>
<div class="fg"><div><div class="logo">Prudent<small style="color:#D9CDF2">Technology &amp; Logistics</small></div><p style="margin-top:14px;font-size:14px;line-height:1.7;color:#D9CDF2">Transforming Organizations. Enabling People. Powering Growth.</p></div>
<div><h4>Divisions</h4>${DIV.map(d => `<a href="#/services/${d.id}">${d.s}</a>`).join("")}</div><div><h4>Solutions</h4>${SOL.map(s => `<a href="#/solutions/${s.id}">${s.n}</a>`).join("")}</div>
<div><h4>Company</h4><a href="#" data-go="stories">Stories</a><a href="#" data-go="contact">Contact</a><h4 style="margin-top:20px">Socials</h4>${SOC.map(s => `<a href="${s[1]}" target="_blank" rel="noopener">${s[0]}</a>`).join("")}</div></div>
<p style="margin-top:40px;padding-top:22px;border-top:1px solid #ffffff29;font-size:13px;color:#D9CDF2">© 2026 Prudent Technology &amp; Logistics. All rights reserved.</p></div>`;
}

/* ===== BEHAVIOUR ===== */
let timers = [], pending = null;
const closeAll = () => {
  $$(".dw").forEach(d => {
    d.classList.remove("open");
    $(".nb", d).setAttribute("aria-expanded", "false");
  });
  $("#mm").classList.remove("open");
  $("#bgr").setAttribute("aria-expanded", "false");
};

function setup() {
  timers.forEach(t => clearInterval(t));
  timers = [];
  reveals();
  const cf = $("#cf");
  if (cf) cf.onsubmit = e => {
    e.preventDefault();
    /* Connect form submission handler */
    $("#contactForm").innerHTML = `<h3 style="font-size:24px">Thank you!</h3><p style="color:var(--mu);margin-top:8px">We received your request and will reply within 24 hours.</p>`;
  };
  const rw = $("#rw");
  if (rw) {
    let i = 0;
    timers.push(setInterval(() => {
      i = (i + 1) % WORDS.length;
      rw.textContent = WORDS[i];
      rw.style.animation = "none";
      rw.offsetWidth;
      rw.style.animation = "";
    }, 2400));
  }
  const sc = $("#sc");
  if (sc) {
    let s = 0, hold = false;
    const show = () => {
      const x = STEPS[s];
      $$("#flow .seg button").forEach((b, i) => b.classList.toggle("on", i === s));
      sc.innerHTML = `<span class="n">0${s + 1}</span><h3 style="font-size:26px">${x[0]}</h3><p style="color:var(--mu);line-height:1.6">${x[1]}</p><span class="chip in2" style="align-self:flex-start;padding:8px 14px;font-size:13px">${x[2]}</span><div class="pr"><i></i></div>`;
    };
    $$("#flow .seg button").forEach(b => b.onclick = () => { s = +b.dataset.i; show(); });
    $("#flow").onmouseenter = () => hold = true;
    $("#flow").onmouseleave = () => hold = false;
    show();
    timers.push(setInterval(() => {
      if (!hold) {
        s = (s + 1) % 5;
        show();
      }
    }, 2600));
  }
  const dp = $("#dp");
  if (dp) {
    const V = [
      () => `<h3>Know every client before you open the call.</h3><div class="grid">${[["Retail SME", "Business", "#9F01F1"], ["Community School", "Education", "#0E9E5C"], ["Grace Chapel", "Church", "#C56A00"]].map(c => `<div class="card hv" style="border:1.5px solid #36025514;padding:16px"><b>${c[0]}</b><div style="font-size:12px;color:var(--mu);margin:2px 0 10px">${c[1]}</div><div style="font-size:12px;color:var(--mu);display:grid;gap:5px"><span>Systems live: <b style="color:var(--ink)">4</b></span><span>Status: <b style="color:#0E9E5C">Active</b></span></div></div>`).join("")}</div><div style="margin-top:16px;padding:16px;border-radius:16px;background:#F3E9FE;font-size:14px;line-height:1.6;color:var(--mu)"><b style="color:#7A00BC">Digital forms &amp; records.</b> Replace paper with forms that save straight to the right record.</div>`,
      () => `<h3>See the work. Know what moves next.</h3><div class="kb">${[["Requested", "Fee reminder", "Staff leave"], ["In progress", "Term report"], ["Pending approval", "Budget sheet"], ["Approved", "Event plan"], ["Completed", "Onboarding pack", "Attendance"]].map(c => `<div>${c[0]}${c.slice(1).map(x => `<p>${x}</p>`).join("")}</div>`).join("")}</div>`,
      () => `<h3>Training that sticks.</h3><div style="border:1px solid #36025512;border-radius:14px;overflow:hidden">${[["Ada O.", "Teacher", "Completed", "ok"], ["Samuel K.", "Admin staff", "In progress", "wt"], ["Grace M.", "Ministry worker", "In progress", "wt"], ["Tunde B.", "Entrepreneur", "Not started", "gr"]].map(r => `<div class="row"><b>${r[0]}</b><span style="color:var(--mu)">${r[1]}</span><span class="chip ${r[3]}">${r[2]}</span></div>`).join("")}</div>`,
      () => `<h3>Your desk, at a glance.</h3><div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(130px,1fr))">${[["24", "Active workflows", "#F3E9FE"], ["5", "Approvals pending", "#FFF0DD"], ["340", "Staff trained", "#E3FBEF"], ["1,280", "Forms digitized", "#F3E9FE"], ["960", "Hours saved this quarter", "#F3E9FE"]].map(g => `<div style="padding:18px;border-radius:16px;background:${g[2]}"><b style="font-size:28px;letter-spacing:-.02em">${g[0]}</b><div style="font-size:12px;font-weight:600;color:var(--mu);margin-top:4px">${g[1]}</div><div class="bar2"><i></i></div></div>`).join("")}</div><p style="margin-top:18px;font-weight:600;color:var(--b)">You stop running your organization from memory.</p>`
    ];
    const sel = i => {
      $$("#dt button").forEach((b, j) => b.classList.toggle("on", j === i));
      dp.innerHTML = V[i]();
    };
    $$("#dt button").forEach(b => b.onclick = () => sel(+b.dataset.t));
    sel(0);
  }
  const ct = $("#cnt");
  if (ct) {
    new IntersectionObserver((es, o) => {
      if (es[0].isIntersecting) {
        o.disconnect();
        const n = +ct.dataset.n, t0 = performance.now(), f = t => {
          const p = Math.min(1, (t - t0) / 2000);
          ct.textContent = Math.round(n * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      }
    }).observe(ct);
  }
  const vall = $("#vall");
  if (vall) vall.onclick = () => {
    if (innerWidth >= 820) {
      const d = $$(".dw")[1];
      d.classList.add("open");
      $(".nb", d).setAttribute("aria-expanded", "true");
      scrollTo({ top: 0, behavior: "smooth" });
    } else {
      $("#solutions").scrollIntoView();
    }
  };
}

/* hero effects: icon tiles fly into the dashboard as you scroll, dashboard flattens and leans to the cursor, cursor glow */
const RM = matchMedia("(prefers-reduced-motion: reduce)");
let gx = 0, gy = 0, tx = 0, ty = 0, idle = 0, px = 0, py = 0, TV = null, TM = "", T = [], HW = 1, HH = 1, DZ = [], ND = null;

addEventListener("pointermove", e => {
  tx = e.clientX;
  ty = e.clientY + scrollY;
  idle = performance.now();
}, { passive: true });

addEventListener("resize", () => {
  TV = null;
});

function tileMode(T) {
  const vw = innerWidth, m = vw >= 1180 ? "wide" : vw >= 700 ? "mid" : "phone";
  if (m === TM) return;
  TM = m;
  const sp = {
    mid: [["9%", "-2%"], ["7%", "46%"], ["10%", "92%"], ["84%", "-2%"], ["86%", "46%"], ["83%", "92%"]],
    phone: [["5%", "101%"], null, null, null, null, ["80%", "101%"]]
  }[m];
  T.forEach((el, i) => {
    if (!el.dataset.l) {
      el.dataset.l = el.style.left;
      el.dataset.t = el.style.top;
    }
    const p = sp ? sp[i] : [el.dataset.l, el.dataset.t];
    el.style.display = p ? "" : "none";
    if (p) {
      el.style.left = p[0];
      el.style.top = p[1];
    }
    el.style.scale = m === "phone" ? ".74" : m === "mid" ? ".86" : "";
  });
}

(function L() {
  requestAnimationFrame(L);
  const hero = $("#top");
  if (!hero) return;
  const peek = $("#dash"), g = $("#glow");
  if (!TV) {
    HW = hero.offsetWidth;
    HH = hero.offsetHeight;
    T = $$(".tile", hero);
    TM = "";
    tileMode(T);
    const pk = $(".peek", hero).getBoundingClientRect();
    TV = T.map((el, i) => {
      const pt = el.style.transform;
      el.style.transform = "none";
      const r = el.getBoundingClientRect();
      el.style.transform = pt;
      return [
        pk.left + pk.width * (.14 + .144 * i) - (r.left + r.width / 2),
        pk.top + pk.height * .22 - (r.top + r.height / 2)
      ];
    });
  }
  if (scrollY > HH + 300) return;
  const pT = RM.matches ? 0 : Math.max(0, Math.min(1, scrollY / Math.max(320, HH * .55))), e = pT * pT * (3 - 2 * pT);
  T.forEach((el, i) => {
    const v = TV[i] || [0, 0];
    el.style.transform = "translate3d(" + (v[0] * pT).toFixed(1) + "px," + (v[1] * pT).toFixed(1) + "px,0) rotate(" + ((v[0] > 0 ? 1 : -1) * 14 * pT).toFixed(2) + "deg) scale(" + (1 - .4 * pT).toFixed(3) + ")";
    el.style.opacity = (pT < .8 ? 1 : 1 - (pT - .8) / .2).toFixed(3);
  });
  const now = performance.now();
  if (now - idle > 2500) {
    const t = now / 1000;
    tx = HW * (.5 + .28 * Math.sin(t * .23));
    ty = HH * (.34 + .12 * Math.sin(t * .31 + 1.2));
  }
  gx += (tx - gx) * .18;
  gy += (ty - gy) * .18;
  if (g) g.style.transform = "translate3d(" + gx.toFixed(1) + "px," + gy.toFixed(1) + "px,0)";
  if (peek) {
    const lean = 1 - e * .6;
    px += ((gx / HW - .5) * 8 * lean - px) * .25;
    py += ((gy / HH - .4) * -5 * lean - py) * .25;
    peek.style.transform = "translate3d(0," + (40 * (1 - e)).toFixed(1) + "px,0) rotateX(" + (28 * (1 - e) + py).toFixed(2) + "deg) rotateY(" + px.toFixed(2) + "deg) scale(" + (.9 + .1 * e).toFixed(4) + ")";
  }
})();

/* glass nav: switches to a light-on-dark glass style over dark sections */
const NV = {
  d: {
    glass: "rgba(255,255,255,0.12)",
    edge: "rgba(255,255,255,0.22)",
    hi: "rgba(255,255,255,0.28)",
    line: "rgba(0,0,0,0.18)",
    drop: "rgba(0,0,0,0.22)",
    brand: "#fff",
    ink: "#F1EAFB",
    hover: "rgba(255,255,255,0.16)",
    logo: "brightness(0) invert(1)"
  },
  l: {
    glass: "rgba(255,255,255,0.55)",
    edge: "rgba(255,255,255,0.7)",
    hi: "rgba(255,255,255,0.8)",
    line: "rgba(54,2,85,0.08)",
    drop: "rgba(54,2,85,0.08)",
    brand: "#360255",
    ink: "#5B4370",
    hover: "#F3E9FE",
    logo: "none"
  }
};

function navCheck() {
  const h = $("header");
  if (!h) return;
  const y = h.getBoundingClientRect().bottom - 8;
  const dk = DZ.some(z => {
    const r = z.getBoundingClientRect();
    return r.top <= y && r.bottom >= y;
  });
  if (dk === ND) return;
  ND = dk;
  const v = dk ? NV.d : NV.l;
  Object.keys(v).forEach(k => h.style.setProperty("--nav-" + k, v[k]));
}

addEventListener("scroll", navCheck, { passive: true });

/* scroll reveal: text blurs in and sharpens as it scrolls into view, every time it enters */
let RV = [], rvDirty = true;
const EZ = "cubic-bezier(.22,1,.36,1)", cl = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));

function hideB(it) {
  const s = it.el.style;
  clearTimeout(it.tm);
  it.el.classList.remove("in");
  s.transition = "none";
  s.opacity = "0";
  s.filter = it.big ? "none" : "blur(10px)";
  s.transform = "translate3d(0,14px,0)";
}

function showB(it) {
  const s = it.el.style, d = it.i * 80 + "ms";
  s.transition = "opacity 1.1s " + EZ + " " + d + ",transform 1.1s " + EZ + " " + d + ",filter 1.1s " + EZ + " " + d;
  s.opacity = "1";
  s.filter = "blur(0px)";
  s.transform = "none";
  it.tm = setTimeout(() => {
    s.transition = "";
    s.opacity = "";
    s.filter = "";
    s.transform = "";
    it.el.classList.add("in");
  }, 1250 + it.i * 80);
}

function reveals() {
  RV.forEach(i => clearTimeout(i.tm));
  RV = [];
  rvDirty = true;
  const app = $("#app");
  if (!app) return;
  if (RM.matches) {
    $$(".rv", app).forEach(e => e.classList.add("in"));
    return;
  }
  const skip = "#top,.rv,.fc,.app,.mq,.stepc,#flow,.dash,.peek";
  const h2List = $$("section:not(#top) h2", app);
  if (h2List && h2List.length) {
    h2List.forEach(el => {
      if (el.closest(".rv")) return;
      const words = [];
      [...el.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const f = document.createDocumentFragment();
          (n.textContent || "").split(/(\s+)/).forEach(w => {
            if (!w) return;
            if (/^\s+$/.test(w)) {
              f.appendChild(document.createTextNode(w));
              return;
            }
            const sp = document.createElement("span");
            sp.textContent = w;
            sp.style.display = "inline-block";
            f.appendChild(sp);
            words.push(sp);
          });
          n.replaceWith(f);
        } else if (n.nodeType === 1) {
          n.style.display = "inline-block";
          words.push(n);
        }
      });
      words.forEach(w => {
        w.style.opacity = "0";
        w.style.filter = "blur(12px)";
        w.style.transform = "translate3d(0,18px,0)";
      });
      RV.push({ el, ty: "w", words, vis: false });
    });
  }
  $$("section:not(#top) :is(p,h3,.k)", app).forEach(el => {
    if (!el.closest(skip)) RV.push({ el, ty: "s" });
  });
  const B = $$(".rv,.fc,.app", app).filter(el => !el.closest("#top") && !(el.parentElement && el.parentElement.closest(".rv,.fc,.app")));
  const info = B.map(el => ({
    el,
    ty: "b",
    vis: false,
    big: el.offsetWidth * el.offsetHeight > 160000 || el.offsetHeight > 260,
    i: Math.min(Math.max([...el.parentElement.children].indexOf(el), 0), 7)
  }));
  info.forEach(it => {
    hideB(it);
    RV.push(it);
  });
}

function rvFrame() {
  const vh = innerHeight, se = document.scrollingElement || document.documentElement, end = se.scrollTop >= se.scrollHeight - se.clientHeight - 2;
  const R = RV.map(it => it.el.getBoundingClientRect());
  RV.forEach((it, n) => {
    const r = R[n], st = it.el.style;
    if (it.ty === "s") {
      let raw = cl((vh * .98 - r.top) / (vh * .34));
      if (end && r.top < vh) raw = 1;
      const q = raw * raw * (3 - 2 * raw);
      st.opacity = q.toFixed(3);
      st.filter = q > .995 ? "none" : "blur(" + ((1 - q) * 10).toFixed(2) + "px)";
      st.transform = q > .995 ? "none" : "translate3d(0," + ((1 - q) * 12).toFixed(1) + "px,0)";
      return;
    }
    const vis = (end && r.top < vh) || (r.top < vh * .9 && r.bottom > 0);
    if (vis === it.vis) return;
    it.vis = vis;
    if (it.ty === "w") {
      it.words.forEach((w, i) => {
        const s = w.style, d = i * 70 + "ms";
        s.transition = vis ? "opacity 1.1s " + EZ + " " + d + ",filter 1.1s " + EZ + " " + d + ",transform 1.1s " + EZ + " " + d : "none";
        s.opacity = vis ? "1" : "0";
        s.filter = vis ? "blur(0px)" : "blur(12px)";
        s.transform = vis ? "none" : "translate3d(0,18px,0)";
      });
    } else {
      vis ? showB(it) : hideB(it);
    }
  });
}

addEventListener("scroll", () => { rvDirty = true; }, { passive: true });
addEventListener("resize", () => { rvDirty = true; });

(function RF() {
  requestAnimationFrame(RF);
  if (!rvDirty) return;
  rvDirty = false;
  if (RV.length) rvFrame();
})();

function route() {
  const h = location.hash.replace(/^#\/?/, ""), [a, b] = h.split("/");
  const app = $("#app");
  if (!app) return;
  app.style.opacity = "0";
  setTimeout(() => {
    app.innerHTML = a === "services" ? page("services", b) : a === "solutions" ? page("solutions", b) : home();
    const d = $("#dash");
    if (d) d.style.transform = "rotateX(28deg) scale(.9)";
    closeAll();
    scrollTo(0, 0);
    const h1 = $("#app h1");
    document.title = (a && h1 ? h1.textContent + " | " : "") + "Prudent Technology & Logistics";
    TV = null;
    DZ = $$(".dark");
    ND = null;
    navCheck();
    app.style.transition = "opacity .35s";
    app.style.opacity = "1";
    setup();
    if (pending) {
      const p = pending;
      pending = null;
      setTimeout(() => {
        const el = document.getElementById(p);
        el && el.scrollIntoView();
      }, 60);
    }
  }, 120);
}

function go(id) {
  closeAll();
  if (location.hash.replace(/^#\/?/, "") === "") {
    const el = document.getElementById(id);
    el && el.scrollIntoView();
  } else {
    pending = id;
    location.hash = "#/";
  }
}

document.addEventListener("click", e => {
  const target = e.target;
  if (!target) return;
  const g = target.closest("[data-go]");
  if (g) {
    e.preventDefault();
    go(g.dataset.go);
    return;
  }
  const nb = target.closest(".nb");
  if (nb) {
    const w = nb.parentElement, o = !w.classList.contains("open");
    closeAll();
    w.classList.toggle("open", o);
    nb.setAttribute("aria-expanded", String(o));
    return;
  }
  if (target.closest("#bgr")) {
    const m = $("#mm"), o = !m.classList.contains("open");
    closeAll();
    m.classList.toggle("open", o);
    $("#bgr").setAttribute("aria-expanded", String(o));
    return;
  }
  if (!target.closest(".dw,#mm")) closeAll();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeAll();
  const active = document.activeElement;
  const w = active && active.closest(".dw");
  if (w && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
    e.preventDefault();
    const it = $$("[role=menuitem]", w), i = it.indexOf(active);
    if (!w.classList.contains("open")) {
      w.classList.add("open");
      $(".nb", w).setAttribute("aria-expanded", "true");
    }
    it[(i + (e.key === "ArrowDown" ? 1 : -1) + it.length) % it.length].focus();
  }
});

/* hover-open with 120ms close delay (desktop) */
document.addEventListener("pointerover", e => {
  if (innerWidth < 820) return;
  const target = e.target;
  if (!target) return;
  const w = target.closest(".dw");
  $$(".dw").forEach(d => {
    if (d !== w && d._t == null && d.classList.contains("open")) {
      d._t = setTimeout(() => {
        d.classList.remove("open");
        d._t = null;
      }, 120);
    }
  });
  if (w) {
    clearTimeout(w._t);
    w._t = null;
    if (!w.classList.contains("open")) {
      $$(".dw").forEach(d => d !== w && d.classList.remove("open"));
      w.classList.add("open");
      $(".nb", w).setAttribute("aria-expanded", "true");
    }
  }
});

addEventListener("hashchange", route);

/* Initial mount */
shell();
route();

/* WhatsApp assistant */
(function() {
  const Q = [
    ["Book a free consultation", "Hello Prudent, I would like to book a free consultation."],
    ["Business solutions", "Hello Prudent, I would like to know more about your Business Solutions."],
    ["School technology", "Hello Prudent, I would like to know more about your Education Solutions."],
    ["Church & ministry tech", "Hello Prudent, I would like to know more about your Church & Ministry Solutions."],
    ["Training Academy", "Hello Prudent, I would like to know more about the Digital Training Academy."],
    ["Ask a question", ""]
  ];
  const w = document.createElement("div");
  w.innerHTML = `<button id="wab" aria-label="Chat with us on WhatsApp" aria-expanded="false" aria-controls="wap">${ic("M12 3a9 9 0 00-7.7 13.6L3 21l4.5-1.3A9 9 0 1012 3z M8.6 9.2c0 3 2.2 5.2 5.2 5.2l1.3-1.3-1.8-1-1 .8c-.9-.4-1.7-1.2-2.1-2.1l.8-1-1-1.8z", 30)}</button>
<div id="wap" role="dialog" aria-label="WhatsApp assistance"><div class="wh"><span class="av">P</span><div><b>Prudent Assistant</b><span class="s">Chat with us on WhatsApp</span></div><button class="wx" aria-label="Close chat">×</button></div>
<div class="wb" id="wbd"></div><form class="wf" id="wfm"><input id="wi" placeholder="Type your question..." aria-label="Your message"><button aria-label="Send on WhatsApp">${ic("M5 12h14 M13 6l6 6-6 6", 20)}</button></form></div>`;
  document.body.append(...w.children);
  const b = $("#wab"), pn = $("#wap"), bd = $("#wbd"), inp = $("#wi");
  let shown = false;
  const open = o => {
    pn.classList.toggle("open", o);
    b.setAttribute("aria-expanded", String(o));
    if (o && !shown) {
      shown = true;
      bd.innerHTML = '<div class="wt"><i></i><i></i><i></i></div>';
      setTimeout(() => {
        bd.innerHTML = `<div class="wm">Hello 👋 Welcome to Prudent Technology &amp; Logistics. How can we help you today?</div><div class="wm">Pick an option, or type your question below. We'll continue the chat on WhatsApp.</div><div class="wq">${Q.map((q, i) => `<button data-q="${i}">${q[0]}</button>`).join("")}</div>`;
      }, 700);
    }
  };
  const send = m => window.open(wa(m || "Hello Prudent, I have a question."), "_blank", "noopener");
  b.onclick = () => open(!pn.classList.contains("open"));
  $(".wx").onclick = () => { open(false); b.focus(); };
  bd.onclick = e => {
    const q = e.target.closest("[data-q]");
    if (!q) return;
    const x = Q[+q.dataset.q];
    x[1] ? send(x[1]) : inp.focus();
  };
  $("#wfm").onsubmit = e => {
    e.preventDefault();
    send(inp.value.trim());
    inp.value = "";
  };
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && pn.classList.contains("open")) open(false);
  });
})();
