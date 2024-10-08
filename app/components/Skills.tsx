import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { skills } from "./data";

export default function Skills() {
  return (
    <section id="skills" className="text-gray-400 bg-gray-100 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <FontAwesomeIcon
            icon={faMicrochip}
            className="w-10 inline-block mb-4 text-blue-400"
          />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-800 mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            A list of technologies I have worked with recently and on side
            projects
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-white rounded-lg shadow-md flex p-4 h-full items-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4"
                />
                <span className="title-font font-medium text-gray-800">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
