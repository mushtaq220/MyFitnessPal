import { Link } from "react-router-dom";
import styles from "../Navbar.module.css";
function Navbar2() {
  const style = { color: "white" };
  return (
    <div className={styles.Navbar2}>
      <ul>
        <Link style={{ textDecoration: "none", color: "white" }} to="/about">
          ABOUT
        </Link>
      </ul>
      <ul style={style}>FOOD</ul>
      <ul style={style}>EXERCISE</ul>
      <ul style={style}>APPS</ul>
      <ul style={style}>COMMUNITY</ul>
      <ul style={style}>BLOG</ul>
      <ul style={style}>PREMIUM</ul>
    </div>
  );
}
export default Navbar2;
