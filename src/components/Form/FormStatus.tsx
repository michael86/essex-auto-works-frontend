type Props = {
  errorMessage?: string;
  successMessage?: string;
  button?: { text: string; classes: string; action: () => void };
  containerClasses?: string;
};

const FormStatus = ({ containerClasses, errorMessage, successMessage, button }: Props) => {
  return (
    <div className={containerClasses}>
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
    </div>
  );
};

export default FormStatus;
