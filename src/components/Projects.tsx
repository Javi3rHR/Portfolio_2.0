import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projects = t('projects.list', { returnObjects: true }) as Array<{
    name: string;
    description: string;
    links: Array<{ text: string; url: string }>;
  }>;

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">{t('projects.title')}</h2>
      {projects.map((project, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">{project.name}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <div className="space-y-2">
            {project.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                {link.text}
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;