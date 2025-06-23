import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiFigma } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const techStack = [
  { icon: <FaHtml5 className="text-orange-500" /> },
  { icon: <FaCss3Alt className="text-blue-500" /> },
  { icon: <FaJs className="text-yellow-300" /> },
  { icon: <FaReact className="text-cyan-400" /> },
  { icon: <FaNodeJs className="text-green-500" /> },
  { icon: <SiExpress className="text-gray-300" /> },
  { icon: <SiMongodb className="text-green-600" /> },
  { icon: <SiTailwindcss className="text-sky-400" /> },
  { icon: <FaBootstrap className="text-purple-500" /> },
  { icon: <FaGitAlt className="text-orange-600" /> },
  { icon: <FaGithub className="text-white" /> },
  { icon: <SiFigma className="text-pink-500" /> },
  { icon: <VscVscode className="text-blue-600" /> },
];

const TechBanner = () => {
  return (
    <section className="bg-black py-8 overflow-hidden" data-aos="fade-up">
      <Marquee speed={110} gradient={false} pauseOnHover={false}>
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-10"
          >
            <div className="text-7xl mb-2">{tech.icon}</div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default TechBanner;
