import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Login() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Reset the form fields to clear any pre-filled data
    reset();
  }, [reset]);

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      console.log(res.data);
      if (res.data) {
        toast.success('Logged in Successfully');
        document.getElementById('my_modal_3').close();

        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }, 1000);
      }
    } catch (err) {
      console.error("Error response:", err.response);
      toast.error("Error: " + err.response.data.message || err.message);
    }
  };

  useEffect(() => {
    // Check if the modal should be shown based on route
    if (location.pathname === '/Login') {
      document.getElementById('my_modal_3').showModal();
    }
  }, [location]);

  const handleClose = () => {
    // Close the modal and navigate to previous page or home
    document.getElementById('my_modal_3').close();
    navigate('/'); // Navigate to home page
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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

            <button type="button" onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder='Enter your email'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: "Email is required" })}
                autoComplete="new-email"
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}
            </div>

            {/* Password */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder='Enter your password'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("password", { required: "Password is required" })}
                autoComplete="new-password"
              />
              <br />
              {errors.password && <span className='text-sm text-red-500'>{errors.password.message}</span>}
            </div>

            {/* Button */}
            <div className='flex justify-around mt-4'>
              <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
              <p>Not registered? <Link to="/Signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
