import profileImage from '../../assets/shreyash.jpg';
import { Typewriter } from 'react-simple-typewriter';


const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-25"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 space-x-2">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Shreyash Jadhav
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight ">
            <span className="text-white">I am a </span>
            <Typewriter
              words={['Fullstack Developer', 'Devops Engineer(aws)', 'UI/UX Designer', 'Coder']}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a Full-Stack Developer with over 1 year of experience in building scalable web applications. Skilled in both front-end and back-end development, Additionally, I have knowledge of DevOps practices, particularly with AWS, and am familiar with deploying, scaling, and maintaining applications on cloud platforms...
          </p>
          <a
            href="https://drive.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>

        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={profileImage}
            alt="sj"
            className="w-full md:h-[600px] rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          />
          {/* </Tilt> */}
        </div>
      </div>
    </section>
  );
};

export default About;