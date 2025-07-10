import { useLoginUser } from "@/api/hooks/useLoginUser";
import FormInputs from "@/components/Form/FormInputs";
import FormStatus from "@/components/Form/FormStatus";
import { loginFormInputs } from "@/constants/formInputs";
import { loginSchema, type LoginFormData } from "@/schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAppDispatch } from "../store";
import { setUser } from "@/store/slices/user";
import { useNavigate } from "@tanstack/react-router";

const Login = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { mutateAsync, isPending } = useLoginUser();

  const onSubmit = async (data: LoginFormData) => {
    setError(undefined);
    try {
      const res = await mutateAsync(data);
      dispatch(setUser({ ...res.data }));
      navigate({ to: "/dashboard" });
    } catch (err: any) {
      if ("message" in err) {
        setError(err.message);
        return;
      }
      setError("An unknown error happened");
    }
  };

  return (
    <section className="flex flex-col justify-center">
      <h1 className="text-white text-4xl text-center underline mt-5">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto px-5 sm:px-0">
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
          disabled={isPending}
          className="
            w-full md:w-auto
          text-white
          bg-blue-700
          hover:bg-blue-800
            font-medium rounded-lg text-sm
            px-5 py-2.5 text-center
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800

        /*  disabled styles  */
          disabled:bg-gray-500
            disabled:opacity-50
            disabled:cursor-not-allowed
          disabled:hover:bg-gray-500"
        >
          {isPending ? "Submitting…" : "Submit"}
        </button>

        <FormStatus errorMessage={error} />
      </form>
      {error && (
        <button
          onClick={() => navigate({ to: "/auth/forgot-password" })}
          className="mt-5  w-85 mx-auto md:w-auto text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Forgot Password
        </button>
      )}
    </section>
  );
};

export default Login;
