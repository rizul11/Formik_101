import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function App() {
  return (
    <div className="App">
      <center>
        <h1>Register a new account</h1>
        <Formik>
          {({ isSubmitting }) => (
            <Form>
              <Field
                type="text"
                name="fullname"
                placeholder="Enter your fullname"
              />
              <ErrorMessage name="fullname" component="div" />
              <Field
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
              <ErrorMessage name="email" component="div" />
              <Field
                type="password"
                name="password"
                placeholder="password"
                component="div"
              />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </center>
    </div>
  );
}

export default App;
