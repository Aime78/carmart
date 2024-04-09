import {  InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}
const Checkbox = ({id, label, className}: CheckboxProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <input
      id={id}
        type="checkbox"
        className="h-4 w-4 cursor-pointer rounded border-4 border-violet-800 bg-violet-400 text-violet-900 accent-purple-500 focus:ring-0 focus:ring-inset-0"
      />
      <label htmlFor={id} className="cursor-pointer text-violet-800">{label}</label>
    </div>
  );
};

export default Checkbox;
