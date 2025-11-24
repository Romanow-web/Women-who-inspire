import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Back Button */}
        <div className="mb-8">
           <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold hover:underline transition-all">
             <ArrowLeft size={20} />
             {content.nav.home}
           </Link>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
            {content.privacy.title}
          </h1>
          <div className="prose prose-purple max-w-none text-gray-700">
            <p className="leading-relaxed whitespace-pre-line">
              {content.privacy.content}
            </p>
            {/* Additional placeholder sections for a more complete look */}
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Cookies</h3>
            <p>
              {content.cookie.text}
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Contact</h3>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us via the Eventbrite organizer profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;