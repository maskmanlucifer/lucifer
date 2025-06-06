import Wave from "../Components/wave";

const BOOKMARKS = [
  {
    id: 1,
    url: "https://paulgraham.com/articles.html",
  },
  {
    id: 2,
    url: "https://barnsworthburning.net/",
  },
  {
    id: 3,
    url: "https://www.degreeless.design/",
  },
  {
    id: 4,
    url: "https://www.designspells.com/",
  },
  {
    id: 5,
    url: "https://read.cv/explore",
  },
  {
    id: 6,
    url: "https://intentui.com/colors",
  },
  {
    id: 7,
    url: "https://www.siteinspire.com/",
  },
  {
    id: 8,
    url: "https://www.twblocks.com/",
  },
  {
    id: 9,
    url: "https://roadmap.sh/",
  },
  {
    id: 10,
    url: "https://public.work/",
  },
  {
    id: 11,
    url: "https://deadsimplesites.com/",
  },
  {
    id: 12,
    url: "https://www.footer.design/",
  },
];

const Bookmarks = () => {
  return (
    <div className="bookmarks-section">
      <p className="section-title">BOOKMARKS</p>
      <div className="bookmarks-list">
        {BOOKMARKS.map((bookmark) => {
          return (
            <div className="bookmark" key={bookmark.id}>
              <a href={bookmark.url} target="_blank" rel="noreferrer">
                {bookmark.url}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                color="#000000"
                fill="none"
              >
                <path
                  d="M9.521 14.4356L14.434 9.52258"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12.569 15.1084C13.3087 16.2488 13.1113 17.4178 12.2568 18.2723L9.26158 21.2675C8.28318 22.2459 6.69687 22.2459 5.71847 21.2675L2.73234 18.2814C1.75393 17.303 1.75393 15.7167 2.73234 14.7383L5.72755 11.743C6.42949 11.0411 7.76361 10.6357 8.91007 11.4659M15.1088 12.5685C16.2492 13.3082 17.4182 13.1109 18.2727 12.2564L21.2679 9.26114C22.2463 8.28273 22.2463 6.69641 21.2679 5.718L18.2818 2.73185C17.3034 1.75344 15.7171 1.75344 14.7387 2.73185L11.7434 5.72709C11.0415 6.42903 10.6362 7.76315 11.4664 8.90962"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          );
        })}
      </div>
      <Wave />
    </div>
  );
};

export default Bookmarks;
