"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Event.css";

const PastEvents = () => {
  const [upcomingEvent, setUpcomingEvent] = useState<any>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Fetch Upcoming Events data from API
  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        const response = await fetch("/api/events/upcoming"); // Update API URL
        const data = await response.json();
        setUpcomingEvent(data);
      } catch (error) {
        console.error("Error fetching upcoming event data:", error);
      }
    };

    fetchUpcomingEvents();
  }, []);

  // Marquee Effect
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

  // Bullet point component (Restored!)
  const List = ({ text }: { text: string }) => (
    <div className="mb-2 flex items-start text-lg font-medium text-body-color">
      <span className="mr-4 mt-1 flex h-[30px] w-[30px] items-center justify-center rounded-md text-SkyBlue shrink-0">
        <span className="h-[8px] w-[8px] rounded-full bg-SkyBlue inline-block" />
      </span>
      <p className="leading-relaxed">{text}</p>
    </div>
  );

  return (
    <section id="past-events" className="overflow-hidden">
      <div className="relative w-full h-[400px] bg-gray-200 flex items-center justify-start pl-10">
        <Image
          src="/images/banner/Event-page-banner.jpg"
          alt="Past Events Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative z-10 text-left">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-5xl">
            NEWS
          </h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="container">
        <div className="w-10/12 mx-auto">
          <div className="px-4">
            <div className="mb-9 pt-9">
              <h3 className="mb-3 text-2xl font-bold text-SkyBlue dark:text-white sm:text-3xl lg:text-2xl xl:text-2xl">
                UPCOMING EVENTS
              </h3>
              <h3 className="mb-3 text-2xl font-bold text-Green dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                MEET US AT THESE UPCOMING EVENTS
              </h3>

              <div className="marquee-container" ref={marqueeRef}>
                <div
                  className="marquee-content mt-4 relative mx-auto mb-12 max-w-[500px] text-center lg:m-0"
                  data-wow-delay=".15s"
                >
                  {upcomingEvent?.showImage && (
                    <Image
                      src={upcomingEvent.imageUrl}
                      alt="Upcoming Event"
                      width={320}
                      height={300}
                      className="drop-shadow-three dark:hidden dark:drop-shadow-none object-contain"
                    />
                  )}

                  {upcomingEvent?.showText && (
                    <p className="mt-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      {upcomingEvent.text}
                    </p>
                  )}

                  {!upcomingEvent && (
                    <p className="mt-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Please visit this section later for updated information
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keeping your existing Swiper (Past Events Section) untouched */}
        <div className="w-10/12 mx-auto flex flex-wrap items-center mt-12">
          <div className="w-full px-4 lg:w-1/2">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="relative mx-auto mb-12 aspect-[25/20] max-w-[500px] text-center"
            >
              <SwiperSlide>
                <Image
                  src="/images/addedImg/event.jpeg"
                  alt="Past Event 1"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/addedImg/event1.jpg"
                  alt="Past Event 2"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/addedImg/event2.jpeg"
                  alt="Past Event 3"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              {/* More Swiper Slides remain unchanged */}
            
            <SwiperSlide>
              <Image
                src="/images/addedImg/event3.jpeg"
                alt="Past Event 4"
                fill
                className="drop-shadow-three object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/addedImg/event4.jpeg"
                alt="Past Event 5"
                fill
                className="drop-shadow-three object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/addedImg/event5.jpeg"
                alt="Past Event 6"
                fill
                className="drop-shadow-three object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/addedImg/event6.jpeg"
                alt="Past Event 7"
                fill
                className="drop-shadow-three object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/addedImg/event7.jpeg"
                alt="Past Event 8"
                fill
                className="drop-shadow-three object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/addedImg/event8.jpg"
                alt="Past Event 9"
                fill
                className="drop-shadow-three object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/addedImg/event9.jpeg"
                alt="Past Event 10"
                fill
                className="drop-shadow-three object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/addedImg/event10.jpeg"
                alt="Past Event 11"
                fill
                className="drop-shadow-three object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/addedImg/event11.jpeg"
                alt="Past Event 12"
                fill
                className="drop-shadow-three object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/addedImg/event12.jpeg"
                alt="Past Event 13"
                fill
                className="drop-shadow-three object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/addedImg/event13.jpeg"
                alt="Past Event 14"
                fill
                className="drop-shadow-three object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/addedImg/event14.jpeg"
                alt="Past Event 15"
                fill
                className="drop-shadow-three object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/addedImg/event15.jpeg"
                alt="Past Event 16"
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
                  PAST EVENTS
                </h3>
                <h3 className="mb-3 text-2xl font-bold text-Green dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  OUR GLOBAL PRESENCE
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We’ve had the opportunity to attend various conferences in the past:
                </p>
                <br />

                {/* Restored Bullet Points */}
                <div>
                  <List text="ADIPEC Event - Abu Dhabi, UAE - 4-7 November 2024" />
                  <List text="Oil and Gas 2023 – Kuala Lumpur – September 2023" />
                  <List text="Gastech Event – Singapore – September 2023" />
                  <List text="GPA Midstream Convention – San Antonio, TX – September 2022" />
                  <List text="Gastech Exhibition & Conference – Milan, Italy – 5-8 September 2022" />
                  <List text="TradeWinds 2022 – Abu Dhabi, U.A.E. – March 2022" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
