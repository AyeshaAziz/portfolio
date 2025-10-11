import React, { useState, useEffect } from "react";

type SlideshowProps = {
  slides: string[];
  autoplayInterval: number;
};

export const Slideshow: React.FC<SlideshowProps> = ({
  slides,
  autoplayInterval,
}) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Autoplay
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, autoplayInterval);

  //   return () => clearInterval(interval);
  // }, [slides.length, autoplayInterval]);

  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Slides */}
      <div className="max-w-4xl mx-auto relative aspect-[16/9]">
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`transition-opacity duration-1000 ease-in-out ${
        index === current
          ? "opacity-100 relative z-10 pointer-events-auto"
          : "opacity-0 absolute inset-0 z-0 pointer-events-none"
      }`}
    >
      <div className="absolute top-0 left-0 text-white text-sm p-2 z-20">
        {index + 1} / {slides.length}
      </div>
      <img
        src={slide}
        alt={`Slide ${index}`}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  ))}
</div>

      {/* Previous / Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded hover:bg-black/70 z-20"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded hover:bg-black/70 z-20"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2 relative z-20">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-colors duration-300 ${
              index === current ? "bg-gray-700" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
