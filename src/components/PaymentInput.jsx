import { useState } from "react";
import { PAYMENT_DETAILS_TEXT } from "../utils/constant";
import { handleSendClick } from "../services/apiService";

const PaymentInput = ({ userObject }) => {
  const [phoneNumber, setPhoneNumber] = useState(userObject.phoneNumber);
  return (
    <div className="payment">
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
      />
      <button className="send-btn" onClick={handleSendClick}>
        {PAYMENT_DETAILS_TEXT.SEND}
      </button>
    </div>
  );
};

export default PaymentInput;
