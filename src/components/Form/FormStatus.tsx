type Props = {
  errorMessage: string | null;
  successMessage: string | null;
  button?: { text: string; classes: string; action: () => void };
};

const FormStatus = ({ errorMessage, successMessage, button }: Props) => {
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
      {button && (
        <div className="flex justify-center">
          <button className={button.classes} onClick={button.action}>
            {button.text}
          </button>
        </div>
      )}
    </>
  );
};

export default FormStatus;
