import { socials } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  const iconMap: { [key: string]: any } = {
    linkedin: faLinkedinIn,
    github: faGithub,
  };

  return (
    <section id="socials" className="py-8">
      <div className="container mx-auto flex items-center justify-end">
        <ul className="flex">
          {socials.map((social) => (
            <li className="relative w-16 h-16 mr-5" key={social.name}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block w-full h-full group`}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-gray-900 transition-transform transform duration-500 ease-in-out group-hover:z-10 ${social.hoverColor} group-hover:opacity-10 group-hover:translate-x-2
                  } group-hover:-translate-y-2 `}
                ></div>
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-gray-900 transition-transform transform duration-500 ease-in-out group-hover:z-20 ${social.hoverColor} group-hover:opacity-20 group-hover:translate-x-4
                  } group-hover:-translate-y-4 `}
                ></div>
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-gray-900 transition-transform transform duration-500 ease-in-out group-hover:z-30 ${social.hoverColor} group-hover:opacity-30 group-hover:translate-x-6
                  } group-hover:-translate-y-6 `}
                ></div>
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-gray-900 transition-transform transform duration-500 ease-in-out group-hover:z-40 ${social.hoverColor} group-hover:opacity-40 group-hover:translate-x-8
                  } group-hover:-translate-y-8 `}
                ></div>
                <div
                  className={`absolute top-0 left-0 w-full h-full flex items-center justify-center text-white transition-transform transform duration-500 ease-in-out group-hover:z-50 ${social.hoverColor} group-hover:translate-x-10 group-hover:-translate-y-10 `}
                >
                  <FontAwesomeIcon
                    icon={iconMap[social.name]}
                    className="w-8 h-8"
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
