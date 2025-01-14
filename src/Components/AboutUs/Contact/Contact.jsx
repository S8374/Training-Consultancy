import React, { useState } from "react";

export default function Contact() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "FIRST TIME STARTING A PETITION?",
      description:
        "Starting a ConsultPro petition is easy, and we help you— for free!",
      buttonText: "Our petitions team is made up of people who are dedicated to the causes you care about, so we’re personally invested in your success! Our free program is unlike any other. With live video training sessions and a vast library of expert advice, Activist University will help you transform the world and inspire action for the causes you care about.",
      image:
        "https://media.istockphoto.com/id/1412834907/photo/group-of-multiethnic-businesspeople-discussing-about-financial-strategy-renewable-power.jpg?s=612x612&w=0&k=20&c=zhCX3y6vlWDuVJhbee2OMwUb8GJDEBWzt_q0mXAzlVY=",
    },
    {
      title: "Track your fitness goals",
      description:
        "Stay on top of your health and fitness with our revolutionary Apple Watch apps designed for all lifestyles.",
      buttonText: "It’s time to tackle an issue that affects every petition, regardless of the topic: promotion and awareness. Now that we’ve developed our petition and identified our targets, we need to get the word out. Read on for road-tested tips from our staff to get the most mileage out of your efforts.",
      image:
        "https://media.istockphoto.com/id/1349494654/photo/two-business-colleagues-working-together-on-desktop-computer-at-office.jpg?s=612x612&w=0&k=20&c=V81Zx4h3laNxw7fE-uGbIhAELa0uvDf6rv3AZlhDQ50=",
    },
    {
      title: "Stay connected on the go",
      description:
        "With seamless integration, stay connected with friends, family, and work while enjoying the freedom of movement.",
      buttonText: "Encourage your new supporters to become owners of the cause. Their help extends beyond their physical or online signature — ask them to help with e-mail, Facebook, and Twitter promotion to reach a wider audience. Our online petitions make that easy to do!Encourage the First Wave of Signers to Recruit the Second and Third Wave Among Their Family and Friends",
      image:
        "https://media.istockphoto.com/id/1331350008/photo/business-team-working-on-a-laptop-computer.jpg?s=612x612&w=0&k=20&c=EuaGfgsleTb79dbYA9XRPYcoX8_44JRdenPWODCIoxE=",
    },
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 mx-2 rounded-full lg:mx-0 focus:outline-none transition-colors duration-300 ${
      activeIndex === index ? "bg-blue-500" : "bg-gray-300 hover:bg-blue-500"
    }`}
              ></button>
            ))}
          </div>

          <div className="max-w-lg lg:mx-12 lg:order-2">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
              {items[activeIndex].title}
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {items[activeIndex].description}
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="mt-4 text-gray-600 dark:text-gray-300"
              >
                {items[activeIndex].buttonText}
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={items[activeIndex].image}
            alt={items[activeIndex].title}
          />
        </div>
      </div>
    </header>
  );
}