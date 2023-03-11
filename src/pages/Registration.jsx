import React, { useState } from "react";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const Register = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [college,setCollege] = useState("");
  const [contact,setContact] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert("You have successfully registered for the Hackathon 2023")

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
      <div className="navbar1">
      <Link to="/">
        <button className="homepage" type="submit">Home</button>
      </Link>
      <Link to="/date">
        <button className='btn-5'>Schedule</button>
        </Link>
      </div>
      <div className='already-account'>
      <p>Already have an account?</p>
      <Link to="/login">
        <button className="login-button" type="submit">Login</button>
      </Link>
      </div>
    <form className="register-form" onSubmit={handleSubmit}>
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