import Image from 'next/image';
import styles from '@/components/module/Brand.module.css';
import { brand } from '@/data/brand';
import Link from 'next/link';

function Brand() {
  return (
    <div className={styles.container}>
        <div className={styles.brand}>
            {brand.map((e) => (
              <Link href={`/brand/${e.userId}`} key={index}>
              <Image className={styles.image} src={e.image} width={250} height={200} alt='img' />
              </Link>
            ))}
        </div>
    </div>
  )
}

export default Brand;