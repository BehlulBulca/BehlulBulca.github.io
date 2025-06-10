import React from 'react';
import { Link } from 'react-router-dom'; // Link import edildi
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './ProjectsPage.css'; // Güncellenmiş CSS dosyasını import et

const ProjectsPage = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  // Proje verileri artık ID ve diğer değişmeyen bilgileri içerecek.
  // Başlık ve açıklama gibi çevrilecek metinler t() fonksiyonu ile alınacak.
  const projects = [
    {
      id: 1,
      // title ve description kaldırıldı, t() ile alınacak
      technologies: ['React', 'Vite', 'JavaScript', 'CSS', 'i18next', 'React Router'], // Updated technologies for portfolio project
      imageUrl: '/project1 background.jpg', // Updated image URL for the card
      liveLink: 'https://BehlulBulca.github.io/', // Live link for the portfolio itself
      githubLink: 'https://github.com/BehlulBulca/BehlulBulca.github.io', // Corrected GitHub link for project 1
    },
    {
      id: 2,
      // title ve description kaldırıldı, t() ile alınacak
      technologies: ['Python', 'Flask', 'Peewee ORM', 'SQLite', 'yfinance', 'Optuna', 'LSTM', 'HTML/CSS/JS (Frontend)'],
      imageUrl: '/project2 background.jpg', // Updated image URL for Project 2
      liveLink: '#', // Placeholder
      githubLink: '#', // Placeholder
    },
    // Buraya daha fazla proje ekleyebilirsiniz (sadece id ve diğer sabit bilgilerle)
  ];

  return (
    <div className="projects-page">
      <h1>{t('projectsPage.title')}</h1>
      <p className="projects-intro">
        {t('projectsPage.intro')}
      </p>

      <div className="projects-grid">
        {projects.map((project) => {
          const projectTitle = t(`projectsPage.projectData.project${project.id}_title`);
          const projectDescription = t(`projectsPage.projectData.project${project.id}_description`);
          return (
            // Proje kartını Link bileşeni ile sarmala
            <Link to={`/projects/${project.id}`} key={project.id} className="project-card-link">
              <div className="project-card">
                <img src={project.imageUrl} alt={projectTitle} className="project-image" />
                <div className="project-content">
                  <h2>{projectTitle}</h2>
                  <p className="project-description">{projectDescription}</p>
                  <div className="project-technologies">
                    <strong>{t('projectsPage.card.technologiesLabel')}</strong>
                    <ul>
                      {project.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-links">
                    {project.liveLink && project.liveLink !== '#' && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        {t('projectsPage.card.liveDemoButton')}
                      </a>
                    )}
                    {project.githubLink && project.githubLink !== '#' && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                        {t('projectsPage.card.githubButton')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
