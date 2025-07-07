import { memo } from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import IconContainer from '../components/IconContainer';

const projects = [
  {
    title: 'Car Rental Web Application',
    url: 'https://eagleeyerent.com/',
    description:
      'Developed a modern web application for car rentals in Albania and Kosovo. Enables users to book cars from local renters in under a minute and companies to list vehicles with detailed specs. Online payment integration is in progress.\n\nTechnologies: Python, Django, DRF, React, TypeScript, PostgreSQL.',
  },
  {
    title: 'Software Quality Assurance - SD Worx Italy',
    description:
      'Worked as a QA specialist on My Area SD Worx, a complex HR and finance software suite. Responsible for test planning, writing test cases, bug tracking, and performing functional, performance, and regression testing.',
  },
  {
    title: 'Furniture & Home Modeling Web App',
    url: 'https://686957db0e652594518b8c58--cute-pasca-13256d.netlify.app/',
    description:
      'Ongoing project for a furniture and home modeling company. Built with TypeScript, Express, React, and MongoDB. Showcases products and services with a modern design aimed at client engagement.',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white font-serif">
      <section className="px-6 md:px-[9%] pt-24 pb-16 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--main-color)] mb-12 text-center animate-fadeIn">
          My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-gray-900 p-6 rounded-2xl border-2 border-[var(--main-color)] hover:scale-105 hover:shadow-[0_0_20px_var(--main-color)] transition-all duration-300 ease-in-out"
              role="article"
              aria-label={project.title}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--main-color)] hover:text-green-400 underline transition-colors duration-200"
                    aria-label={`Visit ${project.title} project`}
                  >
                    {project.title}
                  </a>
                ) : (
                  <span className="text-[var(--main-color)]">{project.title}</span>
                )}
              </h3>
              <p className="text-gray-300 text-base whitespace-pre-line text-justify">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <div className="pb-10 flex justify-center gap-6">
        <IconContainer
          link="https://www.facebook.com/share/16NTYmtgfq/"
          ariaLabel="Visit Amarildo's Facebook profile"
        >
          <FaFacebookF className="text-xl hover:text-[var(--main-color)] hover:scale-110 transition-all duration-300" />
        </IconContainer>
        <IconContainer
          link="https://www.linkedin.com/in/amarildo-gjata-535a1783"
          ariaLabel="Visit Amarildo's LinkedIn profile"
        >
          <FaLinkedinIn className="text-xl hover:text-[var(--main-color)] hover:scale-110 transition-all duration-300" />
        </IconContainer>
        <IconContainer
          link="https://github.com/AmarildoGjata"
          ariaLabel="Visit Amarildo's GitHub profile"
        >
          <FaGithub className="text-xl hover:text-[var(--main-color)] hover:scale-110 transition-all duration-300" />
        </IconContainer>
      </div>
    </div>
  );
};

export default memo(Projects);