import styles from '@/components/layout/Footer.module.css';

import { MdOutlineSignpost } from "react-icons/md";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.hr}></div>
      <div className={styles.item}>
        <div>
          <p>تحویل اکسپرس</p>
          <span>در کمترین زمان</span>
        </div>
        <div>
          <p>پشتیبانی سریع</p>
          <span>پشتیبانی حرفه ای</span>
        </div>
        <div>
          <p>پرداخت ایمن</p>
          <span>پرداخت اینترنت - کارت به کارت</span>
        </div>
        <div>
          <p>سفارش سریع</p>
          <span>خرید راحت در سایت</span>
        </div>
        <div>
          <p>ضمانت اصل بودن کالا</p>
          <span>تایید اصالت کالا</span>
        </div>
      </div>

      <div className={styles.info}>
        <div>
          <p>دنیای مکمل</p>
        </div>
        <div className={styles.desc}>
          <div>
          <span>فروشگاه اینترنتی جزیره مکمل</span>
          <p>جزیره مکمل، منبعی جامع برای طیف وسیعی از مکمل‌های غذایی و تناسب اندام است. در قلب ماموریت‌مان، ارائه اطلاعات دقیق، بررسی‌های متخصصانه و راهنمای خرید حرفه‌ای برای کمک به مشتریان جهت دستیابی به اهداف سلامتی‌شان قرار دارد. بهترین مکمل های ورزشی را از جزیره مکمل خریداری کنید.</p>
          </div>
          <div>
            <span>ارتباط با ما:</span>
            <address>آدرس: بلوار‌قیطریه، روبرو ضلع‌جنوبی‌ پارک، نبش‌کوچه‌ دی آبادی شماره تماس: 09000000214</address>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer