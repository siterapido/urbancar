import React, { useState, useEffect } from 'react';
import { FiSmartphone, FiX } from 'react-icons/fi';
import './FloatingDownloadButton.css';

export const FloatingDownloadButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Show button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    window.open('https://play.google.com/store/apps/details?id=ikKpss.urbancar&pli=1', '_blank');
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleExpand = () => {
    setIsMinimized(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`floating-download ${isMinimized ? 'floating-download--minimized' : ''}`}>
      {isMinimized ? (
        <button 
          className="floating-download__expand"
          onClick={handleExpand}
          aria-label="Expandir botão de download"
        >
          <FiSmartphone />
        </button>
      ) : (
        <div className="floating-download__card">
          <button 
            className="floating-download__close"
            onClick={handleMinimize}
            aria-label="Minimizar"
          >
            <FiX />
          </button>
          
          <div className="floating-download__content">
            <div className="floating-download__icon">
              <img 
                src="/Imagens/logo-urbancar.png" 
                alt="UrbanCar" 
                className="floating-download__logo"
              />
            </div>
            <div className="floating-download__text">
              <h4>UrbanCar</h4>
              <p>Baixe o app e comece agora!</p>
            </div>
          </div>
          
          <button 
            className="floating-download__button"
            onClick={handleDownload}
          >
            <FiSmartphone />
            Baixar App
          </button>
        </div>
      )}
    </div>
  );
};