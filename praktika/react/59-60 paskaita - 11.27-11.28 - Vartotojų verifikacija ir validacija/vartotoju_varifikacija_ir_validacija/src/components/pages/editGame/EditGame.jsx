import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { useContext, useEffect, } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormikInput from "../../UI/input/FormikInput";
import VideoGamesContext from "../../../contexts/VideoGamesContext";
import { useState } from "react";

const StyledEditFormPage = styled.main`
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

const EditGame = () => {
  const { setGames, GamesActionTypes } = useContext(VideoGamesContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [formValues, setFormValues] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/videoGames/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (!data.name) {
          navigate("/");
        }
        setFormValues({
          ...data,
          genre: data.genre.join("; "),
          publishers: data.publishers.join("; "),
        });
      });
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(5, "Minimum length 5 symbols")
      .max(40, "Maximum length 20 symbols")
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

  //   const formik = useFormik({
  //     initialValues: formValues,
  //     validationSchema: validationSchema,
  //     onSubmit: (values) => {
  //       // console.log(values);
  //       const finalValues = {
  //         ...values,
  //         genre: values.genre.split(";"),
  //         publishers: values.publishers.split(";"),
  //       };
  //       // console.log(finalValues);
  //       navigate("/games/allGames");
  //     },
  //   });

  return (
    <StyledEditFormPage>
      <h1>Edit Game</h1>
      {formValues && (
        <Formik
          initialValues={formValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // console.log(values);
            const finalValues = {
              ...values,
              genre: values.genre.split(";").map(el => el.trim()),
              publishers: values.publishers.split("; ").map(el => el.trim()),
            };
            setGames({
                type:GamesActionTypes.edit,
                id:id,
                data:finalValues
            })
            // console.log(finalValues);
            navigate(`/games/${id}`);
          }}
        >
          {(formik) => (
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
              <button type="Submit">Save</button>
            </form>
          )}
        </Formik>
      )}
    </StyledEditFormPage>
  );
};

export default EditGame;
