import React, { useState } from "react";
import { doctors } from "../components/doctors";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctorId: "",
    date: "",
    time: "",
    notes: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment successfully submitted for ${formData.name}!`);
    console.log("Form Submission Data:", formData);
  };

  return (
    <div className="appointment-dashboard-container">
      {/* Left Column: Context Info */}
      <div className="appointment-info-side">
        <h2>Book Your Consultation</h2>
        <p>Select your preferred practitioner and choose an available calendar date slot. A clinic coordinator will confirm your exact slot within 1 hour via email or SMS.</p>
        
        <div className="perk-badge">
          <span>🛡️</span>
          <div>
            <h4>Verified Practitioners Only</h4>
            <p>All scheduled medical specialists hold active board certifications.</p>
          </div>
        </div>

        <div className="perk-badge">
          <span>🔒</span>
          <div>
            <h4>HIPAA Compliant System</h4>
            <p>Your personal health information and form records are fully encrypted.</p>
          </div>
        </div>
      </div>

      {/* Right Column: Clean Grid Form */}
      <form className="form-dashboard" onSubmit={handleSubmit}>
        <h3>Patient & Schedule Intake Form</h3>
        
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="e.g., Jane Doe" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              placeholder="(555) 000-0000" 
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input 
            type="email" 
            name="email" 
            placeholder="jane.doe@example.com" 
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Select Specialist</label>
          <select 
            name="doctorId" 
            required 
            value={formData.doctorId}
            onChange={handleChange}
          >
            <option value="">-- Choose a Practitioner --</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name} ({doc.specialization})
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Preferred Date</label>
            <input 
              type="date" 
              name="date" 
              required
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Preferred Time Slot</label>
            <select 
              name="time" 
              required
              value={formData.time}
              onChange={handleChange}
            >
              <option value="">-- Select Time --</option>
              <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
              <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
              <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Reason for Visit / Symptoms (Optional)</label>
          <textarea 
            name="notes" 
            rows="3" 
            placeholder="Briefly describe the clinical support or checking services you need..."
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="form-submit-btn">Request Appointment Slot</button>
      </form>
    </div>
  );
}

export default Appointment;