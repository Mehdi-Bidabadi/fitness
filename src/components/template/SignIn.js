"use client"
import styles from '@/components/template/SignIn.module.css';
import { useState } from 'react';
import { signIn, useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';
import Link from 'next/link';


function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter()

  const {data, status} = useSession()
  console.log(status);
    const submitHandler = async (e) => {
      e.preventDefault()

        const res = await signIn("credentials",{
            email,
            password,
            redirect: false,

        })
        if(res.status === 200){
          router.push('/')
        }
    }
  return (
    <div>
        <div className={styles.container}>
        <h3>فرم ثبت نام</h3>
        <form>
            <label>نام کاربری</label>
            <input type='text'
             placeholder='نام کاربری'
             value={email}
             onChange={(e) => setEmail(e.target.value)}
              />

            <label>رمز عبور</label>
            <input type='password'
             placeholder='رمز عبور'
             value={password}
             onChange={(e) => setPassword(e.target.value)}
              />

        </form>
        <button type='submit' onClick={submitHandler}>ورود </button>
        <p>
                حساب کاربری ندارید؟
                <Link href="/signup">ثبت نام</Link>
            </p>

    </div>
    </div>
  )
}

export default SignIn