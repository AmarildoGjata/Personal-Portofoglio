import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import IconContainer from '../components/IconContainer';

const projects = [
  {
    title: 'Car Rental Web Application',
    description: 'Developing a modern web application for car rentals in Albania and Kosovo, enabling users to book cars from local renters in under a minute. The user-friendly platform allows companies to list vehicles with detailed specifications and offers multiple features for customization. Currently integrating an online payment platform to enable seamless booking transactions. Technologies: Python, Django, Django REST Framework, React, TypeScript, PostgreSQL.'
  },
  {
    title: 'Software Quality Assurance - SD Worx Italy',
    description: 'Working as a Quality Assurance specialist for My Area SD Worx, a complex HR and finance software suite with five integrated apps. Responsibilities include designing and executing test plans, creating test cases, bug reporting, documentation, and conducting functional, performance, and regression testing. The software manages employee-related tasks such as wage calculation, daily check-ins, sick leave, annual leave, and new employee registration.'
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="min-h-screen px-[9%] pt-24 pb-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-[var(--main-color)] mb-12 text-center animate-fadeIn">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
          {
            projects.map((project, index) => (
              <div
                key={index}
                className="cursor-pointer bg-gray-900 p-8 rounded-2xl border-2 border-[var(--main-color)] text-center transform hover:scale-105 hover:shadow-[0_0_15px_#7cf03d] transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 text-base">{project.description}</p>
              </div>
            ))
          }
        </div>
      </section>
      <div className="mt-8 flex space-x-4 animate-fadeIn justify-center" style={{ animationDelay: '0.4s' }}>
        <IconContainer link='https://www.facebook.com/share/16NTYmtgfq/' children={<FaFacebookF />} />
        <IconContainer link='https://www.linkedin.com/in/amarildo-gjata-535a1783' children={<FaLinkedinIn />} />
        <IconContainer link='https://github.com/AmarildoGjata' children={<FaGithub />} />
      </div>
    </div>
  );
};

export default Projects;