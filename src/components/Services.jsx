import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DummyImage from '../assets/dummy.png';

const Services = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');


  const services = [
    {
      id: 1,
      title: 'Powerlifting',
      category: 'Weightlifting',
      image: DummyImage,
      description: 'Master the big three: squat, bench press, and deadlift with expert coaching.'
    },
    {
      id: 2,
      title: 'HIIT Bootcamp',
      category: 'Cardio',
      image: DummyImage,
      description: 'High-intensity interval training designed to burn maximum calories in minimum time.'
    },
    {
      id: 3,
      title: 'Vinyasa Yoga',
      category: 'Yoga',
      image: DummyImage,
      description: 'Build flexibility, balance, and core strength in a focused, mindful environment.'
    },
    {
      id: 4,
      title: '1-on-1 Coaching',
      category: 'Personal Training',
      image: DummyImage,
      description: 'Personalized programming and dedicated attention to accelerate your progress.'
    },
    {
      id: 5,
      title: 'Olympic Weightlifting',
      category: 'Weightlifting',
      image: DummyImage,
      description: 'Learn the technical mastery of the snatch and clean & jerk.'
    },
    {
      id: 6,
      title: 'Endurance Cycling',
      category: 'Cardio',
      image: DummyImage,
      description: 'Intense indoor cycling sessions focused on cardiovascular stamina.'
    }
  ];


  const categories = ['All', ...new Set(services.map(s => s.category))];

  const filteredServices = services.filter(service => {
    const matchesFilter = filter === 'All' || service.category === filter;

    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
                          
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="services" className="py-24 bg-[var(--bg-color)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[var(--color-primary-base)] tracking-[0.2em] uppercase mb-4">
            Our Arsenal
          </h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6">Services & Classes</h3>
          <p className="text-[var(--text-secondary)] text-lg">
            From iron-bending strength to lung-busting conditioning, find the discipline that will forge your new self.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === cat 
                    ? 'bg-[var(--color-primary-base)] text-white shadow-lg shadow-orange-500/30' 
                    : 'bg-[var(--surface-color)] text-[var(--text-secondary)] hover:text-white border border-[var(--border-color)] hover:border-[var(--color-primary-base)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

         
        </div>

        {/* Services Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-[var(--surface-color)] border border-[var(--border-color)] hover:border-[var(--color-primary-base)]/50 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-[var(--color-primary-base)] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-[var(--text-secondary)] line-clamp-2">
                    {service.description}
                  </p>
                </div>
                
                {/*highlight on hover */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary-base)] to-[var(--color-accent-base)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20 text-[var(--text-secondary)]">
            <p className="text-xl">No classes found matching your search.</p>
            <button 
              onClick={() => { setFilter('All'); setSearchQuery(''); }}
              className="mt-4 text-[var(--color-primary-base)] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
