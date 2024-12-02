import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    
    const navigate = useNavigate();

    const handleLogout = () => {
        try {
            setAuthUser(null); // Set authUser to null or undefined
            localStorage.removeItem("Users");
            toast.success("Logout Successfully");
            navigate("/");
        } catch (error) {
            toast.error("Error: " + error.message);
        }

    };

    return (
        <button onClick={handleLogout} className="px-3 py-2 text-white bg-red-500 rounded-md">
            Logout
        </button>
    );
};

export default Logout;

