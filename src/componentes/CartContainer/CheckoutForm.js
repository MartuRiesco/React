import React, { useState } from "react";

import Forms from "../Forms/Forms";

export default function CheckoutForm(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  console.log(userData);

  function handleChange(evt) {
    const value = evt.target.value;
    const input = evt.target.name;

    const newUserData = { ...userData };
    newUserData[input] = value;
    setUserData(newUserData);
  }

  function clearForm() {
    setUserData({
      name: "",
      email: "",
      phone: "",
    });
  }

  function submitData(){
    props.onSubmit(userData)
  }

  return (
    <div className="formu">
      <h2>Completa tus datos para completar la compra🛍</h2>
    <Forms userData={userData} handleChange={handleChange}></Forms>
      <button className="bot"
        disabled={
          !(
            userData.name !== "" &&
            userData.phone !== "" &&
            userData.email !== ""
          )
        }
        onClick={submitData}
      >
        Crear orden
      </button>
      <button  className="bot" onClick={clearForm}>limpiar form</button>
    </div>
  );
}