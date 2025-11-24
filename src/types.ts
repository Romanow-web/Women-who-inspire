export type Language = 'en' | 'uk';

export interface NavItem {
  label: string;
  path: string;
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  description: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string; // URL or placeholder text
  url?: string; // External link
}

export interface Content {
  nav: {
    home: string;
    about: string;
    program: string;
    speakers: string;
    contact: string;
    tickets: string;
  };
  hero: {
    title: string;
    subtitle: string;
    date: string;
    location: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    highlights: { title: string; desc: string; icon: string }[];
  };
  program: {
    title: string;
    items: AgendaItem[];
  };
  speakers: {
    title: string;
    items: Speaker[];
  };
  sponsors: {
    title: string;
    items: Sponsor[];
  };
  location: {
    title: string;
    venue: string;
    address: string;
    city: string;
    note: string;
  };
  footer: {
    copyright: string;
    privacy: string;
    developer: string;
  };
  cookie: {
    text: string;
    accept: string;
  };
  privacy: {
    title: string;
    content: string;
  };
}