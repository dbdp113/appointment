import BookInfo from "./BookInfo";

import {FaClipboardList} from 'react-icons/fa';
import {IoCloseSharp} from 'react-icons/io5';

export default function Modal({selectBook,setSelectBook,modalToggle,setModalToggle,showAppoint,setShowAppoint,LoanList,setLoanList,aptList,setAptList}){

  const closeModal = () => {
    setModalToggle(false);
  }
  if(!modalToggle){
    return null;
  }
  return(
  <div id="modal">
    <h3><FaClipboardList /> 도서 정보<button onClick={closeModal}><IoCloseSharp /></button></h3>      
    <div id="BookInfo">
    <BookInfo book={selectBook} setBook={setSelectBook} showAppoint={showAppoint} setShowAppoint={setShowAppoint} LoanList={LoanList} setLoanList={setLoanList} aptList={aptList} setAptList={setAptList} />
    </div>
  </div>
  )
}