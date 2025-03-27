const emoji = {
  mic: "\u{1F399}",
  rocket: "\u{1F680}",
  wavyHand: "\u{1F44B}",
  achiever: "\u{1F397}",
  telContact: "\u{260E}",
  smileyTears: "\u{1F605}",
  goldenThunder: "\u{26A1}",
}

const greeting = {
  username: "Collins Maduka",
  title: "Hi all, I'm Collins",
  subTitle:
    `A Results Driven Software Developer ${emoji.rocket} with an hands-on experience in Web and Mobile applications development using JavaScript / Typescript / Reactjs / NextJS / Java / Nodejs / SpringBoot / React Native / Tailwindcss and some other auxiliary libraries and frameworks.`,
  resumeLink:
    "https://docs.google.com/document/d/1V5Lxce9TWOL3-jUiVddIYPlH6m27NfgD_VgmljQTRHE/edit?tab=t.0",
};

const socialMediaLinks = {
  github: "https://github.com/codeblizz",
  linkedin: "https://www.linkedin.com/in/collinsuba/",
  gmail: "collins.maduka.dev@gmail.com",
  gitlab: "https://gitlab.com/codeblizz",
  facebook: "https://www.facebook.com/collins",
  medium: "https://medium.com/@codeblizz",
  stackoverflow: "https://stackoverflow.com/users/10422806/collins",
  instagram: "",
  twitter: "",
};

const skillsSection = {
  sectionTitle: "SKILLS",
  title: "What I do",
  subTitle:
    "Results driven Software Engineer with over 8 years of experience in designing, delivering, and optimizing scalable, high-performance systems.",
  responsibilities: [
    "Design and develop scalable and efficient backend and frontend systems using Node.js, Express.js, React.js, and Next.js, with TypeScript for type safety and improved code maintainability.",
    "Design database schemas, querying data, and optimizing database performance using MongoDB and Mongoose ORM for schema validation and data modeling.",
    "Design, implement and deploy microservices-based architectures using Docker and Kubernetes for improved scalability, maintainability, and fault isolation.",
    "Configure and manage load balancers such as Nginx to distribute incoming traffic across multiple services for improved performance, reliability, and scalability.",
    "Implement security best practices such as authentication, authorization, data encryption, and HTTPS communication to ensure the security of the application and protect sensitive data.",
  ],
  skills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "javaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fab fa-ts",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "expressjs",
      fontAwesomeClassname: "fab fa-express",
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-next",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fab fa-mongodb",
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "fab fa-mysql",
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fab fa-postgresql",
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "redis",
      fontAwesomeClassname: "fab fa-redis",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fab fa-k8s",
    },
  ],
};

const educationInfo = {
  viewEducation: true,
  schools: [
    {
      logo: "/assets/images/niit.webp",
      subHeader: "Certification in Java",
      duration: "September 209 - April 2011",
      schoolName: "NIIT - National Institute of Information Technology",
      desc: "Academic journey through core Java, J2EE, J2SE, J2ME, Struts, JSP, JSF, Java Security and developed and deployed a scalable Online Library Web Application.",
      descBullets: [],
    },
    {
      logo: "/assets/images/futo.webp",
      duration: "September 2003 - April 2008",
      subHeader: "Bachelor of Engineering in Chemical Engineering",
      schoolName: "FUTO - Federal University of Technology Owerri, Imo State",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [],
    },
  ],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "99.9%",
    },
    {
      Stack: "Backend",
      progressPercentage: "99.9%",
    },
    {
      Stack: "Programming DSA",
      progressPercentage: "99.9%",
    },
  ],
};

const navbarList = [
  { name: "skills", url: "#skills", label: "Skills" },
  { name: "experience", url: "#experience", label: "Experience" },
  { name: "opensource", url: "#opensource", label: "Open-Source" },
  // { name: "achievements", url: "#achievements", label: "Achievements" },
  // { name: "blogs", url: "#blogs", label: "Blogs" },
  // { name: "talks", url: "#talks", label: "Talks" },
  { name: "contact", url: "#contact", label: "Contact" },
];

const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Built Circle",
      companyLogo: "/assets/images/freelance.webp",
      date: "February 2024 – Present",
      desc: "",
      descBullets: [],
    },
    {
      role: "Software Engineer",
      company: "Al-Ghurair Investments",
      companyLogo: "/assets/images/alghurair.webp",
      date: "October 2022 – February 2024",
      desc: "",
      descBullets: [],
    },
    {
      role: "Software Engineer",
      company: "Hoxton Capital Management",
      companyLogo: "/assets/images/hoxton.webp",
      date: "October 2021 – October 2022",
      desc: "",
      descBullets: [],
    },
    {
      role: "Full Stack Developer",
      company: "TPConnect Technologies",
      companyLogo: "/assets/images/tpconnect.webp",
      date: "September 2020 – September 2021",
      desc: "",
      descBullets: [],
    },
    {
      role: "Full Stack Developer",
      company: "Mere Systems",
      companyLogo: "/assets/images/freelance.webp",
      date: "April 2020 – August 2020",
      desc: "",
      descBullets: [],
    },
    {
      role: "Full Stack Developer",
      company: "Freelance - Meal Search App",
      companyLogo: "/assets/images/freelance.webp",
      date: "May 2019 – May 2020",
      desc: "",
      descBullets: [],
    },
    {
      role: "Full Stack Developer",
      company: "Freelance - Vehicle Rental Service",
      companyLogo: "/assets/images/freelance.webp",
      date: "May 2017 – May 2018",
      desc: "",
      descBullets: [],
    },
    {
      role: "Full Stack Engineer",
      company: "TV360 Nigeria",
      companyLogo: "/assets/images/tv360.webp",
      date: "March 2015 – April 2017",
      desc: "",
      descBullets: [],
    },
  ],
};

const openSource = {
  githubConvertedToken: process.env.PORTFOLIO_GITHUB_TOKEN,
  githubUserName: "codeblizz",
  showGithubProfile: true,
};

const bigProjects = {
  title: "Live Project Hub",
  subtitle: "",
  projects: [
    {
      image: "/assets/images/hxt-login.webp",
      link: "https://login.hoxtonclientportal.com/",
    },
    {
      image: "/assets/images/hxt-dboard.webp",
      link: "https://login.hoxtonclientportal.com/",
    },
    {
      image: "/assets/images/hxt-main.webp",
      link: "https://login.hoxtonclientportal.com/",
    },
    {
      image: "/assets/images/hxt-dboard.webp",
      link: "https://login.hoxtonclientportal.com/",
    },
    {
      image: "/assets/images/aircairo1.webp",
      link: "https://login.hoxtonclientportal.com/",
    },
    {
      image: "/assets/images/aircairo2.webp",
      link: "https://login.hoxtonclientportal.com/",
    },
    {
      image: "/assets/images/eastern1.webp",
      link: "https://login.hoxtonclientportal.com/",
    },
    {
      image: "/assets/images/eastern2.webp",
      link: "https://login.hoxtonclientportal.com/",
    },
    {
      image: "/assets/images/saudi1.webp",
      link: "https://login.hoxtonclientportal.com/",
    },
  ],
};

const achievementSection = {
  title: `Achievements And Certifications ${emoji.achiever}`,
  subtitle: "Achievements, Certifications, and Award Letters!",
  achievementsCards: [
    {
      title: "",
      image: "/assets/images/code.webp",
      subtitle:
        "",
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Medium Article",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant",
      image: "/assets/images/googleAssist.webp",
      subtitle:
        "Developed a Google Assistant JavaScript Guru that is available on 2 Billion devices world wide.",
      footerLink: [
        {
          name: "View Google Assistant",
          url: "",
        },
      ],
    },
    {
      title: "DevPost App Developer",
      image: "/assets/images/dev_post.webp",
      subtitle: "Completed Certification from DevPost App Development",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
};

const blogSection = {
  title: "Blogs",
  subtitle: "",
  blogs: [
    {
      url: "",
      title: "",
      image: "",
      description: "",
    },
    {
      url: "",
      title: "",
      image: "",
      description: "",
    },
  ],
};

const talkSection = {
  title: "Talks",
  subtitle: `I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE ${emoji.smileyTears}`,
  talks: [
    {
      image: "",
      title: "Build Actions For Google Assistant",
      subtitle: "Hackerthon at DevPost 2025",
      slides_url: "",
      event_url: "",
    },
  ],
};

const contactInfo = {
  number: "+971-552825364",
  title: `Contact Me ${emoji.telContact}`,
  email_address: "codeblizzen@gmail.com",
  subtitle: "Whether it’s a collaboration idea or a friendly hello, I’d love to hear from you. Let’s connect!",
};

const twitterDetails = {
  userName: "@_codeblizz",
};

export {
  emoji,
  greeting,
  techStack,
  navbarList,
  openSource,
  bigProjects,
  blogSection,
  talkSection,
  contactInfo,
  skillsSection,
  educationInfo,
  twitterDetails,
  workExperiences,
  socialMediaLinks,
  achievementSection,
};
