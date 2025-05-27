import React, { useRef } from "react";
import { ReactComponent as ChevronDown } from "../Images/icons/chevron-down.svg";
import { ReactComponent as Chevron } from "../Images/icons/chevron.svg";

const WorkItem = ({ title, company, date, logoUrl }) => {
  const [expandedWork, setExpandedWork] = React.useState(false);
  const contentRef = useRef(null);

  return (
    <div
      className={`work ${expandedWork ? "expanded" : ""}`}
      key={title}
      ref={contentRef}
      style={{
        maxHeight: expandedWork ? contentRef.current.scrollHeight : 70,
        overflow: "hidden",
        transition: "max-height 0.2s ease-in-out",
      }}
      onClick={() => setExpandedWork(!expandedWork)}
    >
      <div className="work-header">
        <div>
          <img src={logoUrl} alt={title} className="logo" />{" "}
          <div className="subtitle">{date}</div>
        </div>
        <div className="info">
          <div className="title">{company}</div>{" "}
          <div className="redirect-link">
            <ChevronDown />
          </div>
        </div>
      </div>

      {company !== "Sharechat" && (
        <div className="work-content">
          <div className="list-item">
            <Chevron /> Worked on{" "}
            <a
              className="list-links"
              href="https://youtu.be/CknLIGH08TY"
              onClick={(e) => {
                e.stopPropagation();
                window.open("https://youtu.be/CknLIGH08TY", "_blank");
              }}
              target="_blank"
              rel="noreferrer"
            >
              Invoice Builder
            </a>{" "}
            feature
          </div>
          <div className="list-item">
            <Chevron /> Worked on{" "}
            <a
              className="list-links"
              href="https://youtu.be/bJsvtCUbuCE"
              onClick={(e) => {
                e.stopPropagation();
                window.open("https://youtu.be/bJsvtCUbuCE", "_blank");
              }}
              target="_blank"
              rel="noreferrer"
            >
              Email Designer
            </a>{" "}
            feature
          </div>
          <div className="list-item">
            <Chevron /> Worked on{" "}
            <a
              className="list-links"
              href="https://youtu.be/Wv6A95OzoE4"
              onClick={(e) => {
                e.stopPropagation();
                window.open("https://youtu.be/Wv6A95OzoE4", "_blank");
              }}
              target="_blank"
              rel="noreferrer"
            >
              Signature Designer
            </a>{" "}
            feature
          </div>
          <div className="list-item">
            <Chevron /> Worked on{" "}
            <a
              className="list-links"
              href="https://youtu.be/Bu6ZzNHO1bQ"
              onClick={(e) => {
                e.stopPropagation();
                window.open("https://youtu.be/Bu6ZzNHO1bQ", "_blank");
              }}
              target="_blank"
              rel="noreferrer"
            >
              Rules
            </a>{" "}
            feature
          </div>
          <div className="list-item">
            <Chevron /> Worked on{" "}
            <a
              className="list-links"
              href="https://youtu.be/alqRhgPGcTw"
              onClick={(e) => {
                e.stopPropagation();
                window.open("https://youtu.be/alqRhgPGcTw", "_blank");
              }}
              target="_blank"
              rel="noreferrer"
            >
              Advanced Tracking
            </a>{" "}
            feature
          </div>
        </div>
      )}
      {company === "Sharechat" && (
        <div className="work-content">
          <div className="list-item">
            <Chevron /> Refactored service from Java to Node.js
          </div>
          <div className="list-item">
            <Chevron /> Built payload creation algorithms for around 30 unique
            notifications
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkItem;
