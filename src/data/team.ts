export interface TeamMember {
  name: string;
  nickname?: string;
  role: string;
  linkedin?: string;
  avatarUrl: string;
  order: number;
  department: string;
}

export const TEAM: TeamMember[] = [
  { 
    name: 'Tin Su Su Tun', 
    nickname: 'Tin Su', 
    role: 'President', 
    linkedin: 'https://www.linkedin.com/in/tin-su-su-tun-2229aa293/', 
    avatarUrl: '/team/tinsu.jpg', 
    order: 1,
    department: 'Executive'
  },
  { 
    name: 'Joel John Tan Juner', 
    nickname: 'Joel', 
    role: 'Vice President', 
    linkedin: 'https://www.linkedin.com/in/joel-john-tan-juner-53a925331', 
    avatarUrl: '/team/joel.jpg', 
    order: 2,
    department: 'Executive'
  },
  { 
    name: 'Shannon Choo Ru Xin', 
    nickname: 'Shannon', 
    role: 'Vice President', 
    linkedin: 'https://www.linkedin.com/in/shannon-choo-89a981217/', 
    avatarUrl: '/team/shannon.jpg', 
    order: 3,
    department: 'Executive'
  },
  { 
    name: 'Jay', 
    role: 'Head of Event Department', 
    avatarUrl: '/team/jay.jpg', 
    order: 4,
    department: 'Events'
  },
  { 
    name: 'Yu Jie', 
    role: 'Event Department', 
    avatarUrl: '/team/yu-jie.jpg', 
    order: 5,
    department: 'Events'
  },
  { 
    name: 'Germaine', 
    role: 'Secretary', 
    avatarUrl: '/team/germaine.jpg', 
    order: 6,
    department: 'Secretary'
  },
  { 
    name: 'Chia Xuan', 
    role: 'Event Department', 
    avatarUrl: '/team/chia-xuan.jpg', 
    order: 7,
    department: 'Events'
  },
  { 
    name: 'Emerald', 
    role: 'Marketing', 
    avatarUrl: '/team/emerald.jpg', 
    order: 8,
    department: 'Marketing'
  },
  { 
    name: 'Labiba', 
    role: 'Marketing', 
    avatarUrl: '/team/labiba.jpg', 
    order: 9,
    department: 'Marketing'
  },
  { 
    name: 'Azeez', 
    role: 'Public Relations', 
    avatarUrl: '/team/azeez.jpg', 
    order: 10,
    department: 'PR'
  },
  { 
    name: 'En Xu', 
    role: 'Event Department', 
    avatarUrl: '/team/en-xu.jpg', 
    order: 11,
    department: 'Events'
  },
  { 
    name: 'Abrar', 
    role: 'Marketing', 
    avatarUrl: '/team/abrar.jpg', 
    order: 12,
    department: 'Marketing'
  },
  { 
    name: 'Jerry', 
    role: 'Finance', 
    avatarUrl: '/team/jerry.jpg', 
    order: 13,
    department: 'Finance'
  },
  { 
    name: 'Rayy', 
    role: 'Public Relations', 
    avatarUrl: '/team/rayy.jpg', 
    order: 14,
    department: 'PR'
  },
  { 
    name: 'Mahir', 
    role: 'Engineering', 
    avatarUrl: '/team/mahir.jpg', 
    order: 15,
    department: 'Events'
  },
  { 
    name: 'Hnine', 
    role: 'Marketing', 
    avatarUrl: '/team/nine.jpg', 
    order: 16,
    department: 'Marketing'
  },
];
