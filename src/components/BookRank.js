
export default function BookRank({book,setSelectBook,setModalToggle}){
  const book10Rank = book.slice(0,10);

  const bookList = (book) => {
    setSelectBook(book);
    setModalToggle(true);
  };
  
  return(
    <>
    <ol>
    {book10Rank.map((book) => (<li key={book.id} onClick={() => bookList(book)}>
      <figure>
        <span>{Number(book.id) +1}</span>
        <img src={`${book.image}`} alt={book.bookName} />
        <figcaption>
          <dl>
            <dt>{book.bookName}</dt>
            <dd>{book.writer}</dd>
          </dl>
        </figcaption>
      </figure>
    </li>))}
    </ol>
    </>
  )
}