import { getNowTextFromJson } from "./helpers";

const Now = ({ now }) => {
  if (!now || now.length === 0) return null;
  return (
    <div className="now">
      <p className="section-title">What I'm Doing Now</p>
      <ul className="now-list">
        {now.map((item) => {
          return (
            <li>{getNowTextFromJson(item)}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default Now;