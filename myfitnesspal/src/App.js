import styles from "./Navbar.module.css";
import Navbar1 from "./Components/Navbar1";
import Navbar2 from "./Components/Navbar2";
import AllRoutes from "./pages/AllRoutes";
//console.log(styles);

function App() {
  return (
    <div className={styles.App}>
      <Navbar1 />
      <Navbar2 />
      <AllRoutes />
    </div>
  );
}

export default App;
