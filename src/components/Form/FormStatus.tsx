type Props = {
  errorMessage: string | null;
  successMessage: string | null;
};

const FormStatus = ({ errorMessage, successMessage }: Props) => {
  return (
    <>
      {errorMessage && (
        <p className="text-red-500 underline text-center mx-auto text-2xl mt-5 px-5">
          {errorMessage}
        </p>
      )}
      {successMessage && (
        <p className="text-green-500 underline text-center mx-auto text-2xl my-5 px-5">
          {successMessage}
        </p>
      )}
    </>
  );
};

export default FormStatus;
