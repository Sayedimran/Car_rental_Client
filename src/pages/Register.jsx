import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import googlelogo from "/google.png";

const Register = () => {
  const { createUser, signInUserWithGoogle } = UseAuth();
  const naviget = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    try {
      const result = await createUser(email, password);
      console.log(result);
      Swal.fire({
        title: " signUp Successfully !",
        icon: "success",
        draggable: true,
      });
      naviget("/");
    } catch (err) {
      console.log(err);
      //   Swal.fire({
      //     title: "Drag me!",
      //     icon: "error",
      //     draggable: true,
      //   });
    }
    console.log(name, email, password, photo);
    };
        const handleGoogleSignIn = async () => {
          try {
              await signInUserWithGoogle();
              naviget('/')
          } catch (err) {
            console.log(err);
          }
        };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className=" shadow-lg rounded-xl p-8 w-full max-w-md bg-gradient-to-r from-purple-950  to-indigo-700  ">
        <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-50 via-green-400 to-white text-transparent bg-clip-text ">
          Create an Account Now!
        </h2>

        <form onSubmit={handleRegister}>
          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-200">Full Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered  rounded-lg w-full"
            />
          </div>

          {/* Email Input */}
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text text-gray-200">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered  rounded-lg w-full"
            />
          </div>

          {/* Password Input */}
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text text-gray-200">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered rounded-lg w-full"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text text-gray-200">Photo-url</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo-url..."
              className="input input-bordered rounded-lg w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="justify-start gap-5 mt-6">
            <button  onClick={handleGoogleSignIn} className="btn w-full text-white rounded-lg  bg-gradient-to-r from-blue-800 via-purple-800 to-green-400 ">
              <span className=" size-8">
                <img src={googlelogo} alt="" />
              </span>
              Continue with Google{" "}
            </button>
            <span className="flex justify-center text-white text-center my-1">
              or
            </span>
            <button className="btn w-full text-white rounded-lg  bg-gradient-to-r from-blue-800 via-purple-800 to-yellow-400 ">
              SignUp
            </button>
          </div>
        </form>

        {/* Already have an account */}
        <p className="text-center text-gray-200 mt-4">
          Already have an account?
          <Link to="/login" className=" text-red-700 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
