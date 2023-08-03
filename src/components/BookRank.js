

export default function BookRank({book,bookRankClick}){
  const book10Rank = book.slice(0,10);
  return(
    <>
    <ol>
    {book10Rank.map((book) => (<li key={book.id} onClick={() => bookRankClick(book)}>
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