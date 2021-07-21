import User from '../models/UserModel.js';
import {generateToken} from "../utils/generateToken.js";


//auth user 
export const authUser=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user = await User.findOne({ email });
        if(await user.matchPassword(password)){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            })
        }
    }catch(err){
        res.status(400).json({err:"Invalid email or password "})
    }
}

//register user
//public
export const registerUser=async (req,res)=>{
    const {email,name,password,billingAddress}=req.body;
    try{
        const user=await User.findOne({email})
        if(user){
            res.status(404).json({err:"User already exists"})
        }else{
            const newUser=new User({
                email,name,password,billingAddress
            });
            await newUser.save();
            res.status(201).json({message:"User successfully created"})

        }
    }catch(err){
        res.status(404).json({err:"Couldnot register user"})
    }
}

//get all users
//private admin
export const getUsers=async(req,res)=>{
    try{
        const users=await User.find({}).select('-password');
        res.status(200).json(users);
    }catch(err){
        res.status(404).json({err:"couldn't fetch users"})
    }
}

//register user
//private admin
export const registerAdmin=async (req,res)=>{
    const {email,name,password,billingAddress,isAdmin}=req.body;
    try{
        const user=await User.findOne({email})
        if(user){
            res.status(404).json({err:"User already exists"})
        }else{
            const newUser=new User({
                email,name,password,billingAddress,isAdmin
            });
            await newUser.save();
            res.status(201).json({message:"User successfully created"})

        }
    }catch(err){
        res.status(404).json({err:"Couldnot register user"})
    }
}
//getuserbyid
//admin and private user
export const getUserById=async(req,res)=>{
    const userid=req.params.id;
    try{
        const user=await User.find({_id:userid})
        
            res.status(201).json(user);

        }catch(err){
        res.status(404).json({err:"Couldn't fetch user"})
    }
}
//delete user
//private user admin
export const deleteUserById=async(req,res)=>{
    const userid=req.params.id;
    try{
        const user=await User.find({_id:userid})
            await user.remove();
            res.status(201).json({message:"user successfully deleted"});

        }catch(err){
        res.status(404).json({err:"Couldn't fetch user"})
    }
}

//private user/admin
//update user
export const updateUser=async (req,res)=>{
    const {email,name,password,billingAddress}=req.body;
    try{
        const user=await User.findById(req.params.id)
        user.email=email;
        user.name=name;
        user.password=password;
        user.billingAddress=billingAddress;
        await user.save();
        res.status(201).json({message:"User successfully updated"})
    

        
        
    }catch(err){
        res.status(404).json({err:"Couldn't update user"})
    }
}