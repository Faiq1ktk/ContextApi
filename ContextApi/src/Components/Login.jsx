import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
import "../style/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({ username, email, password });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">CUSTOMER LOGIN</div>

        <form className="login-form">
          <div className="input-box">
            <span className="input-icon">👤</span>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-box">
            <span className="input-icon">✉</span>
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="login-button"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;