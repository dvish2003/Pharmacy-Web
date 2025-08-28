import { NextApiRequest, NextApiResponse } from "next";


export default async function registerAPI(req: NextApiRequest, res: NextApiResponse) {
    console.log("Register API called...");

    try {
        if (req.method !== "POST") {
            return res.status(405).json({ message: "Method Not Allowed" });
        }

        const { email, name, password, active, role } = req.body;

        if (!email || !password || !name || !role) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const response = await fetch("http://localhost:4000/api/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, name, password, active, role }),
        });

        console.log("Response from user registration API:", response);
        if (response.status === 201) {
            return res.status(201).json({
                message: "User registered successfully",
            });
        } else {
            return res.status(400).json({ message: "User Already exists" });
        }


    } catch (error) {
        console.error("Registration error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
