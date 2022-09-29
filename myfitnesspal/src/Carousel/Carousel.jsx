//   "https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-3.jpg&w=1920&q=75",
//   "https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-1.jpg&w=1920&q=75",
//   "https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-2.jpg&w=1920&q=75",
import { useState, useEffect } from "react";
import styles from "../Home.module.css";
import Slide1 from "../images/Slide1.png";
import Slide2 from "../images/Slide2.png";
import Slide3 from "../images/Slide3.png";

let imagesAr = [Slide1, Slide2, Slide3];
function Carousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 2000);
    if (index > imagesAr.length - 1) {
      setIndex(0);
    }
    const cleanup = () => {
      clearInterval(intervalId);
    };
    return cleanup;
  }, [index]);

  return (
    <div className={styles.Carousel}>
      <img src={imagesAr[index]} alt="Not Found" />
    </div>
  );
}
export default Carousel;
