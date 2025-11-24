import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Language, Content } from './types';
import { CONTENT } from './constants';
import Layout from './components/Layout';
import Home from './pages/Home';

// Language Context
interface LangContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content;
}

const LanguageContext = createContext<LangContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  console.log(React); // додаємо, щоб React вважався "використаним"

  const value = {
    lang,
    setLang,
    content: CONTENT[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageContext.Provider>
  );
}
