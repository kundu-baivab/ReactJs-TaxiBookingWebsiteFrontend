import React from "react";

function FormInputGroup({ label, type, value, onChange,placeholder,name }) {
  return (
    <>
      <form className="col my-4">
        <label htmlFor="input" className="form-label text-white font-weight-bold">
          {label}
        </label>
        <input
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className="form-control inp"
          required
        />
      </form>
    </>
  );
}

export default FormInputGroup;