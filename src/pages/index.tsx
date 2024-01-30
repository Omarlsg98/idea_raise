'use client'
import { Button, Grid, Stack } from '@mui/material'
import { FC, memo } from 'react'
import Page from '../components/layouts/Page'
import { homePageMeta } from '../data/data'

// eslint-disable-next-line react-memo/require-memo
// const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false })

const Home: FC = memo(() => {
  const { title, description } = homePageMeta
  return (
    <Page description={description} title={title}>
      <Grid container height='100vh' alignItems='center' justifyContent='center' direction='column'>
        <h1 className='text-white'>Next.js 13 with Tailwind and MUI Boilerplate</h1>
        <Stack direction='row' columnGap={1}>
          <Button variant='text' className='text-red-500'>
            Text
          </Button>
          <Button variant='contained'>Contained</Button>
          <Button variant='outlined'>Outlined</Button>
        </Stack>
      </Grid>
    </Page>
  )
})

export default Home
