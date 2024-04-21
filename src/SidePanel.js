import React from "react";
import "./SidePanel.css";

export const SidePanel = () => {
  return (
    <div className="side-panel-container">
      <div className="bank-dash-logo">
        <img src="Logo.png" alt="logo?" />
      </div>
      <div className="side-panel">
        <ul className="side-panel-list">
          <li className="list-items" id="dashboard">
            <i class="fa-solid fa-house"></i>
            Dashboard
          </li>
          <li className="list-items" id="transactions">
            <i class="fa-solid fa-money-bill-transfer"></i>
            Transactions
          </li>
          <li className="list-items" id="accounts">
            <i class="fa-solid fa-user"></i>
            Accounts
          </li>
          <li className="list-items" id="investment">
            <i class="fa-solid fa-chart-simple"></i>
            Investment
          </li>
          <li className="list-items" id="credit-cards">
            <i class="fa-regular fa-credit-card"></i>
            Credit Cards
          </li>
          <li className="list-items active" id="loans">
            <i class="fa-solid fa-hand-holding-dollar"></i>
            Loans
          </li>
          <li className="list-items" id="services">
            <i class="fa-solid fa-screwdriver-wrench"></i>
            Services
          </li>
          <li className="list-items" id="my-privileges">
            <i class="fa-solid fa-lightbulb"></i>
            My Privilages
          </li>
          <li className="list-items" id="setting">
            <i class="fa-solid fa-gear"></i>
            Setting
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
