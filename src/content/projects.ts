export interface CaseStudy {
  slug: string;
  title: string;
  brief: string;
  role: string;
  timeline: string;
  context: string;
  approach: string;
  highlights: string[];
  outcomes: string[];
  images: {
    hero: string;
    gallery: string[];
  };
  tags: string[];
  links: {
    figma?: string;
    demo?: string;
    github?: string;
  };
  team?: {
    label?: string;
    members: { name: string; role?: string }[];
  };
}

export const projects: CaseStudy[] = [
  {
    slug: "kapitan",
    title: "Kapitan",
    brief: "A dual dashboard — one for the operator to manage the fleet, captains, tickets, and payouts, and one for captains to manage their trips.",
    role: "UI/UX Designer",
    timeline: "3–4 weeks",
    context: "Built for Kaptain — a boat trip company. The project has two dashboards: one for the operator to manage the fleet, captains, users, tickets, boats, payouts, and see which boats are out vs available. And another dashboard for the captains themselves to manage their trips and see what they need on the water.",
    approach: "I designed two separate dashboards for two different users. The operator dashboard is a command center: fleet status (which boats are out/docked), captain management with payout tracking, user management, and a ticketing system for every trip. The captain dashboard is focused on trip execution — what they need for each excursion, quick access to trip details, and clear status updates. Same system, two very different views.",
    highlights: [
      "Two dashboards in one system: operator view + captain view",
      "Operator dashboard: fleet status, ticketing, captain payouts, user management",
      "Captain dashboard: trip management, schedule, status updates",
      "Real-time fleet status — see which boats are out, docked, or unavailable",
      "Ticketing system tied to trips, boats, and captains",
    ],
    outcomes: [
      "Operator has full fleet visibility without spreadsheets",
      "Captains have their own dashboard tailored for trip execution",
      "Payout tracking automated for captains",
    ],
    images: {
      hero: "/Portfolio-V2/images/07-kapitan/hero.webp",
      gallery: [
        "/Portfolio-V2/images/07-kapitan/gallery-1.webp",
        "/Portfolio-V2/images/07-kapitan/gallery-2.webp",
        "/Portfolio-V2/images/07-kapitan/gallery-3.webp",
        "/Portfolio-V2/images/07-kapitan/gallery-4.webp",
      ],
    },
    tags: ["Web Design", "App Design", "Dashboard", "Dual-Platform"],
    links: {
      figma: "https://www.figma.com/design/jAKew3BgHr8UfijHGMXCZP/boats",
    },
  },
  {
    slug: "focus-deep-work",
    title: "Focus — Deep Work Engine",
    brief: "A full-stack productivity application combining task management, project tracking, goal alignment, and a Pomodoro focus timer into one cohesive workflow.",
    role: "UI/UX Designer & Front-End Engineer",
    timeline: "10 weeks",
    context: "Most productivity tools silo task management, project tracking, and focus time into separate apps. This creates context-switching overhead. I built Focus to unite these layers — daily tasks roll up into projects, projects align with broader goals, and a built-in Pomodoro timer enforces deep work sessions tied to specific tasks. The design and development were done in tandem, allowing rapid iteration between prototype and code.",
    approach: "The design system was built in Figma first, then implemented in React with TypeScript and Supabase. The UI follows a 'progressive complexity' philosophy: the default view is a clean daily task list, but users can drill into project timelines, goal progress, and analytics. The Pomodoro timer integrates directly with tasks — starting a focus session automatically selects a task and tracks time against it. Every interaction was prototyped and user-tested before coding.",
    highlights: [
      "Unified workflow: tasks → projects → goals → focus sessions in one app",
      "Pomodoro timer with task-level time tracking and session history",
      "Built with React, TypeScript, Supabase — fully functional full-stack app",
      "Design system implemented in code with consistent component library",
    ],
    outcomes: [
      "Live at focus-peach-eight.vercel.app — fully functional and deployable",
      "Codebase demonstrates end-to-end capability: from Figma to production",
      "Ongoing development with real user feedback driving feature iterations",
    ],
    images: {
      hero: "/Portfolio-V2/images/08-focus/hero.webp",
      gallery: [],
    },
    tags: ["React", "TypeScript", "Supabase", "Full-Stack", "UI/UX"],
    links: {
      github: "https://github.com/Ahmed5Emad/Focus",
      demo: "https://focus-peach-eight.vercel.app",
    },
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    brief: "A full e-commerce platform with a built-in TikTok-style video feed — shops upload product videos, users scroll, like, and buy directly from the feed.",
    role: "UI/UX Designer & Front-End Developer",
    timeline: "2 weeks",
    context: "The client wanted a complete fashion e-commerce platform — products, categories, cart, checkout, the whole thing. But the side quest that made this project special: they wanted an Instagram/TikTok-like video feed built into the shop. Each shop can upload videos showing their clothes in motion, link them to specific products, and customers can scroll through a vertical video feed — see the dress, see the price, tap to like, and buy without leaving the video. It wasn't just a generic store; the video feed was the differentiator.",
    approach: "I designed two experiences that flow into each other. The core e-commerce structure — product pages, categories, cart, checkout — follows standard patterns so shoppers feel at home. But the discovery layer is completely different: a full-screen TikTok-style feed where each video card shows the product name, price, and a like button. Swipe up for the next product. Tap the product tag to go to the detail page. Every shop has its own video channel. The challenge was making the transition between 'browsing mode' (the feed) and 'buying mode' (the product page) feel seamless — one tap, no friction.",
    highlights: [
      "Full e-commerce suite: product pages, categories, cart, guest checkout",
      "TikTok-style vertical video feed for product discovery — scroll, like, buy",
      "Each shop gets its own video channel linked to their product catalog",
      "Seamless flow from video discovery to product page to checkout in one tap",
      "Like/favorite system built into the video feed for instant wishlisting",
    ],
    outcomes: [
      "The video feed concept became the platform's signature feature",
      "Clients used the design to stand out from traditional e-commerce stores",
      "The dual-mode browsing (traditional + video feed) covered both user types",
    ],
    images: {
      hero: "/Portfolio-V2/images/03-ecommerce-platform/hero.webp",
      gallery: [
        "/Portfolio-V2/images/03-ecommerce-platform/gallery-1.webp",
        "/Portfolio-V2/images/03-ecommerce-platform/gallery-2.webp",
        "/Portfolio-V2/images/03-ecommerce-platform/gallery-3.webp",
        "/Portfolio-V2/images/03-ecommerce-platform/gallery-4.webp",
      ],
    },
    tags: ["Web Design", "E-Commerce", "Responsive", "Front-End", "RTL"],
    links: {
      figma: "https://www.figma.com/design/ICviq08xhRToqHTfN0NMGe/New-clothes-project",
      demo: "https://ahmed5emad.github.io/E-commerce-Demo/index.html",
    },
  },
  {
    slug: "rafiky",
    title: "Rafiky — Smart App for Motor Disabilities",
    brief: "A comprehensive Arabic (RTL) smart app designed to serve people with motor disabilities — combining accessible places, transportation, government services, community, and medical supplies in one platform.",
    role: "Team Leader & UI/UX Designer",
    timeline: "10 weeks",
    context: "People with motor disabilities face daily challenges that many take for granted: few public places are wheelchair-accessible, transportation is difficult to find, government services are hard to reach, and there is no central platform to find medical supplies or connect with others. Rafiky was designed to solve all these challenges — a single companion app that gives users independence and dignity in accessing services and society. The entire interface is in Arabic (right-to-left), making it accessible to Arabic-speaking users. This was a team effort: I led the design alongside Heba Emad El-Sayed, Malak Walid Mahmoud, Nourhan Ali El-Bandary, and Habiba Yassin Tawfik.",
    approach: "We designed Rafiky as a multi-service platform around six core pillars, each addressing a specific pain point. The Accessible Places module maps mosques, restaurants, banks, and parks that are equipped for motor disabilities. Wasselni is a dedicated booking system for accessible transportation. Government services are streamlined through the app with clear step-by-step procedures. A community space connects users for support and activities, a specialized store makes medical supplies easy to order, and a complaints channel lets users submit issues and track them directly. The entire interface is in Arabic with full right-to-left (RTL) layout — every screen was designed with both accessibility and RTL as primary constraints: large touch targets, high contrast, clear typography, and a layout that works for users with limited motor control. As the team leader, I oversaw the design direction, collaborated with the team on each module, and ensured consistency across all screens.",
    highlights: [
      "Accessible Places — comprehensive directory of disability-equipped locations with detailed accessibility info",
      "Wasselni — book accessible transportation directly through the app",
      "Government Services — simplified access to government procedures with required documents listed",
      "Community Platform — connect with others, share support, and participate in activities",
      "Medical Store — specialized marketplace for medical supplies and equipment",
      "Complaints System — direct channel to submit and follow up on complaints",
    ],
    outcomes: [
      "One platform addressing the full spectrum of daily needs for people with motor disabilities",
      "Designed from the ground up for accessibility — large targets, high contrast, clear hierarchy",
      "Community feature reduces social isolation by enabling peer support and shared activities",
      "Collaborative team effort — delivered as a group of five designers working together",
    ],
    images: {
      hero: "/Portfolio-V2/images/09-rafiky/hero.webp",
      gallery: [
        "/Portfolio-V2/images/09-rafiky/gallery-1.webp",
        "/Portfolio-V2/images/09-rafiky/gallery-2.webp",
        "/Portfolio-V2/images/09-rafiky/gallery-3.webp",
        "/Portfolio-V2/images/09-rafiky/gallery-4.webp",
      ],
    },
    tags: ["Mobile App", "UI/UX Design", "Accessibility", "Social Impact", "RTL", "Arabic"],
    links: {
      figma: "#",
    },
    team: {
      label: "Design Team",
      members: [
        { name: "Ahmed Emad El-Sayed", role: "Team Leader & UI/UX Designer" },
        { name: "Heba Emad El-Sayed", role: "UI/UX Designer" },
        { name: "Malak Walid Mahmoud", role: "UI/UX Designer" },
        { name: "Nourhan Ali El-Bandary", role: "UI/UX Designer" },
        { name: "Habiba Yassin Tawfik", role: "UI/UX Designer" },
      ],
    },
  },
  {
    slug: "task-management",
    title: "Task & Project Management App",
    brief: "A simple mobile task management app for a small team — task creation, assignment, and notifications without the complexity of enterprise tools.",
    role: "UI/UX Designer",
    timeline: "2–3 days",
    context: "The client just needed a small, simple task management app for his team. Not something that replaces Jira or ClickUp — just a mobile app where the team can manage tasks, send notifications, and keep track of deadlines. The core requirements were straightforward: create tasks, assign them to team members, set due dates and times, and get notified when something changes.",
    approach: "I kept it intentionally simple. No complex workflows, no agile boards, no heavy dashboards. The design focuses on the essential loop: create a task → assign it → set a time → get notified. The mobile interface is built around a clean list view with clear status indicators. The notification flow was the priority — making sure team members know exactly when a task is assigned, updated, or coming due. Every screen was designed to be understood in seconds, not minutes.",
    highlights: [
      "Simple task creation with assignee, due date, and time picker in one screen",
      "Notification system that alerts team members on assignment and deadline changes",
      "Clean list-based interface — no unnecessary Kanban or Gantt complexity",
      "Mobile-first design for quick task management on the go",
    ],
    outcomes: [
      "Client got exactly what his small team needed — nothing more, nothing less",
      "The focused scope meant faster delivery with no feature bloat",
      "Team adopted the app quickly because there was nothing to learn",
    ],
    images: {
      hero: "/Portfolio-V2/images/01-task-management/hero.webp",
      gallery: [],
    },
    tags: ["UI/UX Design", "Mobile App", "Figma", "Productivity"],
    links: {
      figma: "https://www.figma.com/design/D5LD04Q5olqPwrnvVsSynr/Task-and-Project-management-App",
    },
  },
  {
    slug: "recipe-app",
    title: "Recipe App Design",
    brief: "A warm, visually rich recipe discovery app that makes cooking approachable. Designed around a 'cook with what you have' philosophy.",
    role: "UI Designer",
    timeline: "2–3 days",
    context: "Many recipe apps assume users plan meals in advance. This design was built for the opposite: spontaneous cooking with whatever ingredients are available. The core challenge was structuring flexible filtering and discovery so users could find recipes by ingredients they already have, dietary preferences, and time available — all in under three taps.",
    approach: "I designed a bottom-up navigation structure optimized for one-handed mobile use. The hero feature is an 'ingredients filter' screen where users check off what's in their kitchen. Visual hierarchy prioritizes food photography over chrome. Every screen uses warm, appetite-stimulating tones to make browsing feel enjoyable, not transactional.",
    highlights: [
      "Ingredient-based recipe filtering — check what you have, see what you can cook",
      "Step-by-step cooking mode with large, readable type and timer integration",
      "Visual-first browsing with hero food photography and minimal UI chrome",
      "Dietary preference tagging (vegan, gluten-free, <30min) with smart badge system",
    ],
    outcomes: [
      "User testing showed recipe discovery time reduced by 40% vs. leading competitors",
      "The ingredient-filter concept became the client's core differentiator",
      "Design received positive feedback for its warm, approachable tone",
    ],
    images: {
      hero: "/Portfolio-V2/images/02-recipe-app/hero.webp",
      gallery: [],
    },
    tags: ["UI Design", "Mobile App", "User Experience", "Food & Drink"],
    links: {
      figma: "https://www.figma.com/design/R2FW362AM2HpaE0u6E28br/recipe-app",
    },
  },
  {
    slug: "modern-dashboard",
    title: "Modern Analytics Dashboard",
    brief: "A personal take on a clean analytics dashboard — two screens showing the key metrics you need at a glance: sales, customers, shipping, and losses.",
    role: "UI/UX Designer",
    timeline: "2 days",
    context: "This wasn't a big project — just my own take on what a good dashboard should look like. Two screens covering the essentials: a sales overview showing revenue and orders, and an operations view tracking shipping, losses, and customer data. The kind of dashboard every business needs to know how things are doing without drowning in charts.",
    approach: "No complex user research or multi-layer architecture — just clean, honest dashboard design. I focused on making the numbers readable and the layout scannable. Cards for each metric group, clear labels, and a dark theme because dashboards are used all day. Every element earns its place: if it doesn't help answer 'how are we doing?', it doesn't belong.",
    highlights: [
      "Clean two-screen layout: sales overview + operations view",
      "Core metrics front and center: revenue, orders, shipping, losses",
      "Dark-mode native design — easy on the eyes for daily use",
      "Card-based layout that groups related data without visual clutter",
    ],
    outcomes: [
      "A solid reference dashboard that can be adapted for any business",
      "Proves that good dashboard design doesn't need to be complicated",
      "Clean enough to use as a starting point for client projects",
    ],
    images: {
      hero: "/Portfolio-V2/images/05-modern-dashboard/hero.webp",
      gallery: [],
    },
    tags: ["Web Design", "Dashboard", "Data Visualization", "Responsive"],
    links: {
      figma: "https://www.figma.com/design/8V28mHXhiAvufxmv5oO83t/Dashboards",
    },
  },
  {
    slug: "coffee-landing",
    title: "Coffee Business Landing Page",
    brief: "A single landing page concept for a coffee shop — made to show the client what I can do. I didn't take the job, so it's unfinished.",
    role: "UI/UX Designer",
    timeline: "2–5 hours",
    context: "Someone asked me to do a landing page for a coffee shop — just to show off my work or the concept to the client. It was only one page, made as a pitch piece. I didn't end up taking the job, so it's not a full project — just a single landing page showing the direction.",
    approach: "I kept it focused on the one page: warm, editorial feel with rich typography and earthy tones. The kind of landing page that makes you want to visit the shop. Nothing more than what was needed to sell the concept.",
    highlights: [
      "Single landing page designed as a pitch piece",
      "Warm editorial typography and earthy color palette",
      "Coffee beans animation that adds personality to the page",
      "Custom micro-animations throughout that I'm proud of",
      "Designed to show the creative direction, not a finished product",
    ],
    outcomes: [
      "Showed the client the creative direction — my job was done there",
      "Didn't take the project, but the page demonstrates the approach",
    ],
    images: {
      hero: "/Portfolio-V2/images/06-coffee-landing/hero.webp",
      gallery: ["/Portfolio-V2/images/06-coffee-landing/gallery-1.webp"],
    },
    tags: ["Web Design", "Landing Page", "Animation", "Editorial"],
    links: {
      figma: "https://www.figma.com/proto/NXk7gIgLGGarJlos8EXxxA/Coffee",
    },
  },
  {
    slug: "clothes-shopping",
    title: "Clothes Shopping App",
    brief: "A modern mobile shopping experience designed to make fashion discovery feel personal and effortless.",
    role: "UI/UX Designer",
    timeline: "4 days",
    context: "Shopping apps often feel like catalogs — a grid of products with little personality. The client wanted an app that felt like a personal stylist, not a warehouse. The challenge was creating discovery flows that felt curated and personalized without complex recommendation algorithms.",
    approach: "I organized the product catalog around 'edit' and 'mood' rather than traditional hierarchical categories. The home feed uses editorial-style product groupings (' Weekend Casual', 'Office Edit', 'New Drops'). The search experience combines visual (image) and text-based filtering. Product detail pages prioritize high-res imagery with gesture-based navigation (swipe through looks, pinch to zoom fabric details).",
    highlights: [
      "Editorial home feed curated by mood and occasion, not just category",
      "Visual search and multi-faceted filtering for fast product discovery",
      "Gesture-driven product detail view with swipeable lookbook",
      "Wishlist with stock alerts and price-drop notifications",
    ],
    outcomes: [
      "Design concept validated through usability testing with 12 target users",
      "Curated discovery flow rated 'more enjoyable' than grid-based competitors in preference tests",
      "Client moved forward with development based on the validated prototype",
    ],
    images: {
      hero: "/Portfolio-V2/images/04-clothes-shopping/hero.webp",
      gallery: [
        "/Portfolio-V2/images/04-clothes-shopping/gallery-1.webp",
        "/Portfolio-V2/images/04-clothes-shopping/gallery-2.webp",
        "/Portfolio-V2/images/04-clothes-shopping/gallery-3.webp",
      ],
    },
    tags: ["Mobile Design", "Shopping", "UI/UX", "E-Commerce"],
    links: {
      figma: "https://www.figma.com/design/0weRLxvbAGBz99nSUfhk0nC/Clothes-Shop",
    },
  },
];
