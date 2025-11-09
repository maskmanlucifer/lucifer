import { getSaturnIcon } from "./helpers";
import MagnetLines from "./MagnetLines";
// const HeroImage = require("../Images/hero-image-4.jpg");

const Header = ({ general }) => {
  return (
    <div className="header">
      {/* <img src={HeroImage} alt="hero-image" /> */}
      <MagnetLines
        rows={9}
        columns={9}
        containerSize="344px"
        lineColor="var(--magnet-line-color)"
        lineWidth="2px"
        lineHeight="10px"
        baseAngle={0}
      />
      <p className="heading">{general.displayName}</p>
      <div className="sub-heading">
        <span>{general.displayOccupation}</span>
        {getSaturnIcon()}
        <span>{general.displayLocation}</span>
      </div>
      <p className="about">{general.about}</p>
    </div>
  );
};

export default Header;
