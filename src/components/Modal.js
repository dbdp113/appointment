import BookInfo from "./BookInfo";
import Appointment from "./Appointment";

import {BsFillCaretDownFill} from 'react-icons/bs';
import {FaClipboardList} from 'react-icons/fa';
import {IoCloseSharp} from 'react-icons/io5';

export default function Modal({selectBook,modalToggle,setModalToggle}){
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
    <BookInfo book={selectBook} />
    <div id="Appointment">
    <h3>도서 대출 예약 &nbsp;<span><BsFillCaretDownFill /></span></h3>
    <Appointment book={selectBook} />
    </div>
    </div>
  </div>
  )
}