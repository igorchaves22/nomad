import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormSchemaType, formSchema } from "~utils";

export const useNewsletterForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm<FormSchemaType>({
        resolver: yupResolver(formSchema)
    });

    const handleOnSubmit = handleSubmit(() => {
        console.log("Email sent successfully!");
        window.location.href = "/";

        reset();
    });

    return { handleOnSubmit, register, errors };
};
