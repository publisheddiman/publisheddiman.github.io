const GH = "https://github.com/publisheddiman";
/* Per project: set gh (repo URL) and demo (live URL). A button only renders when its URL is set. */
const mock = {
  k: '<svg viewBox="0 0 320 180" aria-hidden="true"><rect width="320" height="180" fill="#0b1735"/><rect width="56" height="180" fill="#0e1e45"/><rect x="12" y="16" width="32" height="6" rx="3" fill="#4f8cff"/><g fill="#16295a"><rect x="70" y="30" width="76" height="130" rx="8"/><rect x="156" y="30" width="76" height="130" rx="8"/><rect x="242" y="30" width="68" height="130" rx="8"/></g><g fill="#27427f"><rect x="78" y="42" width="60" height="26" rx="5"/><rect x="78" y="76" width="60" height="26" rx="5"/><rect x="164" y="42" width="60" height="26" rx="5"/><rect x="250" y="42" width="52" height="26" rx="5"/></g><path d="M138 55h18M224 55h18" stroke="#22d3ee" stroke-width="2"/></svg>',
  t: '<svg viewBox="0 0 320 180" aria-hidden="true"><rect width="320" height="180" fill="#0b1735"/><rect width="56" height="180" fill="#0e1e45"/><rect x="12" y="16" width="32" height="6" rx="3" fill="#4f8cff"/><g fill="#16295a"><rect x="70" y="24" width="72" height="40" rx="8"/><rect x="150" y="24" width="72" height="40" rx="8"/><rect x="230" y="24" width="80" height="40" rx="8"/><rect x="70" y="76" width="240" height="88" rx="8"/></g><g fill="#27427f"><rect x="80" y="90" width="220" height="8" rx="4"/><rect x="80" y="110" width="220" height="8" rx="4"/><rect x="80" y="130" width="220" height="8" rx="4"/></g><path d="M80 52l20-10 18 6 20-14" stroke="#22d3ee" stroke-width="2" fill="none"/></svg>',
};

const featured = [
  {
    wide: 1,
    type: "Full-stack · Production",
    mock: "k",
    img: "nexusflow-preview.png",
    title: "NexusFlow: Full-Stack Project Management Platform",
    date: "Sep 2026",
    desc: "Built a role-based project management platform that lets teams manage workflows, task dependencies, and client visibility through secure authentication and authorization. Deployed with a responsive Next.js 16 frontend.",
    win: "Clients only see their own data: JWT auth with RBAC and ABAC enforces isolation per role and per client.",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "RBAC/ABAC",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
    ],
    gh: GH,
    demo: "",
  },
  {
    type: "Enterprise application",
    mock: "t",
    img: "santosa-preview.png",
    title: "Santosa Hospital Information System",
    date: "Oct 2026",
    desc: "Hospital workflow and patient data management system that consumes REST API services for patients, visits, doctors, and diagnoses, with a dashboard for analytics.",
    win: "Full patient-visit workflow with API authentication, validation, error handling, filtering, and pagination.",
    tech: ["Laravel", "REST API", "SQL Server", "JavaScript"],
    gh: GH,
    demo: "",
  },
  {
    type: "Research showcase",
    img: "gaze-estimation-preview.png",
    title: "EfficientNet-B0 Gaze Estimation for Edge Computing",
    date: "Feb 2025 – Jul 2026",
    desc: "Computer vision research on lightweight 3D gaze estimation. A custom-head EfficientNet-B0 trained on MPIIGaze, with a real-time Streamlit and MediaPipe demo.",
    kpis: [
      ["1.46°", "Mean angular error"],
      ["~10,800", "FPS throughput"],
      ["427K", "MPIIGaze images"],
    ],
    tech: ["PyTorch", "EfficientNet-B0", "MPIIGaze", "MediaPipe", "Streamlit"],
    gh: GH,
    demo: "",
  },
];

const more = [
  {
    type: "Full-stack",
    img: "sadina-preview.jpeg",
    title: "SADINA School Attendance System",
    date: "Nov 2024 – Jan 2025",
    desc: "Built during my internship at SMKS Al-Mumtaz: teacher portal, schedules, statistics, and attendance reports.",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    gh: GH,
  },
  {
    type: "Mobile",
    img: "moneytracker.jpeg",
    title: "Money Tracker App",
    date: "Nov 2024 – Jan 2025",
    desc: "Android finance tracker with authentication, transaction logging, categorization, data export, and summaries.",
    tech: ["Kotlin", "Android SDK"],
    gh: "https://github.com/publisheddiman/MoneyTracker1",
  },
  {
    type: "Full-stack",
    img: "eureka-app-preview.jpeg",
    title: "EUREKA! Q&A Platform for SAINTEK Students",
    date: "Sep – Dec 2024",
    desc: "Academic Q&A platform covering 7 SAINTEK fields, built with Agile, featuring search and answer validation.",
    tech: ["Agile", "Full-stack web"],
    paper: ["https://doi.org/10.20944/preprints202406.1951.v1", "Read paper"],
  },
  {
    type: "Research",
    img: "jurnal-quran-preview.jpeg",
    title: "Word2Vec and K-Means Thematic Grouping",
    date: "KJRT Vol. 3 Issue 2, 2025",
    desc: "Published research grouping Qur'an verse translations by theme using Word2Vec embeddings and K-Means clustering.",
    tech: ["Python", "Word2Vec", "K-Means", "NLP"],
    paper: ["https://doi.org/10.66948/kjrt.32.18", "Read paper"],
  },
  {
    type: "Research",
    img: "msme-saas-preview.jpeg",
    title: "MSME Digital Transformation with Cloud SaaS",
    date: "Research paper",
    desc: "Cloud-based SaaS for MSME efficiency using Agile Scrum. Usability scored 75.75 (Good) on the System Usability Scale.",
    tech: ["SaaS", "Agile Scrum", "SUS 75.75"],
  },
];

/* Counts reflect the CV: 5 software projects + 3 research works. Update if you add more. */
const stats = [
  ["8", "Software projects and research works"],
  ["427K+", "Images processed for ML research"],
  ["60+", "Organization members led"],
  ["10", "Certifications and trainings"],
];

const highlights = [
  [
    "Full-stack web development",
    "Next.js, React, and Laravel apps with role-based dashboards and responsive UI.",
  ],
  [
    "REST API integration",
    "Authenticated, validated APIs with error handling, filtering, and pagination.",
  ],
  [
    "Database design",
    "Relational schemas in PostgreSQL, MySQL, and SQL Server; Prisma ORM; Oracle-certified.",
  ],
  [
    "Machine learning models",
    "Transfer learning, custom regression heads, training and evaluation in PyTorch.",
  ],
  [
    "Computer vision",
    "Gaze estimation with EfficientNet-B0 and MediaPipe, benchmarked for edge deployment.",
  ],
  [
    "Data analysis",
    "BNSP-certified Associate Data Analyst: processing, visualization, Excel and PivotTable.",
  ],
];

const exp = [
  {
    t: "Full-Stack Developer Intern",
    o: "SMKS Al-Mumtaz",
    d: "Sep – Nov 2024",
    hl: [
      "Independently designed and built SADINA, a student attendance web application, with Laravel and Tailwind CSS.",
      "Integrated MySQL to support end-to-end attendance data processing and reporting.",
      "Delivered a teacher portal, teaching schedules, statistics, and attendance reports.",
    ],
  },
  {
    t: "Research Experience",
    o: "Undergraduate thesis and publications",
    d: "2024 – 2026",
    items: [
      [
        "Feasibility Analysis of EfficientNet-B0 for Gaze Estimation on Edge Computing",
        "Trained a model on ~427,000 MPIIGaze images, reaching ~1.46° mean angular error at ~10,800 FPS (Feb 2025 – Jul 2026).",
      ],
      [
        "Thematic Grouping of Quranic Verse Translations with Word2Vec and K-Means",
        "Published in the Khazanah Journal of Religion and Technology, Vol. 3 Issue 2 (2025).",
        "https://doi.org/10.66948/kjrt.32.18",
      ],
      [
        "Digital Transformation of MSMEs with Cloud Computing SaaS",
        "Agile Scrum implementation evaluated with the System Usability Scale (75.75, Good).",
      ],
    ],
  },
  {
    t: "General Chair, HIMATIF",
    o: "Informatics Engineering Student Association, UIN SGD Bandung",
    d: "2025 – 2026",
    two: 1,
    hl: [
      "Led 60+ board members across 8 departments and managed 15 programs.",
      "Organized 10+ events with 1,000+ participants and built partnerships with 10 organizations.",
    ],
  },
  {
    t: "Community Experience",
    o: "Podcast, student association, and developer community",
    d: "2023 – 2025",
    two: 1,
    hl: [
      "Sakti Podcast, PIC Host and Content Creator: 20+ episodes with 20+ guest speakers, 1,000+ views.",
      "HIMATIF Secretary of Arts and Sports: supported 5+ events with 300+ participants.",
      "Google Developer Student Clubs UIN SGD Bandung: member, 5+ technology events.",
    ],
  },
];

const skills = [
  [
    "Programming Languages",
    ["Python", "PHP", "JavaScript", "TypeScript", "Java", "SQL"],
  ],
  [
    "Machine Learning and Data",
    [
      "PyTorch",
      "EfficientNet",
      "Transfer Learning",
      "Computer Vision",
      "MediaPipe",
      "Model Training and Evaluation",
      "Data Analysis",
      "Data Processing",
      "Data Visualization",
      "Excel and PivotTable",
    ],
  ],
  [
    "Web Development",
    [
      "Laravel",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Prisma",
      "REST API",
      "HTML",
      "CSS",
      "MySQL",
      "PostgreSQL",
    ],
  ],
  ["Mobile Development", ["Kotlin", "Android SDK"]],
  ["Tools and Infrastructure", ["Git/GitHub", "Linux Server", "HPC", "Figma"]],
  ["Methodologies", ["Agile", "CRISP-DM"]],
];

const certs = [
  [
    "lsp.jpg",
    "Associate Data Analyst Competency Certification",
    "LSP Sains Data dan AI Indonesia, Dec 2025 – Dec 2028",
  ],
  [
    "bnsp.jpeg",
    "National Exam Preparation, Associate Data Analyst",
    "BNSP, Oct 2025",
  ],
  [
    "",
    "Elements of AI (2 ECTS)",
    "MinnaLearn and University of Helsinki, Aug 2026",
  ],
  ["sql.jpg", "Database Programming with SQL", "Oracle Academy, Oct 2024"],
  ["desain.jpg", "Database Design", "Oracle, Sep 2024"],
  [
    "ict.jpeg",
    "Microsoft Office Specialist: Excel",
    "PTIPD UIN SGD Bandung, Oct – Dec 2024",
  ],
  [
    "ccna.jpg",
    "CCNA: Introduction to Networks",
    "Cisco Networking Academy, Jan 2025",
  ],
  ["linux.jpg", "NDG Linux Essentials", "Cisco Networking Academy, Jul 2024"],
  [
    "dicoding.jpg",
    "Getting Started with Java Programming",
    "Dicoding Indonesia, May 2024",
  ],
  [
    "tofl.jpg",
    "TOEFA (Test of English for Academics)",
    "UIN SGD Bandung, Jan 2025 – Jan 2027",
  ],
];

const $ = (id) => document.getElementById(id);
const ico = (n) => `<svg aria-hidden="true"><use href="#${n}"/></svg>`;
const tags = (a) =>
  `<div class="tags">${a.map((x) => `<span class="tag">${x}</span>`).join("")}</div>`;
const list = (a) =>
  `<ul class="hl">${a.map((x) => `<li>${x}</li>`).join("")}</ul>`;
const btn = (href, icon, label, cls = "") =>
  `<a class="btn ${cls}" href="${href}" target="_blank" rel="noopener">${ico(icon)}${label}</a>`;

function acts(p) {
  const h =
    (p.gh ? btn(p.gh, "gh", "GitHub") : "") +
    (p.demo ? btn(p.demo, "ext", "Live demo", "pri") : "") +
    (p.paper ? btn(p.paper[0], "ext", p.paper[1]) : "");
  return h ? `<div class="acts">${h}</div>` : "";
}

function card(p, sm) {
  const win = p.win
    ? `<div class="win"><svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg><span>${p.win}</span></div>`
    : "";
  const kpis = p.kpis
    ? `<div class="kpis">${p.kpis.map((k) => `<div><b>${k[0]}</b><span>${k[1]}</span></div>`).join("")}</div>`
    : "";
  return `<article class="card glass${sm ? " sm" : ""}${p.wide ? " wide" : ""}">
    <div class="shot">${p.mock ? mock[p.mock] : ""}<img src="${p.img}" alt="${p.title} preview" width="640" height="400" loading="lazy" decoding="async" onerror="this.remove()"></div>
    <div class="body">
      <div class="meta"><span class="tag">${p.type}</span><span>${p.date}</span></div>
      <h3>${p.title}</h3><p>${p.desc}</p>${win}${kpis}${tags(p.tech)}${acts(p)}
    </div></article>`;
}

$("featured").innerHTML = featured.map((p) => card(p)).join("");
$("more").innerHTML = more.map((p) => card(p, 1)).join("");
$("stats").innerHTML = stats
  .map(
    (s) => `<div class="stat glass"><b>${s[0]}</b><span>${s[1]}</span></div>`,
  )
  .join("");
$("hlgrid").innerHTML = highlights
  .map((h) => `<li class="glass"><h3>${h[0]}</h3><p>${h[1]}</p></li>`)
  .join("");

const row = (e) =>
  `<div class="row glass"><div><h3>${e.t}</h3><p class="when">${e.o}<br>${e.d}</p></div><div>${
    e.items
      ? e.items
          .map(
            (i) =>
              `<div class="item"><h4>${i[0]}</h4><p>${i[1]}</p>${i[2] ? `<a href="${i[2]}" target="_blank" rel="noopener">View publication</a>` : ""}</div>`,
          )
          .join("")
      : list(e.hl)
  }</div></div>`;
const twoRow = (e) =>
  `<div class="row glass"><div><h3>${e.t}</h3><p class="when">${e.o}, ${e.d}</p></div>${list(e.hl)}</div>`;
$("exp").innerHTML =
  exp
    .filter((e) => !e.two)
    .map(row)
    .join("") +
  `<div class="two">${exp
    .filter((e) => e.two)
    .map(twoRow)
    .join("")}</div>`;

$("skillgrid").innerHTML = skills
  .map((s) => `<div class="glass"><h3>${s[0]}</h3>${tags(s[1])}</div>`)
  .join("");
$("certgrid").innerHTML = certs
  .map(
    (c) =>
      `<div class="cert glass">${
        c[0]
          ? `<img src="${c[0]}" alt="" width="84" height="62" loading="lazy" decoding="async" onerror="this.remove()">`
          : '<div class="ph" aria-hidden="true">AI</div>'
      }<div><b>${c[1]}</b><span>${c[2]}</span></div></div>`,
  )
  .join("");
$("yr").textContent = new Date().getFullYear();

const m = $("menu"),
  l = $("links");
m.onclick = () => m.setAttribute("aria-expanded", l.classList.toggle("open"));
l.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    l.classList.remove("open");
    m.setAttribute("aria-expanded", false);
  }
});
const navs = [...l.querySelectorAll("a")];
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting)
        navs.forEach((a) =>
          a.classList.toggle(
            "on",
            a.getAttribute("href") === "#" + e.target.id,
          ),
        );
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));
