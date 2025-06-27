type Props = {
  isError: boolean;
  errorMessage: string | null;
  success: boolean;
};

const RegisterStatus = ({ isError, errorMessage, success }: Props) => {
  return (
    <>
      {isError && (
        <p className="text-red-500 underline text-center mx-auto text-2xl mt-5 px-5">
          {errorMessage ?? "Error Registering, please try again."}
        </p>
      )}
      {success && (
        <p className="text-green-500 underline text-center mx-auto text-2xl mt-5 px-5">
          Account created, please verify your email (Check your spam)
        </p>
      )}
    </>
  );
};

export default RegisterStatus;
