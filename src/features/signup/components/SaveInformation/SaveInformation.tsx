import { Form, Formik } from "formik";
import FormControlText from "../../../../ReusableComponents/FormControlText/FormControlText";
import { useDispatch } from "react-redux";
import { decreaseStep } from "../../signupSlice";
import FormInputGroup from "../../../../ReusableComponents/FormInputGroup/FormInputGroup";
import FormControlDropdown from "../../../../ReusableComponents/FormControlDropdown/FormControlDropdown";

const SaveInformation = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    url: "",
    lang: "",
    fashion: "",
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmitHandler = (values: any) => {
    console.log(values);
    // call api
  };

  return (
    <div className="container">
      <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
        <Form>
          <FormControlText
            name="name"
            label="Store Name*"
            placeholder="Type your store name"
          />
          <FormInputGroup
            name="url"
            label="Store URL"
            placeholder="mystore*"
            addonText=".markatty.com"
          />
          <FormControlDropdown
            name="lang"
            label="Store language*"
            options={["English", "Arabic"]}
            placeholder="Select Language"
          />
          <FormControlDropdown
            name="fashion"
            label="Store language*"
            options={["Baby", "Boy's Fashion", "Girls Fashion"]}
            placeholder="Select Fashion"
          />
          <button className="form-control-button">Save</button>
          <button className="backBtn" onClick={() => dispatch(decreaseStep())}>
            {`<- Back to log in`}
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default SaveInformation;
