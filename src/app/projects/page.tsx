"use client";

import { useState, useEffect, useRef } from "react";

const projects = [
  // Zura Originals
  {
    id: 1,
    title: "Hippie Aliens Episode 1: The Arrival of Zero",
    type: "Limited Series | 2025-present",
    description: "An 8-episode cosmic journey of the Hippie Aliens. A story of identity, wanderers, and the strange heart of the universe.",
    category: "Zura Originals",
    image: "/Images/vid_16_04_2026_8327.jpg",
    buttons: [
      { label: "Watch Episode 1", type: "link", url: "https://meratv.in/share/video/1/18/205" },
      { label: "Watch Trailer", type: "modal", embedId: "v3Yc5UcHZmk" }
    ]
  },
  {
    id: 2,
    title: "Milkyland",
    type: "Animated Feature Film | Summer 2026",
    description: "A vibrant, dream-soaked adventure set in Milkyland, the imaginary playground inside every child’s mind.",
    category: "Zura Originals",
    image: "/Images/Milkyland.webp",
    buttons: [
      { label: "Watch Trailer", type: "modal", embedId: "ezk7rkXYAkU" }
    ]
  },
  {
    id: 3,
    title: "Daturavad",
    type: "Motion Graphics Novel | Summer 2026",
    description: "Beginning in the final days of Covid-29 with a volunteer named Ish unravels Noosphere Hypothesis, forbidden tech, and the children from the post apocalyptic slum of Yantri Dasya discovering an alien artifact called NASHA.",
    category: "Zura Originals",
    image: "/Images/Daturavad.webp"
  },
  {
    id: 4,
    title: "Project Torpa",
    type: "Feature Film | Autumn 2026",
    description: "A group of college friends chase urban legends and unravel the myth of Bhoolan Bel, a supernatural loop where lost paths never end.",
    category: "Zura Originals",
    image: "/Images/Project Torpa.webp"
  },
  {
    id: 5,
    title: "Oldman",
    type: "Live Action Feature Film | Fall 2026",
    description: "A devoted village elder, still grieving his late wife, is forced to leave his beloved home to live with his grown son in the city. As loneliness and disrespect slowly consume him, he escapes into a diary and an imagined world where his wife still lives.",
    category: "Zura Originals",
    image: "/Images/Oldman.webp"
  },
  {
    id: 6,
    title: "MGM (My Green Memories)",
    type: "Dark Comedy Animation | 2027",
    description: "Surreal, 90s-nostalgic, chaotic journey of four college kids stumbling through absurd worlds.",
    category: "Zura Originals",
    image: "/Images/MGM (My Green Memories).webp"
  },
  {
    id: 7,
    title: "Mahakaal Chronicles",
    type: "Live Action Mini-Series | 2027",
    description: "An action-adventure dripping with mythology, raw energy, and the madness of ancient power resurfacing.",
    category: "Zura Originals",
    image: "/Images/Mahakaal Chronicles .webp"
  },
  {
    id: 8,
    title: "Avikah",
    type: "Animated Feature Film | 2027",
    description: "A tiny crow with giant ambition enters a beauty pageant built for glamorous birds, exposing the class and color hierarchy of an anthropomorphic world.",
    category: "Zura Originals",
    image: "/Images/Avikah.webp"
  },
  {
    id: 9,
    title: "Ship of Theseus",
    type: "Live-Action Feature Film | 2028",
    description: "A hard-sci-fi epic and the culmination of Sunniy’s narrative universe. In a future where flesh, memory, and self are endlessly replaceable, what remains human?",
    category: "Zura Originals",
    image: "/Images/Ship of Theseus .webp"
  },

  // Arch Visualisation
  {
    id: 10,
    title: "Ananda",
    type: "3D Walkthrough | Archviz",
    description: "High-fidelity architectural walkthrough and immersive environment design.",
    category: "Arch Visualisation",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=DnxilCmXZ3k&feature=youtu.be"
  },
  {
    id: 11,
    title: "Central Park",
    type: "3D Walkthrough | Archviz",
    description: "Photorealistic spatial flythrough showcasing contemporary landscape design and public structures.",
    category: "Arch Visualisation",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=mzShLt8UTXc"
  },
  {
    id: 12,
    title: "DS Construction",
    type: "3D Walkthrough | Archviz",
    description: "Cinematic commercial building and industrial structural presentation.",
    category: "Arch Visualisation",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=uKisoAN-UZo&feature=youtu.be"
  },
  {
    id: 13,
    title: "Riyasat",
    type: "3D Walkthrough | Archviz",
    description: "Luxury hospitality spatial walkthrough showcasing intricate photorealistic resort design.",
    category: "Arch Visualisation",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=YTcwRaYZXMk"
  },
  {
    id: 14,
    title: "4-lane bridge over River Ganga at Sahibganj",
    type: "Infrastructure Walkthrough | Archviz",
    description: "Massive civil infrastructure flythrough visualization for Jharkhand highway developmental projects.",
    category: "Arch Visualisation",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=dOJbVfI0MKY"
  },
  {
    id: 15,
    title: "Ganga Bridge",
    type: "Infrastructure Walkthrough | Archviz",
    description: "High-fidelity environmental flythrough visualization of River Ganga developmental bridge.",
    category: "Arch Visualisation",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=TnsMozsghHo"
  },
  {
    id: 16,
    title: "Chas to Ramgarh NH Walkthrough",
    type: "3D Walkthrough | Archviz",
    description: "Comprehensive highway perspective and drone flythrough visualization for National Highway.",
    category: "Arch Visualisation",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=SuuFJZq32jU"
  },
  {
    id: 17,
    title: "The Rogue Pixxel",
    type: "3D Walkthrough | Archviz",
    description: "Sleek and premium corporate workspace walkthrough highlighting contemporary workplace interiors.",
    category: "Arch Visualisation",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=vfzIqG46gc0"
  },

  // Games
  {
    id: 18,
    title: "Cosmic Surfer",
    type: "Immersive Game",
    description: "Navigate retro-futuristic orbits in high-speed space gameplay.",
    category: "Games and Experiences",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=3DRzPPX9vjQ",
    buttons: [
      { label: "Alpha Release", type: "disabled" },
      { label: "Watch Trailer", type: "modal", embedId: "3DRzPPX9vjQ", videoType: "youtube" }
    ]
  },
  {
    id: 19,
    title: "HACK Run",
    type: "Cyber Arcade Game",
    description: "Fast-paced neon endless runner with engaging hacking challenges.",
    category: "Games and Experiences",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=Kemi1-yqemo",
    buttons: [
      { label: "Play", type: "link", url: "https://neustar.itch.io/hack-run" },
      { label: "Watch Trailer", type: "modal", embedId: "Kemi1-yqemo", videoType: "youtube" }
    ]
  },
  {
    id: 20,
    title: "Virtual Forest",
    type: "Simulation Game",
    description: "Vibrant exploration of procedural virtual biomes built natively for web browsers.",
    category: "Games and Experiences",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=dWKH-BBSRAw",
    buttons: [
      { label: "Coming Soon", type: "disabled" },
      { label: "Watch Trailer", type: "modal", embedId: "dWKH-BBSRAw", videoType: "youtube" }
    ]
  },

  // Promotions
  {
    id: 21,
    title: "Fly Kitchen Promo",
    type: "Brand Promotional",
    description: "High-energy commercial advertisement showcasing state of the art culinary arts.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=Ps_6_mS0f64"
  },
  {
    id: 22,
    title: "Punjabi Kitchen",
    type: "Brand Promotional",
    description: "Vibrant and inviting food culinary promo celebrating authentic Punjabi flavors.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=8Ejh2_NUEEU"
  },
  {
    id: 23,
    title: "Hot Lips Promo",
    type: "Brand Promotional",
    description: "Dynamic and stylized commercial highlight reel for Hot Lips brand outlets.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=TBB0BWU5X-0"
  },
  {
    id: 24,
    title: "Coffee Cafe Ranchi Promotional",
    type: "Social Brand Reel",
    description: "Cozy aesthetic visual experience showing warm coffees and high-end cafe interiors.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.instagram.com/maxfoxstudio/reel/C_AI_hnNfVc/"
  },
  {
    id: 25,
    title: "Work and Fun at KhanaMan",
    type: "Corporate Brand Promo",
    description: "Behind-the-scenes brand culture showcase at Ranchi's innovative startup food lab.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=nBnSnYrs3uo"
  },
  {
    id: 26,
    title: "Ranchi Club Reveillon 2022",
    type: "Event Promo Video",
    description: "Glamorous Year End celebrations and premium event recap.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=gw5JsW8K2CI"
  },
  {
    id: 27,
    title: "Ranchi Club Reveillon 2023",
    type: "Event Promo Video",
    description: "Stunning highlights of Ranchi's most exclusive club gala.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=37FlPZ5GYo8"
  },
  {
    id: 28,
    title: "Antariksha Events Promo",
    type: "Event Promo Video",
    description: "Stunning visual presentation showcasing premium wedding and celebrations setup.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=JHe4N8qwW_Q"
  },
  {
    id: 29,
    title: "Ranchi College Yoga Department",
    type: "Institutional Promo",
    description: "Inspiring academic highlight reel detailing modern yoga disciplines.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=g6MXzxqCMJY"
  },
  {
    id: 30,
    title: "Upnayan Sanskar",
    type: "Culture Promo Video",
    description: "Beautifully captured heritage documentary tracking traditional ceremonies.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=jFJgYgd8SS4"
  },
  {
    id: 31,
    title: "50th anniversary Invitation",
    type: "Event Invite Video",
    description: "Premium digital invitation highlighting legacy and celebratory events.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=TuuzLLi947M"
  },
  {
    id: 32,
    title: "Boss Baby Birthday Promo",
    type: "Event Promo Video",
    description: "Charming and energetic kids birthday gala celebration recap.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=g0a740iubXo"
  },
  {
    id: 33,
    title: "Title Reveal for AZADI",
    type: "Concert Promo Video",
    description: "Sheldon Bangera live concert title reveal and high-impact animation.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=gEQotG1UlR0"
  },
  {
    id: 34,
    title: "RCL ATMANTAN 1",
    type: "Brand Teaser Video",
    description: "High-octane club sports action sequence part one.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=LbyoeGazqv4"
  },
  {
    id: 35,
    title: "RCL ATMANTAN 2",
    type: "Brand Teaser Video",
    description: "High-octane club sports action sequence part two.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=LQlynGSPkmo"
  },
  {
    id: 36,
    title: "RCL ATMANTAN 3",
    type: "Brand Teaser Video",
    description: "High-octane club sports action sequence part three.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=SEPFrkshIjQ&feature=youtu.be"
  },
  {
    id: 37,
    title: "The Grand Revel - RCL 2026",
    type: "Event Teaser Video",
    description: "Energetic social teaser for the highly anticipated RCL 2026 event lineup.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/shorts/FOdVStszzJI"
  },
  {
    id: 38,
    title: "Holiyana 2.0, RCL -Teaser",
    type: "Event Teaser Video",
    description: "Cinematic teaser trailer showcasing the vibrant colors and musical acts of Holiyana 2.0.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/shorts/fiBsWC599JA"
  },
  {
    id: 39,
    title: "Holiyana 2.0, RCL - Announcement",
    type: "Event Announcement Video",
    description: "Official venue and dates announcement for the iconic Holiyana festival.",
    category: "Promotions",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/shorts/h3Qq3pTxQeg"
  },

  // Short Films & Music Videos
  {
    id: 40,
    title: "Church Road : India's Own Road",
    type: "Documentary Short",
    description: "Inspiring micro-documentary mapping local heritage, street culture, and city stories.",
    category: "Short Films & Music Videos",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=Bklv_dYZNQg"
  },
  {
    id: 41,
    title: "The Ranchi Song",
    type: "Music Video",
    description: "High-production local anthem celebrating Ranchi's community spirit.",
    category: "Short Films & Music Videos",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=UQKrErdK8rY"
  },
  {
    id: 42,
    title: "Makalena",
    type: "Cinematic Music Video",
    description: "A sweeping musical visualizer with rich storytelling and gorgeous lighting.",
    category: "Short Films & Music Videos",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=p45_TeM0eFE"
  },
  {
    id: 43,
    title: "Hippie Aliens : We Are Coming | A Zuraverse Saga",
    type: "A Zuraverse Saga Short",
    description: "Atmospheric animated short introducing the cosmic wanderers of the Zuraverse.",
    category: "Short Films & Music Videos",
    image: "/Images/vid_16_04_2026_7159.jpg",
    link: "https://www.youtube.com/watch?v=EgIdvNzXegA"
  },
  {
    id: 44,
    title: "GDG DevFest, BIT Mesra",
    type: "Event Recap Reel",
    description: "Behind-the-scenes recap detailing community coding, panels, and tech hackathons.",
    category: "Short Films & Music Videos",
    image: "/Images/DevFest.png",
    link: "https://www.instagram.com/iam_mohitraj_/reel/DPt0z9oCfkN/"
  },
  {
    id: 45,
    title: "Even miles away, the light of Diwali reminds me of home",
    type: "Social Short Film",
    description: "A heartwarming narrative celebrating the festival of lights and family nostalgia.",
    category: "Short Films & Music Videos",
    image: "/Images/Diwali.png",
    link: "https://www.instagram.com/p/DQEXmTgAb3Y/"
  },
  {
    id: 46,
    title: "From a fishbowl, glitter & water… to a Sub-Atomic Universe!",
    type: "VFX Creative Short",
    description: "Mind-bending visual effects experiment showing microscopic liquid structures.",
    category: "Short Films & Music Videos",
    image: "/Images/SubAtomic.png",
    link: "https://www.instagram.com/maxfoxstudio/reel/DOdAtRTAdVS/"
  },
  {
    id: 47,
    title: "Midnight Ranchi",
    type: "Aesthetic Micro-Film",
    description: "Evocative, late-night atmospheric exploration of Ranchi streets.",
    category: "Short Films & Music Videos",
    image: "/Images/MidnightRanchi.png",
    link: "https://www.instagram.com/maxfoxstudio/reel/DNz_WJ9RAPw/"
  },
  {
    id: 48,
    title: "Time, memory, reality—framed in motion.",
    type: "Cinematic Micro-Film",
    description: "Time-lapse and visual poetry tracking quiet human moments in urban life.",
    category: "Short Films & Music Videos",
    image: "/Images/TimeMemory.png",
    link: "https://www.instagram.com/maxfoxstudio/reel/DNhuxY4igfU/"
  },
  {
    id: 49,
    title: "Let's Share - A short film",
    type: "Short Film",
    description: "A simple yet poignant modern tale about childhood innocence.",
    category: "Short Films & Music Videos",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=ZMtJzkwZZRk"
  },
  {
    id: 50,
    title: "Startup Interviews: KhanaMan™",
    type: "Corporate Documentary",
    description: "Engaging startup interview exploring local food logistics.",
    category: "Short Films & Music Videos",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=O4tqvSiyhRc"
  },
  {
    id: 51,
    title: "World Environment Day 2017 - Is the job over yet?",
    type: "Social Awareness Short",
    description: "Environmental micro-documentary asking critical questions about global waste.",
    category: "Short Films & Music Videos",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=62DBmqV2XvI"
  },
  {
    id: 52,
    title: "What is Yoga? International Yoga Day 2017",
    type: "Culture Micro-Film",
    description: "Cinematic exploration of inner peace, wellness, and yoga history.",
    category: "Short Films & Music Videos",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=_K963cP3JcQ"
  },
  {
    id: 53,
    title: "3 Friendships :Friendship Day 2017",
    type: "Anthology Short Film",
    description: "Beautiful trilogy tracking lifelong bonds, laughter, and support.",
    category: "Short Films & Music Videos",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=0tOWk1Oov-8"
  },
  {
    id: 54,
    title: "VWAVES - Jharkhand Tourism",
    type: "Tourism Showcase Video",
    description: "Cinematic tourism promotional showing waterfalls and history of Jharkhand.",
    category: "Short Films & Music Videos",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1400&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=YpyBHMwmehU"
  }
];

const CATEGORIES = [
  "Zura Originals",
  "Arch Visualisation",
  "Short Films & Music Videos",
  "Games and Experiences",
  "Promotions",
];

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PROJECTS", href: "/projects", active: true },
  { label: "ZURAVERSE", href: "http://zuraverse.xyz/", external: true },
  { label: "MERCH STORE", href: "https://www.hippiealiens.com/", external: true },
];

function getYouTubeId(url: string) {
  if (!url) return null;
  if (url.includes("/shorts/")) {
    const parts = url.split("/shorts/");
    if (parts[1]) {
      return parts[1].split(/[?#]/)[0];
    }
  }
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

function getInstagramThumbnail(url: string) {
  if (!url) return null;
  let cleanUrl = url.split(/[?#]/)[0];
  if (!cleanUrl.endsWith("/")) {
    cleanUrl += "/";
  }
  return `${cleanUrl}media/?size=l`;
}

function ProjectCard({ project, onOpenModal }: { project: any; onOpenModal: (videoData: any) => void }) {
  const isZuraOriginal = project.category === "Zura Originals";
  
  const ytId = !isZuraOriginal ? getYouTubeId(project.link) : null;
  const isInstagram = !isZuraOriginal && project.link && project.link.includes("instagram.com");

  const thumbnailUrl = ytId 
    ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` 
    : isInstagram 
    ? getInstagramThumbnail(project.link)
    : project.image;

  // Buttons to render
  let buttonsToRender = null;
  if (project.buttons) {
    buttonsToRender = project.buttons;
  } else if (isZuraOriginal) {
    buttonsToRender = [{ label: "Coming Soon", type: "disabled" }];
  } else if (ytId) {
    buttonsToRender = [{ label: "View Now", type: "modal", embedId: ytId, videoType: "youtube" }];
  } else if (isInstagram) {
    let cleanIg = project.link.split(/[?#]/)[0];
    if (!cleanIg.endsWith("/")) cleanIg += "/";
    buttonsToRender = [{ label: "View Now", type: "modal", embedId: `${cleanIg}embed/`, videoType: "instagram" }];
  }

  const hasGeneralLink = !buttonsToRender && project.link;

  return (
    <div 
      className="project-card"
      onClick={() => {
        if (hasGeneralLink) {
          window.open(project.link, "_blank");
        } else if (buttonsToRender) {
          const modalBtn = buttonsToRender.find((b: any) => b.type === "modal");
          if (modalBtn) {
            onOpenModal({ type: modalBtn.videoType || "youtube", src: modalBtn.embedId, project });
          } else {
            const linkBtn = buttonsToRender.find((b: any) => b.type === "link");
            if (linkBtn) {
              window.open(linkBtn.url, "_blank");
            }
          }
        }
      }}
      style={{ cursor: "pointer" }}
    >
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={project.title}
        className="project-image"
        onError={(e) => {
          e.currentTarget.src = project.image || "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1400&auto=format&fit=crop";
        }}
      />

      <div className="project-overlay">
        <div className="project-top-meta">
          <span className="project-type-tag">{project.type}</span>
        </div>
        <div className="project-meta-content">
          <h3 className="project-title-text">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          {buttonsToRender && (
            <div className="project-actions" onClick={(e) => e.stopPropagation()}>
              {buttonsToRender.map((btn: any, idx: number) => (
                <button
                  key={idx}
                  className={`project-btn ${btn.type === "disabled" ? "disabled" : "primary"}`}
                  disabled={btn.type === "disabled"}
                  onClick={() => {
                    if (btn.type === "link") {
                      window.open(btn.url, "_blank");
                    } else if (btn.type === "modal") {
                      onOpenModal({ type: btn.videoType || "youtube", src: btn.embedId, project });
                    }
                  }}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Zura Originals");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeVideo, setActiveVideo] = useState<any | null>(null);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="projects-page">
      {/* NAV */}
      <nav className="hero-nav">
        <div className="hero-logo">ZURA STUDIO</div>

        <div className="hero-nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.active ? "active" : ""}
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hero-nav-actions">
          <button
            className="theme-toggle-minimal"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "☾" : "☀"}
          </button>
          <a href="/contact" className="hero-contact-btn">
            CONTACT
          </a>
        </div>
      </nav>

      <section className="projects-section" style={{ paddingTop: '4rem', background: 'var(--bg)', color: 'var(--fg)' }}>
        <div className="culture-header" style={{ marginBottom: '4rem' }}>
          <h2 className="culture-section-heading">Projects</h2>
          <p className="culture-section-subtext">A showcase of our cinematic world-building and transmedia executions.</p>
        </div>

        <nav className="projects-nav" aria-label="Project categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className="projects-grid">
          {filtered.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenModal={setActiveVideo}
            />
          ))}
        </div>
      </section>

      {/* ============================================================
          FOOTER
      ============================================================ */}
      <footer className="site-footer">
        <div className="footer-links">
          <a href="https://www.instagram.com/zurastudio_/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/company/zuraverse" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://x.com/Zuraverse" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://www.youtube.com/@zuraverse/" target="_blank" rel="noreferrer">YouTube</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="footer-right">
          <span>ZURASTUDIO © 2025</span>
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle colour theme"
          >
            {theme === "light" ? (
              <>Dark Mode <span>☾</span></>
            ) : (
              <>Light Mode <span>☀</span></>
            )}
          </button>
        </div>
      </footer>

      {/* ============================================================
          CINEMATIC LIGHTBOX MODAL
      ============================================================ */}
      {activeVideo && (
        <div className="video-modal-overlay" onClick={() => setActiveVideo(null)}>
          <div className={`video-modal-content ${activeVideo.type}`} onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setActiveVideo(null)}>✕</button>
            <div className="video-modal-iframe-wrapper">
              {activeVideo.type === "instagram" ? (
                <div 
                  className="instagram-fallback-card"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%), url(${activeVideo.project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "2.5rem"
                  }}
                >
                  <div className="instagram-fallback-content" style={{ zIndex: 2, textAlign: "center" }}>
                    <span className="project-type-tag" style={{ display: "inline-block", marginBottom: "1rem" }}>
                      {activeVideo.project.type}
                    </span>
                    <h3 className="project-title-text" style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
                      {activeVideo.project.title}
                    </h3>
                    <p className="project-description" style={{ marginBottom: "2rem", color: "rgba(255,255,255,0.7)" }}>
                      {activeVideo.project.description}
                    </p>
                    <button 
                      className="project-btn primary" 
                      onClick={() => window.open(activeVideo.project.link, "_blank")}
                      style={{ padding: "0.8rem 2rem", fontSize: "0.8rem" }}
                    >
                      Watch on Instagram ↗
                    </button>
                  </div>
                </div>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.src}?autoplay=1`}
                  title="Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
