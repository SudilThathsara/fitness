import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Membership = () => {
  const plans = [
    {
      name: 'Base',
      price: '49',
      period: '/month',
      description: 'The foundation. Everything you need to start building your legacy.',
      features: [
        'Full gym access during open hours',
        'State-of-the-art strength equipment',
        'Cardio & conditioning zone',
        'Locker room & showers',
        '1 Free fitness assessment'
      ],
      popular: false,
      buttonText: 'Start Base'
    },
    {
      name: 'Elite',
      price: '89',
      period: '/month',
      description: 'Our most popular tier. Maximize your results with premium access.',
      features: [

        'Everything in Base plan',
        'Unlimited group classes',
        'Advanced recovery zone access',
        '1 Personal training session/month',
        'Exclusive member app & tracking',
        'Guest pass (1/month)'
      ],
      popular: true,
      buttonText: 'Join Elite'
    },
    {

      name: 'Apex',
      price: '149',
      period: '/month',
      description: 'The ultimate commitment. VIP access and personalized coaching.',
      features: [
        'Everything in Elite plan',
        '4 Personal training sessions/month',
        'Custom nutrition programming',
        'Priority class booking',
        'Unlimited guest passes',
        'Free branded apparel kit'
      ],
      popular: false,
      buttonText: 'Reach Apex'
    }
  ];


  return (
    <section id="membership" className="py-24 bg-[var(--surface-color)] relative">
      {/* background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[var(--color-primary-hover)]/5 blur-[120px]"></div>
        <div className="absolute bottom-[0%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[var(--color-accent-base)]/5 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[var(--color-primary-base)] tracking-[0.2em] uppercase mb-4">
            Commitment Levels
          </h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6">Choose Your Plan</h3>
          <p className="text-[var(--text-secondary)] text-lg">
            No long-term contracts. No hidden fees. Just clear designed to match your level of dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              
              className={`relative rounded-3xl p-8 flex flex-col h-full bg-[var(--bg-color)] border ${
                plan.popular 
                  ? 'border-[var(--color-primary-base)] shadow-2xl shadow-[var(--color-primary-base)]/10 scale-100 md:scale-105 z-10' 
                  : 'border-[var(--border-color)]'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[var(--color-primary-base)] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8 border-b border-[var(--border-color)] pb-8">
                <h4 className="text-2xl font-black mb-2">{plan.name}</h4>
                <p className="text-[var(--text-secondary)] text-sm h-10 mb-6">{plan.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black">${plan.price}</span>
                  <span className="text-[var(--text-secondary)] font-medium mb-1">{plan.period}</span>
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-[var(--color-primary-base)]' : 'text-[var(--color-accent-base)]'}`} />
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[var(--color-primary-base)] hover:bg-[var(--color-primary-hover)] text-white shadow-lg hover:-translate-y-1'
                    : 'bg-[var(--surface-color)] border-2 border-[var(--border-color)] hover:border-[var(--color-primary-base)] hover:text-[var(--color-primary-base)]'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
