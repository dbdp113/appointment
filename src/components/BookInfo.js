
import { useEffect, useState } from "react";
import BookLoanList from './BookLoanList';
import Appointment from "./Appointment";
import BookAptList from "./BookAptList";

export default function BookInfo({book,showAppoint,setShowAppoint,LoanList,setLoanList,aptList,setAptList}){
  const clearData = {
    "userName":"",
    "bookName":"",
    "writer":"",
    "publisher":"",
    "aptDate":"",
    "aptTime":"",
    "message":"ok"
  }

  const [selectBookName,setSelectBookName] = useState('');
  const [bookLoanCount,setBookLoanCount] = useState(0);
  const [lastId, setLastId] = useState(0);
  const [LoanAptDate, setLoanAptDate] = useState(null);

  const [formData,setFormData] = useState(clearData);

  function addFormData(){
    const newId = lastId + 1;
    const appointInfo={
      id: newId,
      userName:formData.userName,
      bookName:book.bookName,
      writer:book.writer,
      publisher:book.publisher,
      aptDate:formData.aptDate,
      aptTime:formData.aptTime,
      message:"ok"
    }
    setAptList([...aptList, appointInfo]);
    setLastId(newId);
    setFormData(clearData);
  }

  useEffect(() => {
    if (book) {
      setSelectBookName(book.bookName);
    }
  }, [book]);

  const addApt = (newAddApt) => {
    setAptList([...aptList,newAddApt]);
  }

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
            <p style={{color: bookLoanCount >= 2 ? "red" : "#7dba26", borderColor: bookLoanCount >= 2 ? "red" : "#7dba26"}}>{bookLoanCount >= 2 ?"대출불가" : "대출가능"}</p>
            <button type="button" onClick={() => { if(aptList.length < 3) setShowAppoint(true) }} style={{color: aptList.length >= 3 ? "red" : "#7dba26", borderColor: aptList.length >= 3 ? "red" : "#7dba26", pointerEvents: aptList.length >= 3 ? 'none' : 'auto'}}>{aptList.length >= 3 ?"예약불가" : "예약하기"}</button>
          </div>
        </figcaption>
      </figure>
      <BookLoanList selectBookName={selectBookName} setBookLoanCount={setBookLoanCount} LoanList={LoanList} setLoanList={setLoanList} setLoanAptDate={setLoanAptDate} />
      <div id="Appointment">
      <BookAptList selectBookName={selectBookName} aptList={aptList} />
    {showAppoint && <Appointment book={book} setShowAppoint={setShowAppoint} addFormData={addFormData} formData={formData} setFormData={setFormData} addApt={addApt} LoanAptDate={LoanAptDate} />}
    </div>
    </>
  )
}