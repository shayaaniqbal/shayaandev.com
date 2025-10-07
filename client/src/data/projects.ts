import { ProjectData } from '@/components/ProjectCard';

const projects: ProjectData[] = [
  {
    id: 'playtime-adventure',
    title: 'Playtime Adventure Multiplayer',
    description: 'Experience the thrill of Scary Teacher Multiplayer Game! A camping adventure where players must escape from Miss T together.',
    image: 'https://play-lh.googleusercontent.com/cQGqWCX9oC8jn--ylQlBN2IAmxLrtYcvdcjEA_ayAkgkJlivtf8Wv1umj8FOQolS7w=w240-h480-rw',
    technologies: ['Unity', 'C#', 'Mobile', 'Android', 'iOS', 'Multiplayer'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.zatg.scaryteacher.campescape&hl=en&gl=US&pli=1',
    color: 'purple',
    role: 'Unity Developer',
    publishedDate: '2024-06-15'
  },
  {
    id: 'hide-and-prank',
    title: 'Hide N\' Prank',
    description: 'A stealth-based prank game where Nick executes creative pranks while avoiding detection from Miss T.',
    image: 'https://play-lh.googleusercontent.com/cD1t9ti5IO35WjQCTzURHS6shs-wBha13x33Y_wO6EPTyg1LhViUnXdU5gFMdoihOA=w240-h480-rw',
    technologies: ['Unity', 'C#', 'AI', 'Mobile Development'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.zatg.catchme.pranks',
    color: 'blue',
    role: 'Gameplay Programmer',
    publishedDate: '2024-08-20'
  },
  {
    id: 'scary-robber',
    title: 'Scary Robber – Mastermind Heist',
    description: 'Play as a clever boy who is home alone, facing relentless robbers attempting to break into his house.',
    image: 'https://play-lh.googleusercontent.com/9b0k0tG_MmxdD7YyBkMiJwQB3-gQ8kpQLWrMft2P0Ki3I11Dnfzb-rUVOC7IXp1t4_oj=w240-h480-rw',
    technologies: ['Unity', 'C#', 'Puzzle Design', 'Android'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.zatg.scaryrobber.boylife',
    color: 'cyan',
    role: 'Gameplay Programmer',
    publishedDate: '2023-11-10'
  },
  {
    id: 'mysterious-cat',
    title: 'Mysterious Cat: Haunted House',
    description: 'A creepy puzzle adventure where you explore a haunted house with unsettling noises, flickering lights, and a scary cat.',
    image: 'https://play-lh.googleusercontent.com/AeOFVWkrBi5VP43hqJndefXHA_5R53RxscSB1CREYUNoMObwdj6vCa0crDqvDzDQiBE=w240-h480-rw',
    technologies: ['Unity', 'C#', 'Puzzle Design', 'Horror'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.zatg.cat.trouble.horror.haunted',
    color: 'purple',
    role: 'Unity Developer',
    publishedDate: '2025-09-16'
  },
  {
    id: 'scary-teacher-3d',
    title: 'Scary Teacher 3D',
    description: 'The story is about a genius girl and her worst high school teacher. Now the teacher has relocated as your neighbor.',
    image: 'https://play-lh.googleusercontent.com/fDrmI52HfyXG_ulhvKMQlFnkY3AXzCgWTc5jKVs1CsAjq9hM28v31esgLFAOSkQS99I=w240-h480-rw',
    technologies: ['Unity', 'C#', 'Action', 'Puzzles'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.zakg.scaryteacher.hellgame',
    color: 'pink',
    role: 'Unity Developer',
    publishedDate: '2019-05-01'
  },
  // {
  //   id: 'naughty-pranks',
  //   title: 'Naughty Pranks: Party Chaos',
  //   description: 'Step into the ultimate party chaos as the naughty prankster on a mission to turn every celebration upside down.',
  //   image: 'https://play-lh.googleusercontent.com/GDXRD3NuPZp2NmyijUqj4yltTNUYutaSoOptOFsQUSKXKdyLewCRn9wiuQg9zmsJIfgS=w240-h480-rw',
  //   technologies: ['Unity', 'C#', 'Simulation', 'Mobile'],
  //   liveUrl: 'https://play.google.com/store/apps/details?id=com.genigames.party.pranks.chaos.kid',
  //   color: 'blue',
  //   role: 'Gameplay Programmer',
  //   publishedDate: '2025-06-18'
  // },
  // {
  //   id: 'slime-blast',
  //   title: 'Slime Blast',
  //   description: 'A fun and oddly satisfying puzzle game where colorful slimes bounce, burst, and merge.',
  //   image: 'https://play-lh.googleusercontent.com/3X_j03eIsgVzdnws34O7lMEsvy0n01y02jWlW57qdXsrZH0bnW1cISWU4WSmK8J8qtJOsdgY83kL3TEzvsFtiyw=w240-h480-rw',
  //   technologies: ['Unity', 'C#', 'Puzzle', 'Casual'],
  //   liveUrl: 'https://play.google.com/store/apps/details?id=com.genigames.slime.blast.puzzle',
  //   color: 'cyan',
  //   role: 'Game Developer',
  //   publishedDate: '2025-10-04'
  // },
  {
    id: 'mart-tycoon',
    title: 'Mart Tycoon Supermarket Game',
    description: 'Build your empire from a small corner shop to a bustling supermarket. Manage farming and retail operations.',
    image: 'https://play-lh.googleusercontent.com/rCwgjXE-7-qN_f0O5tpKD-QGEiYUwzYpQlw7-blHRpIXT-MJzJ0b5xrI1rbO5UDWDg=w240-h480-rw',
    technologies: ['Unity', 'C#', 'Simulation', 'Management'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.AvazarGames.MiniSuperMarket',
    color: 'purple',
    role: 'Unity Developer',
    publishedDate: '2024-10-15'
  },
  {
    id: 'attack-hole',
    title: 'Attack Hole: Boss Fight Game',
    description: 'Control a voracious black hole on a mission to consume weapons and challenges in this fast-paced arcade adventure.',
    image: 'https://play-lh.googleusercontent.com/WHbhRCiU-l5699kF6-MFSKTclENQbz1j2MvhmyJBwWXmnzqEKCWgeEMMeyVJlOEqHPZR=w240-h480-rw',
    technologies: ['Unity', 'C#', 'Arcade', 'Action'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.black.attackhole.hoard.game',
    color: 'blue',
    role: 'Gameplay Programmer',
    publishedDate: '2024-10-03'
  },
  {
    id: 'car-crash',
    title: 'Car Crash: Cop Chase Simulator',
    description: 'High-speed police chases where you dodge cops and escape. Master the art of driving and strategic escapes.',
    image: 'https://play-lh.googleusercontent.com/8s8rTSd-rVh8RAUdEdrRz1itdkhqq3SO1br2-1zC5p7bKY4UQXLQfZgaH_J1yxAJvT0=w240-h480-rw',
    technologies: ['Unity', 'C#', 'Racing', 'Action'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.DefaultCompany.CarCrash',
    color: 'pink',
    role: 'Unity Developer',
    publishedDate: '2024-11-20'
  },
  {
    id: 'orbit-change',
    title: 'Orbit Change',
    description: 'A fun and challenging gravity-based arcade game set in space. Aim and shoot at orbiting targets avoiding obstacles.',
    image: 'https://play-lh.googleusercontent.com/z2V8SUBtggOQD8xQIHz31Mk9co1NsQM3jZoBV14NSQc5aU1k0gzm8HKgpVASxLBQokvlaDnJAkeZ2eaKpSyc=w240-h480-rw',
    technologies: ['Unity', 'C#', 'Arcade', 'Physics'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.Client.OrbitChange&hl=en',
    color: 'cyan',
    role: 'Unity Developer',
    publishedDate: '2025-09-29'
  }
];

export const projectsData = projects.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
