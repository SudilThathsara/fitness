import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap } from 'lucide-react';
import DummyImage from '../assets/dummy.png';

const About = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-[var(--color-primary-base)]" />,
      title: 'Precision Training',
      description: 'Expertly designed programs tailored to your specific goals, whether it\'s weight loss, muscle gain, or athletic performance.',
    },
    {
      icon: <Zap className="w-8 h-8 text-[var(--color-accent-base)]" />,
      title: 'State-of-the-Art Gear',
      description: 'Train with industry-leading equipment curated for efficiency and maximum results.',
    },
    {
      icon: <Users className="w-8 h-8 text-[var(--color-primary-base)]" />,
      title: 'Community',
      description: 'Join a driven, supportive community of individuals dedicated to pushing boundaries and achieving greatness.',
    },
  ];


  return (
    <section id="about" className="py-24 bg-[var(--surface-color)] relative overflow-hidden">

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-base)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent-base)]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">


        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* image section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src={DummyImage}
                alt="Gym member lifting weights" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white">
                <p className="text-4xl font-black text-[var(--color-primary-base)] mb-1">10+</p>
                <p className="font-medium text-sm text-gray-200">Years of Champions</p>
              </div>
            </div>
          </motion.div>


          {/*text section*/}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-[var(--color-primary-base)] tracking-[0.2em] uppercase mb-4">
              Our Philosophy
            </h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              More Than A Gym.<br />A <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-base)] to-[var(--color-accent-base)]">Revolution.</span>
            </h3>
            
            <p className="text-lg text-[var(--text-secondary)] mb-10 leading-relaxed">
              We believe that fitness is the foundation of a life well-lived. Our mission is to provide an unparalleled environment where excuses end and results begin. We combine science-backed methodologies with a raw, relentless atmosphere to unlock your true potential.
            </p>


            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 p-4 bg-[var(--bg-color)] rounded-xl h-fit border border-[var(--border-color)]">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>


          
        </div>
      </div>
    </section>
  );
};

export default About;
