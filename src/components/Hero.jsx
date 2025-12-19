import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center text-white px-4 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 animate-fade-in">
          D S <span className="text-red-600">MOTORS</span>
        </h1>

        <p className="text-xl md:text-3xl font-light text-gray-300 mb-10 tracking-wide max-w-2xl mx-auto">
          Precision Engine Repairs & <br className="hidden md:block" />
          Premium{" "}
          <span className="text-white font-semibold italic">
            Polishing
          </span>{" "}
          Services
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-red-900/20"
          >
            Book a Service
          </a>
          <a
            href="#gallery"
            className="w-full md:w-auto bg-transparent border-2 border-white/30 hover:border-white text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 bg-gradient-to-b from-red-600 to-transparent rounded-full mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
