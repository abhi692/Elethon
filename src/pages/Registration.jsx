import React, { useState } from 'react';

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, password, phone);
    // Perform registration logic here
    // ...
  };

  return (
    <div className="registration-bg" style ={ { backgroundImage: "url('background for elethon.png')" } }>
      <div className='already-account'>
      <p>Already have an account?</p>
      <button className="login-button" type="submit">Login</button>
      </div>
    <form className="register-form" onSubmit={handleSubmit}>
      <h1 className="register-title">Registration Form</h1>
      <label className="register-label">
        <i className="fas fa-user"></i>
        <input className="register-input" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required/>
      </label>
      <label className="register-label">
        <i className="fas fa-envelope"></i>
        <input className="register-input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
      </label>
      <label className="register-label">
        <i className="fas fa-key"></i>
        <input className="register-input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
      </label>
      <label className="register-label">
        <i className="fas fa-phone"></i>
        <input className="register-input" type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} required/>
      </label>
      <button className="registration-button" type="submit">Register</button>
    </form>
    </div>
  );
}

export default Registration;
