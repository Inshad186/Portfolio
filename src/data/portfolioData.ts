import type{ Project, SkillCategory, ServiceItem } from "../types"

export const PERSONAL_INFO = {
  name: "Shaheedhul Inshad",
  fullName: "Muammed Shaheedhul Inshad PK",
  brandName: "Inshad",
  role: "Full-Stack Developer",
  shortRole: "Junior Full-Stack Developer",
  tagline: "Creative Developer",
  intro: "Welcome to my portfolio",
  headline: "I build responsive, scalable and user-focused web applications using modern JavaScript technologies.",
  subHeadline: "MERN Stack Developer passionate about building real-world applications and solving problems through clean, practical code.",
  about: "I'm a motivated Full-Stack Developer with a background in BCom with Computer Application and a strong interest in web development. I have hands-on experience building full-stack applications using React, Node.js, Express.js, MongoDB, PostgreSQL, Redis, and TypeScript.",
  leetcodeCount: "200+",
  projectsCount: "8+",
  stackText: "MERN Stack",
  learningText: "Always Learning",
  mobile: "+91 9567186543",
  address: "Kannur, Kerala, India",
  socials: {
    github: "https://github.com/Inshad186",
    linkedin: "https://linkedin.com/in/shaheedhulinshadpk",
    leetcode: "https://leetcode.com/u/Inshad186",
    email: "inshadshaheedhul@gmail.com"
  }
};

export const WHAT_I_BRING = [
  {
    title: "Problem Solving",
    description: "I enjoy breaking complex problems into smaller, manageable solutions."
  },
  {
    title: "Full-Stack Thinking",
    description: "I understand both frontend and backend development and how they work together."
  },
  {
    title: "Continuous Learning",
    description: "I'm constantly improving my knowledge through projects, coding practice, and technical study."
  },
  {
    title: "Clean Development",
    description: "I focus on writing readable, maintainable, and practical code."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React.js", "Redux Toolkit", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Socket.IO"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Redis"]
  },
  {
    title: "Tools & Services",
    skills: ["Git", "GitHub", "Postman", "Stripe", "Firebase Auth", "Google OAuth", "Vercel", "Figma", "Docker"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "hirexpert",
    title: "HireXpert",
    category: "Freelancing Marketplace",
    description: "A full-stack freelancing marketplace that connects clients who need work done with freelancers who have the right skills.",
    problem: "The main problem HireXpert solves is the difficulty of connecting clients who need work done with freelancers who have the right skills cleanly and securely.",
    solution: "Built a structured marketplace application handling role segregation, live communication, and end-to-end service purchasing workflows.",
    features: [
      "Freelancer profiles & custom service listings",
      "Advanced service search and filter capabilities",
      "Responsive listing and details view layout",
      "JWT Authentication & Role-Based Access Control",
      "Robust RESTful APIs for client-freelancer actions",
      "Real-time notifications and chat using Socket.IO",
      "Secure online payment handling via Stripe",
      "Complete user and service gig management"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Socket.IO", "Stripe"],
    architectureOverview: "HireXpert uses React on the client coupled with Node.js/Express REST endpoints. JWT tokens validate requests while Socket.IO handles duplex real-time messaging updates.",
    challenges: [
      "Managing real-time status updates across clients and freelancers.",
      "Structuring dynamic roles and access permissions securely on protected routes."
    ],
    whatILearned: [
      "Deep understanding of WebSocket event cycles using Socket.IO.",
      "Handling Stripe webhook verification for processing payments reliably."
    ],
    githubUrl: "https://github.com/Inshad186/HireXpert",
    demoUrl: "https://hirexpert-demo.example.com",
    image: "hirexpert.jpeg"
  },
  {
    id: "examix",
    title: "Examix",
    category: "Online Examination Platform",
    description: "A role-based online examination platform designed to manage students, instructors, authentication, and examination workflows.",
    problem: "Simplifying online exam administration, dynamic question evaluation, and secure access management for multiple educational roles.",
    solution: "Designed a high-performance system leveraging Redis caching alongside Docker containerization for stable backend deployment.",
    features: [
      "Role-based access control (Student & Instructor roles)",
      "Secure JWT authentication with dynamic protected routes",
      "Exam creation, scheduling, and live submission management",
      "User profile management and performance tracking",
      "Optimized RESTful API workflows",
      "Redis integration for fast session and response caching",
      "Dockerized backend environment for seamless deployment"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js", "MongoDB", "Redis", "JWT", "Docker"],
    architectureOverview: "Built with a containerized Node.js backend using Redis for cached query handling to drastically reduce response times for active examination sessions.",
    challenges: [
      "Ensuring exam timer synchronization and accurate payload submission.",
      "Configuring multi-container Docker environments for seamless localized deployment."
    ],
    whatILearned: [
      "Containerizing Node/Express micro-services with Docker.",
      "Caching strategies using Redis for volatile transactional data."
    ],
    githubUrl: "https://github.com/Inshad186/Role_Base_Auth",
    demoUrl: "https://examix-demo.example.com",
    image: "examix.png"
  },
  {
    id: "stinson",
    title: "Stinson",
    category: "E-Commerce Platform",
    description: "A full-stack e-commerce application with product management, shopping features, payments, wishlist functionality, coupons, and wallet management.",
    problem: "Providing a complete consumer shopping experience with flexible checkout and promotional mechanisms.",
    solution: "Engineered a features-rich backend handling dynamic coupon calculations, user wallet ledgers, and seamless Razorpay integration.",
    features: [
      "Comprehensive product catalog and detail pages",
      "Shopping cart, wishlist, and active order workflows",
      "Coupon code dynamic discount calculation engine",
      "In-app wallet balance tracking and top-ups",
      "Razorpay payment gateway integration",
      "Full administrative dashboard for catalog management"
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay", "JavaScript"],
    architectureOverview: "Modular REST architecture consuming structured MongoDB collections to execute standard e-commerce state changes securely.",
    challenges: [
      "Maintaining state synchronization between shopping cart and wallet balances.",
      "Handling edge cases with transaction rollbacks during payment failures."
    ],
    whatILearned: [
      "Integrating Razorpay payment flow on both client and server sides.",
      "Designing complex database models for orders, coupons, and transaction histories."
    ],
    githubUrl: "https://github.com/Inshad186/Stinson-Ecommerce",
    demoUrl: "https://stinson-demo.example.com",
    image: "stinson.jpeg"
  }
];

export const WHAT_I_DO: ServiceItem[] = [
  {
    title: "Frontend Development",
    description: "Build responsive and interactive interfaces using React, TypeScript, Tailwind CSS, and modern frontend practices."
  },
  {
    title: "Backend Development",
    description: "Build REST APIs and scalable backend services using Node.js and Express.js."
  },
  {
    title: "Database Development",
    description: "Work with MongoDB, PostgreSQL, Redis, and Mongoose for schema architecture and efficient data retrieval."
  },
  {
    title: "Authentication & Security",
    description: "Implement JWT authentication, role-based authorization, protected routes, Firebase Authentication, and OAuth."
  },
  {
    title: "Real-Time Applications",
    description: "Build real-time events and dynamic dynamic chat/notification features using Socket.IO."
  },
  {
    title: "Payment Integration",
    description: "Work with secure online payment gateways such as Stripe and Razorpay."
  }
];