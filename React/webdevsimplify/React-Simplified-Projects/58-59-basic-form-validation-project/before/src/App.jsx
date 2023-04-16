import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [emailError, setEmailError] = useState([]);
  const [passwordError, setPasswordError] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    
    
  };

  return (
    <form clasName="form" onSubmit={submitHandler}>
      <div className="form-group error">
        <label className="label" for="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          placeholder="test@test.com"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <div className="msg">
          {/* {email === "" ? (
            <p>Email cannot be blank</p>
          ) : !email.includes("@webdevsimplified.com") ? (
            <p>Must end in @webdevsimplified.com</p>
          ) : (
            <p>Valid Email</p>
          )} */}
          {error && (
            <p>Email must not be bank and must end in @webdevsimplified.com</p>
          )}
        </div>
        <div className="form-group">
          <label className="label" for="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            id="password"
            placeholder="123456"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div className="msg">
          {error && (
            <p>
              Password must be more than 10 characters and includes a number
            </p>
          )}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default App;
