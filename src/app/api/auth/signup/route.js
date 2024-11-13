import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
    try{
        await connectDB();

        const {email, password} = await req.json()

        if(!email || !password){
            return NextResponse.json({error: "لطفا اطلاعات را درست وارد کنید"},{status: 422})
        };

        const existingUser = await User.findOne({email});
        if(existingUser){
            return NextResponse.json({error: "اطلاعات این کاربر وجود دارد"}, {status: 422})
        };

        const hashedPassword = await hashPassword(password);

        const newUser = await User.create({
            email: email,
            password: hashedPassword,
        })

        console.log(newUser);

        return NextResponse.json({message: "حساب کاربری ایجاد شد"}, {status: 201})
    }catch(err){
        return NextResponse.json({error: "در سمت سرور خطایی رخ داده است"},{
            status: 500,
        })
    }
}