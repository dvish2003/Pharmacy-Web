import { NextApiRequest,NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { em } from "framer-motion/client";



const JWT_SECRET = process.env.JWT_SECRET as string;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   console.log("Incoming request:....................................................", req.body);
    try{
     if(req.method !== 'POST'){
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
    
    const { email, password } = req.body;
    
    if(!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

   const response = await fetch("http://localhost:4000/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
        });

    if(response.status !== 200) {
        return res.status(response.status).json({ messag:'Login failed' });
    }

    const responseData = await response.json();

    //genarate token jwt 
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1d" });
    return res.status(200).json({ message: 'Login successful', token: token, user: responseData.user });


        
   }catch (error) {
       console.error('Login error:', error);
       res.status(500).json({ message: 'Internal Server Error' });
   }
}