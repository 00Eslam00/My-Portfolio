export type Link = {
  label: string
  href: string
}

export type Stat = {
  value: string
  label: string
}

export type SkillGroup = {
  title: string
  icon: 'code' | 'server' | 'database' | 'shield' | 'cloud'
  items: string[]
}

export type Experience = {
  role: string
  company: string
  period: string
  location: string
  summary: string
  metrics: Stat[]
  points: string[]
  tags: string[]
}

export type Project = {
  name: string
  tagline: string
  date: string
  role: string
  description: string[]
  stack: string[]
  impact: Stat
  highlight?: string
  link?: string
}

export const profile = {
  name: 'Eslam Amin',
  initials: 'EA',
  title: 'Full-Stack Software Engineer',
  subtitle: '.NET & React Developer',
  location: 'Giza, Egypt',
  email: 'eslamaminmostafa0@gmail.com',
  cv: '/Eslam-Amin-CV.pdf',
  photo: {
    webp: '/images/eslam-portrait.webp',
    jpg: '/images/eslam-portrait.jpg',
    alt: 'Portrait of Eslam Amin',
  },
  availability: 'Open to full-stack & backend roles',
  headline: 'I build scalable APIs, real-time systems and the React interfaces on top of them.',
  summary:
    'Software engineer specializing in ASP.NET Core, Clean Architecture and CQRS on the backend, and React with TypeScript on the frontend. I have shipped RESTful APIs, real-time features and event-driven microservices (RabbitMQ, Kafka) running on Docker and Kubernetes, backed by SQL Server, EF Core, MongoDB and Redis.',
  socials: {
    github: 'https://github.com/00Eslam00',
    linkedin: 'https://www.linkedin.com/in/eslam-amin-mostafa/',
    codeforces: 'https://codeforces.com/profile/Solom',
  },
}

// The quick facts a recruiter scans for first.
export const snapshot: Stat[] = [
  { label: 'Focus', value: 'Full-stack: ASP.NET Core + React' },
  { label: 'Engineering role', value: 'Backend Software Engineer, Mr. Road' },
  { label: 'Education', value: 'BSc Computer Science, Cairo University' },
  { label: 'Location', value: 'Giza, Egypt · Remote experience' },
]

export const coreStack: string[] = [
  'C#',
  'ASP.NET Core',
  'TypeScript',
  'React',
  'EF Core',
  'SQL Server',
  'MongoDB',
  'Redis',
  'RabbitMQ',
  'Kafka',
  'SignalR',
  'Docker',
  'Kubernetes',
  'Azure',
  'GitHub Actions',
]

export const stats: Stat[] = [
  { value: '1000+', label: 'Competitive programming problems solved' },
  { value: '3.71', label: 'GPA, Excellent with Honor' },
  { value: '50+', label: 'University students mentored' },
  { value: '2×', label: 'Employee of the Month' },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages & Frontend',
    icon: 'code',
    items: ['TypeScript', 'React', 'JavaScript', 'C#', 'HTML / CSS', 'Python', 'C++', 'Java'],
  },
  {
    title: 'Backend & Architecture',
    icon: 'server',
    items: [
      'ASP.NET Core Web API',
      'ASP.NET Core MVC',
      'Clean Architecture',
      'CQRS',
      'Microservices',
      'SOLID',
      'Design Patterns',
    ],
  },
  {
    title: 'Data & Messaging',
    icon: 'database',
    items: ['SQL Server', 'EF Core', 'MongoDB', 'Redis', 'RabbitMQ', 'Kafka', 'SignalR'],
  },
  {
    title: 'Security & Testing',
    icon: 'shield',
    items: [
      'JWT',
      'OAuth2',
      'ASP.NET Identity',
      'TDD',
      'Unit & Integration Tests',
      'Postman',
      'Selenium',
      'Cypress',
      'Playwright',
    ],
  },
  {
    title: 'DevOps & Delivery',
    icon: 'cloud',
    items: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Azure', 'Git', 'Agile / Jira'],
  },
]

export const experience: Experience[] = [
  {
    role: 'Teaching Assistant',
    company: 'Zewail City of Science and Technology',
    period: 'Sep 2025 – Aug 2026',
    location: 'Giza, Egypt',
    summary: 'Supported programming courses and automated the grading workflow.',
    metrics: [
      { value: '100+', label: 'submissions reviewed' },
      { value: '70%', label: 'less manual grading' },
    ],
    points: [
      'Reviewed and debugged 100+ student code submissions in C++ and Python.',
      'Wrote automated grading scripts, reducing manual grading effort by 70%.',
    ],
    tags: ['C++', 'Python', 'Automation'],
  },
  {
    role: 'Backend Software Engineer',
    company: 'Mr. Road',
    period: 'Jul 2024 – Mar 2025',
    location: 'Remote',
    summary: 'Owned core APIs, auth and real-time features for a routing platform.',
    metrics: [
      { value: '60%', label: 'less testing time' },
      { value: '95%', label: 'malformed requests caught' },
      { value: '2×', label: 'Employee of the Month' },
    ],
    points: [
      'Built RESTful Web APIs with ASP.NET Core on a layered architecture, cutting testing time by 60% and catching 95% of malformed requests.',
      'Implemented JWT/OAuth2 authentication and SignalR real-time features across the platform.',
      'Built the admin panel (ASP.NET Core MVC) and an optimized Dijkstra + Haversine shortest-path algorithm for geographic routing.',
      'Worked in Agile sprints on Jira with CI/CD through GitHub Actions.',
    ],
    tags: ['ASP.NET Core', 'SignalR', 'JWT / OAuth2', 'MVC', 'GitHub Actions'],
  },
  {
    role: 'ASP.NET Backend Development Intern',
    company: 'Information Technology Institute (ITI)',
    period: 'Jul 2023 – Aug 2023',
    location: 'Remote',
    summary: 'Built and deployed a full e-commerce platform.',
    metrics: [{ value: '90%+', label: 'edge cases handled' }],
    points: [
      'Built a feature-rich e-commerce platform with user role management.',
      'Deployed the platform on Microsoft Azure.',
    ],
    tags: ['ASP.NET Core', 'Azure', 'E-Commerce'],
  },
]

export const projects: Project[] = [
  {
    name: 'Distributed Order Management System',
    tagline: 'Event-driven microservices',
    date: 'Jun 2026',
    role: 'Backend architecture & implementation',
    description: [
      'Microservices system built with ASP.NET Core, Docker and Kubernetes.',
      'RabbitMQ for reliable workflows and Kafka for real-time event streaming, with SignalR live order tracking on Clean Architecture and CQRS.',
    ],
    stack: ['ASP.NET Core', 'Kubernetes', 'Docker', 'RabbitMQ', 'Kafka', 'SignalR', 'CQRS'],
    impact: { value: 'Live', label: 'order tracking via SignalR' },
  },
  {
    name: 'EmoBus',
    tagline: 'Transportation management application',
    date: 'Jan 2026',
    role: 'Full-stack · React + .NET',
    description: [
      'Secure multi-tenant system with a React front end and a CQRS-based .NET 9 backend.',
      'Delivered end-to-end features across the React UI and ASP.NET Core APIs, from booking flows to live tracking dashboards.',
    ],
    stack: ['React', 'TypeScript', '.NET 9', 'CQRS', 'Multi-tenancy'],
    impact: { value: '50+', label: 'API operations' },
  },
  {
    name: 'Articlash',
    tagline: 'Competitive & collaborative platform for artists',
    date: 'Dec 2024 – Aug 2025',
    role: 'Backend developer · graduation project',
    description: [
      'Architected the backend with .NET 8, SQL Server, MongoDB, Elasticsearch and SignalR.',
      'Owned backend development and defect tracking in Jira.',
    ],
    stack: ['.NET 8', 'SQL Server', 'MongoDB', 'Elasticsearch', 'SignalR'],
    impact: { value: 'A+', label: 'graduation grade' },
    link: 'https://github.com/00Eslam00/Articlash',
  },
]

export const achievements: string[] = [
  'Solved 1000+ competitive programming problems in C++ across Codeforces, LeetCode and CodeChef.',
  'Freelance competitive-programming coach: mentored 50+ university students and ran 5+ workshops on backtracking, binary search and the STL.',
  'Employee of the Month at Mr. Road, July 2024 and October 2024.',
]

export const navLinks: Link[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
