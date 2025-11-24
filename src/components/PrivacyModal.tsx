import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../App';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const { content } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col relative animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-secondary">{content.privacy.title}</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto">
          <div className="prose prose-purple max-w-none text-gray-700 font-sans">
            <p className="leading-relaxed whitespace-pre-line mb-4">
              {content.privacy.content}
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Cookies</h3>
            <p className="mb-4">
              {content.cookie.text}
            </p>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Contact</h3>
            <p>
              For more information about our privacy practices, please contact us via the Eventbrite organizer profile.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;