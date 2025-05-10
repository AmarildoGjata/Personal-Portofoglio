import main_photo from '../assets/main_photo.png';
import CustomButton from '../components/CostumButton';
import DeveloperCv from '../assets/DeveloperCv.pdf';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import IconContainer from '../components/IconContainer';

const Home = () => {
  return (
    <div className='flex md:flex-row flex-col justify-between items-center bg-black text-white w-full font-serif p-4 md:px-20'>

      <div className='md:ml-15 md:w-1/2 w-full px-8 flex flex-col justify-center'>
        <div className='font-extrabold md:text-[55px] text-[30px]'>Amarildo Gjata</div>
        <div className='font-extrabold md:text-[32px] text-[20px] mb-5'>Junior FullStack Developer</div>
        <p className='font-bold md:text-[16px] sm:text-[12] mb-5'>
        I'm a Junior Full-Stack Developer with a strong foundation in both frontend and backend technologies, currently working as a Quality Assurance Specialist. I have hands-on experience with HTML, CSS, responsive design, Tailwind CSS, React, Python, Django, PostgreSQL, and SQL. I also work with tools like Postman for API testing and Git for version control. Currently, I'm expanding my skills through ongoing training in the MERN stack (MongoDB, Express.js, React, Node.js), aiming to transition into a full-time development role. I'm passionate about building clean, user-friendly applications and continuously improving my technical skill set.
        </p>
        <a href={DeveloperCv} download='DeveloperCv' target='_blank'>
          <CustomButton title='Download CV'/>
        </a>

        <div className='mt-12 lg:w-1/5 md:1/2 w-1/3 flex justify-between'>
            <IconContainer link='https://www.facebook.com/' children={<FaFacebookF />}/>
            <IconContainer link='https://www.linkedin.com/' children={<FaLinkedinIn />}/>
            <IconContainer link='https://github.com/' children={<FaGithub />}/>
        </div>
      </div>

      <div className='md:w-1/2 flex justify-center mt-8'>
        <img src={main_photo} alt="Fotoja e pare" className='w-3/4 rounded-[50%]' />
      </div>
    </div>
  )
}

export default Home