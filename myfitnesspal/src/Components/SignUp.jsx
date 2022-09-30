import { useRef } from "react";
import styles from "../Form.module.css";
function SignUp() {
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const signUpAr = JSON.parse(localStorage.getItem("user")) || [];
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = new User(
      name.current.value,
      email.current.value,
      password.current.value
    );
    signUpAr.push(obj);
    localStorage.setItem("user", JSON.stringify(signUpAr));
  };
  class User {
    constructor(n, e, p) {
      this.name = n;
      this.email = e;
      this.password = p;
    }
  }
  return (
    <div className={styles.SignUp}>
      <h3>Member Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" ref={name} />
        <input placeholder="Email Address" type="email" ref={email} />
        <input placeholder="Password" type="password" ref={password} />
        <p>Forgot password?</p>
        <input type="submit" value="SIGN UP" />
      </form>
    </div>
  );
}
export default SignUp;
