import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ marginTop: '-200px' }}>
      <div >
        <div className="max-w-8xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}

              </div>

            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}

              {/* 3rd block */}

              {/* 4th block */}


            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Betcoinlive.ca. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
