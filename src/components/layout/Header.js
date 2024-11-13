"use client"
import styles from "@/components/layout/Header.module.css"


import { IoSearchSharp } from "react-icons/io5";
import { RiMenu5Fill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "./Layout";
import { useSession } from "next-auth/react";


function Header() {



  const { sell } = useContext(UserContext)

  const { data, status } = useSession()

  const ppHandler = (e) => {
    const ul = e.target.children[0]
    if (ul.style.display === "none") {

      ul.style.display = "block"
    } else {
      ul.style.display = "none"

    }
    console.log(ul);
  }

  return (
    <div className={styles.container}>
      <div className={styles.up}>

        <div>جزیره مکمل</div>
        <div className={styles.search}>
          <input type='text' placeholder='...جستجو در محصولات ' />
          <span><RiMenu5Fill /></span>
          <div><IoSearchSharp /></div>
        </div>
        <div className={styles.register}>
          <div>
            <p>حساب کاربری</p>
            <div className={styles.reg}>
              {
                !data ?
                <span ><Link href="/signin">ورود</Link></span>:
                null
              }
            </div>
          </div>
          <div className={styles.icone}><FaRegUser /></div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.list}>
          <ul>
            <Link href="/"><li>صفحه اصلی</li></Link>
            <Link href="/shop">
              <li>فروشگاه</li>
            </Link>
            <li className={styles.pp} onClick={ppHandler}>
              دسته بندی محصولات
              <ul className={styles.uu}>
                <li>آرابشی بهداشتی</li>
                <li>مکمل ورزشی</li>
                <li>مکمل غذایی</li>
              </ul>
            </li>
            <li>جزیره پک</li>
            <li><Link href="/blog">وبلاگ</Link></li>
            <li><Link href="/brands">برند</Link></li>
            <li>تخفیف</li>
            <li>ارتباط با ما</li>
            <li>پرسش و پاسخ</li>
          </ul>
        </div>

        <div className={styles.sell}>
          <div><AiOutlineShoppingCart /></div>
          <div>
            <h4>سبد خرید</h4>
            <p>تومان</p>
          </div>
          <div className={styles.price}>
            <p>{sell}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header