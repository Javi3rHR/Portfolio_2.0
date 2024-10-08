import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">{t('about.title')}</h2>
      <p className="text-xl leading-relaxed text-gray-700">
        {t('about.description')}
      </p>
    </section>
  );
};

export default About;