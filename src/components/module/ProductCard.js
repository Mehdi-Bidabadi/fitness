
import Image from 'next/image'
import styles from '@/components/module/ProductCard.module.css';

import { IoMdAddCircleOutline } from "react-icons/io";
import { SlBasket } from "react-icons/sl";

function ProductCard({ data, sell, setSell }) {

  

 
    return (
        <div className={styles.container}>
            
            {data.images.map((d) => (
                <div className={styles.product} key={index}>
                    <Image className={styles.img} src={d.img} width={200} height={200} alt='img' />
                    <p>{data.title}</p>
                    <span>{data.price}</span>
                    <div className={styles.buy}>
                        <div><SlBasket /></div>
                        <span>{sell}</span>
                        <div><IoMdAddCircleOutline /></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductCard