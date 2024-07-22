import UsersContext from "../../../contexts/UsersContext";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FormikInput from "../../UI/input/FormikInput";

const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  > form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > div {
      display: grid;
      grid-template-columns: 1fr 2fr;
      >p{
        grid-column: span 2;
    }
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const { users, setLoggedInUser } = useContext(UsersContext);
  const [failedToLogin, setFailedToLogin] = useState(false);
  const formValues = {
    email: "",
    passWord: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Must be valid address")
      .required("Must be filled")
      .trim(),
    password: Yup.string().required("Must be filled").trim(),
  });

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {

      const loggedInUser = users.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );
      if (loggedInUser) {
        setLoggedInUser(loggedInUser);
        navigate("/");
      }else{
        setFailedToLogin(true)
      }
    },
  });

  return (
    <StyledLoginPage>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <FormikInput
          type="email"
          name="email"
          formik={formik}
          placeholder="enter email"
        />
        <FormikInput
          type="password"
          name="password"
          formik={formik}
          placeholder="enter email"
        />
        <button type="submit">Login</button>
      </form>
      {failedToLogin && <p>No User found</p>}
    </StyledLoginPage>
  );
};

export default Login;
