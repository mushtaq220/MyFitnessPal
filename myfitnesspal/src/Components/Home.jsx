import styles from "../Home.module.css";
import Mushtaq1 from "../images/Mushtaq1.png";
import Mushtaq2 from "../images/Mushtaq2.png";
function Home() {
  return (
    <div className={styles.Home}>
      <img style={{ width: "100%" }} src={Mushtaq1} alt="Not Found" />
      <img style={{ width: "100%" }} src={Mushtaq2} alt="Not Found" />
      <div className={styles.FirstHeading}>
          <h1>The Tools for Your Goals</h1>
      <p>
        Trying to lose weight, tone up, lower your BMI, or invest in your
        overall health? We give you the right features to hit your goals.
              </p>
              </div>
      <div className={styles.Tools}>
        <div>
          <img
            src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg"
            alt="error"
          />
          <h3>Learn. Track. Improve.</h3>
          <p>
            Keeping a food diary helps you understand your habits and increases
            your likelihood of hitting your goals.
          </p>
        </div>
        <div>
          <img
            src="https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg"
            alt="error"
          />
          <h3>Logging Simplified</h3>
          <p>
            Scan barcodes, save meals and recipes, and use Quick Tools for fast
            and easy food tracking.
          </p>
        </div>
        <div>
          <img
            src="https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg"
            alt="error"
          />
          <h3>Stay Motivated</h3>
          <p>
            Join the World’s Largest Fitness Community for advice, tips, and
            support 24/7.
          </p>
        </div>
          </div>
          <button className={styles.btn}>START YOUR JOURNEY TODAY</button>
    </div>
  );
}
export default Home;
