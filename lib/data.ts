// Single source of truth for all copy on the site.
// Media entries are placeholders until real screenshots / footage are supplied:
// drop a file in /public/work/<slug>/ and set `src` on the matching media item.

export const profile = {
  name: "Rishabh Sharma",
  first: "Rishabh",
  last: "Sharma",
  role: "Product-minded builder",
  titles: ["Technical Product Manager", "Full Stack Engineer", "XR & AI builder"],
  location: "Pune, India",
  timezone: "Asia/Kolkata",
  email: "work.rishabh91@gmail.com",
  linkedin: "https://www.linkedin.com/in/rishabh-sharma-fullstack",
  notion:
    "https://rishabhsharmapm.notion.site/Rishabh-Sharma-Product-Case-Studies-40199c3cb9348165bb04da5f72ca4c76",
  availability: "Open to APM, TPM & full stack roles · Remote, hybrid or relocation · Immediate joiner",
  resumes: [
    { label: "Product résumé", href: "/resume/Rishabh-Sharma-Product.pdf" },
    { label: "Engineering résumé", href: "/resume/Rishabh-Sharma-Engineering.pdf" },
  ],
};

export const statement =
  "I started as an engineer who shipped what was asked. Somewhere between a CEO's brief and 170 school districts, I learned to ask what should be built, and why. Now I do both: the discovery, PRDs and roadmaps, and the code, cloud and headsets that make them real.";

export const numbers = [
  { value: 170, suffix: "+", label: "US school districts on a VR platform I led" },
  { value: 10, suffix: "k+", label: "student campus visits, taken in a headset" },
  { value: 50, suffix: "+", label: "employees across 2 companies on a CRM I built" },
  { value: 50, suffix: "%", label: "less time spent on sales documentation" },
  { value: 2000, suffix: "+", label: "PICO headsets deployed for 500+ enterprise clients" },
  { value: 3, suffix: " mo", label: "from first brief to launch, with a team of two" },
];

export type Stage = {
  no: string;
  verb: string;
  line: string;
  proof: string[];
};

export const journey: Stage[] = [
  {
    no: "01",
    verb: "Discover",
    line: "Sit with the people who feel the problem.",
    proof: [
      "Led discovery directly with the CEO of College Match Pros",
      "Turn Meta, Pico and Vision Pro support issues into roadmap items",
      "Coded ~40 user reviews into 6 themes for the Zepto study",
    ],
  },
  {
    no: "02",
    verb: "Define",
    line: "Turn a brief into a PRD, a roadmap and a reason.",
    proof: [
      "PRDs, UX flows and a phased roadmap for a 3-month launch",
      "Scoped a 2-phase AR/VR upgrade for Tata Technologies",
      "Prioritise with RICE, north-star metrics and guardrails",
    ],
  },
  {
    no: "03",
    verb: "Design",
    line: "Shape the flow before the pixels.",
    proof: [
      "UX for a Unity VR app and its admin dashboard",
      "A Figma-like canvas to lay out 360° campus images in space",
      "Designed every VR panel for an e-learning platform",
    ],
  },
  {
    no: "04",
    verb: "Build",
    line: "Then write the code myself.",
    proof: [
      "Next.js, Node.js and Express on Azure, AWS and Vercel",
      "Clever and ClassLink SSO with role-based access",
      "LLM lead scoring, summaries and document auto-fill",
    ],
  },
  {
    no: "05",
    verb: "Ship",
    line: "Launch it, deploy it, keep it running.",
    proof: [
      "A government website redesigned solo in one week",
      "Two on-premise SUSE Linux servers with CI/CD for defence",
      "A fleet of ~50 VR headsets managed remotely after launch",
    ],
  },
  {
    no: "06",
    verb: "Measure",
    line: "Watch what happens next, and listen.",
    proof: [
      "170+ districts, 12+ states, 10k+ student visits",
      "In-app surveys capture student interest from every tour",
      "Documentation time cut by half for sales teams",
    ],
  },
];

export type Media = {
  label: string;
  aspect?: string;
  src?: string;
  /** CSS object-position for cropping, e.g. "50% 30%". */
  position?: string;
  /** "portrait" sits beside the text column instead of spanning full width. */
  layout?: "full" | "portrait";
};
export type Section = { heading: string; body: string[]; bullets?: string[]; media?: Media };
export type Project = {
  slug: string;
  index: string;
  title: string;
  kicker: string;
  client: string;
  year: string;
  role: string;
  team: string;
  timeline: string;
  tags: string[];
  stack: string[];
  hue: [string, string];
  summary: string;
  metrics: { value: string; label: string }[];
  cover: Media;
  sections: Section[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "college-match-pros",
    index: "01",
    title: "College Match Pros",
    kicker: "Taking 10,000+ students on campus tours without leaving school",
    client: "College Match Pros · US EdTech, B2B",
    year: "2025",
    role: "Product & full stack lead",
    team: "2 people",
    timeline: "Jan – Oct 2025 · launched in 3 months",
    tags: ["Product", "VR", "Full stack"],
    stack: ["Next.js", "React", "Node.js", "Express", "Tailwind CSS", "Azure Cosmos DB", "Azure Blob Storage", "Unity", "Clever SSO", "ClassLink SSO", "ManageXR"],
    hue: ["#E9B97A", "#C8693A"],
    summary:
      "A VR campus tour platform for US schools: students put on a headset and walk through real college campuses in 360°, while districts and principals manage it all from one web dashboard.",
    metrics: [
      { value: "170+", label: "US school districts" },
      { value: "12+", label: "states" },
      { value: "40+", label: "campuses" },
      { value: "10k+", label: "student campus visits" },
    ],
    cover: { label: "Student in headset / campus tour hero", aspect: "16/9" },
    sections: [
      {
        heading: "The brief",
        body: [
          "College Match Pros wanted to bring college campuses to students who might never get to visit them, through VR headsets placed in their schools.",
          "I worked directly with the client's CEO from the first conversation to delivery, and turned the brief into a PRD, UX flows and a phased roadmap.",
        ],
      },
      {
        heading: "Designing for how it would be sold",
        body: [
          "The product had to fit a loaner-first go-to-market: up to 10 headsets per school, with a path to direct sales and annual per-headset licensing. That shaped everything from onboarding to how content is managed across many schools at once.",
        ],
        media: { label: "Roadmap / go-to-market diagram", aspect: "16/10" },
      },
      {
        heading: "A canvas for building campuses",
        body: [
          "Admins needed to place dozens of 360° images so that walking between them in VR felt like walking the real campus. I built a Figma-like free-form canvas in the admin dashboard where each location is placed spatially, which gives VR users a true layout of each campus.",
        ],
        media: { label: "Admin dashboard: free-form campus canvas", aspect: "16/9" },
      },
      {
        heading: "Content, filters and feedback",
        body: [
          "REST APIs on Azure Cosmos DB and Blob Storage serve each tour to the VR app, including 360° images, location labels and audio narration.",
        ],
        bullets: [
          "Discovery filters for GPA, region, HBCU and Ivy League",
          "In-app surveys so schools capture student interest from every tour",
          "Content served to ~50 campus tours from one dashboard",
        ],
      },
      {
        heading: "Onboarding without spreadsheets",
        body: [
          "I prioritised Clever and ClassLink SSO early. Student data syncs automatically, and role-based access separates districts, principals, students and individual users, so nobody onboards students by hand.",
        ],
        media: { label: "Roles & SSO flow", aspect: "16/10" },
      },
      {
        heading: "After launch",
        body: [
          "We launched in three months with a team of two. After launch I managed a fleet of ~50 headsets remotely through ManageXR, pushing updates and supporting the CEO. The platform was featured on The Baller Alert Show, a US podcast.",
        ],
        media: {
          label: "Testing a build in the headset",
          src: "/photos/headset-controller.jpg",
          aspect: "3/4",
          layout: "portrait",
          position: "50% 30%",
        },
      },
    ],
  },
  {
    slug: "redstone-crm",
    index: "02",
    title: "Red Stone CRM",
    kicker: "Replacing spreadsheets with a CRM that reads documents for you",
    client: "Red Stone USA × Fore Excel · Internal B2B SaaS",
    year: "2025 – 26",
    role: "Product & technology owner",
    team: "Solo build",
    timeline: "Live · preparing for SaaS launch",
    tags: ["AI", "Product", "Full stack"],
    stack: ["Next.js", "Node.js", "LLMs", "Email alerts", "Claude Code", "Cursor"],
    hue: ["#D8C3A0", "#7E8B6A"],
    summary:
      "A multi-tenant CRM that replaced Google Sheets for two companies. It tracks leads, customers, documents and tasks, and uses LLMs to score leads, summarise accounts and fill forms from uploaded paperwork.",
    metrics: [
      { value: "50+", label: "employees using it daily" },
      { value: "2", label: "companies, one multi-tenant system" },
      { value: "50%", label: "less documentation time" },
      { value: "3", label: "AI features in production" },
    ],
    cover: { label: "CRM pipeline / dashboard", aspect: "16/9" },
    sections: [
      {
        heading: "The problem",
        body: [
          "Sales and operations at Red Stone USA and Fore Excel ran on linked Google Sheets. Leads, accounts, quotes and follow-ups lived in different tabs, and keeping them in sync took real time every day.",
        ],
      },
      {
        heading: "One connected system",
        body: [
          "I designed and built a multi-tenant CRM where every record is linked: leads, customers, accounts, documents and tasks, with a task manager that sends email alerts so follow-ups don't slip.",
        ],
        bullets: [
          "Lead, customer and document tracking in one place",
          "Task manager with email alerts",
          "Separate workspaces for two companies on one system",
        ],
        media: { label: "Linked records & task manager", aspect: "16/10" },
      },
      {
        heading: "AI where it saves real time",
        body: [
          "Rather than adding a chatbot, I added AI to the slowest parts of the workflow.",
        ],
        bullets: [
          "Lead scoring and summaries, so reps know who to call and why",
          "Document auto-fill: upload a quote, sales order, purchase order or invoice, and an LLM fills in the matching form fields",
          "Documentation time down by about half",
        ],
        media: { label: "Document upload → auto-filled form", aspect: "16/9" },
      },
      {
        heading: "Feeding the pipeline",
        body: [
          "I also wrote an LLM script that pulls leads from a major hardware platform's website into a spreadsheet for sales to follow up on. It replaced manual lead tracking.",
        ],
      },
      {
        heading: "What's next",
        body: [
          "I scoped a ZoomInfo integration with marketing and am preparing the CRM to launch as a subscription SaaS product.",
        ],
      },
    ],
  },
  {
    slug: "redstone-commerce",
    index: "03",
    title: "Red Stone Commerce",
    kicker: "Letting enterprise buyers order a complete VR deployment in one cart",
    client: "Red Stone USA Inc. · Authorised PICO XR distributor",
    year: "2025 – 26",
    role: "Sole technical lead",
    team: "Remote, with sales & marketing",
    timeline: "Ongoing",
    tags: ["E-commerce", "Product", "Full stack"],
    stack: ["Next.js", "React", "MongoDB", "Stripe", "PayPal", "AWS S3", "Redis", "NextAuth", "Tailwind CSS"],
    hue: ["#C9B8A6", "#5E6B7A"],
    summary:
      "Red Stone is one of only three authorised PICO XR distributors in the US. I redesigned its website and built an e-commerce platform and admin dashboard for enterprise buyers who need more than a headset.",
    metrics: [
      { value: "1 of 3", label: "authorised PICO distributors in the US" },
      { value: "2,000+", label: "headsets deployed" },
      { value: "500+", label: "enterprise clients" },
      { value: "1", label: "order for hardware, licences, MDM & kitting" },
    ],
    cover: { label: "Storefront / Build Bundle configurator", aspect: "16/9" },
    sections: [
      {
        heading: "Context",
        body: [
          "Enterprise VR buyers don't just buy headsets. They need software licences, device management (MDM) and kitting, and that used to mean a long email thread with sales.",
        ],
      },
      {
        heading: "The Build Bundle configurator",
        body: [
          "I launched a Build Bundle configurator that combines hardware, software licences, MDM and kitting into a single order, along with bulk deals, preorders and partner software listings.",
        ],
        media: { label: "Build Bundle configurator", aspect: "16/9" },
      },
      {
        heading: "Owning the whole stack",
        body: [
          "As the sole technical lead I make every technology decision: the website redesign, storefront, checkout with Stripe and PayPal, and the admin dashboard that sales uses to run it.",
        ],
        media: { label: "Admin dashboard", aspect: "16/10" },
      },
      {
        heading: "Close to the customer",
        body: [
          "I handle client support for Meta, Pico and Apple Vision Pro headsets and MDMs, present weekly brand reviews to sales, and turn what I hear in support into roadmap items.",
        ],
        media: {
          label: "Hands-on with the hardware",
          src: "/photos/headset-office.jpg",
          aspect: "3/4",
          layout: "portrait",
          position: "50% 25%",
        },
      },
    ],
  },
  {
    slug: "enterprise-xr",
    index: "04",
    title: "Enterprise XR",
    kicker: "Admin systems for defence VR training and an AR/VR e-learning upgrade",
    client: "Tata Advanced Systems · Tata Technologies",
    year: "2024 – 25",
    role: "Technical product lead",
    team: "Co-led 6–7 interns",
    timeline: "Multi-phase",
    tags: ["XR", "Enterprise", "Infrastructure"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Azure Cosmos DB", "SUSE Linux", "CI/CD", "Unity", "Pico 4 Ultra Enterprise"],
    hue: ["#B9B39A", "#4F5A4A"],
    summary:
      "Two enterprise programmes: an admin dashboard and on-premise servers for a defence VR training system, and the scoping and delivery of a two-phase AR/VR upgrade to an e-learning platform with hundreds of courses.",
    metrics: [
      { value: "2", label: "on-premise servers, dev & prod" },
      { value: "100s", label: "of courses in the AR/VR upgrade" },
      { value: "6–7", label: "interns co-led" },
      { value: "2", label: "interns hired full-time" },
    ],
    cover: {
      label: "On-prem server setup with PICO headsets",
      src: "/photos/servers-desk.jpg",
      aspect: "16/9",
      position: "50% 55%",
    },
    note: "Parts of this work are under NDA, so product screenshots aren't shown.",
    sections: [
      {
        heading: "Defence VR training · Tata Advanced Systems",
        body: [
          "I built an admin web dashboard for a Unity-based VR training system running on Pico 4 Ultra Enterprise headsets. Admins monitor users, manage roles, and push images, videos, PDFs, audio and 3D assets to headsets over the intranet.",
          "I also set up two on-premise servers, for development and production, on SUSE Linux, covering networking, deployment and CI/CD.",
        ],
        media: { label: "Setting up the dev and production servers", src: "/photos/servers-rishabh.jpg", aspect: "16/9" },
      },
      {
        heading: "AR/VR e-learning · Tata Technologies",
        body: [
          "I led scoping, feature prioritisation and timelines for a two-phase AR and VR upgrade of an e-learning platform with hundreds of courses. I designed every VR panel and co-led 6–7 interns building Node.js REST APIs on Azure Cosmos DB.",
        ],
        media: { label: "VR panel designs", aspect: "16/10" },
      },
      {
        heading: "Growing the team",
        body: [
          "I mentored the interns through code reviews and daily standups. Two of them were hired full-time.",
        ],
        media: { label: "A build day with the team", src: "/photos/team-table.jpg", aspect: "16/10" },
      },
    ],
  },
  {
    slug: "pune-customs",
    index: "05",
    title: "Pune Customs",
    kicker: "A government website, redesigned solo in a week",
    client: "Pune Customs · Government of India",
    year: "2024",
    role: "Designer & developer",
    team: "Solo",
    timeline: "1 week",
    tags: ["Web", "Gov", "Design"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    hue: ["#D9C9B0", "#8C5A3C"],
    summary:
      "A full redesign of the Pune Customs website, following government web guidelines, built and deployed to Vercel for stakeholder review within a week.",
    metrics: [
      { value: "1", label: "week, start to finish" },
      { value: "1", label: "person: design & code" },
      { value: "GIGW", label: "government web guidelines followed" },
    ],
    cover: { label: "Pune Customs homepage", aspect: "16/9" },
    sections: [
      {
        heading: "The constraint",
        body: [
          "One week, one person, and a strict set of government web guidelines covering accessibility, structure and content.",
        ],
      },
      {
        heading: "The approach",
        body: [
          "I redesigned the site end to end in Next.js, React, TypeScript and Tailwind CSS, and deployed it on Vercel so stakeholders could review a live build instead of static mock-ups.",
        ],
        media: { label: "Before / after", aspect: "16/9" },
      },
    ],
  },
];

export const pmStudies = [
  { title: "Dunzo", line: "Bringing back “Dunzo it”", tag: "Product strategy" },
  { title: "Zepto", line: "Getting users to add a little more to the cart (with Tony Jose)", tag: "Growth · RICE" },
  { title: "Nykaa", line: "A hands-on usability walkthrough", tag: "UX research" },
  { title: "Uber", line: "Fixing the last 100 metres of a pickup", tag: "Problem solving" },
  { title: "AI customer support", line: "From “another chatbot” to a platform teams trust", tag: "B2B strategy" },
];

export const experience = [
  {
    period: "2024 — Now",
    org: "Fore Excel Pvt. Ltd.",
    role: "Technical Product Lead (Software Engineer)",
    place: "Pune",
    line: "5 client and 2 internal products, end to end, at a VR/XR technology distributor with partners in 30 countries.",
  },
  {
    period: "2024 — Now",
    org: "Red Stone USA Inc.",
    role: "Product & Technology Owner",
    place: "Remote · US",
    line: "Own product and tech for an authorised PICO XR distributor: CRM, e-commerce, AI automation and support.",
  },
  {
    period: "2023 — 24",
    org: "Dexian",
    role: "Technical Associate",
    place: "Pune",
    line: "Client app features, API testing in Postman, delivery tracking in Jira and release documentation.",
  },
  {
    period: "2022 — 23",
    org: "Hortus Rudra",
    role: "WordPress Developer · Freelance",
    place: "Pune",
    line: "Custom Elementor sites with call and chat integrations, SEO and PHP/CSS customisation.",
  },
  {
    period: "2021 — 22",
    org: "Hezkrost Technologies",
    role: "Full Stack Developer Intern",
    place: "Pune",
    line: "Built and deployed linkedlabs.co solo, plus hezkrost.com, theonehour.co and mynaukri.co.",
  },
];

export const education = [
  { title: "AI Product Manager", org: "AirTribe", meta: "In progress" },
  { title: "B.Tech, Electronics & Telecommunication", org: "Bharati Vidyapeeth University", meta: "GPA 9.2 · 2019 — 23" },
];

export const journeyPhoto = { src: "/photos/headset-bokeh.jpg", label: "Testing what we build" };

export const offTheClock = [
  { src: "/photos/life-hills.jpg", caption: "Up in the hills", position: "62% 60%" },
  { src: "/photos/life-beach.jpg", caption: "Long walks, no laptop", position: "50% 70%" },
  { src: "/photos/life-boat.jpg", caption: "Thumbs up before the fast boat", position: "50% 55%" },
];

export const toolbox = {
  product: ["Product discovery", "User interviews", "PRDs & user stories", "Roadmapping", "RICE", "KPIs & north stars", "Go-to-market", "Mixpanel", "SQL", "Jira", "Figma", "UAT"],
  build: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Azure", "AWS", "Vercel", "Unity", "Meta Quest", "PICO", "Vision Pro", "Claude Code", "Cursor"],
};
