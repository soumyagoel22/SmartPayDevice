import { useState } from "react";
import { PAYMENT_DETAILS_TEXT } from "../utils/constant";
import { handlePaymentClick } from "../services/apiService";

const UserForm = ({ setUserObject, setIsUserEmpty }) => {
  const [formData, setFormData] = useState({
    address: "",
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserObject(formData);
    setIsUserEmpty(false);
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <label>
        {PAYMENT_DETAILS_TEXT.ADDRESS}:
        <input
          type="text"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
      </label>
      <label>
        {PAYMENT_DETAILS_TEXT.NAME}:
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <label>
        {PAYMENT_DETAILS_TEXT.PHONE_NUMBER}:
        <input
          type="text"
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
        />
      </label>
      <label>
        {PAYMENT_DETAILS_TEXT.EMAIL}:
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </label>
      <button
        type="submit"
        onClick={handlePaymentClick("PhonePe")}
        className="send-btn"
      >
        {PAYMENT_DETAILS_TEXT.SUBMIT}
      </button>
    </form>
  );
};

export default UserForm;
