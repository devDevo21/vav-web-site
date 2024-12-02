import React from 'react';

const WhatsAppFloatingButton = () => {
  const whatsappNumber = '+79191743605'; // Remplacez par votre numéro WhatsApp (format international sans le "+")

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // Icône officielle de WhatsApp
        alt="WhatsApp"
        style={{ width: '35px', height: '35px' }}
      />
    </a>
  );
};

export default WhatsAppFloatingButton;
