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


export const login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});

        const isMatch =await bcrypt.compare(password,user.password);

        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid user credentials"});
        }else{
            res.status(200).json({message:"Login Successfull",
                user:{
                    _id:user._id,
                    name:user.name,
                    email:user.email
                }
            })}
    }catch(error){
        console.log("Error"+error.message)
        res.status(500).json({message:"Internal server error"})
    }
}