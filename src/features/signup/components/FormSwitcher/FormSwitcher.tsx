import AccountSignup from "../AccountSignup/AccountSignup";
import MailVerification from "../MailVerification/MailVerification";
import SaveInformation from "../SaveInformation/SaveInformation";
import type { RootState } from "../../../../store";
import { useSelector } from "react-redux";

import "./FormSwitcher.css";

const FormSwitcher = () => {
  // Using redux toolkit to get step from state
  const step = useSelector((state: RootState) => state.signup.step);

  switch (step) {
    case 0:
      return <AccountSignup />;
    case 1:
      return <MailVerification />;
    case 2:
      return <SaveInformation />;

    default:
      break;
  }
};

export default FormSwitcher;
