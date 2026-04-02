import { CalendarIcon, FileTextIcon, GlobeIcon, MusicIcon, StethoscopeIcon, TextSearchIcon } from "lucide-react";

export const ProjectsData = [
  {
    Icon: GlobeIcon,
    name: "This Site",
    description: "Choose to try the new Astro framework and love it",
    href: "/",
    cta: "You`re here!",
    skills: ["Astro", "Tailwind", "TypeScript", "React"],
    background:
      "https://images.unsplash.com/photo-1715465115594-015eff1c7ec5?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: TextSearchIcon,
    name: "Nirwana Gateway",
    description: "Buy great quality clothes products at Nirwana Textile",
    href: "//gateway.nirwanatextile.com",
    cta: "Learn more",
    background:
      "/images/projects/gateway-nirwanatextile.png",
    skills: ["React", "Tailwind", "Next.js", "Ant Design", "Tanstack Query"],
    className: "col-span-3 lg:col-span-2",
  },
  {
    Icon: FileTextIcon,
    name: "Nirwana Landing Page",
    description: "Company profile and product information of Nirwana Textile",
    href: "//nirwanatextile.com",
    cta: "Learn more",
    background:
      "/images/projects/nirwanatextile.png",
    skills: ["React", "Tailwind", "Next.js", "Remix", "TypeScript", "Tanstack Query"],
    className: "col-span-3 lg:col-span-2",
  },
  {
    Icon: CalendarIcon,
    name: "ELBE",
    description: "E-LKPD Science Based on Ethnoscience",
    href: "//play.google.com/store/apps/details?id=com.dovjaystudio.elbe&hl=en",
    cta: "Learn more",
    background:
      "/images/projects/elbe.png",
    skills: ["Expo", "React Native", "TypeScript"],
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: MusicIcon,
    name: "Vocalochart",
    description: "Automatically update popular vocaloid songs chart to Youtube Playlist",
    href: "//www.youtube.com/@vocalochart",
    cta: "Learn more",
    background:
      "/images/projects/vocalochart.png",
    skills: ["React", "Next.js", "TypeScript", "Vercel"],
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: StethoscopeIcon,
    name: "Otsuka ILMU",
    description: "Health education platform for professionals",
    href: "//otsukailmu.id",
    cta: "Learn more",
    background:
      "/images/projects/otsukailmu.png",
    skills: ["React", "Next.js", "Express", "TypeScript", "Tailwind"],
    className: "col-span-3 lg:col-span-2",
  },
];