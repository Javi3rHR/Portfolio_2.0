import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const experiences = t('experience.jobs', { returnObjects: true }) as Array<{
    company: string;
    position: string;
    period: string;
    description: string;
    tasks: string[];
  }>;

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">{t('experience.title')}</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-10 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">{exp.company}</h3>
          <p className="text-xl text-gray-700 mb-2">{exp.position}</p>
          <p className="text-gray-600 mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            {exp.period}
          </p>
          <p className="text-gray-700 mb-4">{exp.description}</p>
          <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
            <Briefcase className="w-5 h-5 mr-2" />
            Responsabilidades:
          </h4>
          <ul className="list-disc pl-5 space-y-2">
            {exp.tasks.map((task, taskIndex) => (
              <li key={taskIndex} className="text-gray-700">{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;