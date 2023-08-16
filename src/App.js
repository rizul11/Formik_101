import logo from "./logo.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";
import StyledInput from "./components/StyledInput";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const validateSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().notRequired(),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("This field is required"),
    password: Yup.string()
      .required("This field is required")
      .min(8, "Pasword must be 8 or more characters")
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])\w+/,
        "Password ahould contain at least one uppercase and lowercase character"
      )
      .matches(/\d/, "Password should contain at least one number")
      .matches(
        /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
        "Password should contain at least one special character"
      ),
    confirmPassword: Yup.string().when("password", (password, field) => {
      if (password) {
        return field
          .required("The passwords do not match")
          .oneOf([Yup.ref("password")], "The passwords do not match");
      }
    }),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validateSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        resetForm();
      }, 1000 * 2);
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Signup</h4>
      </header>

      <main>
        <form
          className="spaceY-lg w100-small w50-lg"
          onSubmit={formik.handleSubmit}
        >
          <StyledInput
            label="First Name"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            type={"text"}
            helperText={formik.errors.firstName ? formik.errors.firstName : ""}
          />
          <StyledInput
            label="Last Name"
            type={"text"}
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            helperText={formik.errors.lastName ? formik.errors.lastName : ""}
          />
          <StyledInput
            label="Email Address"
            type={"email"}
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            helperText={formik.errors.email ? formik.errors.email : ""}
          />
          <StyledInput
            label="Password"
            type={"password"}
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            helperText={formik.errors.password ? formik.errors.password : ""}
          />
          <StyledInput
            label="Confirm Password"
            type={"password"}
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            helperText={
              formik.errors.confirmPassword ? formik.errors.confirmPassword : ""
            }
          />

          <button disabled={loading} type={"submit"}>
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
