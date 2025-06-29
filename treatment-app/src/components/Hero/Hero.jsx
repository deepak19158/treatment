import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    {
      text: "Mental health",
      color: "text-green-700",
    },
    {
      text: "Hair care",
      color: "text-amber-700",
    },
    {
      text: "Skin care",
      color: "text-rose-700",
    },
    {
      text: "Fitness",
      color: "text-blue-700",
    },
    {
      text: "Sexual well being",
      color: "text-purple-700",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-left px-4 mb-4 sm:px-6 sm:mb-16">
      <h1
        className={`text-4xl sm:text-5xl md:text-7xl font-semibold mb-2 sm:mb-4 ${styles.textContainer}`}
      >
        <span
          key={currentTextIndex}
          className={`absolute w-full block ${styles.animatedText} ${texts[currentTextIndex].color}`}
        >
          {texts[currentTextIndex].text}
        </span>
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-gray-900 mb-3 sm:mb-6">
        personalized to you
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-8 max-w-2xl">
        Customized care starts here
      </p>
    </div>
  );
};

export default Hero;
