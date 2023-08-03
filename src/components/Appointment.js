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

export default function Appointment(){
  const bookImages = [book_01, book_02, book_03, book_04, book_05, book_06, book_07, book_08, book_09, book_10];
  return(
      <div id="box">
      <figure>
        <img src={bookImages[0]} alt="bookName" />
        <figcaption>
          <ul>
            <li>
            <dfn>도서명</dfn>
            <span>bookName</span>
            </li>
            <li>
            <span>writer</span>
            <span>publisher</span>
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