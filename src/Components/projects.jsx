import Wave from "./wave";
import { UNSPLASH_CHARACTERS } from "./unsplashCharacters";

// simplified "march of progress" silhouettes: hunched ape-walk to upright human
const EVOLUTION_FIGURES = [
  {
    heightPct: 58,
    paths: [
      "M6,10 A3,3 0 1,0 6.01,10", // head
      "M6,13 Q10,20 14,32", // spine
      "M8,15 L4,34", // dragging arm
      "M14,32 Q20,28 22,20", // tail
      "M14,32 L11,42 L9,48", // back leg
      "M14,32 L18,40 L20,48", // front leg
    ],
  },
  {
    heightPct: 70,
    paths: [
      "M8,9 A3,3 0 1,0 8.01,9",
      "M8,12 Q11,20 13,30",
      "M10,14 L6,24",
      "M13,30 L10,40 L8,48",
      "M13,30 L17,39 L19,48",
    ],
  },
  {
    heightPct: 80,
    paths: [
      "M9,8 A3,3 0 1,0 9.01,8",
      "M9,11 Q10,20 11,28",
      "M10,13 L6,22",
      "M12,13 L16,20",
      "M11,28 L9,39 L8,48",
      "M11,28 L14,39 L15,48",
    ],
  },
  {
    heightPct: 90,
    paths: [
      "M9,7 A3,3 0 1,0 9.01,7",
      "M9,10 L10,26",
      "M9,13 L6,22",
      "M11,13 L14,22",
      "M10,26 L9,38 L8,48",
      "M10,26 L12,38 L13,48",
    ],
  },
  {
    heightPct: 100,
    paths: [
      "M9,6 A3,3 0 1,0 9.01,6",
      "M9,9 L9,26",
      "M9,12 L5,20",
      "M9,12 L13,22",
      "M9,26 L6,37 L5,48",
      "M9,26 L12,39 L13,48",
    ],
  },
];

// two staggered rows of character icons within the animation box, kept
// clear of the edges so nothing clips
const CHARACTER_LAYOUT = [
  { top: "30%", left: "10%", rotate: "-8deg" },
  { top: "70%", left: "24%", rotate: "6deg" },
  { top: "30%", left: "38%", rotate: "5deg" },
  { top: "70%", left: "52%", rotate: "-6deg" },
  { top: "30%", left: "66%", rotate: "-4deg" },
  { top: "70%", left: "80%", rotate: "7deg" },
  { top: "30%", left: "90%", rotate: "-6deg" },
];

const Projects = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="projects">
      <p className="section-title">Projects</p>
      <div className="projects-list">
        {projects.map(({ title, status, description, projectUrl, image, animation }) => {
          return (
            <div
              className="project"
              key={title}
              onClick={() => window.open(projectUrl, "_blank")}
            >
              <div className="info">
                <div className="header">
                  <a href={projectUrl} target="_blank" rel="noreferrer">
                    <p className="title">{title}</p>
                  </a>
                  <div className={`status ${status.toLowerCase()}`}>
                    {status}
                  </div>
                </div>
                <p className="description">{description}</p>
                {animation === "evolution" && (
                  <div className="evolution-anim">
                    {EVOLUTION_FIGURES.map((figure, i) => (
                      <svg
                        key={i}
                        className="evolution-figure"
                        viewBox="0 0 30 50"
                        style={{
                          height: `${figure.heightPct}%`,
                          animationDelay: `${i * 0.15}s`,
                        }}
                      >
                        {figure.paths.map((d, j) => (
                          <path key={j} d={d} />
                        ))}
                      </svg>
                    ))}
                  </div>
                )}
                {animation === "characters" && (
                  <div className="characters-anim">
                    {UNSPLASH_CHARACTERS.slice(0, 7).map((character, i) => (
                      <svg
                        key={i}
                        className="character-figure"
                        viewBox={character.viewBox}
                        style={{
                          "--char-delay": `${i * 0.1}s`,
                          "--char-top": CHARACTER_LAYOUT[i].top,
                          "--char-left": CHARACTER_LAYOUT[i].left,
                          "--char-rotate": CHARACTER_LAYOUT[i].rotate,
                        }}
                      >
                        {character.paths.map((p, j) => (
                          <path key={j} d={p.d} fill={p.fill} />
                        ))}
                      </svg>
                    ))}
                  </div>
                )}
                {image && <img src={image} alt={title} loading="lazy" />}
              </div>
            </div>
          );
        })}
      </div>
      <Wave />
    </div>
  );
};

export default Projects;
