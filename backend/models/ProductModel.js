import mongoose from 'mongoose';
const skuSchema=mongoose.Schema({
    sku:{type:String,required:true},
    size:{type:String,required:true},
    originalPrice:{type:Number,required:true},
    salePrice:{type:Number,required:true},
    color:{type:String,required:true},
    assests:{
        image1:{type:String,required:true},
        image2:{type:String,reqired:true},
    },
    quantity:{
        type:String,
        required:true
    }

},{
    timestamps:true
})

const citySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true,
    },
    zipCode:{
        type:String,
        required:true,
    },
    deliveryCharge:{
        type:Number,
        required:true
    }
},{timestamps:true})

const reviewSchema=mongoose.Schema({
    name:{type:String,required:true},
    rating:{type:Number,required:true},
    comment:{type:String,required:true}
},{
    timestamps:true
})

const ProductSchema=mongoose.Schema(
    {
        user:{
            
                type: mongoose.Schema.Types.ObjectId,
              //  required: true,
                ref: "User",
        },
        name:{type:String,required:true},
        description:{
            type:String,required:true
        },
        assests:{
            image1:{type:String,required:true},
            image2:{type:String,required:true},
            
        },
        salePrice:{type:Number,required:true},
        originalPrice:{type:Number,required:true},
        category:{type:String,required:true},
        brand:{type:String,required:true},
        tags:{
            type:[String],
            validate: v => Array.isArray(v) && v.length > 0,
    
            },
        quantity:{type:Number,required:true},
        rating:{type:Number,required:true,default:0},
        numReviews:{type:Number,required:true},
        skus:{
            type:[skuSchema],
            validate: v => Array.isArray(v) && v.length > 0,
        },
        availableCities:{
            type:[citySchema],
            validate: v => Array.isArray(v) && v.length > 0,
        },
        reviews:[reviewSchema]  //will make it required later

                      
    },{
        timestamps:true
    }
)
ProductSchema.pre("save",async function(next){
    this.category=this.category.toLowerCase();
    next();
})

const Product=new mongoose.model('Product',ProductSchema);

  


export default Product;