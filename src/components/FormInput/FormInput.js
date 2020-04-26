import React from "react";

const FormInput = ({
  lable,
  handleChange,
  handleBlur,
  icon,
  errorShow,
  ...otherprops
}) => {
  return (
    <div className="inp-box">
      {lable ? <lable className="inp-box__lable">{lable}</lable> : null}
      <input
        className="inp-box__input"
        onChange={handleChange}
        onBlur={handleBlur}
        {...otherprops}
      />
      <button className="inp-box__btn">
        <i className={`fas fa-${icon}`}></i>
      </button>
      {errorShow ? <div className="has-error">{errorShow}</div> : null}
    </div>
  );
};
export default FormInput;
