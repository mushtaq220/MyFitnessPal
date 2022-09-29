import styles from "../Home.module.css";
import Mushtaq1 from "../images/Mushtaq1.png";
import Mushtaq2 from "../images/Mushtaq2.png";
import Carousel from "../Carousel/Carousel";
function Home() {
  return (
    <div className={styles.Home}>
      <img style={{ width: "100%" }} src={Mushtaq1} alt="Not Found" />
      <img style={{ width: "100%" }} src={Mushtaq2} alt="Not Found" />
      <div className={styles.Heading}>
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
      <div className={styles.Heading}>
        <h1>Victory Stories</h1>
        <p>
          When you reach your goals, our whole community celebrates with you.
          That’s over 200 million members sharing in your victory—using it to
          inspire their own journey.
        </p>
      </div>
      <Carousel />
      <div className={styles.Heading}>
        <h1>Recipes & Inspiration</h1>
        <p>
          Get nutritionist-approved recipes and motivational workout tips from
          MyFitnessPal experts.
        </p>
      </div>
      <div className={styles.Recipes}>
        <div>
          <img
            src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=1920&q=75"
            alt="Not Found"
          />
          <h3>15 Make-Ahead Breakfasts Under 300 Calories</h3>
          <p>MyFitnessPalBlog</p>
        </div>
        <div>
          <img
            src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheat-days.a49e92b5.jpg&w=1920&q=75"
            alt="Not Found"
          />
          <h3>The Problem With Cheat Days</h3>
          <p>MyFitnessPalBlog</p>
        </div>
        <div>
          <img
            src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgetting-moving.e3e4042a.png&w=1920&q=75"
            alt="Not Found"
          />
          <h3>Esssential Guide to Getting Moving</h3>
          <p>MyFitnessPalBlog</p>
        </div>
      </div>
      <div className={styles.Heading}>
        <h1>Connect with over 50 apps.</h1>
        <p>
          Easily link your MyFitnessPal account with apps that support your
          healthier lifestyle. It’s not just about calories. It’s about feeling
          better, looking better, and living better.
        </p>
      </div>
      <div className={styles.Apps}>
        <img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-apps%402x.85e549ef.png&w=1920&q=75" alt="Not Found" />
      </div>
      <div className={styles.AppsStore}>
        <img src="https://www.myfitnesspal.com/_next/static/media/conversion-apple-app-store-logo.751bc42c.svg" alt="Not Found" />
        <img src="https://www.myfitnesspal.com/_next/static/media/conversion-google-play-store-logo.1c6369a1.svg" alt="Not Found" />
      </div>
    </div>
  );
}
export default Home;
