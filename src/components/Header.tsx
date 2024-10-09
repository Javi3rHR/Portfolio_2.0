import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

const Header: React.FC = () => {
  const { t } = useTranslation();

  const handleDownloadCV = () => {
    // Replace 'path_to_your_cv.pdf' with the actual path to your CV file
    const link = document.createElement('a');
    link.href = '/path_to_your_cv.pdf';
    link.download = 'Javier_Herreros_Rodriguez_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-14">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">{t('header.name')}</h1>
        <h2 className="text-3xl mb-6">{t('header.title')}</h2>
        <p className="text-xl mb-6">{t('header.location')}</p>
        <div className="flex flex-wrap gap-6 mb-6">
          <a href="mailto:javi3rhr@gmail.com" className="flex items-center hover:text-blue-200 transition-colors duration-300">
            <Mail className="w-6 h-6 mr-2" />
            javi3rhr@gmail.com
          </a>
          <a href="https://github.com/Javi3rHR" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-200 transition-colors duration-300">
            <Github className="w-6 h-6 mr-2" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/javier-herreros-rodríguez-459b51239/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-200 transition-colors duration-300">
            <Linkedin className="w-6 h-6 mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
