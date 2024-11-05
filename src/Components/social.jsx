import {ReactComponent as GithubIcon} from './github.svg';
import {ReactComponent as LinkedInIcon} from './linkedin.svg';
import {ReactComponent as ReadCVIcon} from './readdotcv.svg';
import {ReactComponent as EmailIcon} from './gmail.svg';

const getIcon = (platform) => {
  switch (platform) {
    case 'LinkedIn':
      return <LinkedInIcon />;
    case 'Github':
      return <GithubIcon />;
    case 'ReadCV':
      return <ReadCVIcon />;
    case 'Send Email':
      return <EmailIcon />;
    default:
      return null;
  }
}

const Social = ({ socials, updatedOn }) => {
  if (!socials || socials.length === 0) return null;
  return (
    <div className="social">
      <div>
      <ul className="social-list">
        {socials.map((contactItem, index) => {
          return (
            <li key={'social'+index}>
              <a href={contactItem.url} target="_blank" rel="noreferrer">{getIcon(contactItem.platform)}</a>
            </li>
          )
        })}
      </ul>
      </div>
      <div className="section-emoji">🪴🌻🏕</div>
    </div>
  );
}

export default Social;
