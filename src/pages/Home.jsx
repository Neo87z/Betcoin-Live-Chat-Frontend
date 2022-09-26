import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import Process from '../partials/Process';
import FeaturesHome from '../partials/FeaturesHome';
import Tabs from '../partials/Tabs';
import Target from '../partials/Target';
import News from '../partials/News';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import HeroAbout from '../partials/HeroAbout';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      < Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}


        {/*  Page sections */}
       
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <HeroHome />



        < News />


      </main>

      {/*  Site footer */}
      <Footer />


    </div>
  );
}

export default Home;