const Contact = () => {
  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "nilesh.jaiswal9798@gmail.com";
    const subject = "Hello Nilesh - Let's Connect!";
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
        subject
      )}`
    );
  };

  return (
    <section
      id="contact"
      // data-aos="fade-up"
      className="bg-black text-white px-4 sm:px-8 md:px-20 py-10 sm:py-16 md:py-20 flex flex-col items-center scroll-mt-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#40ffaa] to-[#4079ff]">
        Get in Touch
      </h2>

      <p className="text-gray-300 text-base sm:text-lg text-center max-w-2xl mb-8 leading-relaxed">
        If you'd like to connect — whether it's regarding a job opportunity, a
        freelance collaboration, a project idea, or even just to have a
        conversation about tech and creativity — I'd love to hear from you.
        Don't hesitate to reach out, and I'll do my best to respond as soon as
        possible. Let's build something meaningful together!
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
        <a
          onClick={handleEmailClick}
          href="#"
          className="px-6 py-3 border border-purple-600 text-purple-400 rounded-md hover:bg-purple-500 hover:text-white transition-all duration-300"
        >
          Send Email
        </a>

        <a
          href="https://www.linkedin.com/in/nilesh-jaiswal31"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-blue-500 text-blue-400 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/nileshjaiz"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-green-600 text-green-400 rounded-md hover:bg-green-500 hover:text-white transition-all duration-300"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
