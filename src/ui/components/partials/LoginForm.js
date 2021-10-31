import React, { useContext } from "react";
import useForm from "../../hooks/useForm";

import { httpContextProvider } from "../../context/httpContext";
import { alertProvider } from "../../context/alert";
import Alert from "./Alert";

function LoginForm() {
  const [email, setEmail] = useForm("");
  const [password, setPassword] = useForm("");

  const { loading, useAxios, progress, data } = useContext(httpContextProvider);

  const { show } = useContext(alertProvider);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };

    let response = await useAxios(`/api/user/login`, "post", payload);
  };

  return (
    <>
      <form autoComplete="off">
        {show && (
          <Alert
            type={data.success ? "success" : "error"}
            message={data.message}
            heading={data.success ? "Registration Success!" : "Error occured!"}
          />
        )}
        <div className="text-center">
          <p className="mt-5 font-bold text-1xl text-gray-800">LOGIN</p>
        </div>
        <p className="px-3 mt-3 text-xs">
          Login and use your vouchers to get more discount
        </p>
        <div className="mt-8 px-3">
          <label
            htmlFor="email"
            className="relative block text-sm font-medium text-gray-700"
          >
            <i className="absolute top-1/2 transform -translate-y-1/2 left-2 fas fa-user"></i>
            <input
              type="text"
              id="email"
              value={email}
              onChange={setEmail}
              placeholder="Username or email"
              autoComplete="off"
              className="mt-1 outline-none pl-7 focus:ring-1 block w-full shadow-sm sm:text-sm border border-gray-700 focus:ring-blue-500 focus:border-blue-500 rounded px-4 py-2"
            />
          </label>
        </div>
        <div className="mt-3 px-3">
          <label
            htmlFor="password"
            className="relative block text-sm font-medium text-gray-700"
          >
            <i className="absolute top-1/2 transform -translate-y-1/2 left-2 fas fa-lock"></i>
            <input
              type="password"
              id="password"
              value={password}
              onChange={setPassword}
              placeholder="Password"
              autoComplete="off"
              className="mt-1 outline-none pl-7 focus:ring-1 block w-full shadow-sm sm:text-sm border border-gray-700 focus:ring-blue-500 focus:border-blue-500 rounded px-4 py-2"
            />
          </label>
        </div>
        <a className="px-3 mt-3 hover:text-blue-500 text-xs" href="">
          Forgot you password?
        </a>
        <div className="mt-5 px-3">
          <button
            disabled={loading}
            onClick={handleSubmit}
            className="w-full bg-blue-400 px-2 py-2 text-sm text-gray-50 rounded"
          >
            LOGIN
          </button>
        </div>
      </form>
      <div className="mt-5 px-3">
        <p className="text-xs text-center">Or login using</p>
      </div>
      <div className="px-3 flex justify-center pt-5">
        <a href="#">
          <button className="bg-white-100 hover:shadow-md border-2 border-gray-200 rounded-full p-2 h-11 w-11">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
          </button>
        </a>
        <a className="mx-3" href="#">
          <button className="bg-white-100 hover:shadow-md border-2 border-gray-200 rounded-full p-2 h-11 w-11">
            <img src="https://img.icons8.com/material-rounded/50/000000/github.png" />
          </button>
        </a>
        <a href="#">
          <button className="bg-white-100 hover:shadow-md border-2 border-gray-200 rounded-full p-2 h-11 w-11">
            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />{" "}
          </button>
        </a>
      </div>
    </>
  );
}

export default LoginForm;
