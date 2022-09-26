import React from 'react';

import HeroImage from '../images/last1.png';

function HeroAbout() {
  return (
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src={HeroImage} width="1440" height="394" alt="About" />
        <div className="absolute inset-0  opacity-0" aria-hidden="true"></div>
      </div>

      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

        </div>
      </div>

    </section>
  );
}

export default HeroAbout;