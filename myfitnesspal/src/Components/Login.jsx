import styles from "../Form.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const email = useRef("");
  const password = useRef("");
  const user = JSON.parse(localStorage.getItem("user")) || [];
  const handleSubmit = (e) => {
    e.preventDefault();
    Check(email.current.value, password.current.value);
  };
  const Check = (email, password) => {
    const FilteredUser = user.filter((el) => {
      return el.email === email && el.password === password;
    });
    if (FilteredUser.length > 0) {
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Login Failed!");
    }
  };
  return (
    <div className={styles.Form}>
      <div>
        <h3>Member Login</h3>
        <form onSubmit={handleSubmit}>
          <input placeholder="Email Address" type="text" ref={email} />
          <input placeholder="Password" type="text" ref={password} />
          <p>Forgot password?</p>
          <input type="submit" value="LOG IN" />
        </form>
      </div>
    </div>
  );
}
export default Login;
