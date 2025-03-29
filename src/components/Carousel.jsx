import React from "react";

const Carousel = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.postimg.cc/ZqfgKfKs/freepik-the-style-is-candid-image-photography-with-natural-15849.png"
          class="w-full h-[400px] md:h-[600px] object-cover"
        />
        
        <div className="absolute left-1 right-1 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        
      </div>
      
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.postimg.cc/BZ863kQy/freepik-the-style-is-candid-image-photography-with-natural-15848.png"
          class="w-full h-[400px] md:h-[600px] object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.postimg.cc/QtwycH7p/freepik-adjust-4329.png"
          class="w-full h-[400px] md:h-[600px] object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.postimg.cc/ZqfgKfKs/freepik-the-style-is-candid-image-photography-with-natural-15849.png"
          class="w-full h-[400px] md:h-[600px] object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
