import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const { t } = useTranslation();
  const schools = t('education.schools', { returnObjects: true }) as Array<{
    name: string;
    period: string;
    degree: string;
    field: string;
  }>;

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">{t('education.title')}</h2>
      {schools.map((school, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-2">
            <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
            <h3 className="text-2xl font-semibold text-blue-600">{school.name}</h3>
          </div>
          <p className="text-gray-600 mb-2">{school.period}</p>
          <p className="text-gray-700">{school.degree}</p>
          <p className="text-gray-700 font-medium">{school.field}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;