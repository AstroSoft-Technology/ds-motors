import React, { useState, useEffect } from "react";

import nissanRestoration1 from "../assets/nissan-restore-1.jpeg";
import nissanRestoration2 from "../assets/nissan-restore-2.jpeg";
import nissanRestoration3 from "../assets/nissan-restore-3.jpeg";
import nissanRestoration4 from "../assets/nissan-restore-4.jpeg";
import alloyWheelBefore from "../assets/alloy-wheel-polish-before.jpeg";
import alloyWheelAfter from "../assets/alloy-wheel-polish-after.jpeg";

// Sub-component for the Auto-Sliding Image Box
const ProjectSlideshow = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-200 aspect-video">
      {images.map((item, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={item.img}
            alt={item.label}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-red-600 text-white px-3 py-1 font-bold rounded shadow-lg text-[10px] tracking-widest uppercase">
              {item.label}
            </span>
          </div>
        </div>
      ))}
      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === index ? "bg-red-600 w-8" : "bg-white/40 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  const allProjects = [
    {
      id: 1,
      vehicle: "Classic Honda CB750",
      repairType: "Full Frame-up Restoration",
      description:
        "Complete engine rebuild, frame sandblasting, and custom brass polishing on all engine covers. Restored to showroom condition with modern reliability.",
      images: [
        {
          label: "BEFORE",
          img: nissanRestoration1,
        },
        {
          label: "IN PROGRESS",
          img: nissanRestoration2,
        },
        {
          label: "ENGINE DETAIL",
          img: nissanRestoration3,
        },
        {
          label: "FINAL RESULT",
          img: nissanRestoration4,
        },
      ],
    },
    {
      id: 2,
      vehicle: "Custom Alloy Wheels",
      repairType: "Alowell & Mirror Polish",
      description:
        "Deep chemical restoration for oxidized alloy wheels. Finished with a multi-stage Alowell polishing process to achieve a perfect mirror reflection.",
      images: [
        {
          label: "BEFORE",
          img: alloyWheelBefore,
        },
        {
          label: "MIRROR FINISH",
          img: alloyWheelAfter,
        },
      ],
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Section Header */}
        <div className="border-l-4 border-red-600 pl-4 mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-black">
            PREVIOUS WORK DONE
          </h2>
          <p className="text-red-600 font-bold mt-1">Restoration Portfolio</p>
        </div>

        {/* List of Projects */}
        <div className="space-y-32">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Side: Auto-sliding Image Container */}
              <ProjectSlideshow images={project.images} />

              {/* Right Side: Project Details using the same format as your image */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2 tracking-tight">
                    Restoration Breakdown
                  </h3>
                  <div className="h-1 w-20 bg-red-600 mb-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-red-600">
                    <p className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">
                      Vehicle Model
                    </p>
                    <p className="text-lg font-bold text-gray-800">
                      {project.vehicle}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-red-600">
                    <p className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">
                      Repair Type
                    </p>
                    <p className="text-lg font-bold text-gray-800">
                      {project.repairType}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-gray-100 pl-4">
                  "{project.description}"
                </p>

                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-block bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition-colors shadow-lg"
                  >
                    Request Similar Restoration
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
