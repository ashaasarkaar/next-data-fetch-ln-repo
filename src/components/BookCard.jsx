import Link from "next/link";


const BookCard = ({book}) => {
    const{id, author, title, price} = book;
    return (
       <div className="card bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <p>{author}</p>
    <p>{price}</p>
    <div className="justify-end card-actions">
      <Link href={`/books/${id}`}>
      <button className="btn btn-primary">Show Details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default BookCard;