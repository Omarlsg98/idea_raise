'use client'
import { FC, memo } from 'react'
import Page from '../components/layouts/Page'
import { homePageMeta } from '../data/data'

import Footer from '../components/sections/Footer'
import IdeaCenter from '../components/sections/IdeaCenter'

// eslint-disable-next-line react-memo/require-memo
// const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false })

const Home: FC = memo(() => {
  const { title, description } = homePageMeta
  return (
    <Page description={description} title={title}>
      <IdeaCenter />
      <Footer />
    </Page>
  )
})

export default Home
