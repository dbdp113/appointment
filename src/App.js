import BookList from "./components/BookList";
import './index.css';
import {BsBookFill} from 'react-icons/bs';
import {FaClipboardList} from 'react-icons/fa';
import Search from './components/Search';
import Appointment from "./components/Appointment";
import BookInfo from "./components/BookInfo";
// import data from './data.json';

export default function App(){
  return(
    <div id="wrap">
      <h2><span><BsBookFill /></span>도서 대출 예약 시스템</h2>
      <Search />
      <div id="BookList">
      <h3><FaClipboardList /> 도서 인기 순위</h3>
      <div className="box">
        <div id="container">
          <ol>
            <BookList />
          </ol>
        </div>
      </div>

    </div>
    <div id="BookInfo">
      <h3>도서 정보</h3>
      <BookInfo />
      <Appointment />
    </div>
    </div>
  )
}