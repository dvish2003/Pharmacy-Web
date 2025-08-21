import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export default async function registerAPI(req: NextApiRequest, res: NextApiResponse) {
  console.log("Register API called...");

  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { email, name, password, role } = req.body;

    if (!email || !password || !name || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashPassword,
        active: true,
        role
      }
    });
    

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.user_id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
