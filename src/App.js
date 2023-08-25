import { useFormik } from "formik";
import React from "react";


function App() {
    
  const formInitialValues = {
    name:'',
    email:''
  }
  const formik = useFormik({
       initialValues: formInitialValues
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
            onChange={formik.handleChange}
            value={formik.values.name}
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
            onChange={formik.handleChange}
            value={formik.values.email}
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

