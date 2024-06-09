1. App.js is the main file where we check whether the object is empty or not.
constant file is for all the constants used in our application.
apiService file is for the get and post api functions used in our application.
UserForm component is for the form to fill all the required details.
2. If the object is empty we will call UserForm component to fill all the details and call the get api on the click of submit button.
3. If the object has data it will check what kind of device we are using.
If the device is "desktop" we will show "No payment options available".
If the device is "ios" we will show 2 payment options.
If the device is "android" we will show all the payment options.
PaymentInput component is for the input field of number and the post api operation on the click of send.
PaymentOptions component is for all the upi options on the basis of device type.
OrderForm component is to check the type of order if the type is "cod" then it will be "COD Delivery" and if the order type is "upi" it will call the PaymentOptions component to perform necessary operation on the basis of device.