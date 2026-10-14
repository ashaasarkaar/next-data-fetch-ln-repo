import BookCard from "@/components/BookCard";




const getBooks = async() =>{
    const res = await fetch('http://localhost:5000/books');
    return  res.json();
}

const BooksPage = async() => {
    const books = await getBooks();
    return (
        <div>
            <h1>Total Books Length: {books.length}</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    books.map(book =>  <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BooksPage;