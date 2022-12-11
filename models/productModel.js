const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"Product name is required!"],
        maxLength:[100,"Product name is too large!"],
        minLength:[4,"Product name must be at least 4 Character!"],
        unique:[true,"{VALUE} already exists!"]
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        min:[0,'Price cannto be lower than 0!'],
        required:[true,'Product price is required!']
    },
    unit:{
        type:String,
        required:[true,"Product unit is required!"],
        enum:{
            values:['kg','litre,pcs'],
            message:'Product unit must be kg, litre or pcs!'
        }
    },
    quantity:{
        type:Number,
        required:[true,'Product quantity is required!'],
        min:[0,'product quantity cannot be lower than 0!']
    },
    status:{
        type:String,
        required:[true,'Product status is required!'],
        enum:{
            values:['in-stock','out-of-stock','discontinued'],
            message:'Unexpecte product value!'
        }
    },
    supplier:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Supplier'
    },
    categories:[{
        name:{
            type:[String,'Category must be a string'],
            required:[true,"Product category is required!"],
        },
        id: mongoose.Schema.Types.ObjectId
    }]
},{
    timestamps:true
})

const Product = mongoose.model('Product',productSchema)
module.exports = Product