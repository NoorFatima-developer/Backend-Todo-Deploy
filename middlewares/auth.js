import { User } from "../models/user.js";
import jwt from 'jsonwebtoken';

export const isAuthenticated = async(req, res, next) => {
    const { token }  = req.cookies;
    console.log(token);
        
    if(!token){
        return res.status(401).json({
                success: false,
                message: "Login First",
        })
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    console.log("Decoded token:", decoded);


    // jb hum simply cookie token sy data id mai bejty thy tu we save in a user
    // yahan pr we will save in a "req.user"
    req.user = await User.findById(decoded._id);
    if (!req.user) {
        return res.status(404).json({
            success: false,
            message: "User not found",
        });
    }
    // and isk bd next ko call krdea,,,and next kea hai wo m routes mai user.js mai dekh skti o..
    next();
    } catch (error) {
        console.error("Error during authentication:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }

};