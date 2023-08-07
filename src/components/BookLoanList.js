import { useEffect, useState } from "react"

export default function BookLoanList({selectBookName,setBookLoanCount,setLoanAptDate}){
  const [bookLoanList,setBookLoanList] = useState([]);

  const currentDate = new Date().toLocaleDateString('en-CA');

  useEffect(() => {
    fetch('./appointment.json')
      .then(response => response.json())
      .then(data => {
        const filterData = data.filter(item => item.bookName === selectBookName);
        setBookLoanList(filterData);
      });
  }, [selectBookName]);

  useEffect(() => {
    setBookLoanCount(bookLoanList.length);
  }, [bookLoanList, setBookLoanCount]);

  
  useEffect(() => {
    if (bookLoanList.length > 1) {
        const lastLoanDate = new Date(bookLoanList[bookLoanList.length - 1].aptDate);
        lastLoanDate.setDate(lastLoanDate.getDate() + 7);
        console.log("LoanAptDate for 2 or more loans:", lastLoanDate.toLocaleDateString('en-CA'));
        setLoanAptDate(lastLoanDate.toLocaleDateString('en-CA'));
    } else {
      console.log("LoanAptDate for less than 2 loans:", currentDate);
        setLoanAptDate(currentDate);
    }
}, [bookLoanList]);

  return(
    <div id="BookLoanList">
      <h4>도서 대출 현황 ( {bookLoanList.length} / 2 )</h4>
      <table>
        <thead>
          <tr>
            <th>순번</th>
            <th>대출자</th>
            <th>도서명</th>
            <th>대출일자</th>
          </tr>
        </thead>
        <tbody>
          {bookLoanList.map((loan,index) => (
            <tr key={loan.id}>
            <td>{index + 1}</td>
            <td>{loan.userName.charAt(0) + '*'.repeat(2)}</td>
            <td>{loan.bookName}</td>
            <td>{loan.aptDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}