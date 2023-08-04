
export default function BookList({book}){
  return(
    <>
    {book.map((book,index) => (
    <li key={book.id}>
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
          </ul>
          <button>자세히 보기</button>
        </figcaption>
      </figure>
    </li>
    ))}
    </>
  )
}