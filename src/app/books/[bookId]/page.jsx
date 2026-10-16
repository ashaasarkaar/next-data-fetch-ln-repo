
export const generateStaticParams = async() =>{
    const res = await fetch('http://localhost:5000/books',{cache: 'no-store'});
    const books = await res.json();

    return books.slice(1, 3).map(book => ({
        bookId: book.id
    }))
}

const BookDetailsPage = async({params}) => {
    const {bookId} = await params;
    const res = await fetch(`http://localhost:5000/books/${bookId}`);
    const {category, rating, publishedYear} = await res.json()
    return (
        <div className="border-2 border-pink-600 p-6 rounded-2xl">
            <h1>Book Detail Page : {bookId}</h1>
            <h1>Book Category: {category}</h1>
            <p>Book Rating: {rating}</p>
            <p>Publishing Year: {publishedYear}</p>
        </div>
    );
};

export default BookDetailsPage;