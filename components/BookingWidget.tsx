import React, { useEffect } from 'react';

const BookingWidget: React.FC = () => {
  useEffect(() => {
    const scriptSrc = "https://link.msgsndr.com/js/form_embed.js";
    let scriptElement: HTMLScriptElement | null = null;

    // Check if script already exists
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      scriptElement = document.createElement('script');
      scriptElement.src = scriptSrc;
      scriptElement.type = "text/javascript";
      scriptElement.async = true;
      document.body.appendChild(scriptElement);
    }

    return () => {
      // Only remove if we created it
      if (scriptElement && document.body.contains(scriptElement)) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <div className="w-full h-[800px] bg-white rounded-xl overflow-hidden">
      <iframe 
        src="https://api.leadconnectorhq.com/widget/booking/I6UK9wzN8BAAt1ZzmXii" 
        style={{ width: '100%', border: 'none', overflow: 'hidden', height: '100%' }} 
        scrolling="no" 
        id="I0vLuIRAAxMZVzFtFaxr_1763558380374"
        title="Booking Calendar"
      />
    </div>
  );
};

export default BookingWidget;