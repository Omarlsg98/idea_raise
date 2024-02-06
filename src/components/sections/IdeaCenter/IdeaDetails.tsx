/**
 * This file is used to display the details of the idea.
 * It is a react component that uses the Material-UI library to display the details of the idea.
 * It exports the IdeaDetails component which is a full screen overlay that displays the details of the idea.
 */

import { Box, Button, Stack, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { FC, memo, useState } from 'react'
import { IdeaDataDef } from './IdeaCard'

import { PledgeButton } from './PledgeForm'

const style = {
  position: 'absolute' as 'absolute',
  left: { xs: '10%', lg: '15%' },
  width: { xs: '80%', lg: '70%' },
  height: '100%',
  bgcolor: 'background.paper',
  border: '1px dashed grey',
  boxShadow: 24,
  p: 6,
  overflow: 'scroll',
}

/**
 * The IdeaDetails component is a full screen overlay that displays the details of the idea.
 * It takes in the idea data as a prop and displays the title, category, description, total prize and total participants of the idea.
 */

const IdeaDetails: FC<IdeaDataDef> = memo(
  ({ title, category, description, totalPrize, totalParticipants }) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
      <div>
        <Button onClick={handleOpen}>Read More</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-idea-details'
          aria-describedby={'modal-description-' + { title }}
          keepMounted // for search engine accessibility
        >
          <Box sx={style}>
            <Typography variant='h4' component='div'>
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant='h6' color='text.secondary'>
              {category}
            </Typography>
            <Typography align='center' variant='h6'>
              Prize: ${totalPrize}USD <br />
              by {totalParticipants} participants
            </Typography>
            <br />
            <Stack direction='row' spacing={2} justifyContent='center'>
              <Button size='small' onClick={handleClose} variant='outlined'>
                Back
              </Button>
              <PledgeButton
                title={title}
                category={category}
                description={description}
                totalPrize={totalPrize}
                totalParticipants={totalParticipants}
              />
              <Button size='medium' variant='outlined' sx={{ textAlign: 'center' }}>
                Solve
              </Button>
            </Stack>
            <br />
            <Typography align='left' variant='body1'>
              {description}
            </Typography>
          </Box>
        </Modal>
      </div>
    )
  },
)

IdeaDetails.displayName = 'Idea Details'
export default IdeaDetails