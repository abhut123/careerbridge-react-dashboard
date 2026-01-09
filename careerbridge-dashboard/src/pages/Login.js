import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Welcome Back 👋</h2>
        <p>Login to continue</p>

        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <button className="primary-btn" onClick={() => navigate("/dashboard")}>
          Login
        </button>

        <p>
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
