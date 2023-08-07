
export default function BookAptList({aptList,selectBookName}){
  return(
    <div id="BookAptList">
      <h4>도서 예약 현황 ( {aptList.length} / 3 )</h4>
      <table>
        <thead>
          <tr>
            <th>순번</th>
            <th>예약자</th>
            <th>도서명</th>
            <th>대출 희망 일자</th>
          </tr>
        </thead>
        <tbody>
        {aptList && aptList.filter(item => item.bookName === selectBookName).map((apt, index) => (
        <tr key={apt.id}>
          <td>{index + 1}</td>
          <td>{apt.userName.charAt(0) + '*'.repeat(2)}</td>
          <td>{apt.bookName}</td>
          <td>{apt.aptDate}</td>
        </tr>
      ))}
        </tbody>
      </table>
    </div>
  )
}