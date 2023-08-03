import './index.css';
import {BsFillCaretDownFill} from 'react-icons/bs';
import {FaClipboardList} from 'react-icons/fa';
import {FaRankingStar} from 'react-icons/fa6';
import {IoCloseSharp} from 'react-icons/io5';
import {BiListUl,BiSolidBookAlt} from 'react-icons/bi';

import Search from './components/Search';
import Appointment from "./components/Appointment";
import BookInfo from "./components/BookInfo";
import BookRank from "./components/BookRank";
import BookList from './components/BookList';

import bookData from './booklist.json';

export default function App(){
  return(
    <div id="wrap">
      <h2><span><BiSolidBookAlt /></span>도서 대출 예약 시스템</h2>
      <Search />
      <div id="BookRank">
      <h3><FaRankingStar /> 도서 대출 인기 순위</h3>
      <div className="box">
        <ol>
          <BookRank book={bookData} />
        </ol>
      </div>
    </div>
    <div id="BookList">
      <h3><span><BiListUl /></span> 도서 목록</h3>
      <div className='box'>
        <div id='frame'>
          <ul>
            <BookList book={bookData} />
          </ul>
        </div>
      </div>
    </div>
    <div id="modal">
      <h3><FaClipboardList /> 도서 정보<button><IoCloseSharp /></button></h3>      
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