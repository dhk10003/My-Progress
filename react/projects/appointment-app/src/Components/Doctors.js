import "./Doctors.scss";

const Dotor = ({ doctor, setModalDoctorName }) => {

  return (
    <div className="doctorBio">
      <img
        src={doctor.img}
        className="btn btn-light"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => setModalDoctorName(doctor.name)}
      />
      <h4>{doctor.name}</h4>
      <p>{doctor.dep}</p>

    </div>
  );
};

export default Dotor;
