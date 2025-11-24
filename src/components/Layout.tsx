import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { Menu, X, Globe, Ticket } from 'lucide-react';
import PrivacyModal from './PrivacyModal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { content, lang, setLang } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'uk' : 'en');
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll Spy to highlight active menu item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'program', 'speakers', 'location'];
      const scrollPosition = window.scrollY + 150; // Offset for header

      let currentSection = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
      
      // Clear active state if at very top
      if (window.scrollY < 50) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavLinkClass = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    // Active: Text Accent (Amber), Inactive: Gray-300 -> White
    return `text-sm font-bold tracking-wide transition-all duration-300 relative group ${
      isActive ? 'text-accent' : 'text-gray-300 hover:text-white'
    }`;
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-white">
      {/* Header - Floating Dark Glass Capsule */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <header className="pointer-events-auto w-full max-w-5xl bg-gray-900/80 backdrop-blur-xl border border-white/10 shadow-2xl text-white rounded-full px-5 py-3 md:px-8 md:py-4 flex items-center justify-between transition-all duration-300">
          
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
            className="text-lg md:text-xl font-bold tracking-tight text-white hover:text-accent transition-colors"
          >
            Women Who Inspire
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className={getNavLinkClass('about')}>
              {content.nav.about}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ${activeSection === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button onClick={() => scrollToSection('program')} className={getNavLinkClass('program')}>
              {content.nav.program}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ${activeSection === 'program' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button onClick={() => scrollToSection('speakers')} className={getNavLinkClass('speakers')}>
              {content.nav.speakers}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ${activeSection === 'speakers' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button onClick={() => scrollToSection('location')} className={getNavLinkClass('location')}>
              {content.nav.contact}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ${activeSection === 'location' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            
            <div className="h-4 w-px bg-white/20"></div>

            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-xs font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
            >
              <Globe size={14} />
              {lang}
            </button>
            
            <a 
              href="https://www.eventbrite.com/e/1938436097549" 
              target="_blank" 
              rel="noreferrer"
              className="bg-accent hover:bg-white hover:text-secondary text-secondary px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-2 shadow-lg transform hover:-translate-y-0.5"
            >
              <Ticket size={14} />
              {content.nav.tickets}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLang}
              className="text-[10px] font-bold border border-white/20 rounded px-1.5 py-0.5 uppercase text-gray-300"
            >
              {lang}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors p-1"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="pointer-events-auto md:hidden absolute top-full mt-2 w-[calc(100%-2rem)] max-w-sm bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl overflow-hidden animate-fade-in z-40">
            <nav className="flex flex-col p-4 gap-1">
              <button onClick={() => scrollToSection('about')} className={`text-left text-lg font-medium py-3 px-4 rounded-xl transition-colors ${activeSection === 'about' ? 'bg-white/10 text-accent' : 'text-gray-200 hover:bg-white/5'}`}>{content.nav.about}</button>
              <button onClick={() => scrollToSection('program')} className={`text-left text-lg font-medium py-3 px-4 rounded-xl transition-colors ${activeSection === 'program' ? 'bg-white/10 text-accent' : 'text-gray-200 hover:bg-white/5'}`}>{content.nav.program}</button>
              <button onClick={() => scrollToSection('speakers')} className={`text-left text-lg font-medium py-3 px-4 rounded-xl transition-colors ${activeSection === 'speakers' ? 'bg-white/10 text-accent' : 'text-gray-200 hover:bg-white/5'}`}>{content.nav.speakers}</button>
              <button onClick={() => scrollToSection('location')} className={`text-left text-lg font-medium py-3 px-4 rounded-xl transition-colors ${activeSection === 'location' ? 'bg-white/10 text-accent' : 'text-gray-200 hover:bg-white/5'}`}>{content.nav.contact}</button>
              <div className="pt-3 mt-2 border-t border-white/10">
                <a 
                  href="https://www.eventbrite.com/e/1938436097549" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-accent text-secondary text-center py-3 rounded-xl font-bold w-full flex justify-center items-center gap-2 shadow-md active:scale-95 transition-transform"
                >
                  <Ticket size={18} />
                  {content.nav.tickets}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Women Who Inspire</h2>
          <p className="text-purple-200 mb-8">{content.hero.date} • {content.hero.location}</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-sm text-purple-300 items-center">
             <span>© {new Date().getFullYear()} Women Who Inspire</span>
             <span className="hidden md:inline">|</span>
             <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white underline transition-colors focus:outline-none">{content.footer.privacy}</button>
          </div>
          
          <div className="mt-8 text-xs text-purple-400 border-t border-purple-800 pt-6">
            <a href="https://rvvs.us/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              {content.footer.developer}
            </a>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
};

export default Layout;