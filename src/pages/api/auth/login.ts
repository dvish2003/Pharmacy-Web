// import { NextApiRequest,NextApiResponse } from "next";
// import {prisma} from "@/lib/prisma";
// import bcrypt from 'bcrypt'
// import { signToken } from "@/lib/jwt";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//    try{
//      if(req.method !== 'POST'){
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }
    
//     const { email, password } = req.body;
    
//     if(!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//     }

//     const user = await prisma.user.findUnique({
//         where: {
//             email: email
//         }
//     })

//     if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//     }

//     const isValidPassword = await bcrypt.compare(password, user.password);
//     if (!isValidPassword) {
//         return res.status(401).json({ message: 'Invalid password' });
//     }

//     const token = signToken({ id: user.id, email: user.email });

//     res.status(200).json({ token, user: { id: user.id, name: user.name, email: user.email } });
//    }catch (error) {
//        console.error('Login error:', error);
//        res.status(500).json({ message: 'Internal Server Error' });
//    }
// }