import './index.css';

import {FaRankingStar} from 'react-icons/fa6';
import {BiListUl,BiSolidBookAlt} from 'react-icons/bi';

import Search from './components/Search';
import BookRank from "./components/BookRank";
import BookList from './components/BookList';

import { useState, useEffect, useCallback } from 'react';
import Modal from './components/Modal';

export default function App(){
  const [list, setList] = useState([]);
  const [selectBook,setSelectBook] = useState('');
  const [modalToggle, setModalToggle] = useState(false);

  const fetchList = useCallback(() => {
    fetch('./bookList.json')
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  useEffect(() => {
    fetchList();
  }, [fetchList]);
  
  return(
    <div id="wrap">
      <h2><span><BiSolidBookAlt /></span>도서 대출 예약 시스템</h2>
      <Search />
      <div id="BookRank">
      <h3><FaRankingStar /> 도서 대출 인기 순위</h3>
      <div className="box">
          <BookRank book={list} setSelectBook={setSelectBook} modalToggle={modalToggle} setModalToggle={setModalToggle} />
      </div>
    </div>
    <div id="BookList">
      <h3><span><BiListUl /></span> 도서 목록</h3>
      <div className='box'>
        <div id='frame'>
          <ul>
            <BookList book={list} />
          </ul>
        </div>
      </div>
    </div>
    <Modal selectBook={selectBook} setSelectBook={setSelectBook} modalToggle={modalToggle} setModalToggle={setModalToggle} />
      </div>
  )
}