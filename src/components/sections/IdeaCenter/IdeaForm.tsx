/**
 * This file is used to display the details of the idea.
 * It is a react component that uses the Material-UI library to display the details of the idea.
 * It exports the IdeaDetails component which is a full screen overlay that displays the details of the idea.
 */

import { Autocomplete, Box, Button, Stack, TextField, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { FC, memo, useState } from 'react'

const categoryOptions = [
  { label: 'Office Automation' },
  { label: 'Funny' },
  { label: 'Technology' },
  { label: 'Data' },
  { label: 'Education' },
  { label: 'Entertainment' },
  { label: 'Other' },
]

const style = {
  position: 'absolute' as 'absolute',
  overflow: 'scroll',
  height: '100%',
  left: { xs: '0%', sm: '10%', lg: '15%' },
  width: { xs: '100%', sm: '80%', lg: '70%' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 6,
}

const IdeaForm: FC = memo(() => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button variant='outlined' color='success' onClick={handleOpen} fullWidth size='medium'>
        Propose!
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-idea-propose'
        aria-describedby={'modal-description-propose-idea'}
      >
        <Box sx={style}>
          <Typography variant='h4' component='div' color='text.secondary'>
            Propose new idea:
          </Typography>
          <Stack
            direction='column'
            spacing={3}
            justifyContent='center'
            sx={{ pt: 4, pb: 0, px: 1 }}
          >
            <TextField
              label='Idea Title'
              placeholder='A platform to connect ideators and creators!'
              variant='outlined'
              helperText='Give your idea a title that describes it. Think of something catchy!'
            />
            <Autocomplete
              disablePortal
              id='category'
              freeSolo
              options={categoryOptions}
              renderInput={(params) => <TextField {...params} label='Category' />}
            />
            <TextField
              label='Description'
              placeholder='What about a platform to connect people with needs or ideas with people that can build them!'
              variant='outlined'
              multiline
              minRows={4}
              maxRows={30}
              helperText={`Describe your idea in detail, what it does, how it works, 
              and why it is important. What is the minimum that you think it should have?`}
            />
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent='center'>
              <TextField
                label='Email'
                placeholder='example@email.com'
                variant='outlined'
                fullWidth
                type='email'
              />
              <TextField
                label='Pledge Amount'
                placeholder='50'
                variant='outlined'
                type='number'
                sx={{ width: { xs: '100%', md: '30%' } }}
              />
            </Stack>
            <Stack direction='row' spacing={2} justifyContent='center'>
              <Button size='small' onClick={handleClose} variant='outlined' color='error'>
                Discard
              </Button>
              <Button size='medium' variant='outlined' color='success' onClick={handleClose}>
                Propose!
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  )
})

IdeaForm.displayName = 'Ideas Form'
export { IdeaForm }
