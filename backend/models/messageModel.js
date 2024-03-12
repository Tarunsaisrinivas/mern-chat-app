const mongoose = require('mongoose');

const messageModel = mongoose.Schema({
    sender:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    content:{type:String,trim:true},
    chat:{type:mongoose.Schema.Types.ObjectId,ref:'Chat'},
},
{
    timestramps:true,
}
);

const Message = mongoose.Schema("Message",messageModel);

module.exports = Message;