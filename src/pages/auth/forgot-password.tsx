import { sendForgotPasswordEmail } from "@/api/auth";

import React from "react";

import { useState } from "react";

const forgotPassword = () => {
  const [state, setState] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = data.get("email") as string;

    if (!email) return;
    sendForgotPasswordEmail(email);
    setState(true);
  };

  return (
    <>
      <h1 className="underlined text-center text-3xl">Forgot password</h1>
      <form className="px-5 text-white" onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="Enter Email"
          name="email"
          required
        />

        <button
          type="submit"
          className="mt-3 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800  dark:border-gray-600 dark:hover:text-white "
        >
          Submit
        </button>
      </form>

      {state && (
        <p className="px-5 text-green-500 mt-3">Email sent, don't forget to check your spam</p>
      )}
    </>
  );
};

export default forgotPassword;
