'use client'
import { FC, memo } from 'react'
import Page from '../components/layouts/Page'
import { homePageMeta } from '../data/data'

import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'
import Hero from '../components/sections/Hero'

// eslint-disable-next-line react-memo/require-memo
// const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false })

const Home: FC = memo(() => {
  const { title, description } = homePageMeta
  return (
    <Page description={description} title={title}>
      <Hero />
      <Contact />
      <Footer />
    </Page>
  )
})

export default Home
