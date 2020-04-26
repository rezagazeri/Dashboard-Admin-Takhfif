import React from "react";
import Recaptcha from "react-recaptcha";
import CustomButton from "./../components/CsstomButton/CusstomButton";
import FormInput from "../components/FormInput/FormInput";

const SiginForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;
  const verifyCallback = (response) => {};

  return (
    <form className="signin__form" onSubmit={handleSubmit}>
      <FormInput
        handleChange={handleChange}
        handleBlur={handleBlur}
        type="text"
        name="username"
        value={values.username}
        placeholder={"نام کاربری را وارد کنید"}
        lable="نام کاربری :"
        icon="user"
        errorShow={errors.username && touched.username ? errors.username : null}
        required
      />
      <FormInput
        handleChange={handleChange}
        handleBlur={handleBlur}
        type="password"
        name="password"
        value={values.password}
        placeholder={"پسورد خود را وارد کنید"}
        icon="key"
        lable="رمز ورود :"
        required
        errorShow={errors.password && touched.password ? errors.password : null}
      />
      {console.log(errors)}
      <div className="recaptch-container">
        <Recaptcha
          sitekey={process.env.REACT_APP_RECAPTCH_SECRET_KEY}
          render="explicit"
          verifyCallback={verifyCallback}
        />
      </div>
      <CustomButton type="submit" disabled={isSubmitting}>
        sign in
      </CustomButton>
    </form>
  );
};
export default SiginForm;
