import { doctors } from "../components/doctors";
import DoctorCard from "../components/DoctorCard";

function Doctors() {
  return (
    <div className="grid">
      {doctors.map((doc) => (
        <DoctorCard key={doc.id} doctor={doc} />
      ))}
    </div>
  );
}

export default Doctors;