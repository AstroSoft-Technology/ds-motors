import React from "react";
import { Star, CheckCircle } from "lucide-react";

const Reviews = () => {
  const reviewData = [
    {
      id: 1,
      name: "Hansana Adithya",
      rating: 5,
      date: "a month ago",
      comment:
        "Before I found Dilshan aiya, I went around to a few others near here and honestly full of bullshit. They dont even bother to listen properly. Just open the mouth and start giving random advice like they know everything. One even told me to replace parts that didn’t even have an issue 😒.Dilshan , total opposite. Calm, listens properly, checks everything before talking. Did the boring work for my bike and.... he nailed it. Smooth, proper sound — everything perfect.Finally found a mechanic who actually knows what he’s doing, not just talking big. Respect ✌️",
    },
    {
      id: 2,
      name: "Indu Jayasekara",
      rating: 5,
      date: "a month ago",
      comment:
        "The work was done halfway everywhere..🥹 Finally, I found the best spot for me and my bike.Highly recommended 🌷",
    },
    {
      id: 3,
      name: "Nimmika Pathirana",
      rating: 5,
      date: "3 years ago",
      comment:
        "Done service of my Suzuki Burgman. Received the best service from them. Never expected that much excellence from a home based business like this. But Mr.Dilshan is very kind and knowledgeable person as he done the service himself. Ill never go to a Suzuki agent service ever again. Highly recommend for any motor bike service.",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-4xl font-black text-black tracking-tighter uppercase mb-4">
              Google <span className="text-red-600">Reviews</span>
            </h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto md:mx-0"></div>
          </div>

          {/* Google Global Rating Card */}
          <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-6 border border-gray-100">
            <div className="text-center">
              <p className="text-4xl font-black text-gray-900">4.9</p>
              <div className="flex text-yellow-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div>
              <p className="text-sm font-bold text-gray-800">Excellent</p>
              <p className="text-xs text-gray-500">Based on 10+ reviews</p>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="h-6 ml-2"
            />
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewData.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-50 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    {review.date}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed italic mb-8">
                  "{review.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    {review.name}
                    <CheckCircle size={14} className="text-blue-500" />
                  </h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    Verified Customer
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="https://share.google/ekLJqLhulFfOgfhgJ"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-all text-sm uppercase tracking-widest shadow-lg"
          >
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
