javascript
export default function Pricing() {
  const plans = [
    {
      name: "Drop-In",
      price: "25",
      period: "per class",
      description: "Perfect for trying us out or supplementing your routine",
      features: [
        "Access to any single class",
        "All fitness disciplines included",
        "No membership required",
        "Book online anytime",
        "Towel service included"
      ],
      cta: "Book a Class",
      popular: false
    },
    {
      name: "Unlimited",
      price: "149",
      period: "per month",
      description: "Full access to transform your fitness journey",
      features: [
        "Unlimited class attendance",
        "50+ weekly classes",
        "All disciplines & levels",
        "Priority class booking",
        "Free guest pass monthly",
        "Complimentary fitness assessment",
        "Member events & workshops"
      ],
      cta: "Start Your Journey",
      popular: true
    },
    {
      name: "Flex Pack",
      price: "89",
      period: "10 classes",
      description: "Flexibility for your busy schedule",
      features: [
        "10 classes to use anytime",
        "Valid for 3 months",
        "All class types included",
        "Share with family members",
        "Online booking priority",
        "Rollover unused classes"
      ],
      cta: "Get Started",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-slate-600">
            Flexible membership options designed to fit your lifestyle. No long-term contracts, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-sm border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular
                  ? 'border-slate-900 shadow-lg'
                  : 'border-slate-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-slate-900">
                      ${plan.price}
                    </span>
                    <span className="text-slate-600 text-lg">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold transition-all duration-200 mb-8 ${
                    plan.popular
                      ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                    What's Included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <svg
                          className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-slate-600 text-sm">
            All memberships include access to our certified expert trainers and state-of-the-art facilities. 
            <span className="block mt-2 font-medium text-slate-900">
              First class is always free. No credit card required.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}