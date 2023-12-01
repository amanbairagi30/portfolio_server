const User = require("../model/userModel.js");


const nodemailer = require("nodemailer");


exports.registerUser = async (req, res, next) => {
    try {



        const newUser = new User(req.body);
        await newUser.save();
        // console.log(newUser)
        // console.log("In the register")
        next();
        // console.log("after register")
 
    } catch (error) {
        next(error);
    }

}



exports.sendMail = async (req, res) => {
    // console.log("--> next ,In the mail ")

    let { username, email, number, mailmessage } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,

                pass: process.env.PASS
            }
        })



        const message = {
            from: process.env.EMAIL,
            to: "itx3dstudio@gmail.com",
            subject: "There is a new connection here",
            text: `Greetings from ${username},\nWhatsApp number: ${number}\nemail : ${email}\ni want to say ${mailmessage}`
        }
        const info = await transporter.sendMail(message)
        if (info) {

            res.send({
                success: true,
                message: "Thanks for contacting us , we will get back to you in 24 hours"
            })
        }

    } catch (error) {
        res.send({
            success: false,
            message: "Something Went wrong"
        })
    }
}



