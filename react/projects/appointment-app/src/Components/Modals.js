import "./Modals.scss";
import { useState, useEffect } from "react";

const Modals = ({modalDoctorName, setAppointmentList}) => {
  
  const [name, setName] = useState("");
  const [dayTime, setDayTime] = useState("");

  const submitHandler = () => {
    setAppointmentList((prev) => [...prev, {patient: name, doctor: modalDoctorName, date: dayTime, consulted: false}]);
    setName("");
    setDayTime("");
  }

  const submitBtnDisabled = () => {
    const submitBtn = document.querySelector(".submitBtn");
    if (name && dayTime) {
      submitBtn.disabled = false;
    }
    else {
      submitBtn.disabled = true;
    }
  }

  useEffect(() => {
    submitBtnDisabled();
  }, [name, dayTime]);

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Reservation for {modalDoctorName}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
                <label htmlFor="name">Patient Name</label>
                <input type="text" name="name" className="inputName" value={name} onChange={(e) => {setName(e.target.value)}}/>
                <label htmlFor="day_time">Day & Time</label>
                <input type="date" name="day_time" className="date-time" value={dayTime} onChange={(e) => {setDayTime(e.target.value)}}/>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary submitBtn" data-bs-dismiss="modal" onClick={submitHandler}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
