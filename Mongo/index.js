const mongoose = require('mongoose');

main()
.then( () => {
  console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name:String,
  email: String,
  age:Number,
});

const User = mongoose.model("User", userSchema);

User.insertMany([
  {name:"Tony", email:"tony@gmail.com",age:50},
  {name:"Abc", email:"abc@gmail.com",age:87},
  {name:"Xyz", email:"xyz@gmail.com",age:90},
]).then((res) => {
  console.log(res);
});

// const user1 = new User({
//   name:"Aquib",
//   email:"abc@gmail.com",
//   age:21,
// });

// user1
// .save()
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// });
