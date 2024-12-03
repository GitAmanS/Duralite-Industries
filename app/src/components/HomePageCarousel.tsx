"use client";
import React, { useState, useEffect } from "react";

const HomePageCarousel = () => {
  // Your carousel data
  const carousels = [
    {
      image: "./carousel/1.jpg",
      title: "Title 1",
      description: "Add some description here",
      link: "Link to the product 1",
    },
    {
      image: "./carousel/2.jpg",
      title: "Title 2",
      description: "Add some description here",
      link: "Link to the product 2",
    },
    {
      image: "./carousel/3.jpg",
      title: "Title 3",
      description: "Add some description here",
      link: "Link to the product 3",
    },
    {
      image: "./carousel/4.jpg",
      title: "Title 4",
      description: "Add some description here",
      link: "Link to the product 4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carousels.length);
  };

  // Move to previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carousels.length) % carousels.length
    );
  };

  // Apply fade in/out effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carousels.length);
    }, 6000); // Change slide every 3 seconds

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carousels.map((carousel, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative"
            style={{
              opacity: currentIndex === index ? 1 : 0,
              transition: "opacity 0.5s ease-in-out", // quick fade-in/out animation
            }}
          >
            <img
              src={carousel.image}
              alt={carousel.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 p-6 flex flex-col pl-28 justify-center items-start">

              <h2
                className="text-3xl text-white"
                style={{
                  opacity: currentIndex === index ? 1 : 0,
                  transform: currentIndex === index ? "translateX(0)" : "translateX(-100%)",
                  transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out", // Slide from left and fade in
                }}
              >
                {carousel.title}
              </h2>
              <p
                className="text-white text-center"
                style={{
                  opacity: currentIndex === index ? 1 : 0,
                  transform: currentIndex === index ? "translateX(0)" : "translateX(100%)",
                  transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out", // Slide from right and fade in
                }}
              >
                {carousel.description}
              </p>
              {/* <a
                href={carousel.link}
                className="mt-4 inline-block py-2 px-6 rounded text-white hover:text-gray-700"
                style={{
                  opacity: currentIndex === index ? 1 : 0,
                  transform: currentIndex === index ? "translateX(0)" : "translateX(100%)",
                  transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out", 
                }}
              >
                Learn More
              </a> */}
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow Button */}
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl p-2 cursor-pointer"
        onClick={prevSlide}
      >
        &#10094;
      </div>

      {/* Right Arrow Button */}
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl p-2 cursor-pointer"
        onClick={nextSlide}
      >
        &#10095;
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {carousels.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePageCarousel;
