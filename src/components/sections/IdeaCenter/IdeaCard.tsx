import { Box, Button } from '@mui/material'
import { FC, memo } from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
const bull = (
  <Box component='span' sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
)

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}))

const IdeaCard: FC = memo(() => {
  return (
    <Item>
      <Box sx={{ minWidth: 275 }} padding={2}>
        <Card variant='elevation'>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant='h5' component='div'>
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              adjective
            </Typography>
            <Typography variant='body2'>
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </Item>
  )
})

IdeaCard.displayName = 'Idea Card'
export default IdeaCard
