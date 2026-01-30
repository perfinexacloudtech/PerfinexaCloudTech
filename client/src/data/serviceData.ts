import {
  Layers,
  Smartphone,
  Monitor,
  Cloud,
  BarChart,
  Cpu,
  Puzzle,
  Shield,
  Terminal,
  Code,
  Database,
  Server,
  Globe,
  Sparkles,
  Brain,
  Target,
  Megaphone
} from "lucide-react";

export const servicesData = {


  "salesforce-development-services": {
    meta: {
      title: "Salesforce Development Company | Custom Salesforce Services",
      description:
        "Salesforce development company providing CRM customization, integration, automation, and enterprise Salesforce solutions."
    },
    icon: { icon: Database },

    hero: {
      tag: "Enterprise CRM Solutions",
      title: "Salesforce Development Services",
      description:
        "We help businesses customize and scale Salesforce CRM using automation, integrations, and enterprise-grade development.",
      image:
        "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=80",
      stat: { label: "Sales Productivity", value: "+45%" }
    },

    intro: {
      title: "Expert Salesforce Development Company",
      subtitle: "Custom CRM solutions built for growth",
      description:
        "As a trusted Salesforce development company, we design, customize, and implement Salesforce solutions aligned with your sales, marketing, and service workflows."
    },

    benefits: [
      { icon: Layers, title: "Custom Salesforce CRM", desc: "Tailored Salesforce development for your business processes." },
      { icon: Cpu, title: "Workflow Automation", desc: "Reduce manual work with Salesforce automation." },
      { icon: Shield, title: "Secure & Scalable", desc: "Enterprise-grade Salesforce security and scalability." }
    ],

  deliverables: [
  {
    title: "Salesforce Customization",
    desc: [
      "Develop custom Salesforce solutions using Apex and Lightning components",
      "Automate workflows with Salesforce flows",
      "Enhance user interfaces for better experience",
      "Optimize CRM for performance and efficiency"
    ]
  },
  {
    title: "Salesforce Integration",
    desc: [
      "Integrate Salesforce with ERP systems and third-party applications",
      "Connect payment gateways and external tools",
      "Automate data synchronization across platforms",
      "Ensure secure, seamless, and scalable integrations"
    ]
  },
  {
    title: "CRM Migration",
   desc: [
      "Migrate legacy CRM data to Salesforce without data loss",
      "Map and transform data accurately for new CRM structure",
      "Minimize downtime during transition",
      "Improve CRM features and reporting for better business insights"
    ]
  }
]
,

timeline: [
  {
    year: "Discover",
    title: "Requirement Analysis",
    desc: "We engage with stakeholders to fully understand business goals, workflows, and challenges. This process converts needs into precise CRM requirements, priorities, and measurable objectives for future success."
  },
  {
    year: "Design",
    title: "CRM Architecture",
    desc: "We design a robust Salesforce architecture including data models, user roles, UX flows, and security measures. The design ensures scalability, performance, governance, and efficient reporting across all teams."
  },
  {
    year: "Develop",
    title: "Salesforce Development",
    desc: "We develop Salesforce solutions with custom objects, automated flows, Apex coding, and third-party integrations. Each component follows best practices to ensure reliability, security, and maintainability for business operations."
  },
  {
    year: "Deploy",
    title: "Launch & Support",
    desc: "We deploy solutions through testing, production release, and user training. Ongoing support, monitoring, and optimization ensure smooth adoption, long-term efficiency, and measurable value for the organization."
  }
]


,

  techStack: [
  { name: "Salesforce Apex", icon: Code },
  { name: "Lightning Web Components (LWC)", icon: Cpu },
  { name: "Salesforce Flow", icon: Layers },
  { name: "Salesforce Agentforce", icon: Sparkles },
  { name: "JavaScript", icon: Code },
  { name: "Salesforce Administration", icon: Shield },
  { name: "SOQL & SOSL", icon: Server }
]
  },

  "software-development-services": {
    meta: {
      title: "Software Development Company | Custom & Enterprise Solutions",
      description:
        "Software development company delivering scalable, secure, and high-performance custom software solutions."
    },
    icon: { icon: Server },

    hero: {
      tag: "Engineering Growth",
      title: "Software Development Services",
      description:
        "We build scalable and secure software solutions that help businesses innovate and grow faster.",
      image:
        "https://images.unsplash.com/photo-1581091215367-59ab6c95d3a7?auto=format&fit=crop&w=800&q=80",
      stat: { label: "Business Efficiency", value: "+55%" }
    },

    intro: {
      title: "Custom Software Development Company",
      subtitle: "Built for performance and scale",
      description:
        "Our software development services help startups and enterprises build future-ready applications with modern architecture."
    },

    benefits: [
      { icon: Layers, title: "Scalable Architecture", desc: "Software designed to grow with your business." },
      { icon: Shield, title: "Secure Development", desc: "Security-first coding practices." },
      { icon: Cpu, title: "High Performance", desc: "Optimized for speed and reliability." }
    ],

     deliverables: [
    {
      title: "Enterprise Software",
      desc: [
        "Design and develop large-scale business applications tailored to your organization's needs",
        "Implement secure, high-performance backend and frontend systems",
        "Ensure scalability, maintainability, and reliability across enterprise operations",
        "Integrate with existing tools and systems for seamless workflows"
      ]
    },
    {
      title: "SaaS Development",
      desc: [
        "Build subscription-based platforms with cloud scalability and multi-tenant architecture",
        "Create intuitive user interfaces and seamless onboarding for customers",
        "Automate billing, notifications, and user management",
        "Ensure data security, compliance, and high availability for SaaS products"
      ]
    },
    {
      title: "API Development",
      desc: [
        "Develop robust backend services for web, mobile, and desktop applications",
        "Design RESTful and GraphQL APIs for seamless integration",
        "Implement authentication, logging, and performance optimization",
        "Provide documentation and support for third-party and internal integrations"
      ]
    }
  ],

  timeline: [
    {
      year: "Discover",
      title: "Planning",
      desc: [
        "Conduct requirement gathering sessions with stakeholders",
        "Define project scope, goals, and success criteria",
        "Analyze business processes and technical constraints",
        "Create a roadmap for development and delivery"
      ]
    },
    {
      year: "Design",
      title: "System Design",
      desc: [
        "Architect software systems for scalability, security, and maintainability",
        "Design UX/UI that is intuitive and user-friendly",
        "Prepare data models, workflows, and integration plans",
        "Validate design decisions with stakeholders and technical team"
      ]
    },
    {
      year: "Develop",
      title: "Development",
      desc: [
        "Execute agile sprints to build features iteratively",
        "Implement code standards, testing, and CI/CD pipelines",
        "Integrate APIs, third-party services, and internal modules",
        "Conduct regular reviews, debugging, and performance optimization"
      ]
    },
    {
      year: "Deploy",
      title: "Launch",
      desc: [
        "Deploy software to production with minimal downtime",
        "Conduct user training and onboarding",
        "Monitor system performance, security, and errors",
        "Provide ongoing support, updates, and optimization"
      ]
    }
  ],
   techStack: [
  { name: "React / Next.js", icon: Code },

  { name: "Node.js", icon: Server },
  { name: "Java", icon: Cpu },
  { name: "Python", icon: Cpu },
  { name: "PHP", icon: Code },

  { name: "PostgreSQL", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "MongoDB", icon: Database },

  { name: "Docker", icon: Layers },
  { name: "Cloud Services (AWS)", icon: Cloud },

  { name: "AI / ML", icon: Brain },
  { name: "LLM (OpenAI)", icon: Brain },
  { name: "Vector Databases", icon: Database }
]
  },

 
  "website-development-services": {
    meta: {
      title: "Website Development Company | SEO-Friendly Websites",
      description:
        "Professional website development services delivering fast, secure, and SEO-optimized websites."
    },
    icon: { icon: Monitor },

    hero: {
      tag: "Web Excellence",
      title: "Website Development Services",
      description:
        "We build modern, SEO-friendly websites designed to convert visitors into customers.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      stat: { label: "Conversion Rate", value: "+40%" }
    },

    intro: {
      title: "SEO-Optimized Website Development",
      subtitle: "Design meets performance",
      description:
        "Our websites are optimized for search engines, Core Web Vitals, and user experience to maximize visibility and conversions."
    },

    benefits: [
      { icon: Monitor, title: "SEO-Friendly Structure", desc: "Optimized for Google rankings." },
      { icon: Smartphone, title: "Responsive Design", desc: "Mobile-first development." },
      { icon: Cpu, title: "Fast Performance", desc: "Optimized loading speed." }
    ],

     deliverables: [
    {
      title: "Business Websites",
      desc: [
        "Design and develop professional corporate and brand websites tailored to your business needs",
        "Ensure responsive layouts for all devices and fast loading times",
        "Implement SEO-friendly structures, metadata, and schema for search visibility",
        "Optimize user experience to engage visitors and improve conversions"
      ]
    },
    {
      title: "Web Applications",
      desc: [
        "Build custom web platforms to automate business processes and workflows",
        "Integrate backend functionality with secure, scalable architecture",
        "Use modern frontend frameworks for dynamic and interactive interfaces",
        "Ensure performance, security, and compatibility across browsers and devices"
      ]
    },
    {
      title: "Landing Pages",
      desc: [
        "Create high-converting landing pages optimized for campaigns and lead generation",
        "Focus on UX/UI that guides users towards action",
        "Integrate analytics and tracking for performance insights",
        "Implement fast-loading, SEO-optimized pages to improve search rankings"
      ]
    }
  ],

  timeline: [
    {
      year: "Discover",
      title: "Strategy",
      desc: [
        "Conduct in-depth business and SEO analysis to understand target audience and goals",
        "Identify market opportunities and competitor benchmarks",
        "Define website objectives, features, and content strategy",
        "Create a clear roadmap for design and development phases"
      ]
    },
    {
      year: "Design",
      title: "UI/UX Design",
      desc: [
        "Develop wireframes and prototypes for website layout and functionality",
        "Design user-friendly interfaces that align with branding and goals",
        "Plan responsive layouts for desktop, tablet, and mobile devices",
        "Validate designs with stakeholders for usability and aesthetics"
      ]
    },
    {
      year: "Develop",
      title: "Development",
      desc: [
        "Build frontend and backend using modern web technologies and frameworks",
        "Implement CMS or custom solutions for content management",
        "Integrate APIs, forms, and third-party services",
        "Ensure code quality, speed optimization, and security best practices"
      ]
    },
    {
      year: "Deploy",
      title: "Launch",
      desc: [
        "Launch website with full SEO optimization and performance testing",
        "Set up analytics, tracking, and monitoring tools",
        "Conduct final quality assurance and bug fixes",
        "Provide training, support, and ongoing website maintenance"
      ]
    }
  ],

  techStack: [
  { name: "HTML5", icon: Globe },
  { name: "CSS3", icon: Layers },
  { name: "JavaScript", icon: Code },
  { name: "React.js", icon: Code },
  { name: "Next.js", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "Tailwind CSS", icon: Layers },
  { name: "Framer Motion", icon: Sparkles },
  { name: "GSAP", icon: Cpu }
],

  serviceCards: [
     {
    id: "starter",
    title: "Starter Web Presence",
    price: "₹9,999", // Added Price
    bestFor: "Individuals, freelancers, small startups",
    goal: "Get online fast with a professional look",
    deliveryTime: "7 Days",
    highlight: false,
    features: [
      { label: "Pages", value: "Up to 5" },
      { label: "Design", value: "Template-based" },
      { label: "Mobile Responsive", value: true },
      { label: "Basic SEO Setup", value: true },
      { label: "Contact Form", value: true },
      { label: "Hosting Support", value: false },
      { label: "Custom Animations", value: false }
    ]
  },
  {
    id: "business",
    title: "Business Growth Website",
    price: "₹14,999", // Added Price
    bestFor: "Growing businesses & service providers",
    goal: "Generate leads & build trust",
    deliveryTime: "12–15 Days",
    highlight: true,
    features: [
      { label: "Pages", value: "Up to 10" },
      { label: "Design", value: "Custom UI/UX" },
      { label: "SEO Optimization", value: "Advanced" },
      { label: "Lead Forms & CTA", value: true },
      { label: "Admin Panel / CMS", value: true },
      { label: "Performance Optimization", value: true }
    ]
  },
  {
    id: "professional",
    title: "Professional Brand Website",
    price: "Contact Us", // Added Price
    bestFor: "Established brands & consultants",
    goal: "Build authority & premium presence",
    deliveryTime: "20 Days",
    highlight: false,
    features: [
      { label: "Pages", value: "15+" },
      { label: "Design", value: "Premium Custom Design" },
      { label: "Animations & Interactions", value: true },
      { label: "Blog / Content System", value: true },
      { label: "Security Setup", value: true },
      { label: "Analytics Integration", value: true }
    ]
  }
  
  ]
  },

  
  "digital-marketing-seo": {
    meta: {
      title: "Digital Marketing & SEO Services | Traffic & Lead Growth",
      description:
        "Result-driven digital marketing and SEO services to grow traffic, leads, and online visibility."
    },
    icon: { icon: BarChart },

    hero: {
      tag: "Growth Marketing",
      title: "Digital Marketing & SEO Services",
      description:
        "We help brands rank higher, attract traffic, and convert leads through data-driven marketing.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
      stat: { label: "Organic Growth", value: "+70%" }
    },

    intro: {
      title: "Marketing That Performs",
      subtitle: "Traffic is useless without conversions",
      description:
        "Our digital marketing strategies focus on ROI-driven SEO, paid ads, and content marketing."
    },

    benefits: [
      { icon: BarChart, title: "SEO Growth", desc: "Rank higher on Google." },
      { icon: Layers, title: "Lead Generation", desc: "Qualified traffic." },
      { icon: Cpu, title: "Data-Driven Strategy", desc: "Performance-based execution." }
    ],

   deliverables: [
    {
      title: "SEO Optimization",
      desc: [
        "Conduct on-page SEO including metadata, headings, and structured data",
        "Perform off-page SEO with quality backlinks and citations",
        "Optimize website speed, mobile responsiveness, and technical SEO factors",
        "Monitor rankings and traffic performance to continuously improve visibility"
      ]
    },
    {
      title: "Paid Advertising",
      desc: [
        "Run Google Ads and social media campaigns targeting your ideal audience",
        "Optimize campaigns for conversions, CTR, and ROI",
        "Perform A/B testing for ad creatives, copy, and landing pages",
        "Track and analyze performance to adjust budget and targeting effectively"
      ]
    },
    {
      title: "Content Marketing",
      desc: [
        "Create blogs, landing pages, and articles targeting high-intent keywords",
        "Develop content strategy aligned with SEO and marketing goals",
        "Optimize content for readability, engagement, and conversion",
        "Promote content across channels to increase reach and brand authority"
      ]
    }
  ],

  timeline: [
    {
      year: "Discover",
      title: "Audit",
      desc: [
        "Perform detailed SEO and competitor analysis to identify opportunities",
        "Assess website performance, content, and backlink profile",
        "Analyze target audience behavior and search intent",
        "Define benchmarks for future marketing and SEO improvements"
      ]
    },
    {
      year: "Design",
      title: "Strategy",
      desc: [
        "Develop a comprehensive digital marketing and SEO roadmap",
        "Plan content, keyword targeting, and campaign structure",
        "Set KPIs and measurable goals for growth and ROI",
        "Align marketing strategy with business objectives and audience needs"
      ]
    },
    {
      year: "Develop",
      title: "Execution",
      desc: [
        "Implement SEO improvements and optimizations on the website",
        "Launch paid advertising campaigns across Google and social platforms",
        "Publish and promote content according to strategy",
        "Track performance and make data-driven adjustments in real-time"
      ]
    },
    {
      year: "Deploy",
      title: "Optimization",
      desc: [
        "Monitor campaigns, rankings, and website performance continuously",
        "Analyze user behavior, conversion metrics, and ROI",
        "Scale successful campaigns and optimize underperforming ones",
        "Provide ongoing reporting, recommendations, and growth strategies"
      ]
    }
  ],
    techStack: [
  { name: "Google Analytics", icon: BarChart },
  { name: "Google Search Console", icon: Layers },
  { name: "Ahrefs", icon: Cpu },
  { name: "SEMrush", icon: Cpu },

  { name: "Google Ads", icon: Target },
  { name: "Meta Ads", icon: Megaphone },

  { name: "Tag Manager", icon: Layers },
  { name: "CRO", icon: Globe },

  { name: "Social Media Analytics", icon: BarChart },
  { name: "Marketing Automation Tools", icon: Cpu }
]
  },

  "mobile-app-development-services": {
    meta: {
      title: "Mobile App Development Company | Android & iOS Apps",
      description:
        "Mobile app development company building scalable Android, iOS, and cross-platform applications."
    },
    icon: { icon: Smartphone },

    hero: {
      tag: "Mobile Innovation",
      title: "Mobile App Development Services",
      description:
        "We design and develop high-performance mobile applications for startups and enterprises.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
      stat: { label: "User Engagement", value: "+65%" }
    },

    intro: {
      title: "Custom Mobile App Development Company",
      subtitle: "Apps built for scale and performance",
      description:
        "Our mobile app development services deliver secure, scalable, and user-friendly Android and iOS applications."
    },

    benefits: [
      { icon: Smartphone, title: "Android & iOS Apps", desc: "Native & cross-platform development." },
      { icon: Cpu, title: "High Performance", desc: "Optimized for speed and reliability." },
      { icon: Shield, title: "Secure Apps", desc: "Enterprise-grade mobile security." }
    ],

    deliverables: [
    {
      title: "Android App Development",
      desc: [
        "Develop native Android apps using Kotlin and Java tailored to your business needs",
        "Implement secure, scalable backend integrations and APIs",
        "Design user-friendly interfaces and intuitive UX flows",
        "Optimize app performance, speed, and compatibility across devices"
      ]
    },
    {
      title: "iOS App Development",
      desc: [
        "Build native iOS applications using Swift with seamless functionality",
        "Create elegant UI/UX designs optimized for iPhone and iPad",
        "Integrate backend services, APIs, and third-party tools",
        "Ensure app performance, security, and smooth App Store deployment"
      ]
    },
    {
      title: "Cross-Platform Apps",
      desc: [
        "Develop cross-platform apps using React Native and Flutter for iOS and Android",
        "Ensure consistent UI/UX across devices and platforms",
        "Implement APIs, push notifications, and offline capabilities",
        "Optimize app speed, responsiveness, and maintainability for long-term growth"
      ]
    }
  ],

  timeline: [
    {
      year: "Discover",
      title: "Idea Validation",
      desc: [
        "Conduct market research and competitor analysis to validate the app concept",
        "Gather requirements and define technical and business feasibility",
        "Identify target audience and user personas",
        "Create a detailed roadmap for app development and launch"
      ]
    },
    {
      year: "Design",
      title: "App Design",
      desc: [
        "Design UX/UI that is intuitive, responsive, and visually appealing",
        "Define app architecture, navigation flow, and component hierarchy",
        "Create wireframes, mockups, and interactive prototypes",
        "Validate designs with stakeholders and perform usability testing"
      ]
    },
    {
      year: "Develop",
      title: "App Development",
      desc: [
        "Execute agile development cycles with regular sprint reviews",
        "Implement frontend, backend, and integrations for all app features",
        "Ensure high code quality, testing, and version control",
        "Continuously optimize app performance, responsiveness, and stability"
      ]
    },
    {
      year: "Deploy",
      title: "App Launch",
      desc: [
        "Submit and publish apps on Google Play Store and Apple App Store",
        "Perform final testing, bug fixes, and quality assurance",
        "Monitor app performance, user feedback, and analytics",
        "Provide post-launch support, updates, and feature enhancements"
      ]
    }
  ],

    techStack: [
  { name: "React Native", icon: Code },
  { name: "Flutter", icon: Layers },

  { name: "Kotlin", icon: Terminal },
  { name: "Java", icon: Terminal },

  { name: "Swift", icon: Terminal },
  { name: "SwiftUI", icon: Layers },

  { name: "Node.js", icon: Server },
  { name: "REST & GraphQL APIs", icon: Cpu },

  { name: "Firebase", icon: Database },
  { name: "SQLite", icon: Database },

  { name: "Docker", icon: Layers },
  { name: "CI/CD ", icon: Cloud }
]
  }
};
