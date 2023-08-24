




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





