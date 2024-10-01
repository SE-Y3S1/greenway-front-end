import React from 'react';

const Footer = () => {
  return (
    <div className="text-underlay-1">
      <footer className="flex justify-between items-center h-20 px-8">
        <div className="text-left">
          <div className="text-underlay-1 font-bold">GreenWay</div>
          <p className="text-xs">Created By: © 2024 Group SE-S1-WD-19</p>
        </div>

        <div className="text-center">
          <section className="text-sm mb-2">Important Links</section>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-sm hover:text-blue-500">About Us</a>
            <a href="#" className="text-sm hover:text-blue-500">Terms & Conditions</a>
            <a href="#" className="text-sm hover:text-blue-500">Contact Us</a>
            <a href="#" className="text-sm hover:text-blue-500">Privacy Policy</a>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img className="h-8" src="/assets/footer/fb1.png" alt="Facebook" />
          </a>
          <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img className="h-8" src="/assets/footer/tw1.png" alt="Twitter" />
          </a>
          <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img className="h-8" src="/assets/footer/ins1.png" alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
