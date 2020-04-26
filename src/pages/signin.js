import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as yup from "yup";
import { withFormik, yupToFormErrors } from "formik";

import SiginForm from "./SigninForm";

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ username: "", password: "" }),

  // Custom sync validation
  validate: (values) => {
    const schema = yup.object().shape({
      username: yup
        .string()
        .min(4, "نام کاربری باید بیشتر از ۴ حرف باشد")
        .required()
        .typeError("Invalid number"),
      password: yup
        .string()
        .min(6, "پسورد باید بیشتر از ۶ حرف باشد")
        .max(30, "پسورد باید کمتر از ۳۰ حرف باشد")
        .required(),
    });

    try {
      schema.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      return yupToFormErrors(error);
    }
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
})(SiginForm);

const Signin = () => (
  <section className="signin-box">
    <div className="signin">
      <div className="signin__header">
        <span>برای ادامه وارد شوید</span>
        <span>ورود admin</span>
      </div>

      <MyEnhancedForm />
      <div className="signin__resetpassword">
        <Link to="#">رمز عبور را فراموش کرده اید؟</Link>
        <Link to="#"> عضویت </Link>
      </div>
    </div>
  </section>
);
export default Signin;
