import AppointList from "./components/AppointList";
import Search from "./components/Search";
import Appointment from "./components/Appointment";
import './index.css';

export default function App(){
  return(
    <div id="wrap">
      <Appointment />
      <Search />
      <AppointList />
    </div>
  )
}