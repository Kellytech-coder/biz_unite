import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import type { LucideIcon } from 'lucide-react'; // Import type for icon components

// Define the interface for a basic footer link
interface LinkItem {
  name: string;
  href: string;
}

// Define the interface for a social media link (includes the Lucide icon component)
interface SocialLinkItem extends LinkItem {
    icon: LucideIcon;
}

// Define the structure for the footer links object
interface FooterLinks {
    'Quick Links': LinkItem[];
    'Resources': LinkItem[];
    'Follow Us': SocialLinkItem[];
    'Legal': LinkItem[];
    'Company Info': LinkItem[];
}

// Data structure for the footer links (using the defined interfaces)
const footerLinks: FooterLinks = {
  'Quick Links': [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Browse Businesses', href: '/businesses' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/faq' },
  ],
  'Resources': [
    { name: 'Support Center', href: '/support' },
    { name: 'Community', href: '/community' },
    { name: 'Events', href: '/events' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Careers', href: '/careers' },
  ],
  'Follow Us': [
    { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
  ],
  'Legal': [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Contact Info', href: '/contact-info' },
    { name: 'Help Center', href: '/help' },
  ],
  'Company Info': [
    { name: 'Our Mission', href: '/mission' },
    { name: 'Our Vision', href: '/vision' },
    { name: 'Our Values', href: '/values' },
    { name: 'Join Our Team', href: '/jobs' },
    { name: 'Get In Touch', href: '/contact' },
  ],
};

// Define the interface for FooterLinkGroup props
interface FooterLinkGroupProps {
    title: string;
    links: LinkItem[];
}

// Component for a list of links (now explicitly typed)
const FooterLinkGroup = ({ title, links }: FooterLinkGroupProps) => (
  <div className="space-y-4">
    <h3 className="text-lg font-bold text-white mb-6 whitespace-nowrap">
      {title}
    </h3>
    <ul className="space-y-3">
      {/* Parameter 'link' is now inferred as LinkItem */}
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-sm text-gray-400 hover:text-white transition duration-150 ease-in-out"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// Main Footer Component
const Footer = () => {

  // Parameter 'e' is now explicitly typed as React.FormEvent
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for subscription submission goes here
    console.log('Subscription submitted!');
  };

  return (
    // The 'footer' tag ensures semantic meaning. bg-black is used for the dark theme.
    <footer className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Top Section: Subscription and Header */}
        <div className="border-b border-gray-800 pb-16 mb-16 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-10">
          
          {/* Left Side: Subscription Text */}
          <div className="lg:max-w-md">
            <h2 className="text-3xl font-bold text-white mb-2">
              Subscribe to updates
            </h2>
            <p className="text-base text-gray-400">
              Stay informed about our latest offerings and updates.
            </p>
          </div>

          {/* Right Side: Subscription Form */}
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:items-center lg:gap-4 w-full lg:w-auto">
            <div className="relative w-full lg:w-64">
              <input
                type="email"
                placeholder="Your email here"
                required
                className="w-full h-12 px-4 py-2 text-base text-gray-200 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-200"
              />
            </div>
            <button
              type="submit"
              className="w-full lg:w-auto h-12 px-6 py-2 text-white bg-transparent border border-white rounded-lg hover:bg-white hover:text-black transition-colors duration-300 font-medium"
            >
              Subscribe
            </button>
            <p className="text-xs text-gray-500 mt-2 lg:hidden">
              By subscribing, you accept our Privacy Policy.
            </p>
          </form>
          <p className="text-xs text-gray-500 mt-2 hidden lg:block">
            By subscribing, you accept our Privacy Policy.
          </p>
        </div>

        {/* Middle Section: Logo and Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-8">
          
          {/* Logo Column */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-serif italic text-white mb-6">
              Logo
            </h3>
          </div>

          {/* Link Groups */}
          <FooterLinkGroup title="Quick Links" links={footerLinks['Quick Links']} />
          <FooterLinkGroup title="Resources" links={footerLinks['Resources']} />
          {/* Casting the mapped array as LinkItem[] is no longer necessary as it's inferred */}
          <FooterLinkGroup 
            title="Follow Us" 
            links={footerLinks['Follow Us'].map(l => ({ name: l.name, href: l.href }))} 
          /> 
          <FooterLinkGroup title="Legal" links={footerLinks['Legal']} />
          <FooterLinkGroup title="Company Info" links={footerLinks['Company Info']} />

        </div>
      </div>

      {/* Bottom Section: Copyright and Social Icons */}
      <div className="border-t border-gray-800 bg-[#0a0a0a] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
          
          {/* Copyright and Bottom Links */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400">
            <p className="whitespace-nowrap">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/privacy" className="hover:text-white transition-colors duration-150">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors duration-150">Terms of Service</a>
              <a href="/cookies" className="hover:text-white transition-colors duration-150">Cookie Settings</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* item is now of type SocialLinkItem */}
            {footerLinks['Follow Us'].map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={item.name}
                className="text-gray-400 hover:text-white transition-colors duration-150"
              >
                {/* item.icon is a React component (e.g., <Facebook />) */}
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
