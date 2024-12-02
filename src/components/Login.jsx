import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const onSubmit = async (data) => {
      try {
        const userInfo = {  
          email: data.email,
          password: data.password
        };
    
        const response = await axios.post("http://localhost:4001/user/login", userInfo);
        console.log(response.data);
        localStorage.setItem("User", JSON.stringify(response.data.user));

        toast.success("Login Successful");
        localStorage.setItem("Users", JSON.stringify(response.data.user));
      } catch (error) {
        console.error("Login error:", error);
        if (error.response) {
          console.error("Error response from server:", error.response.data);
          toast.error("Login error: " + error.response.data.message); // Adjust according to your backend response structure
        } else {
          toast.error("Login error: " + error.message);
        }
        document.getElementById("my_modal_3").close();
        window.location.reload();
      }
    };
    

  return (
    
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* Remove method="dialog" to prevent automatic modal closing */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button for the modal */}
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span className="px-2 text-pink-500">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className={`w-full py-1 p-3  rounded-md border outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className=" text-red-500 text-sm m-2  tracking-tighter">{errors.email.message}</span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span className="px-2 text-pink-500">Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className={`w-full py-1 p-3 rounded-md border outline-none ${
                  errors.password ? "text-sm tracking-tighter border-red-500" : ""
                }`}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm m-1 tracking-tighter">{errors.password.message}</span>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 px-3 py-1 text-white rounded-md hover:bg-pink-700 duration-200"
              >
                 Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
