import { Content, Language } from './types';

export const SUPPORTED_LANGUAGES: Language[] = ['en', 'uk'];

// Unified Sponsor Icon: Heart outline (Purple) with Star fill (Amber)
const UNIFIED_SPONSOR_ICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236D28D9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'/%3E%3Cpath d='m12 7 1.5 3h3l-2.3 2 1 3-3.2-2.2-3.2 2.2 1-3-2.3-2h3z' fill='%23F59E0B' stroke='none'/%3E%3C/svg%3E`;

const SPONSORS_DATA = [
  { 
    id: '1', 
    name: 'Romanow Web Studio', 
    logo: UNIFIED_SPONSOR_ICON,
    url: 'https://www.instagram.com/romanow.web/' 
  },
  { 
    id: '2', 
    name: 'No Worries Barber & Brow Co', 
    logo: UNIFIED_SPONSOR_ICON,
    url: 'https://www.instagram.com/no.worries.place/' 
  }
];

export const CONTENT: Record<Language, Content> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      program: 'Program',
      speakers: 'Speakers',
      contact: 'Location',
      tickets: 'Get Tickets',
    },
    hero: {
      title: 'Women Who Inspire',
      subtitle: 'Created by women, for women, and about women! Ukrainian women are flowers of strength that bloom even in the midst of storms.',
      date: 'January 10, 2026 · 9:00 AM - 5:00 PM',
      location: 'San Diego, California',
      cta: 'Register Now',
    },
    about: {
      title: 'About the Event',
      description: '"Women Who Inspire" is an event created by women, for women, and about women! This is a unique opportunity to meet incredible Ukrainian women who have walked their path. Remind yourself that "everything is okay with you" and "you are not alone." Here, you will find wings and inspiration.',
      highlights: [
        { title: 'Inspiration', desc: 'Hear incredible stories and get a dose of motivation.', icon: 'Sparkles' },
        { title: 'Connection', desc: 'Powerful networking among Ukrainian women in the US.', icon: 'HeartHandshake' },
        { title: 'All About You', desc: 'Stylists, cosmetologists, photo zones, and surprise bags.', icon: 'Gift' },
      ],
    },
    program: {
      title: 'What to Expect',
      items: [
        { time: '09:00 - 10:00', title: 'Registration', description: 'Check-in and welcome.' },
        { time: '10:30 - 11:30', title: 'First Speaker', description: 'Inspirational talk.' },
        { time: '11:45 - 12:45', title: 'Second Speaker', description: 'Motivation and insights.' },
        { time: '13:20 - 14:30', title: 'Panel Discussion (4 Speakers)', description: 'Transformation experience.' },
        { time: '14:40 - 15:40', title: 'Third Speaker', description: 'Empowering story.' },
        { time: '16:00 - 17:00', title: 'Closing Remarks by Organizers', description: 'Wrap up and networking.' },
      ],
    },
    speakers: {
      title: 'Meet Our Speakers',
      items: [
        { id: '1', name: 'Olena Shevchenko', role: 'Activist & Leader', bio: 'A voice for human rights and equality.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500' },
        { id: '2', name: 'Mariya Kovalenko', role: 'Entrepreneur', bio: 'Founder of "Tech for Good" Global.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500' },
        { id: '3', name: 'Svitlana Bondarenko', role: 'Artist', bio: 'Using creativity to heal and inspire.', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400&h=500' },
        { id: '4', name: 'Iryna Petrenko', role: 'Psychologist', bio: 'Expert in women\'s mental health.', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=400&h=500' },
        { id: '5', name: 'Tetiana Melnyk', role: 'Tech Innovator', bio: 'CEO of FutureStartups.', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=500' },
        { id: '6', name: 'Oksana Boyko', role: 'Social Worker', bio: 'Community builder and advocate.', image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400&h=500' },
      ],
    },
    sponsors: {
      title: 'Our Sponsors',
      items: SPONSORS_DATA,
    },
    location: {
      title: 'Venue',
      venue: 'San Diego, California',
      address: 'Exact location to be announced soon.',
      city: 'San Diego, CA, USA',
      note: 'Registered attendees will receive the exact address via email.',
      view: 'View Area on Google Maps',
    },
    footer: {
      copyright: 'All rights reserved.',
      privacy: 'Privacy Policy',
      developer: 'Developed by Romanow Web Studio',
    },
    cookie: {
      text: 'We use cookies to ensure you get the best experience on our website.',
      accept: 'Accept',
    },
    privacy: {
      title: 'Privacy Policy',
      content: 'This Privacy Policy describes how Women Who Inspire collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site. We collect Device Information and Order Information to process your tickets and improve our event services. We do not share your personal information with third parties for marketing purposes without your consent. By using our site, you agree to the collection and use of information in accordance with this policy.',
    },
  },
  uk: {
    nav: {
      home: 'Головна',
      about: 'Про подію',
      program: 'Програма',
      speakers: 'Спікери',
      contact: 'Локація',
      tickets: 'Квитки',
    },
    hero: {
      title: 'Women Who Inspire',
      subtitle: 'Створено жінками, для жінок і про жінок! Українські жінки — це квіти сили, що цвітуть навіть посеред штормів.',
      date: '10 Січня 2026 · 09:00 - 17:00',
      location: 'Сан-Дієго, Каліфорнія',
      cta: 'Зареєструватися',
    },
    about: {
      title: 'Про подію',
      description: '"Women Who Inspire" — це подія, створена жінками, для жінок і про жінок! Це унікальна можливість зустріти неймовірних українських жінок, які пройшли свій шлях. Нагадайте собі, що "з тобою все так" і "ти не одна". Тут ви знайдете крила та натхнення.',
      highlights: [
        { title: 'Натхнення', desc: 'Почуйте неймовірні історії та отримайте дозу мотивації.', icon: 'Sparkles' },
        { title: 'Єднання', desc: 'Потужний нетворкінг серед українських жінок у США.', icon: 'HeartHandshake' },
        { title: 'Все для тебе', desc: 'Стилісти, косметологи, фотозони та подарунки.', icon: 'Gift' },
      ],
    },
    program: {
      title: 'Що очікувати',
      items: [
        { time: '09:00 - 10:00', title: 'Реєстрація', description: 'Зустріч гостей та реєстрація.' },
        { time: '10:30 - 11:30', title: 'Перший спікер', description: 'Натхнення та історія успіху.' },
        { time: '11:45 - 12:45', title: 'Другий спікер', description: 'Мотивація та інсайти.' },
        { time: '13:20 - 14:30', title: 'Панельна дискусія (4 Спікери)', description: 'Досвід трансформації.' },
        { time: '14:40 - 15:40', title: '3й спікер', description: 'Розширення можливостей.' },
        { time: '16:00 - 17:00', title: 'Заключна частина від організаторів', description: 'Завершення події.' },
      ],
    },
    speakers: {
      title: 'Наші Спікери',
      items: [
        { id: '1', name: 'Олена Шевченко', role: 'Активістка та Лідерка', bio: 'Голос за права людини та рівність.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500' },
        { id: '2', name: 'Марія Коваленко', role: 'Підприємиця', bio: 'Засновниця "Tech for Good" Global.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500' },
        { id: '3', name: 'Світлана Бондаренко', role: 'Художниця', bio: 'Використовує творчість для натхнення.', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400&h=500' },
        { id: '4', name: 'Ірина Петренко', role: 'Психолог', bio: 'Експерт з ментального здоров\'я.', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=400&h=500' },
        { id: '5', name: 'Тетяна Мельник', role: 'Інноватор', bio: 'CEO FutureStartups.', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=500' },
        { id: '6', name: 'Оксана Бойко', role: 'Громадська діячка', bio: 'Будує спільноти та підтримує жінок.', image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400&h=500' },
      ],
    },
    sponsors: {
      title: 'Наші Спонсори',
      items: SPONSORS_DATA,
    },
    location: {
      title: 'Локація',
      venue: 'Сан-Дієго, Каліфорнія',
      address: 'Точна адреса буде оголошена згодом.',
      city: 'Сан-Дієго, США',
      note: 'Зареєстровані учасники отримають точну адресу електронною поштою.',
      view: 'Подивитися на карті',
    },
    footer: {
      copyright: 'Всі права захищено.',
      privacy: 'Політика конфіденційності',
      developer: 'Розроблено Romanow Web Studio',
    },
    cookie: {
      text: 'Ми використовуємо cookie, щоб забезпечити найкращий досвід користування нашим сайтом.',
      accept: 'Прийняти',
    },
    privacy: {
      title: 'Політика конфіденційності',
      content: 'Ця Політика конфіденційності описує, як Women Who Inspire збирає, використовує та розкриває вашу особисту інформацію, коли ви відвідуєте або робите покупку на Сайті. Ми збираємо інформацію про пристрій та інформацію про замовлення для обробки ваших квитків та покращення наших послуг. Ми не передаємо вашу особисту інформацію третім особам для маркетингових цілей без вашої згоди. Використовуючи наш сайт, ви погоджуєтесь зі збором та використанням інформації відповідно до цієї політики.',
    },
  },
};