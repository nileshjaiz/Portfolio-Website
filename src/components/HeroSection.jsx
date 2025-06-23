import SplitText from "../../ReactBits/SplitText/SplitText";

const HeroSection = () => {
  return (
    <section
      id="home"
      data-aos="fade-down"
      className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 md:px-20 py-20 gap-10 bg-black text-white"
    >
      {/* === Left side - Text === */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <SplitText
          text="Hello,"
          className="text-2xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          I’m
          <div className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#40ffaa] to-[#4079ff]">
            &nbsp; Nilesh Jaiswal
          </div>
          👋
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          I’m a frontend developer passionate about crafting clean, responsive,
          and user-friendly web experiences. I recently completed my graduation
          in Information Technology and have spent the past year mastering
          modern technologies like React.js, Tailwind CSS, and the MERN stack. I
          enjoy building real-world projects that solve meaningful problems and
          look great on any device. From designing pixel-perfect UIs to
          implementing responsive layouts, I strive to create digital
          experiences that are both visually appealing and highly functional.
          I'm eager to contribute to real-world teams, continuously learn from
          industry professionals, and grow as a developer who builds for both
          performance and people.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
          <a
            href="/Nilesh_Jaiswal_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white text-black rounded shadow hover:bg-[#40ffaa]  transition"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-2 border border-white rounded hover:bg-[#40ffaa] hover:text-black "
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* === Right side - Image === */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 mb-8 md:mt-0 md:mb-0">
        <div className="p-1 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] rounded-full">
          <img
            src="/img3.jpg"
            alt="Nilesh Jaiswal"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 object-cover rounded-full bg-black"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
