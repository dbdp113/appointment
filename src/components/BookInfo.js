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

export default function BookInfo({book}){
  const bookImages = [book_01, book_02, book_03, book_04, book_05, book_06, book_07, book_08, book_09, book_10];
  return(
    <>
        <figure>
        <img src={bookImages[0]} alt={book.bookName} />
        <button type="button">예약하기</button>
        <figcaption>
          <ul>
            <li>
              <dfn>도서명</dfn>
              <span>bookName</span>
            </li>
            <li>
              <dfn>저자명</dfn>
              <span>writer</span>
            </li>
            <li>
              <dfn>출판사</dfn>
              <span>publisher</span>
            </li>
            <li>
              <dfn>책소개</dfn>
              <span>intro</span>
            </li>
          </ul>
        </figcaption>
      </figure>
    </>
  )
}