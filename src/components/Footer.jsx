import React from 'react';
import { Dumbbell, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import Logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-[var(--surface-color)] border-t border-[var(--border-color)] pb-8 pt-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center gap-2 group mb-6 inline-flex">
              <img src={Logo} alt="Fitness Logo" className='h-10 auto'/>
              <span className="text-2xl font-bold tracking-wider font-heading uppercase">
                FIT<span className="text-[var(--color-primary-base)]">NESS</span>
              </span>
            </a>

            
            <p className="text-[var(--text-secondary)] mb-6 max-w-sm">
              Empowering individuals to reach their peak physical potential through science, discipline, and unbreakable community.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-[var(--bg-color)] rounded-full hover:text-[var(--color-primary-base)] hover:scale-110 transition-all text-[var(--text-secondary)]">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-[var(--bg-color)] rounded-full hover:text-[var(--color-primary-base)] hover:scale-110 transition-all text-[var(--text-secondary)]">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-[var(--bg-color)] rounded-full hover:text-[var(--color-primary-base)] hover:scale-110 transition-all text-[var(--text-secondary)]">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-[var(--bg-color)] rounded-full hover:text-[var(--color-primary-base)] hover:scale-110 transition-all text-[var(--text-secondary)]">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-[var(--text-secondary)] hover:text-[var(--color-primary-base)] transition-colors">Home</a></li>
              <li><a href="#about" className="text-[var(--text-secondary)] hover:text-[var(--color-primary-base)] transition-colors">About</a></li>
              <li><a href="#services" className="text-[var(--text-secondary)] hover:text-[var(--color-primary-base)] transition-colors">Classes & Services</a></li>
              <li><a href="#membership" className="text-[var(--text-secondary)] hover:text-[var(--color-primary-base)] transition-colors">Membership</a></li>
              <li><a href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--color-primary-base)] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>

            <ul className="space-y-3">
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--color-primary-base)] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--color-primary-base)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--color-primary-base)] transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--color-primary-base)] transition-colors">Gym Rules</a></li>
            </ul>

          </div>
        </div>


        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-secondary)] text-sm">
            &copy; {new Date().getFullYear()} Fitness. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-[var(--text-secondary)]">
            <span>Designed with Fitness</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
