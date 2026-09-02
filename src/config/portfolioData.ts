import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://mart11up.github.io/portfolio/",
  },
  personal: {
    name: "Martín St.",
    title: "Game Developer",
    headline: "Unity · C# · Gameplay Programming · Multiplayer · Technical Art",
    summary:
      "Passionate Unity developer with over four years of experience building engaging gameplay systems across a variety of game projects. Skilled in gameplay programming, game physics, UI implementation, shader development, and asset integration. I enjoy collaborating with cross-functional teams to create polished, high-quality experiences while continuously learning and refining both the technical and creative aspects of game development.",
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
      // phone: "+52 462 227 6661",
      location: "Guadalajara, México",
      website: "https://mart11up.github.io/portfolio/",
      socials: [
        {
          label: "ArtStation",
          url: "https://www.artstation.com/mart11up",
          icon: "SiArtstation",
        },
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/mart11up",
          icon: "SiLinkedin",
        },
      ],
    },
  },
  skills: [
    {
      title: "Engines & Programming",
      skills: [
        { name: "Unity", icon: "SiUnity", level: 95 },
        { name: "C#", icon: "SiSharp", level: 90 },
        { name: "Roblox Studio", icon: "SiRobloxstudio", level: 80 },
        { name: "Lua", icon: "SiLua", level: 80 },
        { name: "Visual Studio", icon: "BiLogoVisualStudio", level: 90 },
      ],
    },
    {
      title: "Game Development Areas",
      skills: [
        { name: "Gameplay Programming", icon: "FaGamepad", level: 90 },
        { name: "Multiplayer Online", icon: "FaNetworkWired", level: 80 },
        { name: "Game Physics", icon: "FaAppleWhole", level: 95 },
        { name: "UI Programming", icon: "FaWindowMaximize", level: 90 },
        { name: "Game AI", icon: "FaRobot", level: 70 },
        { name: "Optimization", icon: "FaGaugeHigh", level: 70 },
      ],
    },
    {
      title: "Collaboration",
      skills: [
        { name: "Git", icon: "SiGit", level: 80 },
        { name: "GitHub", icon: "SiGithub", level: 90 },
        { name: "GitLab", icon: "SiGitlab", level: 80 },
        { name: "Jira", icon: "SiJira", level: 80 },
        { name: "Miro", icon: "SiMiro", level: 90 },
      ],
    },
    {
      title: "Unity Tools",
      skills: [
        { name: "Cinemachine", icon: "FaVideo", level: 95 },
        { name: "Input System", icon: "FaKeyboard", level: 90 },
        { name: "AI Navigation", icon: "FaRoute", level: 90 },
        { name: "Shader Graph", icon: "FaDiagramProject", level: 70 },
        { name: "DOTween", icon: "FaArrowsLeftRight", level: 90 },
        { name: "FEEL", icon: "FaWandMagicSparkles", level: 85 },
        { name: "ProBuilder", icon: "FaCube", level: 90 },
        { name: "Photon", icon: "FaNetworkWired", level: 60 },
        { name: "Mirror", icon: "FaNetworkWired", level: 70 },
        { name: "FishNet", icon: "FaNetworkWired", level: 80 },
        { name: "PurrNet", icon: "FaNetworkWired", level: 90 },
      ],
    },
    {
      title: "Art & Content Creation",
      skills: [
        { name: "Blender", icon: "SiBlender", level: 70 },
        { name: "Autodesk Maya", icon: "SiAutodeskmaya", level: 40 },
        { name: "Substance 3D Painter", icon: "FaPaintbrush", level: 70 },
        { name: "Adobe Photoshop", icon: "SiAdobephotoshop", level: 80 },
        { name: "Adobe Illustrator", icon: "SiAdobeillustrator", level: 80 },
        { name: "Clip Studio Paint", icon: "FaPenNib", level: 60 },
        { name: "Aseprite", icon: "SiAseprite", level: 80 },
      ],
    },
  ],
  experience: [
    {
      id: "karaokulta-unity-developer",
      title: "Unity Developer",
      company: "KaraOkulta - An Amber Studio",
      date: { start: "Sep 2025", end: "Jul 2026" },
      summary:
        "Developed and maintained Unity systems with a focus on gameplay programming, online multiplayer, optimization, and overall game quality.",
      bullets: [
        "Contributed to shipped titles, delivering polished and engaging player experiences.",
        "Collaborated across engineering and art disciplines on shaders, VFX, lighting, and artist workflow tools.",
      ],
      tech: ["Unity", "C#", "Online Multiplayer", "Optimization", "VFX"],
    },
    {
      id: "arden-unity-instructor",
      title: "Unity Instructor",
      company: "Arden Asociación Civil",
      date: { start: "Feb 2026", end: "Mar 2026" },
      summary:
        "Delivered a hands-on Unity workshop covering the theoretical and practical foundations of the engine, enabling participants to develop new mechanics and continue learning independently.",
      tech: ["Unity", "C#"],
    },
    {
      id: "amber-roblox-developer",
      title: "Roblox Game Developer",
      company: "Amber Mexico",
      date: { start: "Aug 2024", end: "Aug 2025" },
      summary:
        "Implemented gameplay systems with a focus on responsive player interaction and real-time multiplayer functionality.",
      bullets: [
        "Built internal tools to support artist workflows and accelerate iteration.",
        "Contributed to online multiplayer systems and interactions, focusing on seamless connectivity and responsive gameplay.",
        "Created and integrated particle systems and environmental effects to improve game feel and visual feedback.",
        "Contributed to scalable, modular system architecture for use across projects.",
      ],
      tech: ["Roblox Studio", "Lua", "Multiplayer", "Tools", "VFX"],
    },
    {
      id: "new-west-music",
      title: "Freelance Game Developer",
      company: "New West Music",
      date: { start: "Oct 2022", end: "Aug 2023" },
      summary:
        "Developed an interactive iOS app in Unity 2D that uses a color-based system to teach piano to children.",
      bullets: [
        "Designed accessible UI/UX for different screen sizes and resolutions.",
        "Engineered color-based note matching, score tracking, and real-time feedback systems.",
        "Created transitions and animations aligned with the app's learning goals and audience.",
        "Worked with the client to integrate and adapt 2D art assets for gameplay.",
      ],
      tech: ["Unity 2D", "C#", "iOS", "UI/UX"],
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
        "projects/squishems/squishems.png",
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
        // Use media for landscape assets and mobile-gallery for portrait captures.
        content: [
          { type: "facts" },
          { type: "responsibilities" },
          {
            type: "text",
            heading: "Reliable Reward Notifications",
            body: "Rewards could trigger from several systems at once. I built a queue that held each popup until it was safe to display, preventing overlaps and timing conflicts.",
          },
          {
            type: "mobile-gallery",
            heading: "Gameplay Screenshots",
            images: [
              {
                src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f7/ad/d8/f7add8c4-0177-2427-03a4-6f7002a356ae/a.jpg/1290x2796bb.webp",
                thumbnailSrc:
                  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f7/ad/d8/f7add8c4-0177-2427-03a4-6f7002a356ae/a.jpg/460x996bb.webp",
                alt: "The Mexico's pachinko stage",
                caption: "The Mexico's pachinko stage.",
              },
              {
                src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/09/18/59/091859bb-c28e-9c4f-2818-065acf3458b2/b.jpg/1290x2796bb.webp",
                thumbnailSrc:
                  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/09/18/59/091859bb-c28e-9c4f-2818-065acf3458b2/b.jpg/460x996bb.webp",
                alt: "Squish'Ems character running through a city minigame",
                caption: "One of the game's action minigames.",
              },
              {
                src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/01/6a/d6/016ad6a6-c772-2927-5971-b8a3590ea56e/c.jpg/1290x2796bb.webp",
                thumbnailSrc:
                  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/01/6a/d6/016ad6a6-c772-2927-5971-b8a3590ea56e/c.jpg/460x996bb.webp",
                alt: "Stage building screen.",
                caption: "Stage building screen.",
              },
            ],
          },
        ],
      },
    },
    {
      id: "magic-environment-generator",
      title: "Magic Environment Creator",
      description:
        "A procedural 2D environment generator built around a custom approach to Wave Function Collapse. It creates coherent environments by connecting tiles according to compatibility rules.",
      tags: ["Procedural Generation", "C#", "Optimization", "Technical Art", "Unity"],
      image:
        "projects/magic-environment-generator/single-random-generation_color_correction.gif",
      links: [
        {
          label: "Play Demo",
          url: "demos/procedural-environment/index.html",
          icon: "FaGamepad",
        },
      ],
      status: "technical-demo",
      details: {
        showHeaderImage: true,
        headerImageFit: "cover",
        role: "Solo Game Developer",
        engine: "Unity",
        platforms: ["PC"],
        responsibilities: [
          "Designed and implemented a custom approach to Wave Function Collapse",
          "Built an interactive technical demo that helps users understand how the algorithm behaves",
          "Created the project's pixel art assets",
        ],
        // The order of these blocks is the order shown in the details window.
        // Use media for landscape assets and mobile-gallery for portrait captures.
        content: [
          { type: "facts" },
          { type: "responsibilities" },
          {
            type: "text-media",
            heading: "How It Works in a Nutshell",
            body: "The algorithm starts with an empty grid, with every tile option available in each cell. It chooses a cell and “collapses” it into one option.\n\nThat choice removes impossible options from nearby cells. For example, grass cannot connect directly to water, so adjacent water options are discarded. The change keeps propagating, then the algorithm collapses the cell with the fewest options.\n\nIn short: choose a cell → collapse it → propagate the result.",
            media: {
              src: "projects/magic-environment-generator/behavior.gif",
              alt: "Grid cells collapsing propagating its effect",
              caption: "Choosing a cell, collapsing it, and propagating its effect.",
              fit: "contain",
            },
          },
          {
            type: "text-media",
            heading: "Fallback Strategy",
            body: "Propagation can sometimes leave cells with zero options, making the grid impossible to complete. To prevent this, when cells have zero options, I reset the nearby cells. This simple fallback proved reliable and lets the generator finish consistently.",
            media: {
              src: "projects/magic-environment-generator/fallback.gif",
              alt: "A section of the procedural environment resetting after the generator reaches an impossible combination",
              caption: "Resetting the sorrounding area when some cells reaches zero possibilities.",
              fit: "contain",
            },
          },
          {
            type: "text-media",
            heading: "Interactive Demo",
            body: "I also built controls that let users interact with the generator and see how it works. They can manually collapse and erase cells, as well as paint terrain types such as water and grass. Painting chooses the terrain category, while the generator selects a compatible tile variation and completes the surrounding environment.",
            media: {
              src: "https://cdna.artstation.com/p/assets/images/images/086/508/860/original/martin-st-john-clarke-bideau-river.gif?1743382746",
              alt: "Interactive controls being used to paint a river while the generator fills in compatible water tiles",
              caption: "Painting a river while the generator chooses compatible water and grass tiles.",
              fit: "contain",
            },
          },
        ],
      },
    },
    {
      id: "master-of-the-ball",
      title: "Master of the Ball",
      description:
        "A multiplayer boss-fighting game with clicker progression. Players train in different sports, unlock skills, and upgrade their character to defeat bosses. Developed for AGA as a branded promotional experience.",
      tags: ["Gameplay", "Game Systems", "Game AI", "UI/UX", "Multiplayer", "Roblox", "Lua"],
      image: "projects/master-of-the-ball/storefront-thumbnail.png",
      links: [
        {
          label: "Roblox",
          url: "https://www.roblox.com/en/games/132001757579982/Maestro-de-la-Pelota",
          icon: "SiRoblox",
        },
      ],
      status: "released",
      details: {
        showHeaderImage: true,
        headerImageFit: "cover",
        role: "Gameplay & Systems Programmer",
        engine: "Roblox Studio",
        platforms: ["Roblox"],
        responsibilities: [
          "Built the lobby progression systems for training, upgrades, and boss selection",
          "Implemented the clicker UI, player interactions, and feedback",
          "Developed the skill progression and combat systems",
          "Created a reusable boss framework for attacks, animation sequences, and vulnerability states",
        ],
        content: [
          { type: "facts" },
          { type: "responsibilities" },
          {
            type: "text-media",
            heading: "Lobby",
            body: "The lobby is the main hub for the clicker side of the game. Players can train in different sports to increase their levels and unlock skills, buy and use upgrades for training or combat, and choose which boss to fight.",
            media: {
              src: "projects/master-of-the-ball/lobby.png",
              alt: "Roblox player standing in the sports lobby facing boss portals between the store and skins buildings",
              caption: "The lobby, with training areas, shops, and portals for selecting a boss.",
              fit: "contain",
            },
          },
          {
            type: "text-media",
            heading: "Training System and Skills",
            body: "Developed clicker-based training with responsive UI and player feedback, along with sport progression that unlocks new attacks for boss fights.",
            media: {
              src: "projects/master-of-the-ball/training.gif",
              alt: "Player training soccer through the clicker system while the level and progress bars update",
              caption: "Training soccer to gain sport levels and unlock skills.",
              fit: "contain",
            },
          },
          {
            type: "text-media",
            heading: "Boss Behavior",
            body: "The game was planned to have many bosses built around the same patterns: staying at the center of the arena, performing general and targeted attacks, playing animations, and changing vulnerability states. I developed a reusable structure that made new bosses easy to create. By replacing the model, switching the attack asset folder, and adding independent attack scripts, we could build a complete boss with little additional programming.",
            media: {
              src: "projects/master-of-the-ball/boss-attack.png",
              alt: "Player fighting a wolf boss as blue fire, soccer balls, and arena destruction fill the screen",
              caption: "Fighting a boss during an arena-wide attack.",
              fit: "contain",
            },
          },
        ],
      },
    },
  ],
  academicExperience: [
    {
      id: "beedevelopers-workshop",
      title: "Unity Instructor",
      company: "BeeDevelopers",
      date: "Fall 2023",
      summary:
        "Delivered an introductory workshop on Unity and C# programming for university students.",
      bullets: [
        "Guided students through exercises and project development covering physics, asset implementation, and programming fundamentals.",
        "Provided hands-on support to build foundational knowledge of game mechanics and development workflows.",
      ],
      tech: ["Unity", "C#"],
    },
    {
      id: "summer-science-game-ai",
      title: "Game Developer - Artificial Intelligence in Video Games",
      company: "Summer of Science",
      date: "Summer 2023",
      summary:
        "Researched AI applications in video games and their philosophical implications.",
      bullets: [
        "Developed an agent-based game inspired by Pikmin, focusing on AI-driven character behaviors.",
        "Published an article on the practical and philosophical aspects of AI in gaming.",
      ],
      tech: ["Unity", "C#", "Game AI"],
    },
    {
      id: "summer-science-procedural-generation",
      title: "Game Developer - Procedural Content and Game Design Research",
      company: "Summer of Science",
      date: "Summer 2022",
      summary:
        "Researched procedural content generation techniques and algorithms for dynamic game environments.",
      bullets: [
        "Implemented the Wave Function Collapse algorithm in a real-time procedural generation demo.",
        "Published an article on the challenges and potential of procedural generation in game design.",
      ],
      tech: ["Unity", "C#", "Procedural Generation", "Wave Function Collapse"],
    },
    {
      id: "la-bestia-steam-vr",
      title: "Unity Developer",
      company: "La Bestia - Steam VR Experience",
      date: "2022",
      summary:
        "Improved the atmosphere and visual fidelity of a Steam VR experience through textures, lighting, and model adjustments.",
      bullets: [
        "Improved environmental details and character poses.",
        "Assisted with programming to improve interactivity and flow.",
      ],
      tech: ["Unity", "SteamVR", "Lighting", "3D Art"],
    },
  ],
  awards: [
    {
      id: "leon-light-fest-vfx",
      title: "First Place",
      event: "León Light Fest",
      role: "VFX Artist / Motion Designer",
      date: "Dec 2024",
      summary:
        "Created visual effects and animated sequences for a large-scale video mapping projection.",
      bullets: [
        "Collaborated with a multidisciplinary team to plan, develop, and synchronize visuals with audio and projection surfaces.",
        "Contributed to the final edit with a focus on transitions, timing, and synchronization with music.",
      ],
      tech: ["After Effects", "Motion Design", "Video Mapping", "VFX"],
    },
    {
      id: "nasa-space-apps-2024",
      title: "Second Place",
      event: "NASA Space Apps Hackathon",
      role: "Programmer / Technical Artist",
      date: "Oct 2024",
      summary:
        "Developed a Unity platformer prototype across three stylized exoplanets within 24 hours, programming core gameplay systems and creating custom shaders, lighting, and VFX.",
      tech: ["Unity", "C#", "Shaders", "Lighting", "VFX"],
    },
  ],
  education: [
    {
      degree: "Bachelor's Degree in Digital Arts",
      school: "University of Guanajuato",
      date: "2020-2024",
    },
  ],
  extras: {
    languages: [
      { name: "English", level: "Advanced (B2/C1)" },
      { name: "Spanish", level: "Native" },
    ],
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
