export default function Appointment(){
  return(
    <div id="Appointment">
            <h3>신간 도서 대출 예약</h3>
      <dl>
        <dt>도서명</dt>
        <dd><input type="text" /></dd>
        <dt>저자명</dt>
        <dd><input type="text" /></dd>
        <dt>출판사명</dt>
        <dd><input type="text" /></dd>
        <dt>대출 희망 날짜</dt>
        <dd><input type="date" /></dd>
        <dt>대출 희망 시간</dt>
        <dd><input type="time" /></dd>
        <dt>이른 대출 가능 알림 수신 여부</dt>
        <dd>
          대출 희망 날짜보다 빠르게 도서 대출이 가능할 때 문자메시지로 알려드리는 서비스입니다.
        </dd>
        <dd>
          <label htmlFor="ok">수신</label>
          <input type="radio" name="message" value="ok" id="ok" checked />
          <label htmlFor="no">거부</label>
          <input type="radio" name="message" value="no" id="no" />
        </dd>        
      </dl>
    </div>
  )
}