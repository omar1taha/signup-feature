import { InputText } from "primereact/inputtext";
import { useField } from "formik";
import { ReactNode } from "react";
import "./FormControlTexticon.css";

type FormControlTexticonProps = {
  name: string;
  label: string;
  placeholder: string;
  subtitle?: string;
  children: ReactNode;
};

const FormControlTexticon = (props: FormControlTexticonProps) => {
  const { name, label, placeholder, subtitle, children } = props;

  const [field] = useField(name);

  return (
    <div className="form-control-icon">
      <label>{label}</label>
      <div className="p-inputgroup flex-1">
        <span className="p-inputgroup-addon">{children}</span>
        <InputText {...field} placeholder={placeholder} />
      </div>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </div>
  );
};

export default FormControlTexticon;
