/**
 * This file is used to display the details of the idea.
 * It is a react component that uses the Material-UI library to display the details of the idea.
 * It exports the IdeaDetails component which is a full screen overlay that displays the details of the idea.
 */

import { Box, Button, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { FC, memo, useState } from 'react'
import { IdeaDataDef } from './IdeaCard'

const style = {
  position: 'absolute' as 'absolute',
  top: '25%',
  left: { xs: '15%', lg: '20%' },
  width: { xs: '70%', lg: '60%' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 6,
}

const PledgeButton: FC<IdeaDataDef> = memo(
  ({ title, category, description, totalPrize, totalParticipants }) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
      <div>
        <Button size='medium' variant='outlined' color='warning' onClick={handleOpen}>
          Pledge!
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-idea-subscribe'
          aria-describedby={'modal-description-' + { title }}
          keepMounted // for search engine accessibility
        >
          <Box sx={style}>
            <Typography variant='h5' component='div' color='text.secondary'>
              Pledge for:
            </Typography>
            <Typography variant='h4' component='div' align='center'>
              {title}
            </Typography>
            <Stack direction='column' spacing={3} justifyContent='center' sx={{ p: 4, pb: 0 }}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent='center'>
                <TextField
                  label='Email'
                  placeholder='example@email.com'
                  variant='outlined'
                  sx={{ width: { xs: '100%', md: '70%' } }}
                  type='email'
                  helperText='We will send you a confirmation email, and updates on the idea.'
                />
                <TextField
                  label='Pledge Amount'
                  placeholder='50'
                  variant='outlined'
                  type='number'
                  InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>,
                  }}
                  helperText='How much are you willing to pay for this idea?'
                />
              </Stack>
              <Stack direction='row' spacing={2} justifyContent='center'>
                <Button size='small' onClick={handleClose} variant='outlined'>
                  Back
                </Button>
                <Button size='medium' variant='outlined' color='warning' onClick={handleClose}>
                  Pledge!
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Modal>
      </div>
    )
  },
)

PledgeButton.displayName = 'Pledge Button'
export { PledgeButton }
