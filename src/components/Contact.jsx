import React from "react";
import { Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-6 text-lg flex items-start gap-3">
            <MapPin className="text-red-600 mt-1 flex-shrink-0" />
            <span>
              <strong>Address:</strong>
              <br />
              Millennium City Zone 3 Heartland
            </span>
          </p>
          <div className="space-y-3 mb-8">
            <p className="font-bold border-b border-gray-200 pb-2 mb-4 uppercase text-sm tracking-widest">
              Call Us
            </p>
            {["0774000019", "0724000019", "0702000070"].map((num) => (
              <a
                key={num}
                href={`tel:${num}`}
                className="flex items-center gap-3 hover:text-red-600 transition-colors text-lg"
              >
                <Phone size={20} className="text-red-600" /> {num}
              </a>
            ))}
          </div>
          <div className="w-full h-64 bg-gray-300 rounded-xl overflow-hidden shadow-inner grayscale hover:grayscale-0 transition-all duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.4357732296!2d79.9577!3d6.9077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMjcuNyJOIDc5wrA1NycyNy43IkU!5e0!3m2!1sen!2slk!4v1625000000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <form className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Send size={20} className="text-red-600" /> Send us a Message
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all"
            />
            <textarea
              placeholder="Tell us about your bike..."
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl h-40 focus:ring-2 focus:ring-red-500 outline-none transition-all"
            ></textarea>
            <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
