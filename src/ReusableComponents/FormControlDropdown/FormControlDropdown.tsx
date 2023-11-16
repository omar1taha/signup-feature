import { useField } from "formik";
import { Dropdown } from "primereact/dropdown";
import "./FormControlDropdown.css";

type FormControlDropdownProps = {
  name: string;
  label: string;
  options: string[];
  placeholder: string;
};

const FormControlDropdown = (props: FormControlDropdownProps) => {
  const { name, options, label, placeholder } = props;

  const [field] = useField(name);

  return (
    <div className="form-control-dropdown">
      <label>{label}</label>
      <Dropdown {...field} options={options} placeholder={placeholder}/>
    </div>
  );
};

export default FormControlDropdown;
