import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Create Account ✨</h2>
        <p className="auth-subtitle">Start your journey with CareerBridge</p>

        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <button className="primary-btn" onClick={() => navigate("/")}>
          Sign Up
        </button>

        <p className="auth-switch">
          Already have an account?{" "}
          <span onClick={() => navigate("/")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
