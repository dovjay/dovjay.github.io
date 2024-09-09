import { CalendarIcon, FileTextIcon, GlobeIcon, TextSearchIcon } from "lucide-react";

export const ProjectsData = [
  {
    Icon: GlobeIcon,
    name: "This Site",
    description: "Choose to try the new Astro framework and love it",
    href: "/",
    cta: "You`re here!",
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
    className: "col-span-3 lg:col-span-1",
  },
];