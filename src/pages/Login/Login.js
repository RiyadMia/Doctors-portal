import React, { useEffect, useRef, useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Lodding from "../Sheard/Lodding";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const emailRef = useRef("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  /*Reset Password  */
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  // token
  const [token] = useToken(user || gUser);
  let siginErroe;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading || gLoading) {
    return <Lodding></Lodding>;
  }
  if (error || gError) {
    siginErroe = (
      <p className="text-red-600">{error?.message || gError?.message}</p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  // const resetPassword = async (data) => {
  // const email = data.email.target.value;
  // console.log(email);
  // if (email) {
  // await sendPasswordResetEmail(email);
  // toast("Sent email");
  // } else {
  // toast("please enter your email address");
  // }
  // };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full max-w-xs form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full max-w-xs input input-bordered"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="w-full max-w-xs form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full max-w-xs input input-bordered"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {siginErroe}
            <input
              className="w-full max-w-xs text-white btn"
              type="submit"
              value="Login"
            />
          </form>

          {/* <p> */}
          {/* Forget your Password? */}
          {/* <button */}
          {/* // // className=" btn btn-link text-primary pe-auto text-decoration-none" */}
          {/* // onClick={resetPassword} */}
          {/*  > */}
          {/* Reset Password */}
          {/* </button> */}
          {/* </p> */}
          <p>
            <small>
              New to Doctors Portal{" "}
              <Link className="text-primary" to="/signup">
                Create New Account
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="font-bold uppercase btn btn-outline"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
