import { getNowTextFromJson } from "./helpers";
import Wave from "./wave";

const Now = ({ now }) => {
  if (!now || now.length === 0) return null;
  return (
    <div className="now">
      <Wave />
      <p className="section-title">Now</p>
      <div className="list-wrapper">
        <ul className="now-list">
          {now.map((item, index) => {
            return <li key={"list" + index}>{getNowTextFromJson(item)}</li>;
          })}
        </ul>
        <svg id="bird" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g transform="translate(0 0)"><path d="M238,102.135a1.333,1.333,0,1,0,1.333-1.333A1.334,1.334,0,0,0,238,102.135" transform="translate(-218 -95.469)" fill="#294fce"/><path d="M82.537,20.534h4.077a10.6,10.6,0,0,1-.077-2.887,1.333,1.333,0,0,1,1.843-1l7.49,3.11v-1.89a6.667,6.667,0,0,1,13.333,0h2.667a1.333,1.333,0,1,1,0,2.667H109.2v2h0a14,14,0,0,1-9.333,13.183v6.15a1.333,1.333,0,1,1-2.667,0V36.374a12.582,12.582,0,0,1-4,0v5.493a1.333,1.333,0,1,1-2.667,0v-6.15A14,14,0,0,1,81.2,22.534v-.667a1.334,1.334,0,0,1,1.333-1.333ZM95.2,33.868a11.334,11.334,0,0,0,11.333-11.333V17.868a4,4,0,0,0-8,0v1.89a2.727,2.727,0,0,1-3.8,2.5l-5.55-2.393c.253,2.2,1.543,5.8,7.05,7.37A1.335,1.335,0,0,1,95.5,29.8c-4.83-1.366-7.1-4.087-8.154-6.6H83.89A11.333,11.333,0,0,0,95.2,33.868Z" transform="translate(-81.204 -11.201)" fill="#294fce"/></g></svg>

      </div>
    </div>
  );
};

export default Now;
