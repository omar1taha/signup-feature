import FormSwitcher from "../components/FormSwitcher/FormSwitcher";
import Logo from "../components/Logo";
import ProgressIndicator from "../components/ProgressIndicator/ProgressIndicator";
import RightBanner from "../components/RightBanner/RightBanner";
import "./SignupPage.css";

const SignupPage = () => {
  return (
    <div className="signup-layout">
      <div className="sigup-progess-content">
        <Logo />
        {/* This components handle progress accorinding to step, step is handled gloablly by redux toolkit */}
        <ProgressIndicator />
        {/* This component loads the corresponding component according to step */}
        <FormSwitcher />
      </div>
      <div className="right-content">
        {/* Static right content with background */}
        <RightBanner />
      </div>
    </div>
  );
};
export default SignupPage;
