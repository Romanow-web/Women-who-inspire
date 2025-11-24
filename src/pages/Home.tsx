import React, { useState, useEffect } from 'react';
import { useLanguage } from '../App';
import { Mic, Users, Star, MapPin, Calendar, Clock, ArrowRight, Ticket, ChevronLeft, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const { content } = useLanguage();
  
  // Speakers Carousel State
  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(0);
  const [speakersPerPage, setSpeakersPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSpeakersPerPage(3);
      } else if (window.innerWidth >= 768) {
        setSpeakersPerPage(2);
      } else {
        setSpeakersPerPage(1);
      }
    };
    
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSpeakers = content.speakers.items.length;
  
  const nextSlide = () => {
    setCurrentSpeakerIndex((prev) => 
      prev + 1 > totalSpeakers - speakersPerPage ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSpeakerIndex((prev) => 
      prev - 1 < 0 ? totalSpeakers - speakersPerPage : prev - 1
    );
  };

  const iconMap: Record<string, React.ReactNode> = {
    Mic: <Mic className="text-accent" size={32} />,
    Users: <Users className="text-primary" size={32} />,
    Star: <Star className="text-secondary" size={32} />,
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-secondary text-white overflow-hidden pt-20">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block border border-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6 shadow-lg">
            {content.hero.date}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-md">
            {content.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto font-medium">
            {content.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="https://www.eventbrite.com/e/1938436097549"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-accent text-secondary rounded-full text-lg font-bold shadow-xl hover:bg-white hover:text-secondary transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2"
            >
              <Ticket size={22} />
              {content.hero.cta}
            </a>
            <div className="flex items-center gap-2 text-sm md:text-base font-semibold bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20">
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

      {/* Program Section */}
      <section id="program" className="py-24 bg-light/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-12 text-center">{content.program.title}</h2>
          
          <div className="space-y-4">
            {content.program.items.map((item, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 md:items-center hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="min-w-[110px] flex items-center gap-2 text-primary font-bold text-lg">
                  <Clock size={20} />
                  {item.time}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-500 font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.eventbrite.com/e/1938436097549"
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-10 py-4 bg-primary text-white rounded-full text-lg font-bold shadow-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105 items-center gap-2"
            >
              <Ticket size={20} />
              {content.nav.tickets}
            </a>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 max-w-6xl mx-auto gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary text-center md:text-left w-full md:w-auto">{content.speakers.title}</h2>
            
            {/* Carousel Controls */}
            <div className="hidden md:flex gap-3">
              <button onClick={prevSlide} className="p-3 rounded-full border border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-all">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="p-3 rounded-full border border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="overflow-hidden py-4">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSpeakerIndex * (100 / speakersPerPage)}%)` }}
              >
                {content.speakers.items.map((speaker) => (
                  <div 
                    key={speaker.id} 
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / speakersPerPage}%` }}
                  >
                    <div className="group text-center h-full">
                      {/* Rectangular Image with Rounded Corners */}
                      <div className="relative w-full aspect-[3/4] mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                        <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                           <span className="text-white font-bold tracking-wide">View Profile</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                      <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">{speaker.role}</p>
                      <p className="text-gray-500 font-medium leading-relaxed">{speaker.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden justify-center gap-6 mt-8">
              <button onClick={prevSlide} className="p-4 rounded-full bg-gray-50 border border-gray-100 hover:bg-primary hover:text-white transition-all shadow-md active:scale-95">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="p-4 rounded-full bg-gray-50 border border-gray-100 hover:bg-primary hover:text-white transition-all shadow-md active:scale-95">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section - Redesigned for Visibility */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
           <div className="inline-block border border-primary/20 bg-primary/5 px-4 py-2 rounded-full mb-10">
              <h3 className="text-sm font-bold text-primary tracking-[0.2em] uppercase">{content.sponsors.title}</h3>
           </div>
           
           <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
             {content.sponsors.items.map((sponsor) => (
                <a 
                   key={sponsor.id} 
                   href={sponsor.url || '#'} 
                   target="_blank" 
                   rel="noreferrer"
                   className="group flex flex-col items-center gap-4 transition-transform hover:-translate-y-2 duration-300"
                >
                   {/* Large Round Logo Container - White/Glass Style */}
                   <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl border border-gray-100 group-hover:border-accent group-hover:shadow-2xl transition-all duration-300 bg-white flex items-center justify-center relative">
                      <img 
                         src={sponsor.logo} 
                         alt={sponsor.name} 
                         className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500" 
                      />
                   </div>
                   <span className="text-lg font-bold text-gray-700 group-hover:text-primary transition-colors">{sponsor.name}</span>
                </a>
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
                 View Area on Google Maps <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
            
            <div className="md:w-1/2 w-full h-96 bg-gray-800 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10">
               {/* Embed Google Map for San Diego General Area */}
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