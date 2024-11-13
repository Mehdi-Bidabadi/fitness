import news from '@/data/New'
import Image from 'next/image'
import React from 'react'

import styles from "@/components/module/NewPage.module.css";


import { BsCurrencyDollar } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { split, ToRial } from '@/helper/Number';

function NewPage() {
    return (
        <div className={styles.container}>
            <h2>جدید ترین ها</h2>
            <div className={styles.news}>
                <span className={styles.dir}><FaChevronRight /></span>
                <span className={styles.left}><FaChevronLeft /></span>

                {news.map((e) => (
                    <div key={index}>
                        <Image className={styles.img} src={e.image} width={300} height={300} alt='img' />
                        <div>
                        <h5>{e.title}</h5>
                        <p>{e.info}</p>
                        <span>{ToRial(e.price)} تومان</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewPage