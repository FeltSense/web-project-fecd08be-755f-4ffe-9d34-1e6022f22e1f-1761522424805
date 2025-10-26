'use client'

typescript
export default function Services() {
  const services = [
    {
      id: 'classes',
      label: 'Group Classes',
      title: 'Diverse Class Schedule',
      description: 'Over 50 weekly classes designed to match every fitness level and goal',
      features: [
        {
          name: 'HIIT & Cardio',
          detail: 'High-intensity interval training, spin cycling, and cardio kickboxing sessions that maximize calorie burn and build endurance'
        },
        {
          name: 'Strength & Conditioning',
          detail: 'Functional training, Olympic lifting, and resistance-based workouts to build lean muscle and improve overall power'
        },
        {
          name: 'Mind-Body Fusion',
          detail: 'Yoga flows, Pilates reformer, barre, and meditation classes that enhance flexibility, balance, and mental clarity'
        },
        {
          name: 'Specialty Programs',
          detail: 'Boxing fundamentals, dance fitness, aqua aerobics, and senior-friendly mobility sessions tailored to specific interests'
        }
      ],
      highlight: '50+ weekly classes'
    },
    {
      id: 'trainers',
      label: 'Expert Trainers',
      title: 'Certified Fitness Professionals',
      description: 'Learn from instructors with specialized credentials and years of hands-on experience',
      features: [
        {
          name: 'Nationally Certified',
          detail: 'All trainers hold current certifications from ACE, NASM, ACSM, or equivalent accrediting bodies with ongoing education requirements'
        },
        {
          name: 'Specialized Expertise',
          detail: 'Credentials in sports nutrition, corrective exercise, pre/postnatal fitness, injury rehabilitation, and athletic performance'
        },
        {
          name: 'Personalized Attention',
          detail: 'Form corrections, modification options, and individualized guidance during every class to ensure safe, effective workouts'
        },
        {
          name: 'Community Focus',
          detail: 'Trainers who remember your name, track your progress, and create an encouraging environment that keeps you motivated'
        }
      ],
      highlight: 'Expert instruction'
    },
    {
      id: 'membership',
      label: 'Membership',
      title: 'Flexible Plans',
      description: 'No long-term contracts or hidden fees—just straightforward access to everything we offer',
      features: [
        {
          name: 'Unlimited Access',
          detail: 'Attend as many classes as you want across all disciplines, with no booking fees or class limits throughout the month'
        },
        {
          name: 'Month-to-Month Freedom',
          detail: 'Cancel or pause your membership anytime with 30 days notice—no penalties, no pressure, no annual commitments required'
        },
        {
          name: 'Class Pack Options',
          detail: 'Drop-in rates and multi-class packages available for those who prefer flexibility over monthly memberships'
        },
        {
          name: 'Family & Corporate',
          detail: 'Discounted rates for household members and special corporate wellness packages for local businesses and teams'
        }
      ],
      highlight: 'No contracts'
    },
    {
      id: 'facilities',
      label: 'Facilities',
      title: 'Premium Equipment & Spaces',
      description: 'Train in modern, well-maintained studios with professional-grade gear',
      features: [
        {
          name: 'Cardio & Strength Zones',
          detail: 'Treadmills, rowers, assault bikes, free weights, cable machines, and functional training rigs from Rogue, Concept2, and Life Fitness'
        },
        {
          name: 'Dedicated Studio Rooms',
          detail: 'Three climate-controlled spaces with sprung floors, full-length mirrors, premium sound systems, and natural lighting'
        },
        {
          name: 'Locker Room Amenities',
          detail: 'Spacious changing areas with day lockers, rainfall showers, complimentary towels, and premium toiletries for post-workout refresh'
        },
        {
          name: 'Member Perks',
          detail: 'Filtered water stations, smoothie bar with protein shakes, retail corner with workout essentials, and free WiFi throughout'
        }
      ],
      highlight: 'State-of-the-art'
    }
  ];

  const [activeTab, setActiveTab] = React.useState(services[0].id);
  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Reach Your Goals
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From beginner-friendly classes to advanced training programs, we provide the expertise, 
            equipment, and community support to help you build strength, confidence, and lasting results.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-slate-200 mb-12">
          <nav className="flex gap-8 overflow-x-auto" aria-label="Service tabs">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`pb-4 px-1 text-sm font-medium whitespace-nowrap transition-all duration-300 border-b-2 ${
                  activeTab === service.id
                    ? 'border-slate-900 text-slate-900'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                {service.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Title & Description */}
          <div className="lg:sticky lg:top-8">
            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full mb-4">
              {activeService.highlight}
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              {activeService.title}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              {activeService.description}
            </p>
          </div>

          {/* Right: Features Grid */}
          <div className="grid gap-6">
            {activeService.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300"
              >
                <h4 className="text-base font-semibold text-slate-900 mb-2">
                  {feature.name}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors duration-300 shadow-sm">
              View Class Schedule
            </button>
            <button className="px-8 py-3 bg-white text-slate-900 font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300">
              Book Free Trial Class
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}