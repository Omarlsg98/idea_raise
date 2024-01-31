import { Box, Button, Grid, Pagination, Stack, TextField } from '@mui/material'

import { FC, memo, useState } from 'react'
import { SectionId } from '../../../data/data'
import Section from '../../layouts/Section'
import IdeaCard from './IdeaCard'

import { ideaData } from '../../../data/testData'

const MAX_ITEMS_PER_PAGE = 10

const IdeaCenter: FC = memo(() => {
  const [page, setPage] = useState(0)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1)
  }

  return (
    <Section className='bg-neutral-800' sectionId={SectionId.IdeaCenter} noPadding={true}>
      <Grid
        container
        alignItems='center'
        justifyContent='top'
        direction='column'
        className='bg-slate-50'
        paddingBlockEnd={3}
      >
        <Grid
          container
          alignItems='center'
          height='20vh'
          sx={{ width: '60%' }}
          justifyContent='center'
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 1, md: 3 }}
            width={1}
            padding={2}
          >
            <TextField
              label='Search an Idea..'
              variant='filled'
              sx={{ width: { xs: '100%', md: '60%' } }}
            />
            <Button variant='outlined'>Search</Button>
            <Button variant='outlined' color='warning'>
              Propose!
            </Button>
          </Stack>
        </Grid>
        <Box
          sx={{ flexGrow: 1, width: '100%' }}
          paddingBlockEnd={3}
          paddingInlineStart={2}
          paddingInlineEnd={2}
          minHeight='80vh'
        >
          <Grid
            container
            alignItems='center'
            justifyContent='center'
            spacing={2}
            columns={{ xs: 1, sm: 2, md: 3, lg: 5 }}
          >
            {ideaData
              .slice(page * MAX_ITEMS_PER_PAGE, (page + 1) * MAX_ITEMS_PER_PAGE)
              .map((idea, index) => (
                <IdeaCard
                  key={index}
                  title={idea.title}
                  category={idea.category}
                  description={idea.description}
                  totalPrize={idea.totalPrize}
                  totalParticipants={idea.totalParticipants}
                />
              ))}
          </Grid>
        </Box>
        <Pagination
          count={Math.ceil(ideaData.length / MAX_ITEMS_PER_PAGE)}
          page={page + 1}
          onChange={handleChange}
          showFirstButton
          showLastButton
        />
      </Grid>
    </Section>
  )
})

IdeaCenter.displayName = 'Idea Center'
export default IdeaCenter
