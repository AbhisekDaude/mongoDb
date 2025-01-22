const express=require('express');
const app=express();
// // hami lay chai usermodel vanya file lai require garyau jo hami lay vanaya thyau
// //usermodel vanya auta const variable banyau jasma hami lay usermodel vanya file lai require garyau
// // usermodel vitra hami lay module lai lyau aba hami lay CRUD perform garna sakxau
 const userModel = require("./usermodel") ;

app.get('/', (req, res)=>{
    res.send("its running");
});

// Here we create a route for the create operation . inside the create route we inclulde the userModel.creat for creat operation inside this we pass the userSchema which we create in the usermodel.js file
// In this we use async function use because the model we pass is asynchronous programing so it run later 
// to run this code in series wise use await to use await we require the aysnc 
app.get('/create', async (req, res) => {    

  let createduser= await userModel.create({  // we create the user if we run the code of route create  then the user will create it shows on the webbroswer
    name:"Aayu",
    email:"Ayau@gmail.com",
    username:"Aayudaue"
   })
  res.send(createduser);

  //update the user 

  app.get('/update', async (req,res)=>{
    //This action is perform to update the name from harsh to the Abhisek Daude 
    //For updatin the data we use the syntxa as userModel.findOneAndUpdate(findone,update,{new:true})
    //Findone ma chai hami lay kun lai change garnya vanya lekhnya like username ,name, email, with value
    //Update ma chai hami lay k update garnya vanya change garnya 
    //new:true as it is 
    let updateduser= await userModel.findOneAndUpdate({username:"harsh"}, {name:"Abhisek Daude"}, {new:true})
    res.send(updateduser);

  })

  //Read opertion
  app.get("/read", async (req, res)=>{
let users= await userModel.find();  // this code is used to read the all the users we created
//  let users= await userModel.find({username:"harsh"}); // This line of code is for the one user to read
  res.send(users);
  })


  // This route is for the deleting the users
  app.get('/delete', async (req, res) => {
    let users= await userModel.findOneAndDelete({username:"harsh"});
    res.send(users);
  })


});
app.listen(3000, ()=>{
    console.log("server is running");
})