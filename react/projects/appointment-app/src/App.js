import "./App.scss";
import { useState, useEffect } from "react";
import {appointmentData, doctorData} from "./helper/data"
import AppointmentList from "./Components/AppointmentList";
import Doctors from "./Components/Doctors";
import Modals from "./Components/Modals";


function App() {
  const [doctorsList, setDoctorsList] = useState([]);
  const [appointmentList, setAppointmentList] = useState([]);
  const [modalDoctorName, setModalDoctorName] = useState("");
  

  useEffect(() => {
    setDoctorsList(doctorData);
    setAppointmentList(appointmentData);
  }, []);
  

  return <div className="App">
    <h1 className="mainTitle">CLARUS HOSPITAL</h1>

    {/* Our Doctors Component */}
    <h2 className="ourDoctors">Our Doctors</h2>
    <div className="doctorsListContainer">
      {doctorsList.map((doctor) => {
        return <Doctors doctor={doctor} setModalDoctorName={setModalDoctorName} key={doctor.id} />
      })}
    </div>

    {/* Modals Component */}
    <Modals modalDoctorName={modalDoctorName} setAppointmentList={setAppointmentList}/>

    {/* Appointment List Component */}
    <h2 className="appointmentList">Appointment List</h2>
    <div className="appointmentListContainer">
      {appointmentList.length === 0 ? <img src="../img/appointment.jpg" className="emptyAppointment"/> :
      appointmentList.map((appointment, key) => {
        return <AppointmentList appointment={appointment} key={key} setAppointmentList={setAppointmentList} appointmentList={appointmentList}/>
        
      })}
    </div>



  </div>;
}

export default App;
