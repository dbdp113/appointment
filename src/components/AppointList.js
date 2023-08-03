import BookList from "./components/BookList";
import './index.css';
import {BsBookFill,BsFillCaretDownFill} from 'react-icons/bs';
import {FaClipboardList} from 'react-icons/fa';
import {FaRankingStar} from 'react-icons/fa6';
import Search from './components/Search';
import Appointment from "./components/Appointment";
import BookInfo from "./components/BookInfo";

import bookData from './booklist.json';

export default function App(){
  return(
    <div id="wrap">
      <h2><span><BsBookFill /></span>도서 대출 예약 시스템</h2>
      <Search />
      <div id="BookRank">
      <h3><FaRankingStar /> 도서 인기 순위</h3>
      <div className="box">
        <ol>
          <BookList book={bookData} />
        </ol>
      </div>
    </div>
    <div id="contain">
      <h3><FaClipboardList /> 도서 정보</h3>
      <div id="BookInfo">
      <BookInfo book={bookData} />
      <div id="Appointment">
      <h3>도서 대출 예약 &nbsp;<span><BsFillCaretDownFill /></span></h3>
      <Appointment book={bookData} />
      </div>
      </div>
    </div>
      </div>
  )
}