import React from "react";

const Gallery = () => {
  const projects = [
    {
      label: "BEFORE",
      img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80",
    },
    {
      label: "IN PROGRESS",
      img: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80",
    },
    {
      label: "FINAL RESULT",
      img: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&q=80",
    },
    {
      label: "ENGINE DETAIL",
      img: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-l-4 border-red-600 pl-4 mb-10">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-black">
            Previous Work Done
          </h2>
          <p className="text-gray-600 mt-2">
            Full Restoration: Classic Honda Project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md border border-gray-100"
            >
              <img
                src={item.img}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                alt={item.label}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-red-600 text-white px-4 py-1 font-bold rounded text-xs">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
