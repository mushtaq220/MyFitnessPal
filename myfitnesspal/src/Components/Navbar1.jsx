import { Link } from "react-router-dom";
import styles from "../Navbar.module.css";

function Navbar1() {
  const style = {
    textDecoration: "none",
    color: "blue",
  };
  return (
    <div className={styles.Navbar1}>
      <div>
        <Link style={style} to="/">
          <h1>myfitnesspal</h1>
        </Link>
      </div>
      <div>
        <Link style={style} to="/login">
          Log In
        </Link>
        <Link style={style} to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
export default Navbar1;
