import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Khoi Lam",
  initials: "KL",
  url: "https://kimkhoilam.com/",
  location: "Stanford, CA",
  locationLink: "https://www.google.com/maps/place/Stanford,+CA/",
  description:
    "and I major in Computer Science and Artificial Intelligence at Stanford University.",
  summary:
    "I love coding, machine learning, and AI. I also like building full stack applications with NextJS for fun in my freetime. I've won top awards at international and national hackathons. My 10-year goal is to build AGI. My 1-year goal is to grind LeetCode and learn that binary tree thing.",
  avatarUrl: "/koi.gif",
  skills: [
    "Next.js",
    "React",
    "Typescript",
    "Node.js",
    "Python",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "khoilam@stanford.edu",
    tel: "+8162569384",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kimkhoi2202",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Internash Global Services",
      href: "https://internash.us/",
      badges: ["Houston, TX"],
      location: "Houston, TX",
      title: "Full Stack Software Engineer",
      logoUrl: "/internash.png",
      start: "Jun 2024",
      end: "Sep 2024",
      description:
        "IGS specializes in supply chain management and electronic repairs to large manufacturers such as Apple, Google, and Dell.\n\nReworked company's website from WordPress to a more modern website. Will connect to the company's domain after WordPress subscription ends.\nBefore: https://internash.us\nAfter: https://igs-website-usys.vercel.app\n\nBuilt an internal custom web app solution to manage the company's large database and speeding up the repair process.\nPublic version demo (no sensitive data): https://fixturedatabase.vercel.app",
    },
    {
      company: "Gateway Global",
      badges: ["St. Louis, MO"],
      href: "https://www.aybaa.org/",
      location: "St. Louis, MO",
      title: "Data Analysis Intern",
      logoUrl: "/gatewayglobal.png",
      start: "Jun 2023",
      end: "Aug 2023",
      description:
        "Analyzed and visualized data from 50+ businesses in the Hyde Park Neighborhood and then presented the report to Dr. Stacey Dixon (NGA's Deputy Director).",
    },
    {
      company: "Gateway Global",
      href: "https://www.aybaa.org/",
      badges: ["St. Louis, MO"],
      location: "St. Louis, MO",
      title: "Mobile App Developer Intern",
      logoUrl: "/gatewayglobal.png",
      start: "Dec 2022",
      end: "Apr 2023",
      description:
        "Built a mobile app with React Native and used Geospatial Technology to create maps for park visitors and staff for Laumeier Park in St. Louis.",
    },
    {
      company: "The Productivity Algorithm Course",
      href: "https://www.training.mikedee.com/productivityalgorithm",
      badges: ["Remote"],
      location: "Remote",
      title: "Productivity Coach",
      logoUrl: "/mikedee.jpg",
      start: "May 2022",
      end: "Aug 2022",
      description:
        "Developed the course's content, supervise other coaches, and personally helped 15+ students 1-on-1 to improve their personal productivity. Helped manage and host events for 130+ international students community on Slack. Main speaker at the graduation ceremony.",
    },
    {
      company: "Transform Your Grades Course",
      href: "https://li.me/",
      badges: ["Remote"],
      location: "Remote",
      title: "Study Coach",
      logoUrl: "/mikedee.jpg",
      start: "Dec 2021",
      end: "Aug 2022",
      description:
        "Helped 5+ students to improve their grades, study habits, and mental health using the course's study techniques.",
    },
    {
      company: "Pho Tuoi",
      href: "https://mitremedia.com/",
      badges: ["Kansas City, MO"],
      location: "Kansas City, MO",
      title: "Waiter",
      logoUrl: "/photuoi.jpg",
      start: "Nov 2021",
      end: "Sep 2022",
      description:
      "\"If your pho too wet, you messed up. If your pho too dry, you also messed up\"\n- Uncle Roger.\nStill the most challenging job I've had, but at least I know how to make Pho now.",
    },
  ],
  education: [
    {
      school: "Stanford University",
      href: "https://www.stanford.edu/",
      degree: "Computer Science, Artificial Intelligence Specialization",
      logoUrl: "/stanford.png",
      start: "2024",
      end: "2028",
      description: "",
    },
    {
      school: "Peterson Academy",
      href: "https://petersonacademy.com/",
      degree: "Learning How to Think",
      logoUrl: "/petersonacademy.png",
      start: "2024",
      end: "2024",
      description: "Intro to Nietzsche: How to Philosophize with a Hammer\nIntroduction to Nutrition\nIntro to Psychology\nThe Greatest Leaders in History: Heroes\nSymbolism in Christianity\nThe Art of Storytelling\nPlato: The Dawn of Thought\nIntro to Neuroscience\nIntelligence, Rationality, Wisdom, Spirituality\nIntro to Cosmology\nThe Psychology of Social Status\nThe Economics of Human Flourishing\nThe History of Western Music\nPost-Modern Philosophy",
    },
    {
      school: "North Kansas City High School",
      href: "https://nkhs.nkcschools.org/",
      degree: "Salutatorian",
      logoUrl: "/northkansascityhighschool.png",
      start: "2020",
      end: "2024",
      description: "GPA: 4.58\nACT: 34\nSAT: 1510\n\nMath Club Founder\nChess Club President\n\nMissouri Scholars 100\nKC Scholars $50,000 Scholarship\nUSGIF High School Certificate\n\nLINC Chess: 2nd place and 5th place in Chess Tournaments of ‘22\nFBLA: 2nd in E-Business Team Event, 2nd in Help Desk, and 5th in IT Introduction\nDECA: 2nd place in Principles of Business Management Administration",
    },
    {
      school: "International Baccalaureate in Computer Science",
      href: "https://ibo.org",
      degree: "IBCP Diploma",
      logoUrl: "/ib.png",
      start: "2020",
      end: "2024",
      description: "Earned the International Baccalaureate Diploma with a focus on higher-level courses in chemistry, mathematics, and computer science.\n\nWrote a research paper and made a machine learning model to predict chess players' elo based on their games in IB Math Analysis & Approaches HL.",
    },
    {
      school: "Northgate Middle School",
      href: "https://uwaterloo.ca",
      degree: "Honor Roll",
      logoUrl: "/waterloo.png",
      start: "2019",
      end: "2020",
      description: "GPA: 4.0\nPrincipal's Honor Roll",
    },
    {
      school: "Trần Đại Nghĩa High School for the Gifted",
      href: "https://wlu.ca",
      degree: "Physics Specialization",
      logoUrl: "/trandainghia.svg",
      start: "2017",
      end: "2019",
      description: "GPA: 2.7",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "Jun 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Congressional App Challenge",
      dates: "November 23rd - 25th, 2018",
      location: "National",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "ElevenLabs AI Hackathon",
      dates: "September 14th - 16th, 2018",
      location: "International",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],  
} as const;
