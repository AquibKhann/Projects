const mongoose = require('mongoose');
const Chat = require("./models/chat.js");


main()
.then(()=>{
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=[
    {
        from:"Aquib",
        to:"Khan",
        msg:"I am Aquib",
        created_at: new Date(),
},
{
    from:"monu",
    to:"sanjay",
    msg:"I am monu",
    created_at: new Date(),
},
{
    from:"afzal",
    to:"sohail",
    msg:"I am afzal",
    created_at: new Date(),
},
{
    from:"aaryan",
    to:"Khan",
    msg:"I am aaryan",
    created_at: new Date(),
},

];
 Chat.insertMany(allChats);