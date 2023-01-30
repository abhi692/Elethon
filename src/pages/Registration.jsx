import React, { useState } from "react";
import { db } from "../firebase";

const Register = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [college,setCollege] = useState("");
  const [contact,setContact] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

    db.collection("students").add({
      name:name,
      email:email,
      college:college,
      contact:contact,
    })
    .catch((error)=>{
      alert(error.message)
    })

    setName("");
    setEmail("");
    setCollege("");
    setContact("");
  }

  return(
    <div className="registration-bg" style ={ { backgroundImage: "url('background for elethon.png')" } }>
      <div className='already-account'>
      <p className="already-account">Already have an account?</p>
      <button className="login-button" type="submit">Login</button>
      </div>
    <form className="register-form" onSubmit={handleSubmit}  style ={ { backgroundImage: "url('background for elethon.png')" } }>
      <h1 className="register-title">Registration Form</h1>
      <label className="register-label">Name</label>
      <input className="register-input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>

      <label className="register-label">Email</label>
      <input className="register-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

      <label className="register-label">College Name</label>
      <input className="register-input" placeholder="College Name" value={college} onChange={(e) => setCollege(e.target.value)} required/>

      <label className="register-label">Contact Number</label>
      <input className="register-input" placeholder="Contact Number" value={contact} onChange={(e) => setContact(e.target.value)} required/>

      <button className="registration-button" type="submit">Register</button>
    </form>
    </div>
  )
}

export default Register;