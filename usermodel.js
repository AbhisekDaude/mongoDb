const mongoose=require('mongoose'); // we require the mongoose as express
 mongoose.connect(`mongodb://127.0.0.1:27017/mongopracrise`) // hamilay tyo number ko thau ma chai local host lekhna sakxau and we create the mongo named mongopractics we can create any name 
 
 // Schema means we can give what the user contain like username, email, password ect . Here schema contain capital (S). the we can give the information as the object like in javascript
 const userSchema=mongoose.Schema({ // These are like object of the javascript
    name:String,
    username:String,
    email:String   

 })
 // to perform the create,upadate, read,delete we have to export it we perform ud 
 module.exports=mongoose.model("user",userSchema) // This line of code is used to perform the CURD operation. aba model chai users vanxa (double quation vitra hami lay j lekhyau tesko plural version hunxa)
