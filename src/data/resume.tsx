import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Farhan",
  initials: "DV",
  url: "https://github.com/DevFarhanCoder",
  location: "Mumbai",
  description:
    " I thrive on turning complex challenges into user-friendly applications and enjoy making a positive impact through technology.",
  summary:
    "At the mid of 2023, I transitioned from my role as a Software Trainer to fully dedicate myself to building and scaling my own development career.In the past, [I pursued a degree in Masters of Computer Applications](/#education), and [competed in over 11+ hackathons for fun](/#hackathons). Additionally, I've been actively involved in mentoring aspiring developers, sharing my knowledge and passion for technology.",
  avatarUrl: "/Wp dp.jpg",
  skills: [
    "HTML, CSS, JS",
    "PHP, SQL, MongoDB",
    "C, C++, C#",
    "Python",
    "NumPy, Pandas",
    "Matplotlib",
    "Seaborn",
    "Time Series",
    "Asp.net",
    "Kubernetes",
    "React.js",
    "Node.js",
    "Express.js",
    "DSA",
    "Java",
    "Django, Flask",
    "AWS",
    "Bootstrap, tailwindcss",
    "Wordpress, android studio",
    "Vite",
    "Angular, shadcn, magicui",
    "RUST, React Native"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "farhangori89@gmail.com",
    tel: "+91 98679697445",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DevFarhanCoder",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/md-farhan-a77b29229/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "/",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "/",
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
      company: "Data Grid",
      href: "https://datagrid.co.in/",
      badges: [],
      location: "India, Mumbai",
      title: "Lead Full Stack Developer",
      logoUrl: "/DataGrid.svg",
      start: "July 2023",
      end: "Present (1year)",
      description:
        "Oversaw the development of a real-time analytics dashboard using Next.js, GraphQL, and Firebase. Managed a team of developers, conducting regular performance reviews and fostering professional growth. Drove innovation by exploring and integrating emerging technologies.",
    },
    {
      company: "Laqshya Institute",
      badges: [],
      href: "https://www.laqshya.in/index.php",
      location: "India, Mumbai",
      title: "Software Trainer",
      logoUrl: "/Laqshya.jpeg",
      start: "July 2022",
      end: "June 2023",
      description:
        "Developed and delivered comprehensive full stack development training programs, covering HTML, CSS, JavaScript, React, Node.js, and SQL. Provided one-on-one mentoring and code reviews to students, helping them build strong coding skills. Designed curriculum and created instructional materials, including hands-on projects and real-world scenarios. Led workshops and webinars on advanced topics such as cloud computing and DevOps practices.",
    },
    {
      company: "Acture Media",
      href: "https://acturemedia.com/",
      badges: [],
      location: "Mumbai, Vidyavihar",
      title: "Technical Lead and Full Stack Developer",
      logoUrl: "/Acture Media.jpg",
      start: "January 2021",
      end: "June 2022",
      description:
        "Led the development of a cloud-based SaaS application utilizing Vue.js, Express.js, and MySQL. Designed and implemented microservices architecture, improving system scalability and maintainability. Coordinated with cross-functional teams to ensure alignment and timely delivery of projects.",
    },
    {
      company: "LTIMindtree",
      href: "https://www.ltimindtree.com/",
      badges: [],
      location: "Remote",
      title: "Senior Full Stack developer",
      logoUrl: "/LTIMindtree.jpg",
      start: "January 2019",
      end: "December 2020",
      description:
      "Spearheaded the development of a large-scale e-commerce platform using Angular, Node.js, and PostgreSQL. Managed a team of junior developers, providing mentorship and guidance on best practices and coding standards.",
    },
    {
      company: "Pioneer IT Solutions",
      href: "https://www.pioneeroa.com/",
      badges: [],
      location: "India, Mumbai",
      title: "Full Stack Developer",
      logoUrl: "/Pioneer IT.png",
      start: "January 2017",
      end: "December 2018",
      description:
        "Developed and maintained web applications using JavaScript, React, Node.js, and MongoDB. Implemented RESTful APIs and integrated third-party services. Led the migration of legacy code to modern frameworks, improving application performance by 30%. Utilized version control tools (Git) and participated in code reviews to ensure code quality.",
    },
  ],
  education: [
    {
      school: "VJTI College of Engineering",
      href: "https://vjti.ac.in/",
      degree: "Masters of Computer Applications (MCA)",
      logoUrl: "/vjti.png",
      start: "2023",
      end: "2026",
    },
    {
      school: "Shree LR Tiwari College",
      href: "https://slrtdc.in/",
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "/L.R Tiwari.jpeg",
      start: "2019",
      end: "2023",
    },
    {
      school: "Royal College",
      href: "https://royalcollegemiraroad.edu.in/",
      degree: "HSC Computer Science",
      logoUrl: "/Royal College.jpg",
      start: "2017",
      end: "2019",
    },
    {
      school: "St.Haris High School",
      href: "https://st-haris.org/",
      degree: "SSC",
      logoUrl: "/St.Haris.png",
      start: "2016",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "GeminiGPT",
      href: "https://gemini-gpt-ai.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a Chatbot which allows users to collect information and being a geminiGPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "React.js",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://gemini-gpt-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/GeminiGPT Chatbot.mp4",
    },
    {
      title: "YouTube Cloned",
      href: "https://youtube-cloned-2024.vercel.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "A fully functional YouTube clone built with modern web technologies, featuring user authentication, video uploads, and streaming capabilities.  This project showcases my skills in full-stack development",
      technologies: [
        "React.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Vite.js",
        "YouTube API"
      ],
      links: [
        {
          type: "Website",
          href: "https://youtube-cloned-2024.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/DevFarhanCoder/Youtube-",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "YouTube Cloned.mp4",
    },
    {
      title: "Google Cloned",
      href: "https://google-cloned.vercel.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed a fully functional Google clone, featuring real-time search capabilities and a sleek, user-friendly interface. This project demonstrates advanced skills in web development.",
      technologies: [
        "HTML",
        "CSS",
        "JS",
        "MongoDB",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://google-cloned.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/DevFarhanCoder/Google-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "Google Cloned.mp4",
    },
    {
      title: "WeChat",
      href: "https://we-chat-daily.vercel.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        " developed a modern, responsive chatting application using React and Tailwind CSS. The application leverages a robust API to handle real-time messaging and user interactions.",
      technologies: [
        "React.js",
        "API",
        "MongoDB",
        "Vite.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://we-chat-daily.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "WeChat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "India, Mumbai",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "India, Mumbai",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "India, Mumbai",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "India, Mumbai",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "India, Mumbai",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "India, Mumbai",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "India, Mumbai",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "India, Mumbai",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
      ],
    },
    {
      title: "Stupid Hack India",
      dates: "July 23rd, 2017",
      location: "India, Mumbai",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
      ],
    },
    {
      title: "Global AI Hackathon - India",
      dates: "June 23rd - 25th, 2017",
      location: "India, Mumbai",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "India, Mumbai",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    }
  ],
} as const;
