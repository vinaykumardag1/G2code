"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Event.css';

const CsrEvents = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      let marqueeSpeed = 2;
      const animateMarquee = () => {
        marquee.scrollLeft += marqueeSpeed;
        if (marquee.scrollLeft >= marquee.scrollWidth - marquee.clientWidth) {
          marquee.scrollLeft = 0;
        }
      };
      const interval = setInterval(animateMarquee, 20);
      return () => clearInterval(interval);
    }
  }, []);

  const List = ({ text }: { text: string }) => (
    <div className="mb-2 flex items-start text-lg font-medium text-body-color">
      <span className="mr-4 mt-1 flex h-[30px] w-[30px] items-center justify-center rounded-md text-SkyBlue shrink-0">
        {/* Dot icon */}
        <span className="h-[8px] w-[8px] rounded-full bg-SkyBlue inline-block" />
      </span>
      <p className="leading-relaxed">{text}</p>
    </div>
  );

  return (
    <section id="past-events" className="overflow-hidden">
      <div className="container">
        <div className="w-10/12 mx-auto flex flex-wrap items-center mt-12">
          <div className="w-full px-4 lg:w-1/2">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}  // Add modules here
              className="relative mx-auto mb-12 aspect-[25/20] max-w-[500px] text-center"
            >
              <SwiperSlide>
                <Image
                  src="/images/CSRImg/1.jpeg"
                  alt="Past Event 1"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/CSRImg/2.jpeg"
                  alt="Past Event 2"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/CSRImg/3.jpeg"
                  alt="Past Event 3"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              {/* <SwiperSlide>
                <Image
                  src="/images/CSRImg/4.jpeg"
                  alt="Past Event 4"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide> */}
              {/* <SwiperSlide>
                <Image
                  src="/images/CSRImg/5.jpeg"
                  alt="Past Event 5"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide> */}
              <SwiperSlide>
                <Image
                  src="/images/CSRImg/6.jpeg"
                  alt="Past Event 6"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/CSRImg/7.jpeg"
                  alt="Past Event 7"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/CSRImg/8.jpeg"
                  alt="Past Event 8"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              {/* <SwiperSlide>
                <Image
                  src="/images/CSRImg/9.jpeg"
                  alt="Past Event 9"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide> */}
              {/* <SwiperSlide>
                <Image
                  src="/images/CSRImg/10.jpeg"
                  alt="Past Event 10"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide> */}
              <SwiperSlide>
                <Image
                  src="/images/CSRImg/11.jpeg"
                  alt="Past Event 11"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              {/* <SwiperSlide>
                <Image
                  src="/images/CSRImg/12.jpeg"
                  alt="Past Event 12"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide> */}
              {/* <SwiperSlide>
                <Image
                  src="/images/CSRImg/13.jpeg"
                  alt="Past Event 13"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide> */}
              <SwiperSlide>
                <Image
                  src="/images/CSRImg/14.jpeg"
                  alt="Past Event 14"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/CSRImg/15.jpeg"
                  alt="Past Event 15"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-3 text-2xl font-bold text-SkyBlue dark:text-white sm:text-3xl lg:text-2xl xl:text-2xl">
                  CSR EVENTS
                </h3>
                {/* <h3 className="mb-3 text-2xl font-bold text-Green dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  OUR GLOBAL PRESENCE
                </h3> */}
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  CSR Event to Improve Nutrition Awareness and  Distribute  Nutritional Supplement  to under privileged children below 14 years
                </p>
                <br />



                {/* <ul className="list-disc pl-5 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed"> */}
                <div>
                  <List text="Event held Near Sai Baba Temple, Ramchandra Nagar, Thane - 400605" />
                  {/* <List text="Gastech Event – Singapore – September 2023"/>
                  <List text="GPA Midstream Convention – San Antonio, TX – September 2022"/>
                  <List text="Gastech Exhibition & Conference – Milan, Italy – 5-8 September 2022"/>
                  <List text="TradeWinds 2022 – Abu Dhabi, U.A.E. – March 2022"/> */}
                </div>
                {/* </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CsrEvents;
