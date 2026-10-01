import { FiGithub as Github, FiLinkedin as Linkedin, FiMail as Mail } from 'react-icons/fi';

export const C = {
  ink: '#111111',
  paper: '#F2F1EC',
  blue: '#2E5BFF',
  sky: '#AFC4FF',
  muted: '#A3A19A',
  line: '#D9D7CE',
};

export const DISPLAY = "'Bricolage Grotesque','Noto Sans Devanagari','Noto Sans Bengali','Noto Sans JP','Noto Sans SC','Noto Sans KR',system-ui,sans-serif";
export const SERIF = "'Instrument Serif',Georgia,serif";
export const MONO = "'JetBrains Mono',ui-monospace,monospace";

export const NAMES = ['Saurabh', 'सौरभ', 'サウラブ', '索拉布', '사우라브', 'Саурабх', 'সৌরভ'];

export const SKILLS = [
  'React.js', 'Next.js', 'Node.js', 'Go', 'PostgreSQL', 'Supabase', 'MySQL',
  'GCP', 'AWS', 'Docker', 'Linux', 'Prowler', 'ScoutSuite', 'Semgrep', 'Trivy',
  'Gitleaks', 'Tailwind CSS', 'GitHub Actions', 'Vercel', 'Razorpay',
  'OpenAI API', 'RAG', 'Google OAuth', 'JavaScript', 'SQL',
];

// Keyboard-shortcut nav: press the key to jump to the section
export const KEYNAV = [
  { k: 'W', label: 'Work', id: 'work' },
  { k: 'E', label: 'Experience', id: 'experience' },
  { k: 'S', label: 'Stack', id: 'stack' },
  { k: 'C', label: "Let's talk", id: 'contact', primary: true },
];

export const SOCIALS = [
  { Icon: Github, href: 'https://github.com/', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:sharmasaurabh2606@gmail.com', label: 'Email' },
];
