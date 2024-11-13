import React from 'react'
import BannerPage from '../module/BannerPage'
import NewPage from '../module/NewPage'
import Pack from '../module/Pack'
import Brand from '../module/Brand'
import Head from 'next/head'

function HomePage() {
  return (
    <>
    <Head>
      <title>دنیای مکمل</title>
    </Head>
    <BannerPage />
    <NewPage />
    <Pack />
    <Brand />
    </>
  )
}

export default HomePage