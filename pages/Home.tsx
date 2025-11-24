import React, { useState, useEffect } from 'react';
import { useLanguage } from '../App';
import { Sparkles, HeartHandshake, Gift, MapPin, Calendar, Map, Ticket } from 'lucide-react';

const Home: React.FC = () => {
  const { content } = useLanguage();
  
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-10T09:00:00-08:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        if (timer) clearInterval(timer);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, '0'),
        hours: String(h).padStart(2, '0'),
        minutes: String(m).padStart(2, '0'),
        seconds: String(s).padStart(2, '0')
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, []);

  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-8 h-8 text-accent" />,
    HeartHandshake: <HeartHandshake className="w-8 h-8 text-primary" />,
    Gift: <Gift className="w-8 h-8 text-secondary" />,
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-secondary text-white overflow-hidden pt-20">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 border border-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6 shadow-lg animate-fade-in hover:scale-105 transition-transform duration-300">
            <Calendar size={16} /> {content.hero.date}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-md">
            {content.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto font-medium">
            {content.hero.subtitle}
          </p>

          <div className="flex justify-center gap-3 md:gap-6 mb-12 text-white">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl w-14 h-14 md:w-20 md:h-20 flex items-center justify-center text-xl md:text-3xl font-bold mb-2 shadow-lg">{timeLeft.days}</div>
              <span className="text-[10px] md:text-xs uppercase tracking-wider opacity-80">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl w-14 h-14 md:w-20 md:h-20 flex items-center justify-center text-xl md:text-3xl font-bold mb-2 shadow-lg">{timeLeft.hours}</div>
              <span className="text-[10px] md:text-xs uppercase tracking-wider opacity-80">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl w-14 h-14 md:w-20 md:h-20 flex items-center justify-center text-xl md:text-3xl font-bold mb-2 shadow-lg">{timeLeft.minutes}</div>
              <span className="text-[10px] md:text-xs uppercase tracking-wider opacity-80">Mins</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl w-14 h-14 md:w-20 md:h-20 flex items-center justify-center text-xl md:text-3xl font-bold mb-2 shadow-lg">{timeLeft.seconds}</div>
              <span className="text-[10px] md:text-xs uppercase tracking-wider opacity-80">Secs</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="https://www.eventbrite.com/e/1938436097549"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-accent text-secondary rounded-full text-lg font-bold shadow-xl hover:bg-white hover:text-secondary transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 min-w-[220px]"
            >
              <Ticket size={20} />
              {content.hero.cta}
            </a>
            <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold bg-white/10 backdrop-blur-md px-6 py-4 rounded-full border border-white/20 min-w-[220px]">
              <MapPin size={18} className="text-accent" />
              <span>{content.hero.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white font-sans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-8">{content.about.title}</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              {content.about.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {content.about.highlights.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-secondary text-white relative overflow-hidden">
         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl relative z-10">
            <div className="md:w-1/2">
               <h2 className="text-4xl md:text-5xl font-bold mb-8">{content.location.title}</h2>
               <div className="space-y-6 text-lg text-purple-100">
                  <div className="flex gap-4">
                    <div className="mt-1 bg-white/10 p-2 rounded-lg h-fit">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white">{content.location.venue}</p>
                      <p className="font-medium opacity-90">{content.location.address}</p>
                      <p className="text-sm opacity-70 mt-1">{content.location.note}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-center mt-6">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Calendar className="text-accent" size={24} />
                    </div>
                    <span className="text-xl font-medium">{content.hero.date}</span>
                  </div>
               </div>
               <a 
                href="https://www.google.com/maps/search/?api=1&query=San+Diego+California" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 mt-10 text-accent font-bold hover:text-white transition-colors text-lg group"
               >
                 {content.location.view} <Map size={20} className="group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
            
            <div className="md:w-1/2 w-full h-96 bg-gray-800 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107577.62534575822!2d-117.26284683050017!3d32.74836691461937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA%2C%20USA!5e0!3m2!1sen!2sua!4v1709900000000!5m2!1sen!2sua" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Event Location"
                className="filter grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;