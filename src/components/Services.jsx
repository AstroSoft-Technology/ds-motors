import React from "react";

// Import your local images here
import engineRepair from "../assets/engine-repair.jpeg";
import alloyBefore from "../assets/alloy-wheel-polish-before.jpeg";
import alloyAfter from "../assets/alloy-wheel-polish-after.jpeg";
import brassPolish from "../assets/brass-polish.jpeg";
import galvaizedNails from "../assets/galvanized-nails.jpeg";
import bikeService from "../assets/bike-service.jpeg";

const Services = () => {
  const serviceData = [
    {
      title: "Bike Engine Repair",
      desc: "Expert engine repair, complete overhauls, and precision tuning.",
      img: engineRepair,
    },
    {
      title: "Alowell Polish",
      desc: "Specialized treatment for Alloy wheels to achieve a mirror finish.",
      isComparison: true,
      beforeImg: alloyBefore,
      afterImg: alloyAfter,
    },
    {
      title: "Brass Polish",
      desc: "Professional brass polishing to restore original shine and luster.",
      img: brassPolish,
    },
    {
      title: "Galvanized Nails",
      desc: "Custom detailing and galvanized nail finishing for style.",
      img: galvaizedNails,
    },
    {
      title: "Bike Service",
      desc: "Comprehensive maintenance and safety checks.",
      img: bikeService,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-6 max-w-7xl mx-auto text-gray-800"
    >
      <h2 className="text-4xl font-black text-center mb-16 tracking-tight uppercase">
        Our <span className="text-red-600">Specialized</span> Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        {serviceData.map((s, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
              i >= 3 ? "lg:translate-x-1/2" : ""
            }`}
          >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden bg-gray-200">
              {s.isComparison ? (
                <div className="flex h-full w-full">
                  <div className="relative w-1/2 h-full border-r border-white">
                    <img
                      src={s.beforeImg}
                      className="w-full h-full object-cover"
                      alt="Before"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">
                      Before
                    </span>
                  </div>
                  <div className="relative w-1/2 h-full">
                    <img
                      src={s.afterImg}
                      className="w-full h-full object-cover"
                      alt="After"
                    />
                    <span className="absolute bottom-2 right-2 bg-red-600 text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">
                      After
                    </span>
                  </div>
                </div>
              ) : (
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              )}
            </div>

            {/* Text Content */}
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight text-gray-900">
                {s.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
