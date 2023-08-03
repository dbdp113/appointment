
export default function BookAptList(){
  return(
    <div id="BookAptList">
      <h4>도서 대출 현황</h4>
      <table>
        <thead>
          <tr>
            <th>순번</th>
            <th>예약자</th>
            <th>도서명</th>
            <th>대출일자</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>김**</td>
          <td>bookName</td>
          <td>atpDate</td>
        </tr>
        <tr>
          <td>2</td>
          <td>이**</td>
          <td>bookName</td>
          <td>atpDate</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}