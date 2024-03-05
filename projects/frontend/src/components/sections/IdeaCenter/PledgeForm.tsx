/**
 * This file is used to display the form to pledge money to an idea.
 * It is a react component that uses the Material-UI library to display the form to pledge money to an idea.
 * It exports the PledgeButton component which is a button that opens a modal to pledge money to an idea.
 * It also exports the PledgeForm component which is the form to pledge money to an idea.
 */

import { Box, Button, InputAdornment, Snackbar, Stack, TextField, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { FC, memo, useState } from 'react'
import { putIdea } from './backendConn'
import { IdeaDetailsProps } from './definitions'

const style = {
  position: 'absolute' as 'absolute',
  top: '25%',
  left: { xs: '15%', lg: '20%' },
  width: { xs: '70%', lg: '60%' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 6,
}

interface PledgeFormProps {
  formData: {
    email: string
    pledge: number
  }
  setFormData: Function
}

const PledgeForm: FC<PledgeFormProps> = memo(({ formData, setFormData }) => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent='center'>
      <TextField
        label='Email'
        placeholder='example@email.com'
        variant='outlined'
        sx={{ width: { xs: '100%', md: '70%' } }}
        type='email'
        helperText='We will send you a confirmation email, and updates on the idea.'
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
        value={formData.pledge}
        onChange={(e) => setFormData({ ...formData, pledge: parseFloat(e.target.value) })}
      />
    </Stack>
  )
})

const formDataInit = {
  email: '',
  pledge: 0,
}

const PledgeButton: FC<IdeaDetailsProps> = memo(({ idea, ideasList, setIdeasList }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [formData, setFormData] = useState(formDataInit)

  const [feedback, setFeedback] = useState({
    open: false,
    message: '',
  })

  const pledgeMoney = () => {
    const nextIdeaData = [...ideasList]
    const nextIdea = nextIdeaData.find((newIdea) => newIdea.id === idea.id)
    if (!nextIdea) {
      console.error('Idea not found')
      return
    }

    nextIdea.totalParticipants++
    nextIdea.totalPrize += formData.pledge

    const result = putIdea(nextIdea)
    setIdeasList(nextIdeaData)

    setFeedback({ open: true, message: 'Pledge added succesfully!' })
    setFormData(formDataInit)

    console.log('Pledge added!')
    handleClose()
  }

  return (
    <div>
      <Button size='medium' variant='outlined' color='warning' onClick={handleOpen}>
        Pledge!
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-idea-subscribe'
        aria-describedby={'modal-description-' + idea.title}
      >
        <Box sx={style}>
          <Typography variant='h5' component='div' color='text.secondary'>
            Pledge for:
          </Typography>
          <Typography variant='h4' component='div' align='center'>
            {idea.title}
          </Typography>
          <Stack direction='column' spacing={3} justifyContent='center' sx={{ p: 4, pb: 0 }}>
            <PledgeForm formData={formData} setFormData={setFormData} />
            <Stack direction='row' spacing={2} justifyContent='center'>
              <Button size='small' onClick={handleClose} variant='outlined'>
                Back
              </Button>
              <Button size='medium' variant='outlined' color='warning' onClick={pledgeMoney}>
                Pledge!
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={feedback.open}
        onClose={() => {
          setFeedback({ ...feedback, open: false })
        }}
        message={feedback.message}
      />
    </div>
  )
})

PledgeButton.displayName = 'Pledge Button'
export { PledgeButton, PledgeForm }

