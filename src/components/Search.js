import {FaSearch} from 'react-icons/fa';

export default function Search(){
  return(
    <div id="Search">
      <h3><span><FaSearch /></span> 도서 검색</h3>
      <div className="box">
      <select>
        <option>전체</option>
        <option>도서명</option>
        <option>저자명</option>
        <option>출판사명</option>
      </select>
      <input type="search" />
      <input type="button" value="검색" />
      </div>
    </div>
  )
}