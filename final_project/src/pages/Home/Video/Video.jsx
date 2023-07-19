import videoBg from "./assets/videoBg.mp4";
import { clsx } from "clsx";
import "./style.scss";

// interface IProps {
//   name: string;
//   slug: string;
// }

export const Video = () => {
  return (
    <div className="video">
      <video className="video__mp4" src={videoBg} autoPlay loop muted />
      <div className="video__content">
        <h1 className="video__tagline">
          GoldStar coffee - wake up your dreams with a cup of coffee
        </h1>
      </div>
      <div className="video__content video__content-end">
        <button className="video__btn" href="#features">
          find out more
        </button>
      </div>
    </div>
  );
};
