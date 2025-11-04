// app/courses/CourseData.ts
import type { CourseFull, CourseKey } from "@/types/Course";


export const coursesData: Record<CourseKey, CourseFull> = {
  "salesforce-development": {
    slug: "salesforce-development",
    title: "Salesforce Development",
    emoji: "/salesforce.png",
    color: "from-blue-200 to-cyan-300",
    rating: 5,
    reviews: 2890,
    students: 17650,
    classes: 30,
    mentors: 6,
    bestSeller: true,
    description:
      "Become a certified Salesforce Developer and learn CRM fundamentals, Apex, Lightning Web Components (LWC), SOQL, Process Automation, and Deployment. This course focuses on hands-on CRM development skills required for global Salesforce Developer roles.",
    modules: [
      {
        title: "Module 1: Introduction to Salesforce",
        topics: [
          "What is CRM",
          "Why Salesforce?",
          "Salesforce Cloud Overview",
          "Environment Setup",
          "Understanding Trailhead",
          "Developer Console",
          "Org Setup",
          "User Management & Profiles",
          "Permission Sets",
          "Security Model",
          "Object Relationships",
          "Validation Rules",
          "Reports & Dashboards",
        ],
      },
      {
        title: "Module 2: Salesforce Administration",
        topics: [
          "Data Management",
          "Automation (Flows & Process Builder)",
          "User & License Management (Advanced)",
          "Security (Sharing & Visibility)",
        ],
      },
      {
        title: "Module 3: Apex Programming",
        sections: [
          {
            subtitle: "Introduction to Apex",
            topics: [
              "Introduction to Apex & Its Uses",
              "Data Types",
              "SOQL & SOSL Queries",
              "DML Operations",
              "Apex Triggers",
              "Exception Handling",
            ],
          },
        ],
      },
      {
        title: "Module 4: Lightning Web Components",
        sections: [
          {
            subtitle: "LWC Fundamentals",
            topics: [
              "LWC Setup",
              "LWC Components & Lifecycle Hooks",
              "HTML, JS",
              "Event Handling",
              "Calling Apex from LWC",
              "Lightning Data Service",
            ],
          },
        ],
      },
      {
        title: "Module 5: Integration & Deployment",
        topics: [
          "REST & SOAP API",
          "Integration (JSON, Postman)",
          "Change Sets & Deployment Tools",
          "VS Code Setup & GitHub Basics",
        ],
      },
      {
        title: "Module 6: Real-World Project & Career",
        topics: [
          "Live Project",
          "Trailhead Projects",
          "Resume Building",
          "LinkedIn Optimization",
          "Mock Interviews",
          "Networking",
        ],
      },
    ],
    details: {
      length: "4 months",
      schedule: "Mon-Sat —> 9:00 AM to 9:00 PM",
      cost: "---",
      prerequisites: "Basic Programming Knowledge Recommended",
      credit: "Certificate",
      instructor: "Bhushan Tekade (CEO of PerfinexaCloudTech)",
      syllabus: "/salesforce.pdf",
      material: "Salesforce Developer Guide + Trailhead Exercises",
      enrollment:
        "Register on our portal. Attend orientation. Start learning and get access to Trailhead modules.",
      location: "Offline",
    },
  },

  "java-fullstack-development": {
    slug: "java-fullstack-development",
    title: "Java Fullstack Development",
    emoji: "/java.png",
    color: "from-red-200 to-red-300",
    rating: 5,
    reviews: 3341,
    students: 22180,
    classes: 36,
    mentors: 5,
    bestSeller: false,
    description:
      "Master Core Java, Advanced Java, Spring Boot, Hibernate, REST APIs, Microservices, SQL, and frontend with React. This course prepares you for Fullstack Developer roles with real-world projects and job-ready training with Live Projects.",
    modules: [
      {
        title: "Module 1: Java Fundamentals",
        sections: [
          {
            subtitle: "Core Java",
            topics: [
              "Basics",
              "Arrays",
              "Strings",
              "OOPs Concept",
              "Interface",
              "Exception Handling",
              "Memory allocation",
            ],
          },
          {
            subtitle: "Advanced Java",
            topics: [
              "Collection",
              "Multithreading",
              "JDBC",
              "Hibernate",
              "SQL",
              "Java 8 Features",
            ],
          },
        ],
      },
      {
        title: "Module 2: Advanced Java & Databases",
        topics: ["Database Design", "Optimization", "Transactions", "Indexing"],
      },
      {
        title: "Module 3: Frontend Development",
        topics: [
          "Basic of UI",
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Tailwind CSS",
        ],
      },
      {
        title: "Module 4: Spring Framework",
        topics: [
          "Spring Core",
          "Spring MVC",
          "Spring Boot",
          "REST API",
          "Spring Data",
          "Security",
        ],
      },
      {
        title: "Module 5: Deployment & Project",
        topics: ["Cloud Deploy", "Docker", "CI/CD", "Project Work"],
      },
      {
        title: "Key Tools & Technologies",
        topics: [
          "Git, Github",
          "VS Code",
          "Postman",
          "Maven",
          "Docker",
          "Cloud",
        ],
      },
    ],
    details: {
      length: "6 Months",
      schedule: "Mon-Sat —> 9:00 AM to 9:00 PM",
      cost: "---",
      prerequisites: "Basic Programming",
      credit: "Certificate",
      instructor: "Abhijit Rajput (Software Developer at TCS)",
        syllabus: "/java.pdf",
      material: "Java Notes + Spring Boot + Microservices Materials",
      enrollment:
        "Register online, complete your profile, and receive pre-read materials before classes begin.",
      location: "Online / Offline (Limited Seats)",
    },
  },

  "mern-stack-development": {
    slug: "mern-stack-development",
    title: "MERN Stack Development",
    emoji: "/mern.png",
    color: "from-green-200 to-emerald-300",
    rating: 5,
    reviews: 4172,
    students: 26590,      
    classes: 28,
    mentors: 7,
    bestSeller: true,
    description:
      "Learn Fullstack Web Development using MongoDB, Express, React, and Node. Build 6+ real world projects including authentication, APIs, dashboards, and deploy apps to cloud. Includes Git, Postman, and MongoDB hands-on training.",
    modules: [
      {
        title: "Module 1: Web Fundamentals",
        topics: [
          "HTML5",
          "CSS3",
          "JavaScript (ES6+)",
          "Responsive Web Design",
          "Tailwind CSS, shadcn/ui",
          "UI/UX Basics",
          "Forms & Validation",
          "Animations & Accessibility",
        ],
      },
      {
        title: "Module 2: Modern UI & Frontend",
        topics: ["Components, Hooks, Routing", "State Management"],
      },
      {
        title: "Module 3: React & State Management",
        topics: ["Redux Toolkit / Zustand", "Performance Optimization", "AI Integration"],
      },
      {
        title: "Module 4: Backend & Database",
        topics: ["Node.js", "Express.js", "MongoDB & Mongoose", "JWT Auth", "WebSockets"],
      },
      {
        title: "Module 5: Deployment & Project",
        topics: ["Cloud Deploy", "Docker", "CI/CD", "Projects", "LLM APIs"],
      },
      {
        title: "Key Tools & Tech",
        topics: ["Git, Github", "Postman", "n8n", "Cloud", "Docker", "CI/CD"],
      },
    ],
    details: {
      length: "6 Months",
       schedule: "Mon-Sat —> 9:00 AM to 9:00 PM",
      cost: "---",
      prerequisites: "Basic HTML, CSS, JavaScript",
      credit: "Certificate",
      instructor: "Prashant Burde (CTO in perfinexaCloudTech)",
        syllabus: "/mern.pdf",
      material: "Course Notes + Project Source Code + Recorded Sessions",
      enrollment:
        "Submit an online application and once approved, you’ll receive a confirmation and joining kit.",
      location: "Online / Offline",
    },
  },

  "python-django-development": {
    slug: "python-django-development",
    title: "Python Django Development",
    emoji: "/pythonlogo.png",
    color: "from-yellow-200 to-orange-300",
    rating: 4,
    reviews: 1920,
    students: 11830,
    classes: 22,
    mentors: 4,
    bestSeller: false,
    description:
      "Learn Backend Development using Python and Django, REST API Development, Authentication, ORM, MySQL/PostgreSQL, and deployment. Build scalable web applications with modern backend architecture.",
    modules: [
      {
        title: "Module 1: Python Fundamentals",
        sections: [
          {
            subtitle: "Core Python",
            topics: [
              "Basics",
              "Arrays",
              "Strings",
              "Functional Module",
              "OOPs Concept",
              "Exception Handling",
              "Virtual Env",
            ],
          },
          {
            subtitle: "Advanced Python",
            topics: ["Methods", "Async/await", "Multithreading", "SQL/NoSQL"],
          },
        ],
      },
      {
        title: "Module 2: Advanced Python & Database",
        topics: ["ORM", "Query Optimization", "Transactions", "Scaling"],
      },
      {
        title: "Module 3: Frontend Development",
        topics: ["HTML/CSS/JS", "React Basics", "Tailwind"],
      },
      {
        title: "Module 4: Django Framework",
        topics: ["MVT Architecture", "ORM", "Django Admin", "Auth & Permissions", "REST API"],
      },
      {
        title: "Module 5: Deployment & Project",
        topics: ["Cloud Deploy", "Docker", "CI/CD", "Project Work"],
      },
      {
        title: "Key Tools & Technologies",
        topics: ["Git, Github", "VS Code", "Postman", "Docker", "Cloud"],
      },
    ],
    details: {
      length: "6 Months",
      schedule: "Mon-Sat —> 9:00 AM to 9:00 PM",
      cost: "---",
      prerequisites: "Basic Python Programming",
      credit: "Certificate",
      instructor: "Praful Puri",
      syllabus: "/python.pdf",
      material: "Python + Django Notes, Assignments & Source Code",
      enrollment:
        "Enroll using our website. After payment, you get LMS access and mentor onboarding session.",
      location: "Online / Offline",
    },
  },
};
