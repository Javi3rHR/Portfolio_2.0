import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Database, FileJson, GitBranch, Layers, TestTube, Server, Workflow } from 'lucide-react';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const skills = t('skills.list', { returnObjects: true }) as string[];

  const getIcon = (skill: string) => {
    switch (skill.toLowerCase()) {
      case 'java':
      case 'spring boot':
        return <Code className="w-5 h-5 mr-2" />;
      case 'sql (oracle, sql server)':
      case 'jpa':
        return <Database className="w-5 h-5 mr-2" />;
      case 'react':
      case 'angular':
        return <Layers className="w-5 h-5 mr-2" />;
      case 'git':
        return <GitBranch className="w-5 h-5 mr-2" />;
      case 'clean architecture':
        return <Workflow className="w-5 h-5 mr-2" />;
      case 'tdd':
      case 'junit':
      case 'mockito':
        return <TestTube className="w-5 h-5 mr-2" />;
      case 'jenkins':
      case 'jboss':
        return <Server className="w-5 h-5 mr-2" />;
      case 'rest':
      case 'soap':
        return <FileJson className="w-5 h-5 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">{t('skills.title')}</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span key={index} className="flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-300">
            {getIcon(skill)}
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;