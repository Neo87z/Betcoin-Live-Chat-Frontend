import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import TabsImage01 from '../images/tabs-image-01.jpg';
import HeroImage01 from '../images/hero-image-01.jpg';
import { Link } from 'react-router-dom';
import TargetImage from '../images/features-02-image.png';

import NewsImage01 from '../images/news-01.jpg';
import NewsImage02 from '../images/news-02.jpg';
import NewsImage03 from '../images/news-03.jpg';
import NewsAuthor01 from '../images/news-author-01.jpg';
import NewsAuthor02 from '../images/news-author-02.jpg';
import NewsAuthor03 from '../images/news-author-03.jpg';
import Axios from "axios";
function Tabs() {
  const [MessageList, setMessafeList] = useState([])
  const reversedData = [...MessageList].reverse();
  const [fetchDataTrigger, setFetchDataTrigger] = useState(0);
  const fetchDataIntervalId = useRef();


  useEffect(() => {
    setFetchDataInterval(1000)
    Axios.get('https://asdasdasdasd2222.herokuapp.com/rooms/TestData').then((response) => {
      setMessafeList(response.data)
      console.log(response.data)
    })
    // Clean up for unmount to prevent memory leak
    return () => clearInterval(fetchDataIntervalId.current);
  }, [fetchDataTrigger]);

  const setFetchDataInterval = (interval) => {
    // Clear old interval
    if (fetchDataIntervalId.current) {
      clearInterval(fetchDataIntervalId.current);
      fetchDataIntervalId.current = undefined;
    }

    // Set new interval
    if (interval > 0) {
      fetchDataIntervalId.current = setInterval(() => {
        setFetchDataTrigger(Date.now());
      }, interval);
    }
  };



  return (
    <section >
      <div >
        <div >

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2" data-aos="fade-up">Live Chat</h2>
          </div>

          {/* Items */}
          <div className="grid gap-20" data-aos-id-target>

            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">

              {/* Image */}


              {/* Content */}

              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-10">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="grid gap-12 md:grid-cols-1 md:gap-x-6 md:gap-y-8 items-start">
                    <div style={{ width: '100%', height: '500px', overflow: 'auto', margin: '20px', textAlign: 'justify', padding: '20px' }}>
                      {reversedData.map((val, key) => {
                        console.log(val)
                        return <div>
                          <div className=" text-xl text-green-600 mb-2" data-aos="fade-left" data-aos-anchor="[data-aos-id-target]">From :-{val.Sender.substring(0, 15)}</div>
                          <div className="mt-1" data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">

                            <p className="text-lg text-gray-400">{val.Message}</p>
                          </div>
                        </div>
                      })}
                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Tabs;
