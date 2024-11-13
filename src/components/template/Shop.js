"use client"
import styles from '@/components/template/Shop.module.css';
import Story from '../module/Story';
import Menu from '../module/Menu';
import { brand } from '@/data/brand';
import Image from 'next/image';
import ProductCard from '../module/ProductCard';
import { MdTitle } from 'react-icons/md';
import { useState } from 'react';



function Shop() {
    const [img, setImg] = useState(null)
    const [set, setSet] = useState(true)
    const [opacity, setOpacity] = useState(false)

    const deleteHandler = () => {
        setSet(false)
        setOpacity(false)
    }



    return (


        <div className={opacity === false ? styles.container : styles.m}>
            {img && set &&

                    <div className={styles.story}>
                        <button onClick={deleteHandler}>X</button>
                        <img src={img} alt='img' />
                        <div style={


                            { width: "100%", height: "5px", backgroundColor: "red" }

                        }></div>
                        {/* <div className={styles.timer} onLoad={xHandler}></div> */}

                    </div>
            }

            <Story setImg={setImg} setSet={setSet} setOpacity={setOpacity} />
            <div className={styles.filter}>
                <h4>مرتب سازی بر اساس :</h4>
                <ul>
                    <li>جدید ترین</li>
                    <li>محبوب ترین</li>
                    <li>ارزان ترین</li>
                    <li>گران ترین</li>
                </ul>
            </div>
            <div className={styles.bottom__story}>

                <div className={styles.menu__card}>
                    <h3>فیلتر محصولات</h3>

                    <Menu />
                </div>
                <div className={styles.products}>
                    {brand.map((e) => (

                        <ProductCard data={e} key={index}/>

                    ))}
                </div>
            </div>
        </div>

    )
}

export default Shop