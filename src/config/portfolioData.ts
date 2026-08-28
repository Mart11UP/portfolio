import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://satya00089.github.io/portfolio", // update if you have a custom domain
  },
  personal: {
    name: "Martín St.",
    title: "Game Developer",
    headline: "React · Python · FastAPI · IaC · Cloud",
    summary:
      "Senior Engineer with 7+ years of experience delivering enterprise-grade applications. Over the last 3 years I have focused on building production systems using Python (FastAPI) and React — designing APIs, building responsive frontends, and automating deployments with IaC. Experienced across AWS & Azure and comfortable owning full delivery from design to production.",
    // optional hero summary used in the site hero; keeps a concise, senior-level intro tuned to your data
    hero: {
      summary: `I love building and improving player experiences, working with controllers, physics, and feedback to turn ideas into the best experiences for players.
      My work includes mobile, Steam, and online multiplayer games across a wide variety of genres.

      My goal is to make the player feel what the design intends.`,
      // Independent from the complete Skills section below. Choose the labels and order shown in the hero.
      mainSkills: ["Unity", "C#", "Multiplayer", "Physics", "Lua", "Roblox"],
    },
    contact: {
      email: "martinst.johnclarke@gmail.com",
      phone: "+52 462 227 6661",
      location: "Jalisco, México",
      website: "https://mart11up.github.io/portfolio/",
      socials: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/satya-subudhi/",
          icon: "SiLinkedin",
        },
        {
          label: "GitHub",
          url: "https://github.com/satya00089",
          icon: "SiGithub",
        },
        {
          label: "Hugging Face",
          url: "https://huggingface.co/spaces/satya00089/",
          icon: "SiHuggingface",
        },
        {
          label: "Kaggle",
          url: "https://www.kaggle.com/satya00089",
          icon: "SiKaggle",
          size: 32,
        },
      ],
    },
  },
  skills: [
    {
      title: "Frontend",
      skills: [
        {
          name: "Unity",
          level: 90,
          icon: "SiReact",
          category: "frontend",
          years: 4,
          note: "Used in production since 2020",
        },
        {
          name: "C#",
          level: 85,
          icon: "SiTypescript",
          category: "frontend",
          years: 3,
          note: "Used in production since 2021",
        },
        {
          name: "Lua",
          level: 90,
          icon: "SiJavascript",
          category: "frontend",
          years: 7,
          note: "Used in production since 2016",
        },
        {
          name: "HTML5",
          level: 90,
          icon: "SiHtml5",
          category: "frontend",
          years: 7,
        },
        {
          name: "CSS3",
          level: 88,
          icon: "SiCss3",
          category: "frontend",
          years: 7,
        },
        {
          name: "Tailwind CSS",
          level: 80,
          icon: "SiTailwindcss",
          category: "frontend",
          years: 2,
          note: "Used in production since 2022",
        },
        {
          name: "Material-UI",
          level: 80,
          icon: "SiMaterialui",
          category: "frontend",
          years: 2,
          note: "Used in production since 2022",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Python",
          level: 88,
          icon: "SiPython",
          category: "backend",
          years: 4,
          note: "Used in production since 2020",
        },
        {
          name: "FastAPI",
          level: 80,
          icon: "SiFastapi",
          category: "backend",
          years: 3,
          note: "Used in production since 2021",
        },
        {
          name: "Node.js",
          level: 80,
          icon: "SiNodedotjs",
          category: "backend",
          years: 3,
          note: "Used in production since 2021",
        },
        {
          name: "Express.js",
          level: 75,
          icon: "SiExpress",
          category: "backend",
          years: 3,
          note: "Used in production since 2021",
        },
        {
          name: "Java (Vert.x)",
          level: 70,
          icon: "SiJava",
          category: "backend",
          years: 3,
          note: "Used in production from 2018-2021",
        },
      ],
    },
    {
      title: "AI & ML",
      skills: [
        {
          name: "NumPy",
          level: 85,
          icon: "SiNumpy",
          category: "data",
          years: 3,
          note: "Used in production since 2021",
        },
        {
          name: "Pandas",
          level: 85,
          icon: "SiPandas",
          category: "data",
          years: 3,
          note: "Used in production since 2021",
        },
        {
          name: "Scikit-learn",
          level: 80,
          icon: "SiScikitlearn",
          category: "data",
          years: 3,
          note: "Used in production since 2021",
        },
        {
          name: "TensorFlow",
          level: 75,
          icon: "SiTensorflow",
          category: "data",
          years: 2,
          note: "Used in production since 2022",
        },
        {
          name: "PyTorch",
          level: 75,
          icon: "SiPytorch",
          category: "data",
          years: 2,
          note: "Used in production since 2022",
        },
        {
          name: "RAG",
          level: 70,
          category: "data",
          years: 1,
          note: "Built POCs using LangChain and LlamaIndex",
        },
      ],
    },
    {
      title: "Infrastructure & DevOps",
      skills: [
        {
          name: "Terraform",
          level: 80,
          icon: "SiTerraform",
          category: "devops",
          years: 3,
          note: "Used in production since 2021",
        },
        {
          name: "Bicep",
          level: 70,
          category: "devops",
          years: 2,
          note: "Used in production since 2022",
        },
        {
          name: "AWS",
          level: 78,
          icon: "SiAmazonaws",
          category: "devops",
          years: 3,
          note: "Used in production since 2021",
        },
        {
          name: "Azure",
          level: 78,
          icon: "SiMicrosoftazure",
          category: "devops",
          years: 3,
          note: "Used in production since 2021",
        },
        {
          name: "Docker",
          level: 75,
          icon: "SiDocker",
          category: "devops",
          years: 3,
          note: "Used in production since 2021",
        },
        {
          name: "GitHub Actions",
          level: 75,
          icon: "SiGithubactions",
          category: "devops",
          years: 2,
          note: "Used in production since 2022",
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "PostgreSQL",
          level: 80,
          icon: "SiPostgresql",
          category: "database",
          years: 4,
          note: "Used in production since 2020",
        },
        {
          name: "MySQL",
          level: 78,
          icon: "SiMysql",
          category: "database",
          years: 4,
          note: "Used in production since 2020",
        },
        {
          name: "MongoDB",
          level: 78,
          icon: "SiMongodb",
          category: "database",
          years: 3,
          note: "Used in production since 2021",
        },
        {
          name: "Couchbase",
          level: 70,
          icon: "SiCouchbase",
          category: "database",
          years: 2,
          note: "Used in production from 2019-2021",
        },
      ],
    },
    {
      title: "Other Tools",
      skills: [
        {
          name: "Git",
          level: 90,
          icon: "SiGit",
          category: "tooling",
          years: 7,
          note: "Used in production since 2016",
        },
        {
          name: "GitHub",
          level: 88,
          icon: "SiGithub",
          category: "tooling",
          years: 7,
          note: "Used in production since 2016",
        },
        {
          name: "Jira",
          level: 85,
          icon: "SiJira",
          category: "tooling",
          years: 5,
          note: "Used in production since 2018",
        },
        {
          name: "Confluence",
          level: 80,
          icon: "SiConfluence",
          category: "tooling",
          years: 5,
          note: "Used in production since 2018",
        },
        {
          name: "VS Code",
          level: 90,
          icon: "SiVisualstudiocode",
          category: "tooling",
          years: 7,
          note: "Used in production since 2016",
        },
      ],
    },
  ],
  experience: [
    {
      id: "unisys-senior-2025",
      title: "Senior Engineer",
      company: "Unisys",
      location: "Bengaluru, India",
      date: { start: "2025-06", present: true },
      summary:
        "Leading full-stack efforts around Python-based backends and React frontends for enterprise customers. Driving architecture, mentoring teammates and implementing IaC and cloud deployment practices.",
      bullets: [
        "Lead development of microservices using FastAPI and Python for enterprise-scale workloads.",
        "Design and implement responsive React frontends and component libraries with TypeScript and Tailwind.",
        "Drive IaC adoption using Terraform and Bicep; implement CI/CD pipelines and deployment automation.",
        "Mentor engineers, conduct design reviews, and improve code quality and observability.",
      ],
      tech: [
        "Python",
        "FastAPI",
        "React",
        "TypeScript",
        "Terraform",
        "AWS",
        "Azure",
      ],
    },
    {
      id: "unisys-se-2022",
      title: "Software Engineer",
      company: "Unisys",
      location: "Bengaluru, India",
      date: { start: "2022-01", end: "2025-05" },
      summary:
        "Worked on web and desktop applications, cloud deployment tooling, and multi-cloud automation for Unisys products.",
      bullets: [
        "Built desktop and web UI features using React, Electron.js, TypeScript and Node.js.",
        "Implemented cloud deployment workflows for Azure (ARM) and AWS (CloudFormation).",
        "Improved code quality and CI pipelines, addressing SonarQube findings and standardizing testing.",
        "Delivered features around redeployment, resource deletions and automation across cloud providers.",
      ],
      tech: ["React", "Electron", "TypeScript", "Node.js", "Azure", "AWS"],
    },
    {
      id: "unisys-rae-aircore",
      title: "Software Engineer (RAE, AirCore projects)",
      company: "Unisys",
      location: "Bengaluru, India",
      date: { start: "2018-03", end: "2021-12" },
      summary:
        "Worked on UI and backend components for airline/travel solutions and internal tooling.",
      bullets: [
        "Developed front-end UIs using Angular and React and integrated with Unisys Design System.",
        "Built REST APIs using Java (Vert.x) and integrated with NoSQL stores (MongoDB, Couchbase).",
        "Implemented role-based access with Keycloak and developed data visualization tools.",
        "Contributed to NDC stabilization, import/export features and product maintenance.",
      ],
      tech: [
        "Angular",
        "React",
        "Java (Vert.x)",
        "MongoDB",
        "Couchbase",
        "Keycloak",
      ],
    },
  ],
  projects: [
    {
      id: "unicorn-academy",
      title: "Unicorn Academy: Friendship Adventures",
      description:
        "Open-world experience created for the Unicorn Academy series, featuring motion-controlled gameplay, from unicorn riding and movement to quests and minigames.",
      tags: [
        "Open World",
        "Motion Controls",
        "Console",
        "Optimization",
        "Unity",
        "C#",
      ],
      image:
        "https://cdn.prod.website-files.com/66b4121db7e26055e5c96875/6937891a3aed5cfc85a3db7d_Press%20Release%20Visual_v2%20s.png",
      links: [
        {
          label: "Official Page",
          url: "https://www.nexplayground.com/games/unicorn-academy-friendship-adventures",
          icon: "FaGlobe",
        },
      ],
      status: "released",
      details: {
        showHeaderImage: true,
        headerImageFit: "cover",
        role: "Gameplay Programmer",
        engine: "Unity",
        platforms: ["Nex Playground"],
        responsibilities: [
          "Created and polished systems",
          "Developed quests and minigames",
          "Improved player feedback and responsiveness",
        ],
        outcome:
          "Shipped for Nex Playground, with ongoing updates adding new features and explorable areas.",
        // The order of these blocks is the order shown in the details window.
        // Images and animated GIFs use the same media block type.
        content: [
          { type: "facts" },
          { type: "responsibilities" },
          {
            type: "text",
            heading: "Optimization",
            body: "Performance was a core constraint on Nex Playground's limited hardware. We profiled CPU, GPU, and memory throughout development, tuning scene complexity, assets, effects, and gameplay systems to keep the open world responsive without losing its visual identity.",
          },
          {
            type: "media",
            src: "projects/unicorn-academy/race.gif",
            alt: "Third-person view of a rider racing a unicorn toward a checkpoint",
            caption: "Racing across the world in one of the game's unicorn races.",
            fit: "contain",
          },
          {
            type: "text",
            heading: "Motion-Controlled Gameplay",
            body: "Minigames and world interactions had to feel clear and responsive through body movement. I worked closely with game design to simplify each interaction and make feedback easy to read. For the snowball minigame, we refined movement detection and warning cues until players could understand threats and react naturally.",
          },
          {
            type: "media",
            src: "projects/unicorn-academy/snowball.gif",
            alt: "Player marker and warning prompt during a snowball-dodging minigame among snow-covered crates",
            caption: "Dodging snowballs in a Snowy Mountain minigame.",
            fit: "contain",
          },
          { type: "outcome" },
          {
            type: "media",
            src: "projects/unicorn-academy/winter.gif",
            alt: "Snowy Mountain title appearing over an icy landscape with glaciers and snow-covered trees",
            caption: "Area intro from the Snowy Mountain Update.",
            fit: "contain",
          },
          { type: "challenges" },
        ],
      },
    },
    {
      id: "squishems",
      title: "Squish'Ems - Drop and Pop!",
      description:
        "A mobile pachinko game where players collect squishy skins, play minigames, and use earned currency to unlock new maps.",
      tags: ["UI/UX", "Game Economy", "Mobile", "Game Systems", "Unity", "C#"],
      image:
        "https://lh3.googleusercontent.com/Tlga3x4DbVYsd0aUAmsn-sQZ7pvmRfbz9LPLo_tUzIl36J2boSDGLrvFhCZi58JJ6GVdgIjfhs-8ABfYx0m9_E9NB-m12rV1mZFX=h200",
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/mx/app/squishems-drop-and-pop/id6739646005",
          icon: "SiAppstore",
        },
        {
          label: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.amberstudio.squishums&hl",
          icon: "SiGoogleplay",
        },
      ],
      status: "released",
      details: {
        showHeaderImage: true,
        headerImageFit: "cover",
        role: "Gameplay Programmer",
        engine: "Unity",
        platforms: ["iOS", "Android"],
        responsibilities: [
          "Developed and polished minigames and progression features",
          "Built a queued notification system that presented rewards only at safe moments",
          "Worked with game economy systems, including currencies, rewards, and progression",
          "Designed reusable gameplay and UI systems that remained easy to extend",
        ],
        // The order of these blocks is the order shown in the details window.
        // Images and animated GIFs use the same media block type.
        content: [
          { type: "facts" },
          { type: "responsibilities" },
          {
            type: "text",
            heading: "Reliable Reward Notifications",
            body: "Rewards could trigger from several systems at once. I built a queue that held each popup until it was safe to display, preventing overlaps and timing conflicts.",
          },
        ],
      },
    },
    {
      id: "diagrammatic",
      title: "Diagrammatic",
      description:
        "Diagrammatic (System Design Playground): A component library and living documentation for a design system.",
      tags: ["Tools", "UI/UX", "Technical Art"],
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTFnOGF3d3BodjFvY3NhanY5cnl5bmd4Z243aXB5M3hrOHg3d2tmeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WvzQektcJxs0oDFkHq/giphy.gif",
      href: "https://diagrammatic.next-zen.dev",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/satya00089/diagrammatic",
          icon: "SiGithub",
        },
      ],
      status: "technical-demo",
    },
    {
      id: "tic-tac-toe-ai",
      title: "Tic Tac Toe AI",
      description:
        "A minimal Tic-Tac-Toe AI game built with Next.js to understand the Minimax algorithm.",
      tags: ["Gameplay", "Game AI", "2D", "Web"],
      image:
        "https://raw.githubusercontent.com/satya00089/tic-tac-toe/main/public/tic-tac-toe.png",
      href: "https://satya00089.github.io/tic-tac-toe/",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/satya00089/tic-tac-toe",
          icon: "SiGithub",
        },
      ],
      status: "technical-demo",
    },
    {
      id: "mui-color-wheel",
      title: "MUI Color Wheel",
      description:
        "A Material-UI based color wheel component with real-time color picking.",
      tags: ["Tools", "UI/UX", "Technical Art"],
      image:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTJxYjhmdTVjam41aWlzczZreGZ2eXc5eThjdDRpMXgxYzVuYTAzMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tWnCyw4rmoFY8CmhLV/giphy.gif",
      href: "https://mui-color-wheel.vercel.app/",
      links: [
        {
          label: "Storybook",
          url: "https://mui-color-wheel.vercel.app/",
          icon: "SiStorybook",
        },
        {
          label: "NPM",
          url: "https://www.npmjs.com/package/mui-color-wheel",
          icon: "SiNpm",
        },
        {
          label: "GitHub",
          url: "https://github.com/satya00089/mui-color-wheel",
          icon: "SiGithub",
        },
      ],
      status: "in-development",
    },
    {
      id: "alochona",
      title: "Alochona",
      description:
        "Alochona is an experimental chatbot hosted on Hugging Face Spaces. It uses OpenAI under the hood for responses. This project was built as a way to explore chatbot UIs, Hugging Face deployment, and integrating OpenAI APIs.",
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmc5dDY1c2ZnOGs0ODF0eDkwbzBvMHZ2ZXJvYml2amRmdzN2dnZueSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7AFQj6uviWpwudbOWg/giphy.gif",
      href: "https://huggingface.co/spaces/satya00089/alochona",
      links: [
        {
          label: "Huggingface",
          url: "https://huggingface.co/spaces/satya00089/alochona/tree/main",
          icon: "SiHuggingface",
        },
        {
          label: "GitHub",
          url: "https://github.com/satya00089/alochona",
          icon: "SiGithub",
        },
      ],
      tags: ["AI Systems", "UI/UX", "Web"],
      status: "prototype",
    },
    {
      id: "night-sky",
      title: "Night Skyline",
      description:
        "A breathtaking recreation of the city skyline under a starlit night sky, capturing the serene beauty and glowing atmosphere of the evening.",
      tags: ["Technical Art", "VFX", "2D", "Web"],
      image:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2RjaHAxY3N3enY0d3RldWVpczg2ZTNzMHhsY2dpam0yYnp6bWh2byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P2jddT5c9g9OeHI17p/giphy.gif",
      href: "https://satya00089.github.io/night-sky",
      links: [
        {
          label: "Watch",
          url: "https://www.loom.com/share/1516014366e34135a67f5dd4e551fec5",
          icon: "FaPlay",
        },
        {
          label: "GitHub",
          url: "https://github.com/satya00089/night-sky",
          icon: "SiGithub",
        },
      ],
      status: "in-development",
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      school: "Biju Patnaik University of Technology",
      date: "2013-2017",
    },
    {
      degree: "Higher Secondary",
      school: "Bellaguntha Science College",
      date: "2011-2013",
    },
    {
      degree: "High School",
      school: "G.T High School Bellaguntha",
      date: "2011",
    },
  ],
  certifications: [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "2022",
      url: "https://www.credly.com/badges/56ba404b-b2ec-49d7-b869-d41c8c88d7b5",
    },
    {
      name: "Terraform Associate",
      issuer: "HashiCorp",
      date: "2023",
    },
  ],
  extras: {
    languages: [{ name: "English", level: "Native" }],
    interests: ["astronomy", "music"],
  },
};

// ---------- SMALL HELPERS ----------
export const tagColors: TagColors = {
  Unity:
    "border border-slate-300 bg-slate-100 text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200",
  "Unreal Engine":
    "border border-zinc-300 bg-zinc-100 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200",
  Godot:
    "border border-sky-300 bg-sky-100 text-sky-900 dark:border-sky-800 dark:bg-sky-950 dark:text-sky-200",
  Roblox:
    "border border-red-300 bg-red-100 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-200",
  "C#":
    "border border-violet-300 bg-violet-100 text-violet-800 dark:border-violet-800 dark:bg-violet-950 dark:text-violet-200",
  "C++":
    "border border-blue-300 bg-blue-100 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200",
  Lua: "border border-indigo-300 bg-indigo-100 text-indigo-900 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-200",
  Gameplay:
    "border border-orange-300 bg-orange-100 text-orange-800 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-200",
  "Game Systems":
    "border border-amber-300 bg-amber-100 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200",
  "Game Economy":
    "border border-green-300 bg-green-100 text-green-900 dark:border-green-700 dark:bg-green-950 dark:text-green-200",
  "Motion Controls":
    "border border-cyan-300 bg-cyan-100 text-cyan-900 dark:border-cyan-800 dark:bg-cyan-950 dark:text-cyan-200",
  "Player Controls":
    "border border-sky-300 bg-sky-100 text-sky-900 dark:border-sky-800 dark:bg-sky-950 dark:text-sky-200",
  "Open World":
    "border border-lime-300 bg-lime-100 text-lime-900 dark:border-lime-800 dark:bg-lime-950 dark:text-lime-200",
  Physics:
    "border border-indigo-300 bg-indigo-100 text-indigo-900 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-200",
  "Game AI":
    "border border-fuchsia-300 bg-fuchsia-100 text-fuchsia-900 dark:border-fuchsia-800 dark:bg-fuchsia-950 dark:text-fuchsia-200",
  "AI Systems":
    "border border-purple-300 bg-purple-100 text-purple-900 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-200",
  Multiplayer:
    "border border-emerald-300 bg-emerald-100 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",
  Networking:
    "border border-teal-300 bg-teal-100 text-teal-900 dark:border-teal-800 dark:bg-teal-950 dark:text-teal-200",
  "UI/UX":
    "border border-pink-300 bg-pink-100 text-pink-900 dark:border-pink-800 dark:bg-pink-950 dark:text-pink-200",
  Tools:
    "border border-blue-300 bg-blue-100 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200",
  Backend:
    "border border-stone-300 bg-stone-100 text-stone-900 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200",
  Cloud:
    "border border-sky-300 bg-sky-100 text-sky-900 dark:border-sky-800 dark:bg-sky-950 dark:text-sky-200",
  Optimization:
    "border border-yellow-300 bg-yellow-100 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200",
  "Technical Art":
    "border border-rose-300 bg-rose-100 text-rose-900 dark:border-rose-800 dark:bg-rose-950 dark:text-rose-200",
  "Level Design":
    "border border-amber-300 bg-amber-100 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200",
  Animation:
    "border border-pink-300 bg-pink-100 text-pink-900 dark:border-pink-800 dark:bg-pink-950 dark:text-pink-200",
  Shaders:
    "border border-violet-300 bg-violet-100 text-violet-900 dark:border-violet-800 dark:bg-violet-950 dark:text-violet-200",
  VFX:
    "border border-purple-300 bg-purple-100 text-purple-900 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-200",
  Audio:
    "border border-teal-300 bg-teal-100 text-teal-900 dark:border-teal-800 dark:bg-teal-950 dark:text-teal-200",
  "Procedural Generation":
    "border border-lime-300 bg-lime-100 text-lime-900 dark:border-lime-800 dark:bg-lime-950 dark:text-lime-200",
  "2D":
    "border border-green-300 bg-green-100 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-200",
  "3D":
    "border border-amber-300 bg-amber-100 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200",
  Console:
    "border border-zinc-300 bg-zinc-100 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200",
  PC: "border border-blue-300 bg-blue-100 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200",
  Mobile:
    "border border-emerald-300 bg-emerald-100 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",
  Web: "border border-cyan-300 bg-cyan-100 text-cyan-900 dark:border-cyan-800 dark:bg-cyan-950 dark:text-cyan-200",
};
