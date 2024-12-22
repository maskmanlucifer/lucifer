import Wave from "../Components/wave";

const Books = ({ books }) => {

    return (
      <div className="books-section">
        <p className="section-title">BOOKS</p>
        <div className="books-list">
          {books.map((book, index) => {
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
        <Wave />
      </div>
    );
  };
  
  export default Books;
  