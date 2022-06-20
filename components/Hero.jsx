import React from "react";

const Hero = () => {
  return (
    <div id="hero" className="p-2 md:p-8">
      <div className="relative overflow-hidden w-full pt-[56.25%]">
        <iframe
          src="https://www.youtube.com/embed/wB8BTbExm8g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;
