import { useEffect, useRef, useState } from "react";
import Wave from "../Components/wave";

const YEARS = [2026, 2025];

const Books = ({ books }) => {
    const [activeYear, setActiveYear] = useState(YEARS[0]);
    const [indicatorStyle, setIndicatorStyle] = useState(null);
    const tabRefs = useRef({});
    const filteredBooks = books.filter((book) => book.year === activeYear);

    useEffect(() => {
      const activeTab = tabRefs.current[activeYear];
      if (!activeTab) return;
      setIndicatorStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
      });
    }, [activeYear]);

    return (
      <div className="books-section">
        <p className="section-title">BOOKS</p>
        <div className="books-tabs">
          {indicatorStyle && (
            <div className="books-tab-indicator" style={indicatorStyle} />
          )}
          {YEARS.map((year) => (
            <button
              key={year}
              ref={(el) => (tabRefs.current[year] = el)}
              className={`books-tab ${year === activeYear ? "active" : ""}`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
        <div className="books-list">
          {filteredBooks.map((book) => {
            const className = book.status === "Reading" ? "reading" : book.status === "Read" ? "read" : "";
            return (
              <div className={`book ${className}`} key={book.title}>
                <p className="book-status">{book.status}</p>
                <img src={book.url || 'https://ik.imagekit.io/8tmvchj44/' + book.img + '.jpg'} alt={book.title} />
                <div className="book-details">
                  <p className="book-title">{book.title}</p>
                  <p className="book-author">{book.author}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Wave />
      </div>
    );
  };

  export default Books;
