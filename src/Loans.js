import React from "react";
import "./Loans.css";

const Loans = () => {
  // implement the logic of toggling of profile & notification
  return (
    // loan category containers
    <div className="loans-page">
      <div className="loans-categories">
        <div className="loan-category-container" id="personal-loan">
          <div className="loan-img">
            <img src="personalLoans.svg" alt="business-loan-img" />
          </div>
          <div className="loan-category-with-amount-container">
            <p className="category-name">Personal Loans</p>
            <p className="loan-amount">$50,000</p>
          </div>
        </div>
        <div className="loan-category-container" id="corporate-loan">
          <div className="loan-img">
            <img src="corporateLoans.svg" alt="business-loan-img" />
          </div>
          <div className="loan-category-with-amount-container">
            <p className="category-name">Corporate Loans</p>
            <p className="loan-amount">$100,000</p>
          </div>
        </div>
        <div className="loan-category-container" id="business-loan">
          <div className="loan-img">
            <img src="businessLoans.svg" alt="business-loan-img" />
          </div>
          <div className="loan-category-with-amount-container">
            <p className="category-name">Business Loans</p>
            <p className="loan-amount">$500,000</p>
          </div>
        </div>
        <div className="loan-category-container" id="custom-loan">
          <div className="loan-img">
            <img src="customLoans.svg" alt="business-loan-img" />
          </div>
          <div className="loan-category-with-amount-container">
            <p className="category-name">Custom Loans</p>
            <p className="loan-amount">Choose Money</p>
          </div>
        </div>
      </div>
      {/* // active loans overview table */}
      <div className="active-loans-table">
        <div className="loan-overview-label">
          <h3>Active Loans Overview</h3>
        </div>
        <div id="active-loan-heading">
          <table>
            <tr>
              <th>SL No.</th>
              <th>Loan Money</th>
              <th>Left to pay</th>
              <th>Duration</th>
              <th>Interest Rate</th>
              <th>Installment</th>
              <th>Repay</th>
            </tr>

            <tr>
              <td>01.</td>
              <td>$100,000</td>
              <td>$40,500</td>
              <td>8 Months</td>
              <td>12%</td>
              <td>$2,000 / month</td>
              <td>
                <button className="repay-btn active">Repay</button>
              </td>
            </tr>

            <tr>
              <td>02.</td>
              <td>$500,000</td>
              <td>$250,000</td>
              <td>36 Months</td>
              <td>10%</td>
              <td>$8,000 / month</td>
              <td>
                <button className="repay-btn">Repay</button>
              </td>
            </tr>
            <tr>
              <td>03.</td>
              <td>$900,000</td>
              <td>$40,500</td>
              <td>12 Months</td>
              <td>12%</td>
              <td>$5,000 / month</td>
              <td>
                <button className="repay-btn">Repay</button>
              </td>
            </tr>
            <tr>
              <td>04.</td>
              <td>$50,000</td>
              <td>$40,500</td>
              <td>25 Months</td>
              <td>5%</td>
              <td>$2,000 / month</td>
              <td>
                <button className="repay-btn">Repay</button>
              </td>
            </tr>
            <tr>
              <td>05.</td>
              <td>$50,000</td>
              <td>$40,500</td>
              <td>5 Months</td>
              <td>16%</td>
              <td>$10,000 / month</td>
              <td>
                <button className="repay-btn">Repay</button>
              </td>
            </tr>
            <tr>
              <td>06.</td>
              <td>$100,000</td>
              <td>$40,500</td>
              <td>8 Months</td>
              <td>12%</td>
              <td>$2,000 / month</td>
              <td>
                <button className="repay-btn">Repay</button>
              </td>
            </tr>
            <tr>
              <td>07.</td>
              <td>$80,000</td>
              <td>$25,500</td>
              <td>14 Months</td>
              <td>8%</td>
              <td>$2,000 / month</td>
              <td>
                <button className="repay-btn">Repay</button>
              </td>
            </tr>
            <tr>
              <td>08.</td>
              <td>$160,000</td>
              <td>$100,800</td>
              <td>3 Months</td>
              <td>12%</td>
              <td>$900 / month</td>
              <td>
                <button className="repay-btn">Repay</button>
              </td>
            </tr>
            <tr>
              <td className="total">Total</td>
              <td className="total">$125,0000</td>
              <td className="total">$750,000</td>
              <td className="total"></td>
              <td className="total"></td>
              <td className="total">$50,000 / month</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Loans;
