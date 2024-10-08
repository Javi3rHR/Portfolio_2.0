import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const languages = t('footer.languages.list', { returnObjects: true }) as Array<{
    language: string;
    level: string;
  }>;

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">{t('footer.copyright')}</p>
          <div>
            <h3 className="font-semibold mb-2 text-center md:text-right">{t('footer.languages.title')}</h3>
            <ul className="text-center md:text-right">
              {languages.map((lang, index) => (
                <li key={index}>
                  {lang.language}: {lang.level}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;