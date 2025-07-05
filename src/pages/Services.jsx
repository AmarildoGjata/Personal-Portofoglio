import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BiCodeAlt, BiServer, BiGitBranch, BiMobileAlt } from "react-icons/bi";
import IconContainer from "../components/IconContainer";

const services = [
  {
    icon: <BiCodeAlt className="text-4xl text-[var(--main-color)] mb-4" />,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces using HTML, CSS, JavaScript, TypeScript, and React Framework for seamless user experiences.",
  },
  {
    icon: <BiServer className="text-4xl text-[var(--main-color)] mb-4" />,
    title: "Backend Development",
    description:
      "Creating robust server-side applications with Python, Django, Express, and Node.js, including API development and database management with MongoDB, SQLite, PostgreSQL, and SQL.",
  },
  {
    icon: <BiGitBranch className="text-4xl text-[var(--main-color)] mb-4" />,
    title: "Version Control & Collaboration",
    description:
      "Utilizing Git and GitHub for efficient version control, code collaboration, and project management in development workflows.",
  },
  {
    icon: <BiMobileAlt className="text-4xl text-[var(--main-color)] mb-4" />,
    title: "Responsive Web Design",
    description:
      "Designing mobile-friendly websites that adapt to various devices, ensuring accessibility and optimal performance across platforms.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white font-serif">
      <section className="px-[9%] pt-24 pb-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-[var(--main-color)] mb-12 text-center animate-fadeIn">
          My Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl border-2 border-[var(--main-color)] text-center hover:scale-105 hover:shadow-[0_0_20px_#7cf03d] transition-transform duration-300 ease-in-out"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {service.icon}
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 flex justify-center space-x-6">
        <IconContainer
          link="https://www.facebook.com/share/16NTYmtgfq/"
          ariaLabel="Visit Amarildo's Facebook profile"
        >
          <FaFacebookF className="text-xl" />
        </IconContainer>
        <IconContainer
          link="https://www.linkedin.com/in/amarildo-gjata-535a1783"
          ariaLabel="Visit Amarildo's LinkedIn profile"
        >
          <FaLinkedinIn className="text-xl" />
        </IconContainer>
        <IconContainer
          link="https://github.com/AmarildoGjata"
          ariaLabel="Visit Amarildo's GitHub profile"
        >
          <FaGithub className="text-xl" />
        </IconContainer>
      </div>
    </div>
  );
};

export default Services;
