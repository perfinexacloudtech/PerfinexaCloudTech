import { 
  Layers, Smartphone, Monitor, Cloud, BarChart, Cpu, 
  CheckCircle, Zap, Shield, Globe, Database, Server,
  Code, ArrowRight, Layout, Search, Terminal
} from "lucide-react";

export const servicesData = {
  "enterprise-software": {
    meta: {
      title: "Enterprise Software Solutions | Scalable ERP & CRM",
      description: "We engineer robust, scalable enterprise software tailored to streamline your complex business operations."
    },
    hero: {
      tag: "Enterprise Grade",
      title: "Enterprise Software Solutions",
      description: "From idea to launch, we build everything you need. We engineer robust, scalable enterprise software tailored to streamline your complex business operations.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      stat: { label: "Efficiency Boost", value: "+45%" }
    },
    intro: {
      title: "Streamline Complex Operations",
      subtitle: "Scalable architectures for growing businesses.",
      description: "Our solutions are designed to integrate seamlessly with your existing infrastructure while paving the way for future growth. We focus on reducing operational redundancy and increasing data throughput."
    },
    benefits: [
      { icon: Layers, title: "Seamless Integration", desc: "Connects perfectly with your existing legacy systems and databases." },
      { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption and role-based access control built-in." },
      { icon: Database, title: "Data Scalability", desc: "Architecture designed to handle millions of transactions without lag." }
    ],
    // Mapped from your 'features'
    deliverables: [
      { title: "Custom ERP & CRM", desc: "Tailored management systems." },
      { title: "Legacy Modernization", desc: "Upgrading outdated tech stacks." },
      { title: "Secure Data Migration", desc: "Zero-loss transfer protocols." },
      { title: "Enterprise Mobility", desc: "Access business data anywhere." },
      { title: "Cloud Integration", desc: "Hybrid and multi-cloud setups." },
      { title: "Automated Workflows", desc: "Reducing manual entry errors." }
    ],
    // Mapped from your 'process'
    timeline: [
      { year: "Phase 1", title: "Discovery", desc: "Mapping your business logic." },
      { year: "Phase 2", title: "Architecture", desc: "Designing scalable systems." },
      { year: "Phase 3", title: "Development", desc: "Agile sprints & testing." },
      { year: "Phase 4", title: "Deployment", desc: "Seamless integration & launch." }
    ],
    techStack: [
      { name: "Java", icon: Code },
      { name: "Python", icon: Terminal },
      { name: "Oracle", icon: Database },
      { name: "Docker", icon: Server },
    ]
  },

  "mobile-app": {
    meta: {
      title: "Mobile App Development | iOS & Android",
      description: "Transform your business ideas into powerful mobile experiences. Native and cross-platform apps built for scale."
    },
    hero: {
      tag: "Mobile First",
      title: "Mobile App Development",
      description: "iOS, Android, and cross-platform apps built for scale. We specialize in building high-performance applications that offer intuitive user interfaces.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      stat: { label: "User Retention", value: "90%" }
    },
    intro: {
      title: "Captivate Your Audience",
      subtitle: "Experiences that users love to touch.",
      description: "Transform your business ideas into powerful mobile experiences. We specialize in building high-performance native and cross-platform applications that offer intuitive user interfaces and seamless functionality."
    },
    benefits: [
      { icon: Smartphone, title: "Native Performance", desc: "Smooth 60fps animations and rapid response times on all devices." },
      { icon: Layout, title: "Intuitive UI/UX", desc: "Interfaces designed specifically for thumb-zone navigation and ease." },
      { icon: Globe, title: "Offline Mode", desc: " robust local caching so your app works even without internet." }
    ],
    deliverables: [
      { title: "iOS & Android Native", desc: "Swift & Kotlin development." },
      { title: "React Native / Flutter", desc: "Cost-effective cross-platform." },
      { title: "UI/UX Design", desc: "Pixel-perfect mobile screens." },
      { title: "App Store Optimization", desc: "Higher visibility on stores." },
      { title: "Push Notifications", desc: "Re-engage your users." },
      { title: "In-App Purchases", desc: "Monetization integration." }
    ],
    timeline: [
      { year: "Step 1", title: "Strategy", desc: "Market research & user personas." },
      { year: "Step 2", title: "Prototyping", desc: "Wireframes & interactive mockups." },
      { year: "Step 3", title: "Coding", desc: "Clean, efficient mobile code." },
      { year: "Step 4", title: "Launch", desc: "App store submission & support." }
    ],
    techStack: [
      { name: "Swift", icon: Smartphone },
      { name: "Kotlin", icon: Smartphone },
      { name: "React Native", icon: Code },
      { name: "Flutter", icon: Layers },
    ]
  },

  "web-dev": {
    meta: {
      title: "Web Development | Next.js & React",
      description: "Fast, modern websites and platforms that drive growth. Using the latest technologies to ensure your presence is secure."
    },
    hero: {
      tag: "Modern Web",
      title: "Web Development",
      description: "We build more than just websites; we build digital platforms that drive conversion. Fast, modern, and SEO-friendly.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
      stat: { label: "Load Speed", value: "0.2s" }
    },
    intro: {
      title: "Digital Platforms That Convert",
      subtitle: "Speed, Security, and SEO in one package.",
      description: "Using the latest technologies like Next.js and React, we ensure your web presence is fast, secure, and SEO-friendly. We focus on Core Web Vitals to ensure Google loves your site as much as users do."
    },
    benefits: [
      { icon: Zap, title: "Blazing Fast", desc: "Optimized formatting and server-side rendering for instant loads." },
      { icon: Search, title: "SEO Native", desc: "Built with semantic HTML5 structure for maximum search visibility." },
      { icon: Monitor, title: "Responsive", desc: "Flawless experiences across desktop, tablet, and mobile screens." }
    ],
    deliverables: [
      { title: "Custom Web Apps", desc: "Tailored React/Next.js solutions." },
      { title: "E-commerce", desc: "Shopify & Headless storefronts." },
      { title: "PWA Development", desc: "App-like web experiences." },
      { title: "API Integration", desc: "Connecting 3rd party services." },
      { title: "CMS Integration", desc: "Sanity, Strapi, or Contentful." },
      { title: "Accessibility", desc: "WCAG 2.1 compliant builds." }
    ],
    timeline: [
      { year: "Week 1", title: "Planning", desc: "Sitemap & tech stack selection." },
      { year: "Week 3", title: "Design", desc: "Visual identity & responsiveness." },
      { year: "Week 6", title: "Development", desc: "Frontend & backend integration." },
      { year: "Week 8", title: "QA & Launch", desc: "Performance & security testing." }
    ],
    techStack: [
      { name: "Next.js", icon: Globe },
      { name: "React", icon: Code },
      { name: "Node.js", icon: Server },
      { name: "Tailwind", icon: Layers },
    ]
  },

  "cloud-devops": {
    meta: {
      title: "Cloud & DevOps | AWS & GCP",
      description: "Accelerate your delivery pipeline and ensure 99.9% uptime with our Cloud and DevOps services."
    },
    hero: {
      tag: "Infrastructure",
      title: "Cloud Deployment & DevOps",
      description: "Accelerate your delivery pipeline and ensure 99.9% uptime. We help you migrate to the cloud and automate infrastructure.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", // Reusing tech abstract
      stat: { label: "Uptime", value: "99.99%" }
    },
    intro: {
      title: "Scale Without Limits",
      subtitle: "Automated, secure, and resilient infrastructure.",
      description: "We help you migrate to the cloud, automate infrastructure, and implement CI/CD best practices. Say goodbye to manual deployments and server downtime."
    },
    benefits: [
      { icon: Cloud, title: "Auto-Scaling", desc: "Resources that grow or shrink automatically based on traffic demand." },
      { icon: Shield, title: "Zero Downtime", desc: "Blue/Green deployment strategies to ensure constant availability." },
      { icon: Server, title: "Cost Optimized", desc: "Smart resource allocation to reduce your monthly cloud bill." }
    ],
    deliverables: [
      { title: "Cloud Migration", desc: "AWS, GCP, or Azure transition." },
      { title: "CI/CD Pipelines", desc: "Automated testing & deploy." },
      { title: "Docker/Kubernetes", desc: "Container orchestration." },
      { title: "IaC Setup", desc: "Terraform or CloudFormation." },
      { title: "Security Audit", desc: "Cloud firewall & IAM roles." },
      { title: "Monitoring", desc: "Datadog or CloudWatch setup." }
    ],
    timeline: [
      { year: "Phase 1", title: "Audit", desc: "Infrastructure assessment." },
      { year: "Phase 2", title: "Strategy", desc: "Cloud roadmap & security." },
      { year: "Phase 3", title: "Migration", desc: "Zero-downtime transition." },
      { year: "Phase 4", title: "Optimization", desc: "Cost & performance tuning." }
    ],
    techStack: [
      { name: "AWS", icon: Cloud },
      { name: "Docker", icon: Server },
      { name: "Kubernetes", icon: Layers },
      { name: "Terraform", icon: Code },
    ]
  },

  "digital-marketing": {
    meta: {
      title: "Digital Marketing | SEO & PPC",
      description: "Data-driven marketing strategies that put your brand in front of the right audience."
    },
    hero: {
      tag: "Growth",
      title: "Full-Scale Digital Marketing",
      description: "Data-driven marketing strategies that put your brand in front of the right audience. From technical SEO to high-conversion PPC campaigns.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      stat: { label: "ROI", value: "3x" }
    },
    intro: {
      title: "Dominate Your Market",
      subtitle: "Turn cold traffic into loyal customers.",
      description: "From technical SEO to high-conversion PPC campaigns, we handle your entire digital growth funnel. We don't just guess; we analyze data to ensure every dollar spent returns value."
    },
    benefits: [
      { icon: BarChart, title: "Data Driven", desc: "Decisions based on analytics, not gut feelings." },
      { icon: Search, title: "High Visibility", desc: "Ranking for keywords that actually drive purchase intent." },
      { icon: Zap, title: "Instant Traffic", desc: "PPC campaigns that start generating leads immediately." }
    ],
    deliverables: [
      { title: "SEO", desc: "On-page & Off-page optimization." },
      { title: "PPC Management", desc: "Google & Meta Ads." },
      { title: "Social Media", desc: "Strategy & Content creation." },
      { title: "Content Marketing", desc: "Blogs & Whitepapers." },
      { title: "Email Automation", desc: "Drip campaigns & newsletters." },
      { title: "Analytics", desc: "Custom dashboards & reporting." }
    ],
    timeline: [
      { year: "Month 1", title: "Analysis", desc: "Competitor & keyword research." },
      { year: "Month 2", title: "Strategy", desc: "Channel selection & budgeting." },
      { year: "Month 3", title: "Execution", desc: "Campaign launch & management." },
      { year: "Month 4", title: "Reporting", desc: "ROI tracking & analytics." }
    ],
    techStack: [
      { name: "Google Ads", icon: Search },
      { name: "Analytics", icon: BarChart },
      { name: "Semrush", icon: Globe },
      { name: "Hubspot", icon: Database },
    ]
  },

  "mvp-dev": {
    meta: {
      title: "MVP Development | Startup Solutions",
      description: "Validate your startup idea fast. We prioritize core features to build a Minimum Viable Product that solves user problems."
    },
    hero: {
      tag: "Startup Speed",
      title: "Startup MVP Development",
      description: "From idea to launch, we build everything you need. Validate your startup idea fast with a scalable Minimum Viable Product.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      stat: { label: "Time to Market", value: "4 Weeks" }
    },
    intro: {
      title: "Launch Fast, Pivot Faster",
      subtitle: "Don't build features nobody wants.",
      description: "We prioritize core features to build a Minimum Viable Product that solves user problems, allowing you to enter the market and gather feedback quickly. Save budget, save time."
    },
    benefits: [
      { icon: Cpu, title: "Lean Build", desc: "Focusing strictly on core value propositions to minimize cost." },
      { icon: Zap, title: "Rapid Launch", desc: "Get into the hands of real users in weeks, not months." },
      { icon: Layers, title: "Scalable Base", desc: "Code written to scale, so you don't have to rewrite later." }
    ],
    deliverables: [
      { title: "Rapid Prototyping", desc: "Clickable Figma models." },
      { title: "Core Features", desc: "Essential functionality build." },
      { title: "Scalable Arch", desc: "Ready for user growth." },
      { title: "Investor Design", desc: "Polished UI for pitch decks." },
      { title: "User Analytics", desc: "Tracking behavior from day 1." },
      { title: "Feedback Loops", desc: "Systems to gather user input." }
    ],
    timeline: [
      { year: "Sprint 1", title: "Scope", desc: "Defining MVP requirements." },
      { year: "Sprint 2", title: "Build", desc: "Rapid 2-week development cycles." },
      { year: "Sprint 3", title: "Launch", desc: "Go-to-market execution." },
      { year: "Sprint 4", title: "Iterate", desc: "Feedback loop & improvements." }
    ],
    techStack: [
      { name: "React", icon: Code },
      { name: "Firebase", icon: Database },
      { name: "Node.js", icon: Server },
      { name: "Stripe", icon: Layers },
    ]
  },
};