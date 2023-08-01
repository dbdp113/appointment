export default function Search(){
  return(
    <div id="Search">
      <select>
        <option>전체</option>
        <option>도서명</option>
        <option>저자명</option>
        <option>출판사명</option>
      </select>
      <input type="search" />
      <input type="button" value="검색" />
    </div>
  )
}