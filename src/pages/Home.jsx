import main_photo from '../assets/main_photo.png';
import CustomButton from '../components/CostumButton';
import Amarildo_Gjata_CV from '../assets/CV_A.Gjata.pdf';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import IconContainer from '../components/IconContainer';

const Home = () => {
  return (
    <div className='flex md:flex-row flex-col justify-between items-center bg-black text-white w-full font-serif p-4 md:px-20'>

      <div className='md:ml-15 md:w-1/2 w-full px-8 flex flex-col justify-center'>
        <div className="text-4xl font-bold text-[var(--main-color)] mt-10 text-center animate-fadeIn">Amarildo Gjata</div>
        <div className="text-3xl font-bold text-[var(--main-color)] mb-10 text-center animate-fadeIn">Junior FullStack Developer</div>
        <p className='font-bold md:text-[16px] sm:text-[12] mb-5'>
        Welcome to my portfolio, where I showcase my growing expertise as a junior full-stack developer passionate about creating functional and user-friendly web applications. With foundational skills in JavaScript, React, HTML, CSS, Express, Django, Python, PostgreSQL, MySQL, Git, Postman, and Swagger, I’m dedicated to building impactful solutions while continuously expanding my technical knowledge.

I use JavaScript and React alongside HTML and CSS to develop responsive, engaging front-end interfaces that prioritize user experience. On the back end, I work with Express and Django in Python to create reliable APIs and server-side functionality, learning to implement best practices for clean and efficient code. I’m comfortable managing databases with PostgreSQL and MySQL, ensuring data is structured and accessible.

Using Git, I maintain organized version control and collaborate effectively on projects. I leverage Postman and Swagger to test and document APIs, ensuring seamless integration between front-end and back-end systems. My portfolio features projects that reflect my ability to tackle challenges, adapt to new tools, and deliver practical solutions as a junior developer.

Explore my work to see my progress and potential. I’m eager to contribute to innovative projects, learn from experienced teams, and grow as a developer. Let’s connect to build something great together!
        </p>
        <a href={Amarildo_Gjata_CV} download='CV_A.Gjata.pdf' target='_blank'>
          <CustomButton title='Download CV'/>
        </a>

        <div className='mt-12 lg:w-1/5 md:1/2 w-1/3 flex justify-between'>
            <IconContainer link='https://www.facebook.com/share/16NTYmtgfq/' children={<FaFacebookF />}/>
            <IconContainer link='htttps://www.linkedin.com/in/amarildo-gjata-535a1783' children={<FaLinkedinIn />}/>
            <IconContainer link='https://github.com/AmarildoGjata' children={<FaGithub />}/>
        </div>
      </div>

      <div className='md:w-1/2 flex justify-center mt-8'>
        <img src={main_photo} alt="Fotoja e pare" className='w-3/4 rounded-[50%]' />
      </div>
    </div>
  )
}

export default Home