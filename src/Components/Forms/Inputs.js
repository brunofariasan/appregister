import React from "react";
import { Input, P  } from './Style.Inputs';

const Inputs = ({ label, type, name, value, onChange, error, onBlur, changeTheColorOfButtonDemo }) => {

  function changeTheColorOfButtonDemo() {
  if (document.getElementById("username" && "email" && "phone" && "password" && "birthday").value != "")  {
      document.getElementById("button-register").style.background = " #0DBDBD";
      
    } else {
      document.getElementById("button-register").style.background = "skyblue";
    }
  }
  return (
    <>
      <label htmlFor={name}>
        {label}
      </label>
      <Input 
        id={name} 
        name={name} 
        type={type} 
        value={value} 
        onChange={onChange}
        onBlur={onBlur}
        onKeyUp={changeTheColorOfButtonDemo}
      />
      {error && <P>{error}</P>}
    </>
  )
};

export default Inputs;