interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    title: 'Software Engineer – Unity Developer (C#)',
    company: 'GenITeam Solutions, Lahore',
    period: 'July 2021 – Oct 2025',
    description: 'Progressive roles from Associate to Senior Unity Developer, working on gameplay programming, multiplayer systems, and team management.',
    achievements: [
      'Leading team management and planning for product release and development',
      'Training new resources and mentoring juniors',
      'Designing and balancing in-game economy systems',
      'Multiplayer development and character systems implementation',
      'Provided feasible and optimized code structures for game projects',
      'Project planning & design discussions with Game Designers',
      'Game performance optimizations and direction to art team for optimized assets',
      'Editor scripting and Characters AI Implementations',
      'Base project development of different categories (Action, FPS, Simulation)',
      'IK Programming and management for characters',
      'Creating Combat systems for Games',
      'Physics system for complex controllers and animation management'
    ]
  },
  {
    title: 'Freelance Unity Developer – Playable Ads Specialist',
    company: 'Self-employed (Remote)',
    period: 'Nov 2024 – Present',
    description: 'Developing interactive Playable Ads for mobile and web platforms, optimized for engagement and conversion.',
    achievements: [
      'Creating lightweight, scalable interactive ad experiences using Unity',
      'Optimizing memory management and asset bundling for all devices',
      'Integrating UI/UX design, animations, and visual effects for maximum impact',
      'Delivering end-to-end solutions from concept to deployment'
    ]
  },
  {
    title: 'Unity Developer (C#)',
    company: 'Mach Square Games, Lahore',
    period: 'Feb 2021 - July 2021',
    description: 'Started as a full-time game developer creating mobile games for Android and iOS platforms.',
    achievements: [
      'Created Games for Mobile Android and IOS',
      'Worked on Simulation, Action, Racing, and 2D Games',
      'Code Architecture and refactoring',
      'Resolved release problems and bugs'
    ]
  }
];
