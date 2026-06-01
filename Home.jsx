import React, { useState } from "react";
import { doctors, services, clinics } from "../components/doctors";
import DoctorCard from "../components/DoctorCard";
import Footer from "../components/Footer";

function Home() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredDocs = activeTab === "All" 
    ? doctors 
    : doctors.filter(doc => doc.specialization === activeTab);

  return (
    <div className="dashboard-layout-engine">
      
      {/* Top Executive Dashboard Hero Banner */}
      <header className="dashboard-hero">
        <div className="hero-left-panel">
          <span className="system-pill">⚡ Coimbatore Live Clinical Network</span>
          <h1>Streamlined Clinical Care Solutions</h1>
          <p>Monitor practitioner shifts, evaluate emergency triage parameters, and discover medical facilities effortlessly across the Coimbatore district area.</p>
          
          <div className="hero-quick-analytics">
            <div className="analytic-box"><strong>4.9/5</strong><span>Patient Score</span></div>
            <div className="analytic-box"><strong>12 mins</strong><span>Avg Response</span></div>
            <div className="analytic-box"><strong>100%</strong><span>Secure Intake</span></div>
          </div>
        </div>
        <div className="hero-right-graphic">🏥</div>
      </header>

      {/* Google Maps Collaborative Screen Module */}
      <section className="live-radar-section">
        <div className="section-header-box">
          <h2>📍 Live Medical Map Monitor (Coimbatore Healthcare Zone)</h2>
          <span className="live-pulse-badge">● Fully Interactive</span>
        </div>
        
        <div className="google-maps-integration-frame">
          {/* Embedded Google Map centered on Coimbatore hospitals & medical entities */}
          <iframe
            title="Coimbatore Medical Location Map"
            src="https://maps.google.com/maps?q=hospitals%20and%20clinics%20in%20coimbatore&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Quick Reference Physical Cards for Primary Units */}
        <div className="clinics-radar-grid" style={{ marginTop: "20px" }}>
          {clinics.map((clinic) => (
            <div key={clinic.id} className="clinic-status-card">
              <div className="clinic-card-header">
                <h4>{clinic.name}</h4>
                <span className="distance-indicator">Coimbatore Zone</span>
              </div>
              <p className="clinic-street-address">🗺️ {clinic.address}</p>
              
              <div className="clinic-metrics-row">
                <div className="metric-pill wait-time-metric">⏱️ {clinic.waitTime}</div>
                <div className="metric-pill availability-metric">⚙️ {clinic.status}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Functional Filter Tab Bar Menu */}
      <section className="filter-navigation-section">
        <h3>🔍 Select Specialty Category</h3>
        <div className="dashboard-tab-bar">
          <button 
            className={`dashboard-tab-btn ${activeTab === "All" ? "is-active" : ""}`}
            onClick={() => setActiveTab("All")}
          >
            📋 View All Specialties
          </button>
          {services.map((service) => (
            <button
              key={service.id}
              className={`dashboard-tab-btn ${activeTab === service.name ? "is-active" : ""}`}
              onClick={() => setActiveTab(service.name)}
            >
              {service.icon} {service.name}
            </button>
          ))}
        </div>
      </section>

      {/* Core Practitioner Cards Sheet Container */}
      <main className="practitioners-workspace">
        <h2 className="section-main-heading">Board-Certified Medical Staff</h2>
        <p className="section-sub-heading">Review credentials, active residency, and operational availability markers prior to outpatient registration.</p>
        
        <div className="dashboard-cards-grid">
          {filteredDocs.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      </main>

      {/* Global Application Footer */}
      <Footer />
    </div>
  );
}

export default Home;