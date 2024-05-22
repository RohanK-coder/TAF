import React, { useState } from 'react';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [vorc, setVorc] = useState('');

  const signup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        username,
        email,
        password,
        vorc
      });

      if (response.data.message === "success") {
        alert("Signup Successful");
        window.location.reload(); // Consider using React state to update UI instead
      } else {
        alert("User already exists");
      }
    } catch (error) {
      alert("Wrong details or server error");
      console.error(error);
    }
  }

  const login = async (f) => {
    f.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password
      });

      if (response.data.status === "exist") {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('username', response.data.username);

        history("/"); // Redirect to home page
        window.location.reload(); // Consider using React state to update UI instead
      } else {
        alert("User has not signed up");
      }
    } catch (error) {
      alert("Wrong details or server error");
      console.error(error);
    }
  }

  return (
    <div className='signinForm'>
      
      <div className="wrapper">
        <div className="card-switch">
          <label className="switch">
            <input type="checkbox" className="toggle"/>
            <span className="slider"></span>
            <span className="card-side"></span>
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <h3 className='text-xl text-green-900 font-bold pt-5 pb-8'>Think Ayurveda First</h3>
                
                <form className="flip-card__form" onSubmit={login}>
                  <input className="flip-card__input" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" type="email"/>
                  <input className="flip-card__input" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" type="password"/>
                  <input className="flip-card__input" name="password" placeholder="Confirm Password" type="password"/>
                  <button className="flip-card__btn" type="submit">Log In</button>
                </form>
              </div>
              <div className="flip-card__back">
                <h3 className='text-xl text-green-900 font-bold pt-5 pb-8'>Think Ayurveda First</h3>
                <form className="flip-card__form" onSubmit={signup}>
                  <input className="flip-card__input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Name" name="username" type="text"/>
                  <input className="flip-card__input" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" type="email"/>
                  <input className="flip-card__input" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" type="password"/>
                  <input className="flip-card__input" name="password" placeholder="Confirm Password" type="password"/>
                  <input className="flip-card__input" value={vorc} onChange={(e) => setVorc(e.target.value)} name="vorc" placeholder="Vendor or Customer" type="select"/>
                  <button className="flip-card__btn" type="submit">Sign Up</button>
                </form>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
