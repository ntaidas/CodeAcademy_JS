import UsersContext from "../../../contexts/UsersContext";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FormikInput from "../../UI/input/FormikInput";
import { v4 as uuid } from "uuid";

const StyledRegisterPage = styled.main`
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
      > p {
        grid-column: span 2;
      }
    }
  }
`;

const Register = () => {
  const navigate = useNavigate();
  const { users, setLoggedInUser, setUsers, UsersActionTypes } =
    useContext(UsersContext);
  const [failedToRegister, setFailedToRegister] = useState({
    email: "",
    name: "",
  });
  const formValues = {
    email: "",
    userName: "",
    password: "",
    passwordRepeat: "",
    age: "",
    profilePicture: "",
  };

  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(5, "min length is 5")
      .max(20, "max length is 20")
      .required()
      .trim(),
    email: Yup.string()
      .email("Must be valid address")
      .required("Must be filled")
      .trim(),
    password: Yup.string().required("Must be filled").trim(),
    passwordRepeat: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required(),
    age: Yup.number().moreThan(16, "too young").required(),
    profilePicture: Yup.string().url("Must be a valid URL").required().trim(),
  });

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (users.find((user) => user.userName === values.userName)) {
        setFailedToRegister((prevState) => {
          return { ...prevState, name: "name taken" };
        });
      } else {
        setFailedToRegister((prevState) => {
          return { ...prevState, name: "" };
        });
      }
      if (users.find((user) => user.email === values.email)) {
        setFailedToRegister((prevState) => {
          return { ...prevState, email: "email taken" };
        });
      } else {
        setFailedToRegister((prevState) => {
          return { ...prevState, email: "" };
        });
      }
      if (
        !users.find((user) => user.userName === values.userName) &&
        !users.find((user) => user.email === values.email)
      ) {
        const workingUser = {
          id: uuid(),
          userName: values.userName,
          email: values.email,
          password: values.password,
          age: values.age,
          registerDate: new Date().toISOString().slice(0, 10),
          profilePicture: values.profilePicture,
        };
        setUsers({
          type: UsersActionTypes.add,
          data: workingUser,
        });
        setLoggedInUser(workingUser);
        navigate("/");
      }
    },
  });

  return (
    <StyledRegisterPage>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <FormikInput
          type="text"
          name="userName"
          formik={formik}
          placeholder="enter name"
        />
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
          placeholder="enter password"
        />
        <FormikInput
          type="password"
          name="passwordRepeat"
          formik={formik}
          placeholder="repeat password"
        />
        <FormikInput
          type="number"
          name="age"
          formik={formik}
          placeholder="enter age"
        />
        <FormikInput
          type="url"
          name="profilePicture"
          formik={formik}
          placeholder="enter profile URL"
        />
        <button type="submit">Register</button>
      </form>
      {failedToRegister.name && <p>{failedToRegister.name}</p>}
      {failedToRegister.email && <p>{failedToRegister.email}</p>}
    </StyledRegisterPage>
  );
};

export default Register;
