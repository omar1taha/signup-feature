import StepProgressBar from "react-step-progress";
import type { RootState } from "../../../../store";
import { useSelector } from "react-redux";
import "react-step-progress/dist/index.css";
import "./ProgressIndicator.css";

const ProgressIndicator = () => {
  // Using redux toolkit to get step from state
  const step = useSelector((state: RootState) => state.signup.step);
  
  return (
    <StepProgressBar
      startingStep={step}
      steps={[
        {
          label: "Your Details",
          subtitle: "Provide your basic information",
          name: "step 1",
        },
        {
          label: "Confirmation",
          subtitle: "Confirm your email",
          name: "step 2",
        },
        {
          label: "Store information",
          subtitle: "Set your store main info",
          name: "step 3",
        },
      ]}
    />
  );
};

export default ProgressIndicator;
