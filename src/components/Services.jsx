import React from "react";
import { Settings, Sparkles, Bike } from "lucide-react";

const Services = () => {
  const serviceData = [
    {
      title: "Engine Repair",
      desc: "Complete overhauls and tuning.",
      img: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=500",
      icon: <Settings className="text-red-600" />,
    },
    {
      title: "Premium Polishing",
      desc: "Alloy wheel and Brass finishing.",
      img: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&q=80&w=500",
      icon: <Sparkles className="text-red-600" />,
    },
    {
      title: "Full Service",
      desc: "Safety checks and maintenance.",
      img: "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&q=80&w=500",
      icon: <Bike className="text-red-600" />,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-6 max-w-6xl mx-auto text-gray-800"
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Specialized Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceData.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden border-b-4 border-red-600 hover:shadow-xl transition"
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center flex flex-col items-center">
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
