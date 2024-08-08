import { getNowTextFromJson } from "./helpers";

const Now = ({ now }) => {
  if (!now || now.length === 0) return null;
  return (
    <div className="now">
      <p className="section-title">Now</p>
      <div className="list-wrapper">
      <ul className="now-list">
        {now.map((item, index) => {
          return (
            <li key={'list'+index}>{getNowTextFromJson(item)}</li>
          )
        })}
      </ul>
      </div>
    </div>
  );
};

export default Now;