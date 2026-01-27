import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AssessmentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssessmentPopup: React.FC<AssessmentPopupProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const scriptSrc = "https://link.msgsndr.com/js/form_embed.js";
      let scriptElement: HTMLScriptElement | null = null;

      // Only inject script if not already present
      if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
        scriptElement = document.createElement('script');
        scriptElement.src = scriptSrc;
        scriptElement.async = true;
        document.body.appendChild(scriptElement);
      }

      return () => {
        document.body.style.overflow = 'unset';
        // Only remove if we created it
        if (scriptElement && document.body.contains(scriptElement)) {
          document.body.removeChild(scriptElement);
        }
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-full h-full flex-grow overflow-y-auto bg-white">
              <div className="min-h-[700px]">
                <iframe
                  src="https://link.apisystem.tech/widget/form/7dJgZBgSUeZ8FNG12Yzk"
                  style={{ width: '100%', height: '100%', minHeight: '700px', border: 'none', borderRadius: '0px' }}
                  id="popup-7dJgZBgSUeZ8FNG12Yzk"
                  title="Assessment Form"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AssessmentPopup;