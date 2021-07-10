import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    billingAddress:{
        country:{type:String,required:true},
        city:{type:String,required:true},
        state:{type:String,required:true},
        zipCode:{type:String,required:true},
        street1:{type:String,required:true},
        street2:{type:String,required:true}
    },

  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}
userSchema.pre('save',async function(next){
  if(!this.isModified('password')){
    next()
  }
  const salt=await bcrypt.genSalt(10)
  this.password=await bcrypt.hash(this.password,salt)
})

const User = mongoose.model("User", userSchema);

export default User;