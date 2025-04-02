import React from "react";

const Carousel = () => {
  // Array of slide data for easier management
  const slides = [
    {
      id: "slide1",
      imgSrc:
        "https://i.postimg.cc/ZqfgKfKs/freepik-the-style-is-candid-image-photography-with-natural-15849.png",
      prev: "slide4",
      next: "slide2",
    },
    {
      id: "slide2",
      imgSrc:
        "https://i.postimg.cc/BZ863kQy/freepik-the-style-is-candid-image-photography-with-natural-15848.png",
      prev: "slide1",
      next: "slide3",
    },
    {
      id: "slide3",
      imgSrc: "https://i.postimg.cc/QtwycH7p/freepik-adjust-4329.png",
      prev: "slide2",
      next: "slide4",
    },
    {
      id: "slide4",
      imgSrc:
        "https://i.postimg.cc/ZqfgKfKs/freepik-the-style-is-candid-image-photography-with-natural-15849.png",
      prev: "slide3",
      next: "slide1",
    },
  ];

  return (
    <div className="carousel w-full">
      {slides.map((slide) => (
        <div
          key={slide.id}
          id={slide.id}
          className="carousel-item relative w-full"
        >
          <img
            src={slide.imgSrc}
            alt={`Carousel slide ${slide.id}`}
            className="w-full h-[400px] md:h-[600px] object-cover"
          />

          {/* Navigation Arrows */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#${slide.prev}`}
              className="btn btn-circle hover:bg-primary/90 transition-colors"
            >
              ❮
            </a>
            <a
              href={`#${slide.next}`}
              className="btn btn-circle hover:bg-primary/90 transition-colors"
            >
              ❯
            </a>
          </div>

          {/* Indicator Dots (optional) */}
          <div className="absolute flex justify-center w-full gap-2 bottom-4">
            {slides.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`w-3 h-3 rounded-full ${
                  slide.id === item.id ? "bg-primary" : "bg-gray-400"
                }`}
              ></a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
