import Book from "./Components/Book/Book";

function App() {
  const books =[{
                  "title": "Le seigneur des anneaux", 
                  "author": "JRR Tolkien", 
                  "date": "1954", 
                  "note": 5, 
                  "image": "https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/33/18366630.jpg"
                }, {
                  "title": "Fondation", 
                  "author": "Isaac Asimov", 
                  "date": "1951", 
                  "note": 1.8, 
                  "image": "https://images.leslibraires.ca/books/9782070360536/front/9782070360536_large.jpg"
                }, {
                  "title": "Harry Potter", 
                  "author": "JK Rowling", 
                  "date": "1997", 
                  "note": 3.9, 
                  "image": "https://m.media-amazon.com/images/I/81m1s4wIPML.jpg"
                }];

  return (
    <div className="App">
      <nav>
        <h1>BOOKINE</h1>
      </nav>
      <section className="books">
      {
        books.map((book)=> {
          return <Book author={book.author} title={book.title} note={book.note} date={book.date} image={book.image}/>
        })
      }
        {/* {books.map(book => <Book title={book.title} author={book.author} date={book.date} note={book.note} image={book.image}/>)} */}
      </section>
    </div>
  );
}

export default App;
