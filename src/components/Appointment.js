
export default function Appointment({book}){

  return(
      <div id="box">
      <figure>
        <img src={`${book.image}`} alt={book.bookName} />
        <figcaption>
          <ul>
            <li>
            <dfn>도서명</dfn>
            <span>{book.bookName}</span>
            </li>
            <li>
            <span>{book.writer}</span>
            <span>{book.publisher}</span>
            </li>
          </ul>
        </figcaption>
      </figure>
      <ul>
        <li>
        <p>* 이 붙은 항목은 필수 항목입니다.<br />* 예약하려는 책이 맞는지 확인해주세요.</p>
        </li>
        <li>
        <label htmlFor="userName">* 예약자명</label>
        <input type="text" />
        </li>
        <li>
        <label htmlFor="aptDate">* 대출 희망 날짜</label>
        <input type="date" /> 
        </li>
        <li>
        <label htmlFor="aptTime">&nbsp; 대출 희망 시간</label>
        <input type="time" /> 
        </li>
        <li>
        <label htmlFor="message">* 빠른 대출 가능 알림 수신 여부</label>
        <div id="check">
        <p>
          대출 희망 날짜보다 빠르게 도서 대출이 가능할 때 문자메시지로 알려드리는 서비스입니다.
        </p>
          <label htmlFor="ok">수신</label>
          <input type="radio" name="message" value="ok" id="ok" defaultChecked />
          <label htmlFor="no">거부</label>
          <input type="radio" name="message" value="no" id="no" />
        </div> 
        </li>
        <li><input type="submit" value="예약하기" /></li>
      </ul>
            </div>
  )
}