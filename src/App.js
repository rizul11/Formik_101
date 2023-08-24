// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";

// function App() {
//   return (
//     <div className="App">
//       <center>
//         <h1>Register a new account</h1>
//         <Formik>
//           {({ isSubmitting }) => (
//             <Form>
//               <Field
//                 type="text"
//                 name="fullname"
//                 placeholder="Enter your fullname"
//               />
//               <ErrorMessage name="fullname" component="div" />
//               <Field
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email address"
//               />
//               <ErrorMessage name="email" component="div" />
//               <Field
//                 type="password"
//                 name="password"
//                 placeholder="password"
//                 component="div"
//               />
//               <ErrorMessage name="password" component="div" />
//               <button type="submit" disabled={isSubmitting}>
//                 Submit
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </center>
//     </div>
//   );
// }

// export default App; 


// import React from 'react'
// import { useState } from 'react'

// function App() {
//   const [name, setName] =useState();
//   const [email, setEmail] =useState();
//   const [nameError, setNameError] = useState(false);
//   const [EmailError, setEmailError] = useState(false);
//   const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//   const handleName = (e) => {
//      let name = e.target.value;
//      if(name.length < 3){
//         setNameError(true);
//      }
//      else{
//        setNameError(false);
//      }
//   }  
//   const handleEmail= (e) => {
//     let email = e.target.value;
//     if(!email.match(emailRegex))
//     {
//       setEmailError(true);
//     }
//     else{
//       setEmailError(false);
//     }
//   }
// return (
//     <div>
//       <div>
//         <h1>Form validation</h1>
//         <form>
//           <label htmlFor="">Enter Name:</label>
//           <input type='text' name='name' onChange={handleName} value={name} required/><br/>
//           {nameError ? <span style={{color:'red'}}>Name should be more than 2 letters
//             </span> : ""}
//           <br /><br />
//           <label htmlFor=''>Enter your Email:</label>
//           <input type='text' name='email' onChange={handleEmail} value={email} required /><br/>
//           {EmailError ? <span style={{color:'red'}}>Name should be more than 2 letters  </span> : ""}
//           <input type='submit' value="Submit" />
//         </form>
//       </div>
//     </div>
//   )
// }

// export default App 

import React from "react";
import { useFormik } from "formik"; 

const SignupForm = () => {
  //Pass the useFormik() hook initial form values and a submit function be called when the form is submitted 
  const formik = useFormik ({
    initialValues: {
      email:'',

    },
    onSubmit: values => {
      alert(JSON.stringify(values,null,2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="email">Email Address</label>
    <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
    <button type="submit">Submit</button>
    </form>

  );
};

