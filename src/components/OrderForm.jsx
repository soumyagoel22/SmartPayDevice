import PaymentOptions from "./PaymentOptions";
import { PAYMENT_DETAILS_TEXT } from "../utils/constant";

const OrderForm = ({ userObject, orderObject }) => {
  return (
    <div>
      {orderObject.orderType === "upi" ? (
        <PaymentOptions userObject={userObject} orderObject={orderObject} />
      ) : (
        <div style={{ maxWidth: "80%", margin: "0 auto", height: "80vh" }}>
          <h2>{PAYMENT_DETAILS_TEXT.CASH_ON_DELIVERY}</h2>
          <p>{`${PAYMENT_DETAILS_TEXT.AMOUNT_TO_PAY}: ${orderObject.amount}`}</p>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
