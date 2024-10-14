import * as yup from "yup";

export const formSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required!")
});

export type FormSchemaType = yup.InferType<typeof formSchema>;
