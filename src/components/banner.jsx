import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

function Banner({ imageUrl, title, description }) {
  return (
    <ParallaxProvider>
      <div className="relative overflow-hidden">
        <Parallax y={[-20, 20]} tagOuter="div">
          <img
            src={imageUrl}
            alt="Banner-Image"
            className="object-cover top-full w-full h-[45rem] skew-y-[350deg]"
          />
        </Parallax>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
          <h1 className="text-white text-5xl font-bold">{title}</h1>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default Banner;
