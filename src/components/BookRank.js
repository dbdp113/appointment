import book_01 from "../image/book_01.jpg";
import book_02 from "../image/book_02.jpg";
import book_03 from "../image/book_03.jpg";
import book_04 from "../image/book_04.jpg";
import book_05 from "../image/book_05.jpg";
import book_06 from "../image/book_06.jpg";
import book_07 from "../image/book_07.jpg";
import book_08 from "../image/book_08.jpg";
import book_09 from "../image/book_09.jpg";
import book_10 from "../image/book_10.jpg";

export default function BookRank({book}){
  const bookImages = [book_01, book_02, book_03, book_04, book_05, book_06, book_07, book_08, book_09, book_10];
  return(
    <>
    {book.map((book,index) => (<li key={book.id}>
      <figure>
        <span>{Number(book.id) +1}</span>
        <img src={bookImages[index]} alt={book.bookName} />
        <figcaption>
          <dl>
            <dt>{book.bookName}</dt>
            <dd>{book.writer}</dd>
          </dl>
        </figcaption>
      </figure>
    </li>))}
    </>
  )
}