import Image from 'next/image';
import styles from '@/components/template/ProductPage.module.css';
import Story from '../module/Story';
import ProductCard from '../module/ProductCard';
import Menu from '../module/Menu';

function ProductPage({ data, sell, setSell }) {
  // console.log(data[0].images);
  return (
    <div>
      <Story />
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

          {data.map((e) => (

            <ProductCard data={e} sell={sell} setSell={setSell} key={e.images.id} />

          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductPage