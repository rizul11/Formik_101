import { useFormik } from "formik";
import React from "react";
import { FormSchema } from "./FormSchema";


function App() {
    
  const formInitialValues = {
    name:'',
    email:''
  }
  const {handleSubmit , handleChange , values, errors} = useFormik({
       initialValues: formInitialValues,
       validationSchema: FormSchema,
       onSubmit:(values) => {
        console.log(values);
        console.log(values.name);
        console.log(values.email);
       }
    })
  return (
    <div>
      <div>
        <h1>Form validation</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Enter Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
            required
          />
          <br />
          <span style={{color:'red'}}>{errors.name}</span>
          <br />
          <br />
          <label htmlFor="">Enter your Email:</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={values.email}
            required
          />
          <br />
          <span style={{color:'red'}}>{errors.email}</span>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};


export default App;

