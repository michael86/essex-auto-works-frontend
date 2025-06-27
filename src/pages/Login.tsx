import FormInputs from "@/components/Form/FormInputs";
import { loginFormInputs } from "@/constants/formInputs";
import { loginSchema, type LoginFormData } from "@/schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    //Submit login data
  };

  return (
    <>
      <h1 className="text-white text-4xl text-center underline mt-5">Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm mx-auto px-5 sm:px-0"
      >
        {loginFormInputs.map(({ label, name, autoComplete, type = "text" }) => (
          <FormInputs
            key={name}
            label={label}
            id={name as keyof LoginFormData}
            register={register(name as keyof LoginFormData)}
            autoComplete={autoComplete}
            type={type}
            error={errors[name as keyof LoginFormData]?.message}
          />
        ))}

        <button
          type="submit"
          //   disabled={isPending}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
