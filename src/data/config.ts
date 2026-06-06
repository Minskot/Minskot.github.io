export interface SocialLinks {
  github?: string;
  email?: string;
  linkedin?: string;
  googleScholar?: string;
  RedNote?: string;
  zhiHu?: string;
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  period: string;
  gpa?: string;
  courses?: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  github?: string;
  year?: string;
}

export interface Publication {
  title: string;
  authors: string[];
  conference: string;
  year: string;
  link?: string;
  code?: string;
  pdf?: string;
}

export interface Resource {
  title: string;
  description: string;
  category: string;
  link: string;
  embedPdf?: boolean;
}

export interface Award {
  title: string;
  date: string;
  awarder: string;
}

export interface NewsItem {
  date: string;
  content: string;
}

export interface SkillCategory {
  name: string;
  skills: Array<{
    name: string;
    level: number; // 0-100
  }>;
}

export interface SiteConfig {
  name: string;
  title: string;
  avatar: string;
  bio: string;
  bioExtended: string;
  location: string;
  workingEmail: string;
  email: string;
  social: SocialLinks;
  education: Education[];
  publications: Publication[];
  projects: Project[];
  resources: Resource[];
  awards: Award[];
  skills: SkillCategory[];
  news: NewsItem[];
}

export const siteConfig: SiteConfig = {
  // ============================================
  // Basic Info
  // ============================================
  name: "Peihang WU 吴沛航",
  title: "B.Sc. Student in Computer Science @ The Hong Kong Polytechnic University",
  avatar: "/avatar.jpg",
  location: "Hong Kong SAR",
  workingEmail: "24108869d@connect.polyu.hk",
  email: " m858126435@gmail.com",

  // ============================================
  // Bio
  // ============================================
  bio: "I am a sophomore at the Hong Kong Polytechnic University majoring in Computer Science. I am currently commited to Java Learning and motivated by 408 subjects.",

  bioExtended: "My recent work includes java and python programming about algorithms and web programming. Now I am also planning to learn AI related courses like machine learning and computer vision",

  // ============================================
  // Social Links
  // ============================================
  social: {
    email: "m858126435@gmail.com",
    googleScholar: "",
    RedNote: "https://www.xiaohongshu.com/user/profile/66c30690000000001d023274",
  },

  // ============================================
  // Education
  // ============================================
  education: [
    {
      school: "The Hong Kong Polytechnic University",
      degree: "Bachelor of Science",
      major: "Computer Science",
      period: "Sep 2024 - Expected Jun 2028",
      gpa: "3.3/4.3",
      courses: [
        "Database Systems(A-)",
        "Operating Systems(A-)",
        "Computer Organization(A-)",
        "Data Structure(B+)",
        "Computer Networking(B+)",
        "INtroductory Statistics(B+)",
        "Introductory Stastics for business(A)",
        
      ],
      logo: "/polyu_logo.jpg",
    },
  ],

  // ============================================
  // Publications
  // ============================================
  publications: [
    {
      title: "An Integrated Framework for Real-Time Sensor Data Aggregation and Adaptive Buffer Management in Concurrent Systems",
      authors: ["Shizhiyuan Lin"],
      conference: "Advanced Concurrency, Buffering, and Web-Sync in Sensor Platforms",
      year: "2026",
    },
  ],

  // ============================================
  // Projects
  // ============================================
  projects: [
    /*
    {
      title: "RL Quadruped Robot Soccer (Deep Robotics Lite3)",
      description:
        "Adapted and extended the Unitree reinforcement learning framework for dynamic soccer tracking and kicking. Designed task-specific rewards and integrated proprioceptive and visual observations, then deployed and tuned the policy on a physical quadruped to reduce the sim-to-real gap.",
      image: "/projectRL.png",
      tags: ["Reinforcement Learning", "Sim-to-Real", "Embodied AI", "Quadruped Robot"],
      year: "2025",
    },
    {
      title: "Multi-modal Quant System via LLM & GAT",
      description:
        "Engineered a temporal heterogeneous graph attention model and a multimodal gated cross-attention module to align LLM-derived semantic embeddings with structural graph features. Proposed popularity-aware attention to improve feature fusion robustness.",
      image: "/ProjectGNN.png",
      tags: ["PyTorch", "Graph Neural Networks", "Multimodal Learning", "Quant Modeling"],
      year: "2025",
    },
    {
      title: "Bimodal Biomimetic Soft Underwater Robot",
      description:
        "Developed an untethered underwater robot with dual propulsion modes and implemented low-level embedded control on STM32. Built high-frequency Linux-based data acquisition and transmission for IMU posture tracking and visual logging.",
      image: "/ProjectFin.png",
      tags: ["STM32", "Embedded Control", "Linux", "Bio-inspired Robotics"],
      year: "2024",
    },
    */
  ],

  // ============================================
  // Resources
  // ============================================
  resources: [
    // TEMP_RESOURCES_ONLY_START
    // restore by uncommenting this item when enabling paper reading again
    // {
    //   title: "Paper Reading Log (Notion)",
    //   description: "Paper reading records, summaries, and an actively maintained to-read queue.",
    //   category: "Research",
    //   link: "https://canyon-seashore-d2e.notion.site/Paper-Reading-2b4d90efab6f80d39816d1b692d9be0d?source=copy_link",
    // },
    // TEMP_RESOURCES_ONLY_END
    
    
    /*
    {
      title: "Coursework Portal",
      description: "Navigate to Calculus II and Electrical Engineering notes with in-page PDF reading.",
      category: "Coursework",
      link: "/coursework",
    },
    {
      title: "CS231n Coursework: Code + Notes",
      description: "Code implementations and study notes for Stanford CS231n, including assignment practice and a full course summary PDF.",
      category: "Coursework",
      link: "/resources/cs231n",
    },
    */

  ],

  // ============================================
  // Awards (New)
  // ============================================
  awards: [
    /*
    {
      title: "Provincial Government Scholarship",
      date: "2025",
      awarder: "Zhejiang Provincial Government",
    },
    {
      title: "University Second-Class Scholarship",
      date: "2025",
      awarder: "Zhejiang University",
    },
    {
      title: "Second Prize, Provincial Mathematics Competition",
      date: "2025",
      awarder: "Provincial Mathematics Competition Committee",
    },
    {
      title: "First Prize, ZJU Mathematical Modeling Competition",
      date: "2025",
      awarder: "Zhejiang University",
    },
    {
      title: "Third Prize, Provincial Mathematics Competition",
      date: "2024.11",
      awarder: "Provincial Mathematics Competition Committee",
    },
    {
      title: "First Prize, ZJU Swimming Relay",
      date: "2024.11",
      awarder: "Zhejiang University",
    },
    */

  ],

  // ============================================
  // Skills
  // ============================================

  skills: [
    {
      name: "Programming",
      skills: [
        { name: "Java", level: 90 },
        { name: "python", level: 80 },
        { name: "C++", level: 75 },
        
      ],
    },
    /*
    {
      name: "AI & Algorithms",
      skills: [
        { name: "PyTorch", level: 88 },
        { name: "PyTorch Geometric", level: 82 },
        { name: "Reinforcement Learning", level: 85 },
        { name: "Graph Neural Networks", level: 84 },
        { name: "CV & NLP Fundamentals", level: 78 },
      ],
    },
    {
      name: "Systems & Workflows",
      skills: [
        { name: "Linux", level: 86 },
        { name: "Git", level: 87 },
        { name: "Docker", level: 78 },
        { name: "STM32", level: 85 },
        { name: "LaTeX", level: 88 },
        { name: "Typst", level: 74 },
        { name: "AI-Assisted Development", level: 82 },
      ],
    }, */
  ],
  



  // ============================================
  // News
  // ============================================
  news: [
    /*
    {
      date: "Dec 2025",
      content: "Started RL quadruped robot soccer research, focusing on sim-to-real control deployment.",
    },
    {
      date: "2025",
      content: "Completed a multimodal quant research project combining LLM representations with graph attention networks.",
    },
    */
    {
      date: "Sep 2025",
      content: "Selected into the Computer Science major",
    },
   
    
    {
      date: "Sep 2024",
      content: "Entered the Hong Kong Polytechnic University, majoring in Computing & AI Category.",
    },
  ],
  
};
