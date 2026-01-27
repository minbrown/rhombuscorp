import React, { useEffect } from 'react';

const ContactFormWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[600px]">
        <iframe 
            src="https://link.apisystem.tech/widget/form/zIIgZHgSL6zBRGD12YAz" 
            style={{width:'100%', height:'100%', border:'none', borderRadius:'0px', minHeight: '724px'}}
            id="inline-zIIgZHgSL6zBRGD12YAz" 
            data-layout="{'id':'INLINE'}" 
            data-trigger-type="alwaysShow" 
            data-trigger-value="" 
            data-activation-type="alwaysActivated" 
            data-activation-value="" 
            data-deactivation-type="neverDeactivate" 
            data-deactivation-value="" 
            data-form-name="Get a Free Assessment Button Popup form" 
            data-height="724" 
            data-layout-iframe-id="inline-zIIgZHgSL6zBRGD12YAz" 
            data-form-id="zIIgZHgSL6zBRGD12YAz" 
            title="Get a Free Assessment Button Popup form"
        />
    </div>
  );
};

export default ContactFormWidget;
