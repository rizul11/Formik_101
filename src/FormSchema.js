import * as Yup from "yup";

export const FormSchema = Yup.object({
  name: Yup.string().min(3, 'Too Short').max(20, 'Too Long').required("Name is must"),
  email: Yup.string().email().required("Email is Must"),
});
