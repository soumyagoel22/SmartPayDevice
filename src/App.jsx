import { useState } from "react";
import UserForm from "./components/UserForm";
import OrderForm from "./components/OrderForm";
import { userObject, orderObject } from "./utils/constant";
import "./styles.css";

const App = () => {
  const [userObjectDetails, setUserObjectDetails] = useState(userObject);
  const isUserObjectLength = Object.keys(userObjectDetails).length
    ? false
    : true;
  const [isUserEmpty, setIsUserEmpty] = useState(isUserObjectLength);

  return (
    <div className="App">
      {isUserEmpty ? (
        <UserForm
          setUserObject={setUserObjectDetails}
          setIsUserEmpty={setIsUserEmpty}
        />
      ) : (
        <OrderForm userObject={userObjectDetails} orderObject={orderObject} />
      )}
    </div>
  );
};

export default App;
