import User from "../model/usermodel.js";
import bcrypt from 'bcryptjs';

export const signup =async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        const user =await User.findOne({email});

        if(user){
            return res.status(400).json({message:"User already exists"})
        }
        const hashPassword = await bcrypt.hash(password,10);
        const createUser = new User({
            name,
            email,
            password:hashPassword
        })
       await createUser.save()
        res.status(201).json({message:"User created successfully", 
            user:{
                _id:createUser._id,
                name:createUser.name,
                email:createUser.email
,            },
        })


    }catch(error){
        console.log("Error"+error.message)
        res.status(500).json({message:"Internal server error"})
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ email });

        // Check if user exists before accessing password
        if (!user) {
            return res.status(400).json({ message: "Invalid user credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid user credentials" });
        }

        res.status(200).json({
            message: "Login Successful",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("Error in login:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};