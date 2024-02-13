/**
 * @file IdeaCard.tsx
 * This file is used to display the details of the idea.
 * It is a react component that uses the Material-UI library to display the details of the idea.
 * It exports the IdeaCard component which is a card that displays the details of the idea.
 */
import { Grid } from '@mui/material'
import { FC, memo } from 'react'

import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import IdeaDetails from './IdeaDetails'

import { IdeaDetailsProps } from './definitions'

const MAX_DESCRIPTION_LENGTH = 200

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
}))

const IdeaCard: FC<IdeaDetailsProps> = memo(({ idea, ideasList, setIdeasList }) => {
  const formated_description =
    idea.description.length > MAX_DESCRIPTION_LENGTH
      ? idea.description.slice(0, MAX_DESCRIPTION_LENGTH) + ' ...'
      : idea.description + ''.repeat(MAX_DESCRIPTION_LENGTH - idea.description.length)
  return (
    <Grid item xs={1} sx={{ minWidth: '20%' }}>
      <Item>
        <Typography variant='h6' component='div'>
          {idea.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {idea.category}
        </Typography>
        <Typography align='left' variant='body1'>
          {formated_description}
        </Typography>
        <br />
        <Typography>
          Prize: ${idea.totalPrize}USD <br />
          by {idea.totalParticipants} participants
        </Typography>
        <IdeaDetails idea={idea} ideasList={ideasList} setIdeasList={setIdeasList} />
      </Item>
    </Grid>
  )
})

IdeaCard.displayName = 'Idea Card'
export default IdeaCard
