import { InputText } from "primereact/inputtext";
import { useField } from "formik";
import "./FormControlText.css";

type FormControlProps = {
  name: string;
  label: string;
  placeholder: string;
  subtitle?: string;
};

const FormControlText = (props: FormControlProps) => {
  const { name, label, placeholder, subtitle } = props;

  const [field, meta] = useField(name);

  return (
    <div className="form-control">
      <label>{label}</label>
      <InputText {...field} placeholder={placeholder} />
      {subtitle && <div className="subtitle">{subtitle}</div>}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormControlText;
