export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Manager",
      content: "I've tried other gyms before, but Elevate is different. The trainers actually remember your name and your goals. I finally feel confident in the weight room, and I've built strength I didn't think was possible at 42.",
      image: "SM"
    },
    {
      name: "James Chen",
      role: "Software Developer",
      content: "After sitting at a desk all day, the evening classes here have been a game-changer for my back pain. The instructors modify exercises when needed, and there's zero judgment. Just good people working on themselves.",
      image: "JC"
    },
    {
      name: "Maya Patel",
      role: "Small Business Owner",
      content: "The flexibility is what sold me. Between running my business and family commitments, I need a gym that works with my schedule. The variety of class times and the welcoming atmosphere keep me coming back consistently.",
      image: "MP"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Real Stories from Our Members
          </h2>
          <p className="text-lg text-slate-600">
            Hear from people who've made Elevate part of their routine
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-slate-200"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-slate-200 group-hover:text-slate-300 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Content */}
              <p className="text-slate-700 leading-relaxed mb-8 text-base">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-slate-600 font-semibold text-sm">
                    {testimonial.image}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">
            Join hundreds of members transforming their fitness journey
          </p>
          <button className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-300 shadow-sm hover:shadow-md">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}