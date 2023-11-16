import { Form, Formik } from "formik";
import FormControlText from "../../../../ReusableComponents/FormControlText/FormControlText";
import country from "../../../../assets/egico.svg";
import "./AccountSignup.css";
import FormControlTexticon from "../../../../ReusableComponents/FormControlTexticon/FormControlTexticon";
import { useDispatch } from "react-redux";
import { increaseStep } from "../../signupSlice";

const AccountSignup = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmitHandler = (values: any) => {
    console.log(values);
    //Call API if it pass Validation
    dispatch(increaseStep());
  };

  return (
    <div className="container">
      <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
        <Form>
          <FormControlText
            name="name"
            label="Name*"
            placeholder="Enter your name"
          />
          <FormControlText
            name="email"
            label="Email*"
            placeholder="Enter your email"
          />
          <FormControlTexticon
            name="phone"
            label="Phone Number*"
            placeholder="Enter your number"
          >
            <img src={country}></img>
          </FormControlTexticon>
          <FormControlText
            name="password"
            label="Password*"
            placeholder="Create a password"
            subtitle="Must be at least 8 characters"
          />
          <button className="form-control-button">Get Started</button>
          <a className="link-btn">
            Already have account? <span>Log in</span>
          </a>
        </Form>
      </Formik>
    </div>
  );
};
export default AccountSignup;
