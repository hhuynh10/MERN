import { useState, useMemo } from "react";
import "./App.css";
import { checkEmail, checkPassword } from "./validators";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const[afterFirstSubmit, setAfterFirstSubmit] = useState(false)

  const emailError = useMemo(() => {
    return afterFirstSubmit ? checkEmail(email) : []
  })
  const passwordError = useMemo(() => {
    return afterFirstSubmit ? checkPassword(password) : []
  }) 

  const submitHandler = (e) => {
    e.preventDefault();
    setAfterFirstSubmit(true)

    const emailErrorRes = checkEmail(email)
    const passwordErrorRes = checkPassword(password)

    if (emailErrorRes.length === 0 && passwordErrorRes.length === 0){
      alert("Login Succsess")
    }
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className={`form-group ${emailError.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="email">
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
          {emailError.length > 0 && (
            <div className="msg">
              {
                emailError.map(item => (
                  <li>{item}</li>
                ))
          }
              </div>
            )}
        <div
          className={`form-group ${passwordError.length > 0 ? "error" : ""}`}
        >
          <label className="label" htmlFor="password">
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
          {passwordError.length > 0 && (
            <div className="msg">
              {
                passwordError.map(item => (
                  <li>{item}</li>
                ))
              }
            </div>
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
