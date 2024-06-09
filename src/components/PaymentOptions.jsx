import { useState, useEffect } from "react";
import PaymentInput from "./PaymentInput";
import { userObject, PAYMENT_DETAILS_TEXT } from "../utils/constant";
import { handlePaymentClick } from "../services/apiService";

const PaymentOptions = ({ userObject, orderObject }) => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("android")) {
      setDeviceType("android");
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      setDeviceType("ios");
    } else {
      setDeviceType("desktop");
    }
  }, []);

  return (
    <div style={{ maxWidth: "80%", margin: "0 auto", height: "80vh" }}>
      <PaymentInput userObject={userObject} />
      {deviceType === "desktop" ? (
        <p>{PAYMENT_DETAILS_TEXT.NO_PAYMENT_OPTION}</p>
      ) : (
        <>
          {deviceType === "ios" ? (
            <>
              <span>{PAYMENT_DETAILS_TEXT.PAY_USING}</span>
              <button
                className="pay-btn"
                onClick={handlePaymentClick("PhonePe")}
              >
                {PAYMENT_DETAILS_TEXT.PHONEPE}
              </button>
              <button
                className="pay-btn"
                onClick={handlePaymentClick("GooglePay")}
              >
                {PAYMENT_DETAILS_TEXT.GOOGLE_PAY}
              </button>
            </>
          ) : (
            <>
              <h4>
                {PAYMENT_DETAILS_TEXT.AMOUNT_TO_PAY}:
                <span className="amount">₹{orderObject.amount}</span>
              </h4>
              <span>{PAYMENT_DETAILS_TEXT.PAY_USING}</span>
              <button
                className="pay-btn"
                onClick={handlePaymentClick("PhonePe")}
              >
                {PAYMENT_DETAILS_TEXT.PHONEPE}
              </button>
              <button
                className="pay-btn"
                onClick={handlePaymentClick("GooglePay")}
              >
                {PAYMENT_DETAILS_TEXT.GOOGLE_PAY}
              </button>
              <button className="pay-btn" onClick={handlePaymentClick("Paytm")}>
                {PAYMENT_DETAILS_TEXT.PAYTM}
              </button>
              <button className="pay-btn" onClick={handlePaymentClick("BHIM")}>
                {PAYMENT_DETAILS_TEXT.BHIM}
              </button>
              <p>{PAYMENT_DETAILS_TEXT.OR}</p>
              <h4>{PAYMENT_DETAILS_TEXT.GET_PAYMENT_LINK}</h4>
              <span>{PAYMENT_DETAILS_TEXT.YOU_WILL_GET_LINK}</span>
              <PaymentInput userObject={userObject} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default PaymentOptions;
