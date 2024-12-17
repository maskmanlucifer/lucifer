import { getSaturnIcon } from "./helpers";
const HeroImage = require("../Images/hero-image.jpg");

const Header = ({ general }) => {
  return (
    <div className="header">
      <img src={HeroImage} alt="hero-image" />
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
