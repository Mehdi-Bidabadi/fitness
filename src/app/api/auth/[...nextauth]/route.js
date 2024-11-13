import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            

                async authorize(credentials, req) {
                    const {email, password} = credentials;

                    try{
                        await connectDB()
                    }catch(err){
                        throw new Error("can not connect to DB")
                    }

                    if(!email || !password){
                        throw new Error("لطفا اطلاعات را درست وارد کنید")
                    }

                    const user = await User.findOne({email: email})

                    if(!user) throw new Error("نام کاربری با این ایمیل وجود ندارد")

                    
                    const isValid = await verifyPassword(password, user.password)

                    if(!isValid) throw new Error("رمز عبور اشتباه است")

                        return { email }
                
            },
        }),
    ],
    secret: process.env.JWT_SECRET

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
