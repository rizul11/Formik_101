import * as Yup from "yup";

export const FormSchema = Yup.object({
  name: Yup.string().min(3, 'Too Short').max(20, 'Too Long').required("Name is must"),
  email: Yup.string().email().required("Email is Must"),
  age:Yup.number().min(10).max(50).required("Age is must"),
//   password:Yup.string().required("Password is must").matches(
//     "^(?=.*[A-Za-z])(?=.*d){8,}$",
//     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
//   ),

});
