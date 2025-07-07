import { memo } from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import IconContainer from '../components/IconContainer';
import Box from '../components/Box';
import Education from '../components/Education';

const About = () => {
  const skills = [
    { property: 'Front-End', value: 'JavaScript, React, HTML, CSS' },
    { property: 'Back-End', value: 'Express, Django, Node.js' },
    { property: 'Databases', value: 'PostgreSQL, MongoDB' },
    { property: 'Tools', value: 'Git, Postman, Swagger' },
  ];

  return (
    <section className="min-h-screen bg-black text-white font-serif flex flex-col items-center p-6 md:p-12 lg:p-16">
      <h1 className="text-4xl md:text-5xl font-bold text-[var(--main-color)] mb-10 text-center animate-fadeIn">
        About Me
      </h1>

      <div className="w-full max-w-3xl flex flex-col gap-6">
        <div className="bg-gray-900 p-6 rounded-xl border-2 border-[var(--main-color)] shadow-md hover:shadow-xl hover:bg-green-900 hover:text-black transition-all duration-300 ease-in-out">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--main-color)] mb-4">
            Amarildo Gjata
          </h2>
          <p className="text-base md:text-lg text-gray-200">
            I'm a Junior Full-Stack Developer passionate about building responsive, user-friendly web applications. Proficient in the MERN stack and Python frameworks, I focus on creating scalable solutions and thrive in collaborative, innovative environments.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border-2 border-[var(--main-color)] shadow-md hover:shadow-xl hover:bg-green-900 hover:text-black transition-all duration-300 ease-in-out">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--main-color)] mb-4">
            My Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((skill, index) => (
              <Box
                key={skill.property}
                property={skill.property}
                value={skill.value}
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border-2 border-[var(--main-color)] shadow-md hover:shadow-xl hover:bg-green-900 hover:text-black transition-all duration-300 ease-in-out">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--main-color)] mb-4">
            Education
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Education
              level="Bachelor's in Computer Science"
              years="2018 - 2022"
              description="Graduated from Metropolitan University, focusing on Computer Science and Networking."
            />
            <Education
              level="Web Development Bootcamp"
              years="2024 - 2025"
              description="Completed an intensive certification covering full-stack development with Python, Django, and PostgreSQL. Ongoing certification in MERN Stack."
            />
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-6">
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
    </section>
  );
};

export default memo(About);