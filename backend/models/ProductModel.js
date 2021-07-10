import mongoose from 'mongoose';
const skuSchema=mongoose.Schema({
    sku:{type:String,required:true},
    size:{type:Number},
    originalPrice:{type:Number,required:true},
    salePrice:{type:Number,required:true},
    color:{type:String,required:true},
    assests:{
        image1:{type:String},
        image2:{type:String},
        image3:{type:String},
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
                required: true,
                ref: "User",
        },
        name:{type:String,required:true},
        description:{
            type:String,required:true
        },
        assests:{
            image1:{type:String},
            image2:{type:String},
            image3:{type:String},
        },
        salePrice:{type:Number},
        originalPrice:{type:Number},
        category:{type:String,required:true},
        brand:{type:String,required:true},
        tags:[],
        quantity:{type:Number,required:true},
        rating:{type:Number,required:true,default:0},
        numReviews:{type:Number,required:true},
        skus:[skuSchema],
        availableCities:[citySchema],
        reviews:[reviewSchema]

                      
    },{
        timestamps:true
    }
)
const Product=new mongoose.model('Product',ProductSchema);

export default Product;