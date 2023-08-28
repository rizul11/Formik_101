// import {memo , useState} from 'react';

// const Shipping = memo(function Shipping({onsubmit}){
//     const [ count, setCount] = useState(1);
//     console.log('[ARTIFICALLY SLOW] Rendering <Shipping/>');
//     let startTime = performance.now();
//     while (performance.now() = startTime < 500) {

//     }
//     function handleSubmit(e) {
//         e.preventDefault();
//         const fromData = new FormData(e.target);
//         const orderDetails = {
//             ...Object.fromEntried(formData),
//             count
//         }
//     }
// })

import { Form } from "formik";
import React, { createContext } from "react";

const ThemeContext = createContext(null);
function Shipping() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}


function Form({children})



// function Form() {
//   return (
//     <Panel title="Welcome">
//       <button>Sign Up</button>
//       <button>Log in </button>
//     </Panel>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = "panel-" + theme;
//   return (
//     <section className="{className}">
//       <h1>{title}</h1>
//       {children}
//     </section>
//     function Button({children}) {
//         const theme = useContext(ThemeContext);
//         const className = 'button-' + theme;
//         return(
//             <button className="{className}">
//                 {children}
//             </button>
//         );
//     }
//   );
// }
// export default Shipping;
