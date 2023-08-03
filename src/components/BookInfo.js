
import BookAptList from "./BookAptList";

export default function BookInfo({book}){

  return(
    <>
        <figure>
        <img src={`${book.image}`} alt={book.bookName} />
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
            <li>
              <dfn>책소개</dfn>
              <span>{book.intro}</span>
            </li>
          </ul>
          <div id="btn">
            <button type="button">대출가능</button>
            <button type="button">예약하기</button>
          </div>
        </figcaption>
      </figure>
      <BookAptList />
    </>
  )
}