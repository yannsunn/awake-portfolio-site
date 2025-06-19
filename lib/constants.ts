export const PROFILE = {
  name: 'Awake',
  title: 'Web Developer & Designer',
  description: 'クリエイティブなウェブソリューションを創造します',
  email: 'contact@awake-portfolio.com',
  github: 'https://github.com/awake',
  twitter: 'https://twitter.com/awake',
  linkedin: 'https://linkedin.com/in/awake',
}

export const WORKS = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'モダンなECサイトのデザインと開発',
    image: '/images/work1.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    demoUrl: 'https://demo1.example.com',
    githubUrl: 'https://github.com/example/project1',
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'クリエイティブなポートフォリオサイト',
    image: '/images/work2.jpg',
    tags: ['React', 'Framer Motion', 'SCSS', 'Node.js'],
    demoUrl: 'https://demo2.example.com',
    githubUrl: 'https://github.com/example/project2',
    category: 'Design'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'チーム向けタスク管理アプリケーション',
    image: '/images/work3.jpg',
    tags: ['Vue.js', 'Firebase', 'Vuetify', 'PWA'],
    demoUrl: 'https://demo3.example.com',
    githubUrl: 'https://github.com/example/project3',
    category: 'Web App'
  },
  {
    id: 4,
    title: 'Landing Page',
    description: 'コンバージョン重視のランディングページ',
    image: '/images/work4.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    demoUrl: 'https://demo4.example.com',
    githubUrl: 'https://github.com/example/project4',
    category: 'Web Development'
  },
  {
    id: 5,
    title: 'Mobile App Design',
    description: 'iOS/Android向けモバイルアプリのUI/UX',
    image: '/images/work5.jpg',
    tags: ['Figma', 'Prototyping', 'UI/UX', 'React Native'],
    demoUrl: 'https://demo5.example.com',
    githubUrl: 'https://github.com/example/project5',
    category: 'Design'
  },
  {
    id: 6,
    title: 'Dashboard Application',
    description: 'データ可視化ダッシュボード',
    image: '/images/work6.jpg',
    tags: ['React', 'D3.js', 'Chart.js', 'Material-UI'],
    demoUrl: 'https://demo6.example.com',
    githubUrl: 'https://github.com/example/project6',
    category: 'Web App'
  }
]

export const SKILLS = [
  {
    category: 'Frontend',
    items: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PHP', 'MySQL', 'PostgreSQL', 'Firebase', 'MongoDB']
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'AWS', 'Figma', 'Photoshop', 'Illustrator', 'Vercel']
  }
]

export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/#works', label: 'Works' },
  { href: '/#skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
]