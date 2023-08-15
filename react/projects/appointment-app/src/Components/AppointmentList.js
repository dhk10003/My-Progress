import "./AppointmentList.scss";
import { useState, useEffect } from "react";

const AppointmentList = ({appointment, appointmentList, setAppointmentList}) => {

    const [consulted, setConsulted] = useState(appointment.consulted);

    const consultedHandler = () => {
        setConsulted(!consulted);
        const indexOfAppointment = appointmentList.indexOf(appointment);
        const newAppointmentList = [...appointmentList];
        newAppointmentList[indexOfAppointment].consulted = !consulted;
        setAppointmentList(newAppointmentList);
    }

    useEffect(() => {
        setConsulted(appointment.consulted);
    }, [appointmentList]);

    const removeHandler = () => {
        console.log(appointment);
        console.log(appointment.day)
        setAppointmentList(appointmentList.filter((item) => item !== appointment))
    }

    return (
        <div className={consulted ? "consulted" : "appointment"} onDoubleClick={consultedHandler}>
            <div className="names">
                <p>{appointment.patient}</p>
                <p>{appointment.doctor}</p>
            </div>
            <div className="dates">
                <p>{appointment.date || "day"}</p>
            </div>
            <div className="removeBtn" onClick={removeHandler}>remove</div>
        </div>
    )
}

export default AppointmentList