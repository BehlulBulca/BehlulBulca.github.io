import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ProjectDetailPage.css';

// Örnek proje verileri (normalde bir API'den veya merkezi bir state'ten gelir)
// Şimdilik ProjectsPage'deki gibi ID bazlı çeviri anahtarları kullanacağız.
const projectDetailsData = {
  1: {
    // Daha detaylı içerik buraya eklenecek
    imageUrl: '/project1 background.jpg', // Updated image URL
    technologies: ['React', 'Vite', 'i18next', 'React Router', 'CSS'], // Updated technologies for portfolio project
    liveLink: 'https://BehlulBulca.github.io/', // Corrected live link
    githubLink: 'https://github.com/BehlulBulca/BehlulBulca.github.io', // Corrected GitHub link
  },
  2: {
    imageUrl: '/project2 background.jpg', // Updated image URL for Project 2
    technologies: ['Python', 'Flask', 'TensorFlow', 'Keras', 'Optuna', 'SQLite', 'Peewee', 'Pandas', 'NumPy', 'Scikit-learn', 'yfinance'],
    liveLink: '#',
    githubLink: '#',
  },
  // Diğer projeler için detaylar...
};

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const { t } = useTranslation();

  const project = projectDetailsData[projectId];

  // Proje bulunamazsa veya yükleniyorsa bir mesaj göster
  if (!project) {
    return <div className="project-detail-page"><p>{t('projectDetailPage.loading', { projectId })}</p></div>;
  }

  // Çevirilerden proje başlığını ve detaylı açıklamasını al
  const projectTitle = t(`projectsPage.projectData.project${projectId}_title`);
  const projectLongDescription = t(`projectDetailPage.project${projectId}_longDescription`);

  // Split the long description into paragraphs
  const descriptionParagraphs = projectLongDescription.split('\n').filter(para => para.trim() !== '');

  return (
    <div className="project-detail-page">
      <div className="project-detail-content-box">
        <h1>{projectTitle}</h1>
        <img src={project.imageUrl} alt={projectTitle} className="project-detail-image" />
        
        <div className="project-detail-body">
          <h2>{t('projectDetailPage.aboutTitle')}</h2>
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="project-technologies-detail">
          <h3>{t('projectsPage.card.technologiesLabel')}</h3> {/* ProjectsPage'den anahtar kullanıldı */}
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="project-links-detail">
          {project.liveLink && project.liveLink !== '#' && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
              {t('projectsPage.card.liveDemoButton')} {/* ProjectsPage'den anahtar kullanıldı */}
            </a>
          )}
          {project.githubLink && project.githubLink !== '#' && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
              {t('projectsPage.card.githubButton')} {/* ProjectsPage'den anahtar kullanıldı */}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
