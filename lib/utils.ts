import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

export const programColors = {
  fosstar: "bg-fosstar text-white",
  fosserve: "bg-fosserve text-white",
  fossync: "bg-fossync text-white",
  fosstorm: "bg-fosstorm text-white",
  fossart: "bg-fossart text-white",
  fossterage: "bg-fossterage text-white",
  fosspeaks: "bg-fosspeaks text-white",
}

export const programGradients = {
  fosstar: "from-fosstar/90 to-fosstar/70",
  fosserve: "from-fosserve/90 to-fosserve/70",
  fossync: "from-fossync/90 to-fossync/70",
  fosstorm: "from-fosstorm/90 to-fosstorm/70",
  fossart: "from-fossart/90 to-fossart/70",
  fossterage: "from-fossterage/90 to-fossterage/70",
  fosspeaks: "from-fosspeaks/90 to-fosspeaks/70",
}

export const programInfo = {
  fosstar: {
    title: "FOSStar",
    description: "Our membership program connecting the FOSS community",
    color: "fosstar",
    icon: "Users",
    logo: "/logos/fosstar-logo.svg",
  },
  fosserve: {
    title: "FOSServe",
    description: "Promoting open-source solutions in education and governance",
    color: "fosserve",
    icon: "BookOpen",
    logo: "/logos/fosserve-logo.svg",
  },
  fossync: {
    title: "FOSSync",
    description: "Student-led FOSS clubs in educational institutions",
    color: "fossync",
    icon: "GraduationCap",
    logo: "/logos/fossync-logo.svg",
  },
  fosstorm: {
    title: "FOSStorm",
    description: "Community-led open source projects by FOSS Andhra",
    color: "fosstorm",
    icon: "Code",
    logo: "/logos/fosstorm-logo.svg",
  },
  fossart: {
    title: "FOSSart",
    description: "Entrepreneurship space for funding open-source innovations",
    color: "fossart",
    icon: "Rocket",
    logo: "/logos/fossart-logo.svg",
  },
  fossterage: {
    title: "FOSSterage",
    description: "Repository of knowledge bases for researchers and data scientists",
    color: "fossterage",
    icon: "Database",
    logo: "/logos/fossterage-logo.svg",
  },
  fosspeaks: {
    title: "FOSSpeaks",
    description: "Advocacy program for free and open-source technology for society",
    color: "fosspeaks",
    icon: "Megaphone",
    logo: "/logos/fosspeaks-logo.svg",
  },
}

