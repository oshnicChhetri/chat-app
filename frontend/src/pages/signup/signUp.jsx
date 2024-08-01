import React from "react";
import GenderCheckBox from "./genderCheckBox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {
  
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  

  const {signup,loading } = useSignup();

  const handleGenderCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender: gender });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  
     await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-black">
          SignUp
          <span className="text-gray-400"> Chat App</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="fullname"
              className="label p-2 text-base label-text"
            >
              Fullname
            </label>
            <input
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              id="fullname"
              type="text"
              placeholder=" Enter Fullname"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="label p-2 text-base label-text"
            >
              Username
            </label>
            <input
              value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
              id="username"
              type="text"
              placeholder=" Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="label p-2 text-base label-text"
            >
              Password
            </label>
            <input
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              id="password"
              type="password"
              placeholder=" Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="label p-2 text-base label-text"
            >
              Confirm Password
            </label>
            <input
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              id="confirmPassword"
              type="password"
              placeholder=" Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckBox
            onCheckboxChange={handleGenderCheckboxChange}
            selectedGender={inputs.gender}
          />

          <div>
            <Link
              to={"/login"}
              className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block"
            >
              {"Already have an account?"}
            </Link>
          </div>

          <div>
            <button type="submit" className="btn btn-block btn-sm mt-2">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
