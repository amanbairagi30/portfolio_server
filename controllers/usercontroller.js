const User = require("../model/userModel.js");


const nodemailer = require("nodemailer");


exports.registerUser = async (req,res,next)=>{
    try {

   
    
    const newUser = new User(req.body);
    await newUser.save();

    res.send({
        sucess : true,
        message : "user data added sucessfully"
    })
   next();
    
    } catch (error) {
        res.send({
            sucess : false,
            message : error.message,
            
            
        }
        )
    }
 
}



exports.sendMail = async (req,res)=>{
    
        let {username,email,number,mailmessage} = req.body;
        
try {
    const transporter = nodemailer.createTransport({
          service : 'gmail',
        auth : {
            user : process.env.EMAIL,

            pass : process.env.PASS
        }
      })
    


const message = {
     from : process.env.EMAIL,
     to : "arjunsuthar2112@gmail.com",
     subject : "There is a new connection here ",
     text : `Greetings from ${username},\nWhatsApp number: ${number}\nemail : ${email}\ni want to say ${mailmessage}`
} 
const info = await transporter.sendMail(message)
if(info)  res.send({
    sucess : true,
    message : "email sent sucessfully"
})

}catch (error) {
    return error
}
}
        
    

