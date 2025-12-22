import React from "react";
import { Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactNumbers = [
    { label: "Primary Support", num: "0774000019" },
    { label: "Technical Queries", num: "0724000019" },
    { label: "Emergency Service", num: "0702000070" },
  ];

  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-black tracking-tighter uppercase mb-4">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Info & Numbers (7 Cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Action Cards for Phone Numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {contactNumbers.map((contact) => (
                <a
                  key={contact.num}
                  href={`tel:${contact.num}`}
                  className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-red-600 hover:bg-white transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                    <Phone
                      size={20}
                      className="text-red-600 group-hover:text-white"
                    />
                  </div>
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">
                    {contact.label}
                  </p>
                  <p className="text-sm font-bold text-gray-900">
                    {contact.num}
                  </p>
                </a>
              ))}
            </div>

            {/* Address & Hours Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-black text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full -mr-16 -mt-16"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-red-600" size={24} />
                  <h4 className="font-bold uppercase tracking-widest">
                    Our Garage
                  </h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Millennium City Zone 3,
                  <br />
                  Heartland, Sri Lanka
                </p>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-red-600" size={24} />
                  <h4 className="font-bold uppercase tracking-widest">
                    Working Hours
                  </h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Mon - Sat: 8:00 AM - 6:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Map Area */}
            <div className="w-full h-80 bg-gray-100 rounded-3xl overflow-hidden shadow-inner transition-all duration-700 border-4 border-white shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506753.3736945793!2d79.3009739890625!3d7.124752300000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f1a10b0211a1%3A0x5e0025f21bfc61c0!2sD.%20S.%20Motors!5e0!3m2!1sen!2slk!4v1766401658785!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Form (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
              <div className="mb-8">
                <h3 className="text-2xl font-black text-black mb-2 flex items-center gap-3 uppercase tracking-tight">
                  <MessageSquare className="text-red-600" /> Send Message
                </h3>
                <p className="text-gray-400 text-sm italic">
                  Get a quote for your restoration project
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <label className="text-[10px] font-black uppercase text-gray-600 ml-2 mb-1 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-gray-600 ml-2 mb-1 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="07X XXX XXXX"
                    className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-gray-600 ml-2 mb-1 block">
                    Your Requirement
                  </label>
                  <textarea
                    placeholder="Describe your bike or restoration need..."
                    className="w-full p-4 bg-gray-50 border-none rounded-2xl h-36 focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-gray-300 resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-red-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-black transition-all duration-300 shadow-xl shadow-red-200 hover:shadow-black/20 flex items-center justify-center gap-3 group">
                  Send Request
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
