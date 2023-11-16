import { useState } from "react";
import { email, emailVerified } from "../../../../assets/assets";
import "./MailVerification.css";
import ReactCodeInput from "react-verification-code-input";
import { useDispatch } from "react-redux";
import { increaseStep } from "../../signupSlice";

const MailVerification = () => {
  const [isVerified, setIsVerified] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="container mailVerify">
      <div className="mailicon">
        <img
          src={isVerified ? emailVerified : email}
          width="50"
          height="50"
        ></img>
      </div>
      <h1>{isVerified ? "Email verified" : "Check your email"}</h1>
      <p>
        {isVerified
          ? "Your accounnt has been verified successfully. Click below to setup your store."
          : "We sent a verification code to omarmouneer@gmail.com"}
      </p>
      {!isVerified && <ReactCodeInput className="number-input" fields={4} />}
      <button
        className="form-control-button"
        onClick={() => {
          isVerified ? dispatch(increaseStep()) : setIsVerified(true);
        }}
      >
        {isVerified ? "Continue" : "Verify email"}
      </button>
      {isVerified ? (
        <button
          className="backBtn"
          onClick={() => setIsVerified(false)}
        >{`<- Back to log in`}</button>
      ) : (
        <a className="link-btn">
          Didn’t receive the email? <span>Click to resend</span>
        </a>
      )}
    </div>
  );
};
export default MailVerification;
