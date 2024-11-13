"use client"
import styles from '@/components/module/Story.module.css';
import { story } from '@/data/story';
import Image from 'next/image';
function Story({setImg , setSet, setOpacity}) {

    const clickHandler = (e) => {
        const i = e.target.src
        console.log(i);
        setImg(i)
        setSet(true)
        setOpacity(true)
        
    }

    return (
        <div className={styles.story} onClick={clickHandler}>
            {story.map((e) => (
                <div className={styles.card__story} key={index} >
                    <Image src={e.image} width={100} height={100} alt='img' />
                    <h6>{e.title}</h6>
                    <p>{e.desc}</p>
                </div>
            ))}
        </div>
    )
}

export default Story