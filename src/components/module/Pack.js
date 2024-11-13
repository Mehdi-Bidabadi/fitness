"use client"

import styles from "@/components/module/Pack.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";





function Pack() {

    const [right, setRight] = useState(1);
    const [left, setLeft] = useState(4);

    const d = 6;

    useEffect(() => {
        if (right < 4) {
            const s = setInterval(() => {

                setRight((e) => e + 1)
                
                if (right === 3) {
                     setRight(1)
                }
            }, 4000)
            return () => clearInterval(s)
        }

       

    }, [right])

    useEffect(()=> {
        if (left < 7) {
            const r = setInterval(() => {

                setLeft((e) => e + 1)
                
                if (left === 6) {
                     setLeft(4)
                }
            }, 4000)
            return () => clearInterval(r)
        }
    },[left])

    return (
        <div className={styles.container}>
            <h2>جزیره پک</h2>
            <div className={styles.pack}>
                <div>جزیره مکمل</div>
                <div className={styles.right}>
                    <Image className={styles.img} src={`/pack/${right}.webp`} width={500} height={350} alt="img" />
                </div>
                <div className={styles.left}>
                    <Image className={styles.img} src={`/pack/${left}.webp`} width={500} height={350} alt="img" />

                </div>
            </div>
        </div>
    )
}

export default Pack