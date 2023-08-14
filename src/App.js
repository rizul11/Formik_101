import { useFormik } from "formik";
import React from "react";
import { FormSchema } from "./FormSchema";

function App() {
  const formInitialValues = {
    name: "",
    email: "",
    age: "",
    password: "",
  };
  const { handleSubmit, touched, handleBlur, handleChange, values, errors } =
    useFormik({
      initialValues: formInitialValues,
      validationSchema: FormSchema,
      onSubmit: (values, action ) => {
        console.log(values);
        console.log(values.name);
        console.log(values.email);
        console.log(values.age);
        console.log(values.password);
        action.resetForm();
      },
    });
  return (
    <div>
      <div>
        <h1>Form validation</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Enter Name:</label>
          <input
            type="text"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            required
          />
          <br />

          {errors.name && touched.name ? (
            <span style={{ color: "red" }}>{errors.name}</span>
          ) : null}
          <br />
          <br />
          <label htmlFor="">Enter your Email:</label>
          <input
            type="text"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            required
          />
          <br />
          {errors.email && touched.email ? (
            <span style={{ color: "red" }}>{errors.email}</span>
          ) : null}
          <br />
          <br />

          <label htmlFor="">Enter Age:</label>
          <input
            type="text"
            name="age"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.age}
            required
          />
          <br />

          {errors.age && touched.age ? (
            <span style={{ color: "red" }}>{errors.age}</span>
          ) : null}
          <br />
          <br />
          <label htmlFor="">Enter Password:</label>
          <input
            type="text"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
            required
          />
          <br />

          {errors.password && touched.password ? (
            <span style={{ color: "red" }}>{errors.password}</span>
          ) : null}
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
