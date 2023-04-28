import { socials } from "../Data/data";

export default function Socials() {
  return (
    <section id="socials">
      <div className="container mx-auto flex px-10 py-0 md:flex-row items-center justify-end">
        <ul className="relative flex row">
          {socials.map((social) => (
            <li
              className="relative w-16 h-16 mt-0 mr-5 before:content-[''] before:absolute before:-bottom-2.5 before:-left-1 before:w-full before:h-2 before:bg-gray-900 
          after:content-[''] after:absolute after:top-1 after:-left-2.5 after:w-2 after:h-full after:bg-gray-900 origin-right"
            >
              <a href={social.link}>
                <div
                  className={`fa fa-${social.name} absolute top-0 left-0 w-full h-full flex bg-gray-900 justify-center items-center text-white text-3xl ease-out duration-300 
              hover:z-50 hover:duration-75 hover:text-white hover:shadow-sm hover:translate-x-2.5 hover:-translate-y-2.5 hover:opacity-100 ${social.hoverColor}`}
                ></div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
