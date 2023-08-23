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


import React from 'react'

function App() {
  return (
    <div>
      <div>
        <h1>Form validation</h1>
        <form>
          <label htmlFor="">Enter Name:</label>
          <input type='text' name=''/>
          <br /><br />
          <input type='submit' value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default App

