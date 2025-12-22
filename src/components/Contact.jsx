import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirement: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactNumbers = [
    { label: "Primary Support", num: "0774000019" },
    { label: "Technical Queries", num: "0724000019" },
    { label: "Emergency Service", num: "0702000070" },
  ];

  const handleWhatsAppSend = (e) => {
    e.preventDefault();

    const myNumber = "94774000019";
    const message =
      `*D S MOTORS - NEW INQUIRY*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Requirement:* ${formData.requirement}`;

    window.open(`https://wa.me/${myNumber}?text=${message}`, "_blank");
    setIsSubmitted(true);
  };

  // New function to reset the form and the view
  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      requirement: "",
    });
    setIsSubmitted(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-black tracking-tighter uppercase mb-4">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column (Numbers & Info) stays the same */}
          <div className="lg:col-span-7 space-y-10">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-black text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
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

            <div className="w-full h-80 bg-gray-100 rounded-3xl overflow-hidden border-white shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d506753.37369457935!2d79.300974!3d7.1247523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f1a10b0211a1%3A0x5e0025f21bfc61c0!2sD.%20S.%20Motors!5e0!3m2!1sen!2slk!4v1766409663328!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Column (Form with Reset) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 min-h-[500px] flex flex-col justify-center">
              {!isSubmitted ? (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <h3 className="text-2xl font-black text-black mb-2 flex items-center gap-3 uppercase tracking-tight">
                      <MessageSquare className="text-red-600" /> WhatsApp Us
                    </h3>
                    <p className="text-gray-400 text-sm italic">
                      Get a quote instantly via WhatsApp
                    </p>
                  </div>

                  <form onSubmit={handleWhatsAppSend} className="space-y-5">
                    <div>
                      <label className="text-[10px] font-black uppercase text-gray-600 ml-2 mb-1 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase text-gray-600 ml-2 mb-1 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="07X XXX XXXX"
                        className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase text-gray-600 ml-2 mb-1 block">
                        Your Requirement
                      </label>
                      <textarea
                        name="requirement"
                        required
                        value={formData.requirement}
                        onChange={handleChange}
                        placeholder="Describe your bike or restoration need..."
                        className="w-full p-4 bg-gray-50 border-none rounded-2xl h-36 focus:ring-2 focus:ring-red-600 outline-none transition-all resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-black transition-all duration-300 shadow-xl shadow-green-100 flex items-center justify-center gap-3"
                    >
                      Send via WhatsApp
                      <Send size={18} />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center animate-fade-in space-y-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-black uppercase tracking-tight">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    Thank you! Your message was sent via WhatsApp. We will reach
                    out shortly.
                  </p>
                  <button
                    onClick={handleReset} // Calls the reset function
                    className="text-red-600 font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
