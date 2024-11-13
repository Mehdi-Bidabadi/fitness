import styles from "@/components/module/BannerPage.module.css";
import banner from "@/data/Banner";
import Image from "next/image";

import creatin from "/public/banner/creatin.webp";
import food from "/public/banner/food.webp";
import sale from "/public/banner/sale.webp";

function BannerPage() {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <div className={styles.up}>
                    <div>
                        <Image className={styles.image} src={creatin} width={1000} height={470} alt="img" />
                    </div>
                    <div className={styles.right}>
                        <Image className={styles.image} src={food} width={470} height={200} alt="img" />
                        <Image className={styles.image} src={sale} width={470} height={200} alt="img" />
                    </div>
                </div>

                <div className={styles.bottom}>
                    {banner.map((e) => (
                        <div key={e.id}>
                            <Image className={styles.image} src={e.image} width={460} height={200} alt="kmvfkr" />
                        </div>

                    ))}
                </div>

            </div>
        </div>
    )
}

export default BannerPage