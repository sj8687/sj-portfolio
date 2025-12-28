import { experiences } from "../../constant";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

    <div className="relative flex flex-col items-center">
  {/* <div className="absolute top-0 h-full w-1 bg-gray-600 left-1/2 transform -translate-x-1/2 hidden sm:block"></div> */}

  {experiences.map((experience, index) => (
    <div
      key={experience.id}
      className="relative w-full flex justify-center mb-16"
    >
     

      <div className=" mt-4 w-full max-w-md sm:max-w-lg bg-gray-900 p-6 sm:p-8 rounded-2xl border border-white shadow-2xl backdrop-blur-mdhadow-[0_0_20px_1px_rgba(130,69,236,0.3)]  transform transition-transform duration-300 hover:scale-105" >
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-white rounded-md overflow-hidden">
            <img
              src={experience.img}
              alt={experience.company}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              {experience.role}
            </h3>
            <h4 className="text-sm text-gray-300">
              {experience.company}
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              {experience.date}
            </p>
          </div>
        </div>

        <p className="mt-4 text-gray-400 text-sm sm:text-base">
          {experience.desc}
        </p>

        <div className="mt-4">
          <h5 className="font-medium text-white mb-2">Skills:</h5>
          <ul className="flex flex-wrap gap-2">
            {experience.skills.map((skill, index) => (
              <li
                key={index}
                className="bg-[#8245ec] text-gray-200 px-3 py-1 text-xs sm:text-sm rounded-lg border border-gray-400"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default Experience;