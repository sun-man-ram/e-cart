import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute=async(requestAnimationFrame,resizeBy,next)=>{

    try {
     const accessToken=requestAnimationFrame.cookies.accessToken;
     if(!accessToken)   {
        return res.status(401).json({message:"Unauthorised -no access token provided"});
     }
     
    } catch (error) {
        
    }
}