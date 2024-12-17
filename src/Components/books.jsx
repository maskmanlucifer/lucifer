import { useEffect, useState } from "react";
import { getCarousalLeftArrow, getCarousalRightArrow } from "./helpers";

const Books = ({ books }) => {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const currentBooks = books.slice(currentBookIndex, currentBookIndex + 2);

  const setPreviousBooks = () => {
    const booksLength = books.length;
    if (booksLength % 2) {
      if (currentBookIndex === 0) {
        setCurrentBookIndex(booksLength - 1);
      } else {
        setCurrentBookIndex(currentBookIndex - 2);
      }
    } else {
      if (currentBookIndex === 0) {
        setCurrentBookIndex(booksLength - 2);
      } else {
        setCurrentBookIndex(currentBookIndex - 2);
      }
    }
  };

  const setNextBooks = () => {
    const booksLength = books.length;
    if (booksLength % 2) {
      if (currentBookIndex === booksLength - 1) {
        setCurrentBookIndex(0);
      } else {
        setCurrentBookIndex(currentBookIndex + 2);
      }
    } else {
      if (currentBookIndex === booksLength - 2) {
        setCurrentBookIndex(0);
      } else {
        setCurrentBookIndex(currentBookIndex + 2);
      }
    }
  };

  const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
  };

  useEffect(() => {
    currentBooks.forEach((book) => {
      preloadImage(book.img);
    });
  }, []);

  return (
    <div className="books-section">
      <p className="section-title">Books</p>
      <div className="books-list">
        {currentBooks.map((book, index) => {
          return (
            <div className="book" key={book.title}>
              <p className="book-status">{book.status}</p>
              <img src={book.img} alt={book.title} />
              <div className="book-details">
                <p className="book-title">{book.title}</p>
                <p className="book-author">{book.author}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="books-carousal">
        <span onClick={setPreviousBooks}>{getCarousalLeftArrow()}</span>
        <span onClick={setNextBooks}>{getCarousalRightArrow()}</span>
      </div>
    </div>
  );
};

export default Books;
