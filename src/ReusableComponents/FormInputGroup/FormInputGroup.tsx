import { InputText } from "primereact/inputtext";
import { useField } from "formik";
import "./FormInputGroup.css";

type FormInputGroupProps = {
  name: string;
  label: string;
  placeholder: string;
  addonText: string;
};

const FormInputGroup = (props: FormInputGroupProps) => {
  const { name, label, placeholder, addonText } = props;

  const [field] = useField(name);

  return (
    <div className="form-control-group">
      <label>{label}</label>
      <div className="p-inputgroup flex-1">
        <InputText {...field} placeholder={placeholder} />
        <span className="p-inputgroup-addon">{addonText}</span>
      </div>
    </div>
  );
};

export default FormInputGroup;
