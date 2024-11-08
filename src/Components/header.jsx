import { useEffect, useRef } from "react";
import { getSaturnIcon } from "./helpers";
const HeroImage = require("../Images/hero-image.jpg");

const Header = ({ general }) => {

  const targetScaleRef = useRef(10);
  const currentScaleRef = useRef(10);

  useEffect(() => {
    const svg = document.getElementById("distortionSVG");
      const displacementMap = document.getElementById("displacementMap");

      
      let animationFrameId;

      function animateScale() {
        if (Math.abs(currentScaleRef.current - targetScaleRef.current) < 0.1) return;
        currentScaleRef.current += (targetScaleRef.current - currentScaleRef.current) * 0.1; // Smooth transition factor
        displacementMap.setAttribute("scale", currentScaleRef.current.toFixed(1));
        animationFrameId = requestAnimationFrame(animateScale);
      }

      svg.addEventListener("mouseover", () => {
        targetScaleRef.current = 60; // Set target scale on hover
        animateScale();
      });

      svg.addEventListener("mouseout", () => {
        targetScaleRef.current = 10; // Reset target scale on mouse out
        animateScale();
      });

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
  }, [])

  return (
    <div className="header">
      <img src={HeroImage} alt="hero-image" />
      <div className="animation-distortion">
      <svg id="distortionSVG" height="200" width="200">
      <defs>
        <filter id="distortionFilter">
          <feTurbulence
            id="turbulence"
            type="fractalNoise"
            baseFrequency="5"
            numOctaves="10"
            seed="10"
            result="noise"
          />
          <feDisplacementMap
            id="displacementMap"
            in="SourceGraphic"
            in2="noise"
            scale="10"
            xChannelSelector="R"
            yChannelSelector="G"
          />
          <animate
            href="#turbulence"
            attributeName="baseFrequency"
            dur="10s"
            values="5;5.1;5"
            repeatCount="indefinite"
          />
        </filter>
      </defs>
      <polygon
        points="100,30 10,170 190,170"
        fill="#fff"
        filter="url(#distortionFilter)"
      />
    </svg>
      </div>
      <p className="heading">{general.displayName}</p>
      <div className="sub-heading">
        <span>{general.displayOccupation}</span>{getSaturnIcon()}<span>{general.displayLocation}</span>
      </div>
      <p className="about">{general.about}</p>
    </div>
  );
}

export default Header;