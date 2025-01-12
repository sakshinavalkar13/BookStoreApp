import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    // Reset the form fields to clear any pre-filled data
    reset();
  }, [reset]);

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      const response = await axios.post("http://localhost:4001/user/signup", userInfo);
      console.log(response.data);
      localStorage.setItem("User", JSON.stringify(response.data.user));

      toast.success("Signup Successful");
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response) {
        console.error("Error response from server:", error.response.data);
        toast.error("Signup error: " + error.response.data.message);
      } else {
        toast.error("Signup error: " + error.message);
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div id="my_modal_3" className="w-[600px]">
        <div className="modal-box">
          <form
            method="dialog"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            {/* Hidden input fields to prevent browser autofill */}
            <input
              type="text"
              name="fakeusernameremembered"
              style={{ display: "none" }}
              autoComplete="off"
            />
            <input
              type="password"
              name="fakepasswordremembered"
              style={{ display: "none" }}
              autoComplete="off"
            />

            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2">
              <span className="px-2 text-pink-500">Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full py-1 p-3 rounded-md border outline-none"
                {...register("name", { required: true })}
                autoComplete="off"
              />
              {errors.name && (
                <span className="text-red-500 mb-1">This field is required</span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span className="px-2 text-pink-500">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full py-1 p-3 rounded-md border outline-none"
                {...register("email", { required: true })}
                autoComplete="new-email"
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span className="px-2 text-pink-500">Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full py-1 p-3 rounded-md border outline-none"
                {...register("password", { required: true })}
                autoComplete="new-password"
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 px-3 py-1 text-white rounded-md hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p className="text-xl">
                Have an account?{" "}
                <Link
                  to="/"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
