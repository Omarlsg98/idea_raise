import { Button, Grid, Stack, TextField } from '@mui/material'
import { FC, memo } from 'react'

import { SectionId } from '../../../data/data'
import Section from '../../layouts/Section'
import IdeaCard from './IdeaCard'

const IdeaCenter: FC = memo(() => {
  return (
    <Section className='bg-neutral-800' sectionId={SectionId.IdeaCenter} noPadding={true}>
      <Grid
        container
        height='100vh'
        alignItems='center'
        justifyContent='top'
        direction='column'
        className='bg-white'
      >
        <Grid container alignItems='center' height='20vh' justifyContent='center'>
          <Stack direction='row' columnGap={1}>
            <TextField label='Search an Idea..' variant='filled' />
            <Button variant='contained' className='bg-neutral-500'>
              Search
            </Button>
          </Stack>
        </Grid>
        <Grid container alignItems='center' justifyContent='center' spacing={2}>
          <IdeaCard />
          <IdeaCard />
          <IdeaCard />
          <IdeaCard />
          <IdeaCard />
          <IdeaCard />
          <IdeaCard />
          <IdeaCard />
          <IdeaCard />
          <IdeaCard />
        </Grid>
      </Grid>
    </Section>
  )
})

IdeaCenter.displayName = 'Idea Center'
export default IdeaCenter
