import {FaSearch} from 'react-icons/fa';

export default function Search({query,setQuery,setFilterOption}){


  return(
    <div id="Search">
      <h3><span><FaSearch /></span> 도서 검색</h3>
      <div className="box">
      <select defaultValue="" onChange={(e) => setFilterOption(e.target.value)}>
        <option value="">전체</option>
        <option value="bookName">도서명</option>
        <option value="writer">저자명</option>
        <option value="publisher">출판사명</option>
      </select>
      <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} />
      <input type="button" value="검색" />
      </div>
    </div>
  )
}