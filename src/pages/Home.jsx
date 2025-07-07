import { memo } from 'react';
import main_photo from '../assets/main_photo.jpg';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import IconContainer from '../components/IconContainer';
import Amarildo_Gjata_CV from '../assets/Amarildo_Gjata.pdf';
import CostumButton from '../components/CostumButton';

const Home = () => {
  return (
    <section className="relative bg-black text-white font-serif min-h-screen flex flex-col items-center justify-center p-6 md:p-12 lg:p-20">
      <div className="flex flex-col items-center text-center animate-fadeIn">
        <img
          src={main_photo}
          alt="Amarildo Gjata's profile photo"
          className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full shadow-xl mb-6 hover:scale-105 transition-transform duration-300"
          loading="lazy"
          fetchpriority="high"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--main-color)]">
          Amarildo Gjata
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 mt-2">
          Junior FullStack Developer
        </h2>
      </div>

      <div className="mt-12 w-full max-w-3xl bg-gray-900 rounded-xl shadow-lg p-8 hover:scale-[1.02] transition-transform duration-300">
        <h3 className="text-xl md:text-2xl font-semibold text-[var(--main-color)] mb-4 text-center">
          About Me
        </h3>
        <ul className="text-base md:text-lg text-gray-200 space-y-2 list-none text-center">
          <li>Building engaging, responsive web apps with <strong>JavaScript</strong>, <strong>React</strong>, <strong>HTML</strong>, and <strong>CSS</strong>.</li>
          <li>Creating robust APIs using <strong>Express</strong>, <strong>Django</strong>, and <strong>Python</strong>.</li>
          <li>Managing data efficiently with <strong>PostgreSQL</strong> and <strong>MySQL</strong>.</li>
          <li>Collaborating seamlessly with <strong>Git</strong>, <strong>Postman</strong>, and <strong>Swagger</strong>.</li>
          <li>Ready to contribute to innovative projects—let's create something amazing!</li>
        </ul>
      </div>

      <div className="mt-12 w-full max-w-3xl flex flex-col md:flex-row items-center justify-between gap-6">
        <a
          href={Amarildo_Gjata_CV}
          download="Amarildo_Gjata_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Amarildo Gjata's CV"
          className="hover:scale-105 hover:shadow-[0_0_20px_var(--main-color)] transition-all duration-300"
        >
          <CostumButton
            title="Download CV"
            className="bg-[var(--main-color)] text-black px-6 py-3 rounded-lg hover:bg-black hover:text-[var(--main-color)] border-2 border-[var(--main-color)] transition-colors duration-300"
          />
        </a>

        <div className="flex gap-6">
          <IconContainer
            link="https://www.facebook.com/share/16NTYmtgfq/"
            ariaLabel="Visit Amarildo's Facebook profile"
          >
            <FaFacebookF className="text-2xl hover:text-[var(--main-color)] hover:scale-110 hover:shadow-[0_0_10px_var(--main-color)] transition-all duration-300" />
          </IconContainer>
          <IconContainer
            link="https://www.linkedin.com/in/amarildo-gjata-535a1783"
            ariaLabel="Visit Amarildo's LinkedIn profile"
          >
            <FaLinkedinIn className="text-2xl hover:text-[var(--main-color)] hover:scale-110 hover:shadow-[0_0_10px_var(--main-color)] transition-all duration-300" />
          </IconContainer>
          <IconContainer
            link="https://github.com/AmarildoGjata"
            ariaLabel="Visit Amarildo's GitHub profile"
          >
            <FaGithub className="text-2xl hover:text-[var(--main-color)] hover:scale-110 hover:shadow-[0_0_10px_var(--main-color)] transition-all duration-300" />
          </IconContainer>
        </div>
      </div>
    </section>
  );
};

export default memo(Home);