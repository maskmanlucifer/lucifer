import React from "react";
import { WORK } from "../constants";
import WorkItem from "./work-item";

const Work = () => {
  return (
    <div className="work-section">
      <p className="section-title">Work</p>
      <div className="list-wrapper work-list">
        {WORK.map(({ title, company, date, logoUrl }) => {
          return (
            <WorkItem
              title={title}
              company={company}
              date={date}
              logoUrl={logoUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
