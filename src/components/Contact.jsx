import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validateForm = () => {

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required';
    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error,when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setStatus('loading');
      
      // API call
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[var(--bg-color)] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-[var(--color-primary-base)] tracking-[0.2em] uppercase mb-4">
              Get In Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8">
              Ready To Start?
            </h3>
            <p className="text-[var(--text-secondary)] text-lg mb-12 max-w-md leading-relaxed">
              Drop us message below or visit our facility. Our team is ready answer your questions and help you begin your journey.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-[var(--surface-color)] rounded-xl border border-[var(--border-color)]">
                  <MapPin className="text-[var(--color-primary-base)] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Location</h4>
                  <p className="text-[var(--text-secondary)]">123 sri lanka<br />colombo District, RN 10101</p>
                </div>
              </div>


              <div className="flex items-start gap-4">
                <div className="p-4 bg-[var(--surface-color)] rounded-xl border border-[var(--border-color)]">
                  <Phone className="text-[var(--color-primary-base)] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Phone</h4>
                  <p className="text-[var(--text-secondary)]">+94 (11) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-[var(--surface-color)] rounded-xl border border-[var(--border-color)]">
                  <Mail className="text-[var(--color-accent-base)] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Email</h4>
                  <p className="text-[var(--text-secondary)]">join@fitness.com</p>
                </div>
              </div>
            </div>
          </motion.div>



          {/* Contact Form section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[var(--surface-color)] rounded-3xl p-8 md:p-10 border border-[var(--border-color)] shadow-xl relative overflow-hidden"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--surface-color)] p-8 text-center"
              >

                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-10 h-10" />
                </div>
                <h4 className="text-3xl font-black mb-4">Message Sent!</h4>
                <p className="text-[var(--text-secondary)] mb-8 max-w-xs mx-auto">
                  Thanks for reaching out. One of our coaches will touch within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-[var(--color-primary-base)] text-white rounded-full font-bold hover:bg-[var(--color-primary-hover)] transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>

            ) : (

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-[var(--bg-color)] text-[var(--text-primary)] border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-[var(--border-color)] focus:border-[var(--color-primary-base)] focus:ring-[var(--color-primary-base)]'} rounded-xl py-4 px-5 focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-[var(--bg-color)] text-[var(--text-primary)] border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[var(--border-color)] focus:border-[var(--color-primary-base)] focus:ring-[var(--color-primary-base)]'} rounded-xl py-4 px-5 focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold mb-2">Phone Number</label>
                    
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[var(--bg-color)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-xl py-4 px-5 focus:outline-none focus:ring-2 focus:border-[var(--color-primary-base)] focus:ring-[var(--color-primary-base)] focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />

                  </div>
                </div>


                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-[var(--bg-color)] text-[var(--text-primary)] border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-[var(--border-color)] focus:border-[var(--color-primary-base)] focus:ring-[var(--color-primary-base)]'} rounded-xl py-4 px-5 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none`}
                    placeholder="Tell us about your fitness goals..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[var(--color-primary-base)] hover:bg-[var(--color-primary-hover)] text-white text-lg font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-all hover:shadow-[0_10px_20px_rgba(251,146,60,0.3)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-none"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Sending..
                    </>

                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>

                  )}
                </button>
              </form>
            
            )}
            
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
