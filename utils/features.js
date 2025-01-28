import jwt from 'jsonwebtoken';

export const sendCookie = (user, res, statusCode = 200, message) => {

    const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET)

    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 40 * 60 * 1000,
        // by default lax hota hai cookie islye postman mai work krta hai but m chahti o jb front end 
        // ko backend sy attack krna ho tb sameSite: none ho and secure: true ho na k lax.. 
        // so do this:
        // iss sy ye hoga k wo postman m b work kryga or after integration b...
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,
    }).json({
        success: true,
        message,
    })
}

