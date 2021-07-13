import User from '../models/UserModel.js';

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
export const getUsers=async(req,res)=>{
    try{
        const users=User.find({});
        res.json(users);
    }catch(err){
        res.status(404).json({err:"couldn't fetch users"})
    }
}