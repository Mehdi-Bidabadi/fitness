"use client"

import styles from '@/components/template/SignUp.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePssword] = useState("");

    const router = useRouter()

    const submitHandler = async () => {

        if(password !== rePassword){
            toast.error("رمز و تکرار آن برابر نیست")
            return;
        }

        const res = await fetch("/api/auth/signup", {
          method: "POST",
          body: JSON.stringify({email, password}),
          headers: { "Content-Type": "application/json" },

        })
        const data = await res.json()
        if(res.status === 201) router.replace("/signin")
    }



  return (
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
            <input type='text'
             placeholder='رمز عبور'
             value={password}
             onChange={(e) => setPassword(e.target.value)}
              />

            <label>تکرار رمز عبور</label>
            <input type='text'
             placeholder='تکرار رمز عبور'
             value={rePassword}
             onChange={(e) => setRePssword(e.target.value)}
              />
        </form>
        <button type='submit' onClick={submitHandler}>ثبت نام</button>
        <Toaster className={styles.error} />
    </div>
  )
}

export default SignUp;