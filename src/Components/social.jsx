import { ReactComponent as GithubIcon } from "../Images/icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../Images/icons/linkedin.svg";
import { ReactComponent as ReadCVIcon } from "../Images/icons/readdotcv.svg";
import { ReactComponent as EmailIcon } from "../Images/icons/gmail.svg";

const getIcon = (platform) => {
  switch (platform) {
    case "LinkedIn":
      return <LinkedInIcon />;
    case "Github":
      return <GithubIcon />;
    case "ReadCV":
      return <ReadCVIcon />;
    case "Send Email":
      return <EmailIcon />;
    default:
      return null;
  }
};

const Social = ({ socials }) => {
  if (!socials || socials.length === 0) return null;
  return (
    <div className="social">
      <div>
        <ul className="social-list">
          {socials.map((contactItem, index) => {
            return (
              <li key={"social" + index} className="social-item">
                <div className="social-tooltip">
                  <a href={contactItem.url} target="_blank" rel="noreferrer" title="">
                    {getIcon(contactItem.platform)}
                  </a>
                  <span className="tooltip-text">{contactItem.platform}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="section-emoji">🪴🌻🏕</div>
    </div>
  );
};

export default Social;
