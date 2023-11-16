import {
  emailBanner,
  handdrawnarrow,
  stars,
  store,
} from "../../../../assets/assets";
import type { RootState } from "../../../../store";
import { useSelector } from "react-redux";
import "./RightBanner.css";

const RightBanner = () => {
  let image;
  let mainTitle;
  const subTitle =
    "Create a free account and get full access to all features for 30-days. No credit card needed. Get started in 2 minutes.";

  // Dynamic conditional rendering of content according to step
  const step = useSelector((state: RootState) => state.signup.step);

  switch (step) {
    case 0:
      image = stars;
      mainTitle = "Start turning your ideas into reality";
      break;
    case 1:
      image = emailBanner;
      mainTitle = "Verify your account now";
      break;
    case 2:
      image = store;
      mainTitle = "Setup your store the way you like";
      break;
    default:
      break;
  }

  return (
    <div className="banner">
      <div>
        <img src={image} width="80" height="80"></img>
        <p className="title">{mainTitle}</p>
        <p className="subtitle">{subTitle}</p>
        <div className="arrowimg">
          <img src={handdrawnarrow} width={250} height={250}></img>
        </div>
      </div>
    </div>
  );
};

export default RightBanner;
