import { userObject, orderObject } from "../utils/constant";

const handlePaymentClick = () => (upiName) => {
  if (userObject && Object.keys(userObject).length) {
    fetch(`http://localhost:8080/${upiName}`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  } else {
    alert("Please fill the user details.");
  }
};

const handleSendClick = () => () => {
  fetch("http://localhost:8080/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: orderObject.amount, phoneNumber }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

export { handlePaymentClick, handleSendClick };
