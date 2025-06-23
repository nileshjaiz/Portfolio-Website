const AboutMe = () => {
  return (
    <section
      id="about"
      data-aos="fade-up"
      className="w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-10 py-20 bg-black text-white pt-1"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#40ffaa] to-[#4079ff]">
        About Me
      </h1>

      <div className="max-w-4xl text-gray-300 text-base sm:text-lg md:text-xl leading-8 text-center md:text-left">
        <p className="mb-6">
          I'm <b>Nilesh Jaiswal</b>, a passionate frontend developer based in
          India. I recently completed my B.Tech in Information Technology from
          Arya College of Engineering & IT. My journey into web development
          began with curiosity and soon evolved into a deep interest in
          understanding how things work on the internet — especially how design
          and code come together to create meaningful user experiences.
        </p>
        <p className="mb-6">
          I enjoy building intuitive, responsive, and clean web interfaces. Over
          time, I’ve dedicated myself to learning technologies like HTML, CSS,
          JavaScript, and React — diving deep into the fundamentals of frontend
          development. As I grew more confident, I explored modern styling tools
          like Tailwind CSS, state management techniques, and real-world
          component-based design.
        </p>
        <p className="mb-6">
          I believe in continuous learning, especially in a field like
          technology, where there’s always something new to discover. Whether
          it’s debugging a tricky layout or refining micro-interactions, I
          genuinely enjoy the process of building and improving.
        </p>
        <p>
          I’m highly motivated, detail-oriented, and enjoy tackling challenges
          that push my thinking. I value simplicity, accessibility, and creating
          user-friendly interfaces that feel smooth and natural. I'm always open
          to opportunities where I can collaborate, grow, and make an impact —
          both personally and professionally.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
