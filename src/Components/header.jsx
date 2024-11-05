import { useEffect } from "react";
import { getSaturnIcon } from "./helpers";
const HeroImage = require("../Images/hero-image.jpg");

const Header = ({ general }) => {
  useEffect(() => {
    const svg = document.getElementById("distortionSVG");
      const displacementMap = document.getElementById("displacementMap");

      let targetScale = 10;
      let currentScale = 10;

      function animateScale() {
        if (Math.abs(currentScale - targetScale) < 0.1) return;
        currentScale += (targetScale - currentScale) * 0.1; // Smooth transition factor
        displacementMap.setAttribute("scale", currentScale.toFixed(1));
        requestAnimationFrame(animateScale);
      }

      svg.addEventListener("mouseover", () => {
        targetScale = 60; // Set target scale on hover
        animateScale();
      });

      svg.addEventListener("mouseout", () => {
        targetScale = 10; // Reset target scale on mouse out
        animateScale();
      });
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