import book_01 from "../image/book01.jpg";
import book_02 from "../image/book02.jpg";
import book_03 from "../image/book03.jpg";
import book_04 from "../image/book04.jpg";
import book_05 from "../image/book05.jpg";
import book_06 from "../image/book06.jpg";
import book_07 from "../image/book07.jpg";
import book_08 from "../image/book08.jpg";
import book_09 from "../image/book09.jpg";
import book_10 from "../image/book10.jpg";

export default function BookList({book}){
  const bookImages = [book_01, book_02, book_03, book_04, book_05, book_06, book_07, book_08, book_09, book_10];
  return(
    <>
    {book.map((book,index) => (
    <li key={book.id}>
      <figure>
        <img src={bookImages[index]} alt={book.bookName} />
        <figcaption>
          <ul>
            <li>
              <dfn>도서명</dfn>
              <span>{book.bookName}</span>
            </li>
            <li>
              <dfn>저자명</dfn>
              <span>{book.writer}</span>
            </li>
            <li>
              <dfn>출판사</dfn>
              <span>{book.publisher}</span>
            </li>
          </ul>
          <button>자세히 보기</button>
        </figcaption>
      </figure>
    </li>
    ))}
    </>
  )
}