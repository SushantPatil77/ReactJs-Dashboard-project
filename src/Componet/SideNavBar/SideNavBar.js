import React from "react";
import {
  FaTachometerAlt,
  FaTasks,
  FaClipboardList,
  FaBoxOpen,
  FaChartBar,
  FaEnvelope,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";
import "./SideNav.css";

const SideNavBar = () => {
  return (
    <div className="dashboard-container" style={{ padding: "8px" }}>
      <div className="sidebar">
        <div
          style={{ padding: "0 20px", textAlign: "center", margin: "10px 0" }}
        >
          <h2>Owner's</h2>
        </div>
        <nav>
          <ul>
            <li className="active">
              <FaTachometerAlt /> <span className="menu-text">Dashboard</span>
            </li>
            <li>
              <FaTasks /> <span className="menu-text">Requirements</span>
            </li>
            <li>
              <FaClipboardList /> <span className="menu-text">Allotment</span>
            </li>
            <li>
              <FaBoxOpen /> <span className="menu-text">Products</span>
            </li>
            <li>
              <FaChartBar /> <span className="menu-text">Report</span>
            </li>
            <li>
              <FaEnvelope /> <span className="menu-text">Messages</span>
            </li>
            <li>
              <FaCogs /> <span className="menu-text">Settings</span>
            </li>
            <li>
              <FaSignOutAlt /> <span className="menu-text">Sign Out</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop:"-13px"
          }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            <div>
              <h1 style={{ fontSize: "30px" }}>Dashboard</h1>
            </div>
          </div>
          <div className="user-info" style={{ textAlign: "right" }}>
            <p style={{ fontSize: "18px" }}>Sachin Tendulkar</p>
            <p style={{ fontSize: "12px" }}>Sr. HR Manager</p>
          </div>
        </header>
        <div className="card">
          <div className="stats-grid">
            {[
              { title: "New Requirements", count: 25 },
              { title: "Req. Allocated", count: 15 },
              { title: "R1: CV Shared", count: 35 },
              { title: "R2: Technical Cleared", count: 20 },
              { title: "R3: Client CV Filtered", count: 4 },
              { title: "R4: Client Interview Cleared", count: 21 },
              { title: "Offer Released", count: 5 },
              { title: "Offer Accepted", count: 10 },
              { title: "Joined", count: 10 },
            ].map((item, index) => (
              <div key={index} className="stat-box">
                <h3>{item.title}</h3>
                <p>{item.count}</p>
                <button>View More</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
