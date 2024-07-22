import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormikInput from "../../UI/input/FormikInput";
import VideoGamesContext from "../../../contexts/VideoGamesContext";
import UsersContext from "../../../contexts/UsersContext";

const StyledAddFormPage = styled.main`
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

const AddGame = () => {
  const { setGames, GamesActionTypes } = useContext(VideoGamesContext);
  const { loggedInUser } = useContext(UsersContext);
  const navigate = useNavigate();

  const values = {
    name: "",
    image: "",
    price: "",
    description: "",
    releaseDate: "",
    genre: "",
    publishers: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(5, "Minimum length 5 symbols")
      .max(20, "Maximum length 20 symbols")
      .required("This field must be filled")
      .trim(),
    image: Yup.string()
      .url("This fields must be a valid URL")
      .required("This field must be filled")
      .trim(),
    price: Yup.number()
      .min(0, "Game can't be negative price")
      .required("This field must be filled"),
    description: Yup.string()
      .min(10, "Minimum length 10 symbols")
      .required("This field must be filled")
      .trim(),
    releaseDate: Yup.date()
      .min(new Date(0).toISOString(), "Date must be after 1970-01-01")
      .max(new Date().toISOString(), "Date must be before now")
      .required("This field must be filled"),
    genre: Yup.string()
      .min(3, "Minimum length 3 symbols")
      .required("This field must be filled")
      .trim(),
    publishers: Yup.string()
      .min(3, "Minimum length 3 symbols")
      .required("This field must be filled")
      .trim(),
  });

  const formik = useFormik({
    initialValues: values,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // console.log(values);
      const finalValues = {
        id: uuid(),
        userId: loggedInUser.id,
        ...values,
        genre: values.genre.split(";"),
        publishers: values.publishers.split(";"),
      };
      // console.log(finalValues);
      setGames({
        type: GamesActionTypes.add,
        data: finalValues,
      });
      navigate("/games/allGames");
    }
  });

  return (
    <StyledAddFormPage>
      <h1>Add New Game</h1>
      <form onSubmit={formik.handleSubmit}>
        <FormikInput type="text" name="name" formik={formik} />
        <FormikInput type="url" name="image" formik={formik} />
        <FormikInput type="number" name="price" formik={formik} />
        <FormikInput type="text" name="description" formik={formik} />
        <FormikInput type="date" name="releaseDate" formik={formik} />
        <FormikInput
          type="text"
          name="genre"
          formik={formik}
          placeholder="Genre1; Genre2; Genre3; ..."
        />
        <FormikInput
          type="text"
          name="publishers"
          formik={formik}
          placeholder="Publisher1; Publisher2; Publisher3; ..."
        />
        <button type="Submit">New Game Card</button>
      </form>
    </StyledAddFormPage>
  );
};

export default AddGame;
