import {BsFillCaretDownFill} from 'react-icons/bs';

export default function Appointment({book,setShowAppoint,addFormData,formData,setFormData,LoanAptDate}){
  const radioCheck = (e) => {
    setFormData({...formData, message: e.target.value});
  }

  return(
    <>
      <h3 onClick={() => setShowAppoint(false)}>도서 대출 예약 &nbsp;<span><BsFillCaretDownFill /></span></h3>
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
      <form onSubmit={(e) => {e.preventDefault();     
        if(!formData.userName) {
            alert('예약자명을 입력해주세요.');
            return;
          }

        if(!formData.aptDate) {
            alert('대출 희망 날짜를 선택해주세요.');
            return;
          } 
    addFormData(); setShowAppoint(false); }}>
        <fieldset>
        <ul>
        <li>
        <p>* 이 붙은 항목은 필수 항목입니다.<br />* 예약하려는 책이 맞는지 확인해주세요.</p>
        </li>
        <li>
        <label htmlFor="userName">* 예약자명</label>
        <input type="text" value={formData.userName} onChange={(e) => {setFormData({...formData,userName:e.target.value})}} required />
        </li>
        <li>
        <label htmlFor="aptDate">* 대출 희망 날짜</label>
        <input type="date" value={formData.aptDate} min={LoanAptDate} onChange={(e) => {setFormData({...formData,aptDate:e.target.value})}} required /> 
        </li>
        <li>
        <label htmlFor="aptTime">&nbsp; 대출 희망 시간</label>
        <input type="time" value={formData.aptTime} onChange={(e) => {setFormData({...formData,aptTime:e.target.value})}} /> 
        </li>
        <li>
        <label htmlFor="message">* 빠른 대출 가능 알림 수신 여부</label>
        <div id="check">
        <p>
          대출 희망 날짜보다 빠르게 도서 대출이 가능할 때 문자메시지로 알려드리는 서비스입니다.
        </p>
          <label htmlFor="ok">수신</label>
          <input type="radio" name="message" value="ok" id="ok" checked={formData.message === "ok"} onChange={radioCheck} />
          <label htmlFor="no">거부</label>
          <input type="radio" name="message" value="no" id="no" checked={formData.message === "no"} onChange={radioCheck} />
        </div> 
        </li>
        <li><input type="submit" value="예약하기" /></li>
      </ul>
        </fieldset>
      </form>
      </div>
    </>
  )
}