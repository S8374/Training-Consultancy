import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function EventTime() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const counters = [
    { value: 12, label: "Years of business" },
    { value: 1000, label: "Worldwide" },
    { value: 2210, label: "Mortgage brokers" },
    { value: 19, label: "Finance help" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const Counter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const duration = 2000; // Animation duration in ms
        const increment = value / (duration / 16); // Frame rate ~16ms

        const animate = () => {
          start += increment;
          if (start < value) {
            setCount(Math.ceil(start));
            requestAnimationFrame(animate);
          } else {
            setCount(value); // Ensure the final value matches
          }
        };

        animate();
      }
    }, [isVisible, value]);

    return <span>{count}+</span>;
  };

  return (
    <div>
      <section
        ref={sectionRef}
        className="py-8 text-black  md:py-16"
      >
        <div className="box-content max-w-5xl px-5 mx-auto">
          <div className="flex flex-col items-center -mx-5 md:flex-row">
            <div className="w-full px-5 mb-5 text-center md:mb-0 md:text-left">
              <h6 className="text-xs font-semibold text-indigo-800 uppercase md:text-base dark:text-gray-100">
              Helping Small Businesses To Find Right <br/>Way For The Last 42 Years
              </h6>
              
              <h3 className="text-lg leading-tight font-heading md:text-lg">
              Just sit right back and you'll hear a tale a tale of a fateful trip started from this tropic port aboard this tiny ship. Love exciting and new. Come aboard were expecting you. Love life's sweetest reward Let it flow it floats back to you.
              </h3>
              <div className="w-full mt-4 md:w-44">
                <NavLink
                to={'/'}
                  type="button"
                  className="py-2 px-4 bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  Know More
                </NavLink>
              </div>
            </div>
            <div className="w-full px-5 md:w-auto">
              <div className="flex justify-center text-center text-black">
                {counters.map((counter, index) => (
                  <div
                    key={index}
                    className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4"
                  >
                    <div className="text-2xl font-semibold md:text-3xl">
                      <Counter value={counter.value} />
                    </div>
                    <div className="mt-3 text-xs uppercase opacity-75">
                      {counter.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
