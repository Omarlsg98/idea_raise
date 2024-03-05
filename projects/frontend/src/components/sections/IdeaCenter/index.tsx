import { Box, Button, Grid, Pagination, Stack, TextField } from '@mui/material'

import { FC, memo, useEffect, useState } from 'react'
import { SectionId } from '../../../data/data'
import Section from '../../layouts/Section'
import IdeaCard from './IdeaCard'
import { IdeaDataDef } from './definitions'

//import { ideaData } from '../../../data/testData'
import { IdeaForm } from './IdeaForm'
import { getIdeas, searchIdeas } from './backendConn'

const MAX_ITEMS_PER_PAGE = 10


const IdeaCenter: FC = memo(() => {
  const seedList: Array<IdeaDataDef> = []
  const [page, setPage] = useState(0)
  const [searchString, setSearchString] = useState('')
  const [ideasListState, setIdeaList] = useState(seedList)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getIdeas().then((data: Array<IdeaDataDef>) => {
      setIdeaList(data)
      setLoading(false)
    })
  }, [])

  const searchButton = (event: React.ChangeEvent<unknown>) => {
    searchIdeas(searchString).then((data: Array<IdeaDataDef>) => {
      setIdeaList(data)
    })
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1)
  }

  const displayCards = () => {
    const dataSlice = ideasListState.slice(
      page * MAX_ITEMS_PER_PAGE,
      (page + 1) * MAX_ITEMS_PER_PAGE,
    )

    if (dataSlice.length === 0) {
      return <h1>No ideas found :C</h1>
    }

    return dataSlice.map((idea, index) => (
      <IdeaCard key={index} idea={idea} ideasList={ideasListState} setIdeasList={setIdeaList} />
    ))
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
        <Grid container alignItems='center' sx={{ width: '60%' }} justifyContent='center'>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 1, md: 3 }}
            width={1}
            padding={5}
          >
            <TextField
              placeholder='Search an Idea...'
              variant='outlined'
              onChange={(e) => setSearchString(e.target.value)}
              value={searchString}
              sx={{ width: { xs: '100%', md: '60%' } }}
              type='search'
            />
            <Button variant='outlined' sx={{ height: '100%' }} onClick={searchButton}>
              Search
            </Button>
            <IdeaForm
              ideasList={ideasListState}
              setIdeasList={setIdeaList}
              buttonColor='success'
              buttonName='Propose!'
            />
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
            alignItems='top'
            justifyContent='center'
            spacing={2}
            columns={{ xs: 1, sm: 2, md: 3, lg: 5 }}
          >
            {displayCards()}
          </Grid>
        </Box>
        <Pagination
          count={Math.ceil(ideasListState.length / MAX_ITEMS_PER_PAGE)}
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
