import { Button, Grid } from '@mui/material'
import { FC, memo } from 'react'

import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

interface IdeaDataDef {
  title: string
  category: string
  description: string
  totalPrize: number
  totalParticipants: number
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}))

const IdeaCard: FC<IdeaDataDef> = memo(
  ({ title, category, description, totalPrize, totalParticipants }) => {
    return (
      <Grid item xs={1} sx={{ minWidth: '20%' }}>
        <Item>
          <Typography variant='h6' component='div'>
            {title}
          </Typography>
          <Typography align='left' variant='body1'>
            {description}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            {category}
          </Typography>
          <Typography>
            Prize: ${totalPrize}USD <br />
            by {totalParticipants} participants
          </Typography>
          <Button size='small'>More</Button>
        </Item>
      </Grid>
    )
  },
)

IdeaCard.displayName = 'Idea Card'
export default IdeaCard
