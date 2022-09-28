import React from 'react';
import { Link } from 'react-router-dom';

import NewsImage01 from '../images/news-01.jpg';
import NewsImage02 from '../images/news-02.jpg';
import NewsImage03 from '../images/news-03.jpg';
import NewsAuthor01 from '../images/news-author-01.jpg';
import NewsAuthor02 from '../images/news-author-02.jpg';
import NewsAuthor03 from '../images/news-author-03.jpg';
import Tabs from '../partials/Tabs';
import Match from '../partials/match';
import LiveChat from '../partials/LiveChatxD';
function News() {
  return (
    <section style={{ marginTop: '-7%',background:'black' }}>

      <div >
        

        {/* Section header */}
        <div >

          <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
            <div>
              <div >
                <Tabs />
              </div>
            </div>  <div>
              <div >
                <Match />
              </div>
            </div>
            <LiveChat />
            <div>

            </div>


          </div>


        </div>

        {/* Hero image */}


      </div>

    </section>
  );
}

export default News;
