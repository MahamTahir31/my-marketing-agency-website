export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  color: string; // Google color accent
  badgeColor: string;
  features: string[];
  deliverables: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'all' | 'content' | 'visuals' | 'management' | 'strategy';
  categoryLabel: string;
  image: string;
  accentColor: string;
  metrics: { label: string; value: string }[];
  summary: string;
  tags: string[];
  role: string;
  period: string;
  location: string;
}

export const BIO_DATA = {
  name: "Maham Tahir",
  role: "Marketing Strategist & Community Manager",
  tagline: "Results-driven Marketing Strategist with a Computer Science background.",
  experienceYears: 3,
  email: "mahamst31@gmail.com",
  phone: "+92 331 2178313",
  location: "Karachi, Pakistan",
  about: `Results-driven Marketing Strategist and Community Manager with a background in Computer Science from University of Karachi (UBIT). Proven track record of growing social media audiences by up to 95%, authoring high-converting content, designing scroll-stopping social media visuals, and managing end-to-end event marketing for tech communities and global B2B/B2C brands across Sweden, Saudi Arabia, and Pakistan.`,
  stats: [
    { label: "Community Growth", value: 95, prefix: "", suffix: "%" },
    { label: "Event Reach Growth", value: 70, prefix: "", suffix: "%" },
    { label: "Published Articles", value: 50, prefix: "", suffix: "+" },
    { label: "Follower Increase", value: 65, prefix: "", suffix: "%" }
  ],
  education: {
    degree: "Bachelors in Computer Science",
    institution: "UBIT - University of Karachi",
    period: "12/2020 – 12/2024",
    location: "Karachi, Pakistan"
  },
  awards: [
    {
      title: "Google Quiz Winner 2023",
      detail: "Won quiz competition on Google technologies at Devfest Sindh 2023."
    },
    {
      title: "Merit-Based Scholarship",
      detail: "Awarded 75% scholarship for outstanding academic performance at UBIT."
    }
  ],
  certificates: [
    { name: "Strategic Content Marketing", issuer: "LinkedIn Learning" },
    { name: "Content Writing", issuer: "Online Course by Anik Singal" },
    { name: "English Language", issuer: "Delhi English Language Center" }
  ],
  skills: [
    { name: "Community Building & Growth", level: "95%", category: "strategy", color: "#4285F4" },
    { name: "Event & Campaign Marketing", level: "92%", category: "strategy", color: "#EA4335" },
    { name: "Technical & Content Copywriting", level: "94%", category: "content", color: "#FBBC05" },
    { name: "Social Media Strategy & Visuals", level: "92%", category: "visuals", color: "#34A853" },
    { name: "Newsletter & Content Funnels", level: "88%", category: "management", color: "#4285F4" },
    { name: "AI & Prompt Engineering (ChatGPT, Claude)", level: "92%", category: "content", color: "#EA4335" },
    { name: "Analytics (Google Analytics, Meta Suite)", level: "89%", category: "management", color: "#34A853" }
  ],
  tools: [
    "Mailchimp",
    "Google Analytics",
    "Meta Business Suite",
    "Canva",
    "Trello",
    "Notion",
    "Discord",
    "Slack",
    "ChatGPT",
    "Claude",
    "Jasper.ai",
    "Midjourney"
  ]
};

export const SERVICES_DATA: Service[] = [
  {
    id: "content-writing",
    title: "Content Writing",
    shortDesc: "Technical writing, persuasive copywriting, weekly newsletter strategy, and 50+ published articles.",
    fullDesc: "Words drive engagement and trust. Drawing from technical writing experience across SaaS and international brands, I craft compelling newsletters, published articles, and high-converting social media copy.",
    iconName: "PenTool",
    color: "#4285F4", // Google Blue
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    features: [
      "Technical & Educational Article Writing (50+ Published)",
      "Weekly Newsletter Strategy & Authoring (Ahsync Bytes)",
      "High-Converting Social Media Captions & Copywriting",
      "AI-Assisted Prompt Engineering Content (ChatGPT, Claude)",
      "Inbound & Outbound Content Funnel Copy"
    ],
    deliverables: [
      "Weekly Newsletter Drafts & Campaigns",
      "SEO Articles & Blog Posts",
      "Social Media Campaign Copy",
      "Technical Documentation & Guides"
    ]
  },
  {
    id: "visual-design",
    title: "Social Media Visuals Designing",
    shortDesc: "High-engagement social media visual graphics, carousel posts, event banners, and promotional assets.",
    fullDesc: "Visually striking content holds user attention. I design scroll-stopping promotional banners, carousel graphics, and social media post visuals tailored for LinkedIn, Instagram, and Facebook campaigns.",
    iconName: "Palette",
    color: "#EA4335", // Google Red
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
    features: [
      "Educational & Promotional Carousel Graphics (Canva)",
      "Multi-Channel Event Promotional Banners",
      "Custom Social Media Feed & Story Templates",
      "AI Graphic Generation & Prompt Curation (Midjourney)",
      "Brand Identity & Visual Asset Curation"
    ],
    deliverables: [
      "Event Banners & Headers",
      "Social Media Carousel Decks",
      "Promotional Graphic Assets",
      "Canva Asset Templates"
    ]
  },
  {
    id: "social-management",
    title: "Social Media Management",
    shortDesc: "End-to-end community building, event hosting, and multi-channel audience growth up to 95%.",
    fullDesc: "Consistent channel management creates organic growth. I handle multi-platform publishing, live online event hosting, Discord/Slack community care, and Meta & Google Analytics reporting.",
    iconName: "Share2",
    color: "#34A853", // Google Green
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    features: [
      "Multi-Channel Publishing (LinkedIn, Instagram, Facebook)",
      "Live Online Event Hosting & Community Facilitation",
      "Discord, Slack & Social Community Care",
      "Meta Business Suite & Mailchimp Automation",
      "Analytics & Growth Metric Reporting"
    ],
    deliverables: [
      "Monthly Content & Event Calendar",
      "Community Growth & Sentiment Reports",
      "Social Channel Audit & Scheduling",
      "Live Event Coordination Playbook"
    ]
  },
  {
    id: "marketing-strategy",
    title: "Marketing Strategist",
    shortDesc: "Data-backed marketing roadmaps for events, workshops, hackathons, and growth campaigns.",
    fullDesc: "Strategic event and growth marketing that delivers measurable results. I spearhead comprehensive marketing strategies that boost audience reach by up to 70% and expand community footprints.",
    iconName: "TrendingUp",
    color: "#FBBC05", // Google Yellow
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    features: [
      "End-to-End Event Marketing for Workshops & Hackathons",
      "Data-Driven Growth & Audience Reach Optimization",
      "B2B & B2C Multi-Channel Campaign Architecture",
      "Google & Meta Campaign Analytics & Insights",
      "Growth Marketing Strategy & Persona Mapping"
    ],
    deliverables: [
      "Comprehensive Event Marketing Roadmap",
      "Audience Growth Strategy Document",
      "Multi-Channel Campaign Blueprint",
      "Performance & ROI Benchmarking Report"
    ]
  }
];

export const REAL_PORTFOLIO_EXPERIENCE: PortfolioItem[] = [
  {
    id: "visionwise-ab",
    title: "Visionwise AB — Content Strategist & Community Manager",
    client: "Visionwise AB (Stockholm, Sweden / Remote)",
    role: "Content Strategist & Community Manager",
    period: "05/2025 – Present",
    location: "Stockholm, Sweden (Remote)",
    category: "strategy",
    categoryLabel: "Strategy & Community",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    accentColor: "#4285F4",
    metrics: [
      { label: "Community Growth", value: "+95%" },
      { label: "Brands Managed", value: "2 Major" },
      { label: "Weekly Newsletter", value: "Ahsync Bytes" }
    ],
    summary: "Developed and executed comprehensive marketing strategies for events, workshops, and hackathons across two major brands (Code with Ahsan & Ahsync Bytes). Grew social media audience and community size by 95% through targeted engagement campaigns. Host live online events and author a highly-engaged weekly newsletter.",
    tags: ["Community Building", "Content Strategy", "Event Marketing", "Newsletter Strategy", "Code with Ahsan", "Ahsync Bytes"]
  },
  {
    id: "social-media-visuals",
    title: "Social Media Visuals & Brand Design",
    client: "Lady Evelyn & Visionwise AB",
    role: "Social Media Visuals & Brand Designer",
    period: "10/2023 – Present",
    location: "Remote (Sweden & Saudi Arabia)",
    category: "visuals",
    categoryLabel: "Social Media Visuals",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    accentColor: "#EA4335",
    metrics: [
      { label: "Visual Posts & Banners", value: "100+" },
      { label: "Community Reach", value: "+95%" },
      { label: "Carousel Templates", value: "30+" }
    ],
    summary: "Designed high-converting social media visual graphics, educational carousel decks, promotional event banners, and brand visual templates across campaigns for Lady Evelyn and Visionwise AB (Code with Ahsan & Ahsync Bytes).",
    tags: ["Social Media Visuals", "Carousel Graphics", "Event Banners", "Canva", "Midjourney", "Brand Design"]
  },
  {
    id: "gdgoc-uok",
    title: "GDGOC UOK — Marketing Lead",
    client: "GDGOC - UOK (Google Developer Groups On Campus)",
    role: "Marketing Lead",
    period: "10/2024 – 09/2025",
    location: "Karachi, Pakistan",
    category: "management",
    categoryLabel: "Event & Social Management",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    accentColor: "#34A853",
    metrics: [
      { label: "Audience Reach Boost", value: "+70%" },
      { label: "Channels Managed", value: "3 Platforms" },
      { label: "Campaign Impact", value: "Tech Events" }
    ],
    summary: "Spearheaded multi-channel event marketing campaigns across LinkedIn, Instagram, and Facebook. Boosted audience reach and engagement by up to 70% through data-driven content and promotional strategies for developer workshops and events.",
    tags: ["Event Marketing", "GDGOC UOK", "Social Media Management", "Growth Marketing", "Tech Community"]
  },
  {
    id: "lady-evelyn",
    title: "Lady Evelyn — Content Writer & Marketing Strategist",
    client: "Lady Evelyn (Makkah, Saudi Arabia / Remote)",
    role: "Content Writer & Marketing Strategist",
    period: "10/2023 – 10/2024",
    location: "Makkah, Saudi Arabia (Remote)",
    category: "content",
    categoryLabel: "Content Writing & Strategy",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
    accentColor: "#FBBC05",
    metrics: [
      { label: "Articles Authored", value: "50+ Authored" },
      { label: "Followers Increase", value: "+65%" },
      { label: "Campaign Conversion", value: "High Growth" }
    ],
    summary: "Authored and published 50+ articles while designing high-converting social media campaigns across various platforms. Drove a 65% increase in social media followers through targeted content strategies and engaging copywriting.",
    tags: ["Content Writing", "Copywriting", "Published Articles", "Social Campaigns", "Audience Growth"]
  }
];
