/**
 * This file is used to display the details of the idea.
 * It is a react component that uses the Material-UI library to display the details of the idea.
 * It exports the IdeaDetails component which is a full screen overlay that displays the details of the idea.
 */

import {
  Autocomplete,
  Box,
  Button,
  ButtonOwnProps,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import Modal from '@mui/material/Modal'
import { FC, memo, useState } from 'react'

import { PledgeForm } from './PledgeForm'

import { IdeaDataDef } from './definitions'

import { postIdea, putIdea } from './backendConn'

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

interface IdeaFormProps {
  idea?: IdeaDataDef
  ideasList: Array<IdeaDataDef>
  setIdeasList: Function
  buttonName: string
  buttonColor: ButtonOwnProps['color']
}

const formDataInit = {
  title: '',
  category: '',
  description: '',
  email: '',
  pledge: 0,
  editMode: false,
}

const IdeaForm: FC<IdeaFormProps> = memo(
  ({ ideasList: ideaData, setIdeasList: setIdeaData, buttonName, buttonColor, idea }) => {
    const [openModal, setOpenModal] = useState(false)

    const [formData, setFormData] = useState(
      idea
        ? {
            title: idea.title,
            category: idea.category,
            description: idea.description,
            email: '',
            pledge: 0,
            editMode: true,
          }
        : formDataInit,
    )

    const [feedback, setFeedback] = useState({
      open: false,
      message: '',
    })

    const editIdea = () => {
      if (!idea) {
        console.error('No idea to edit!')
        return
      }

      let newIdea;

      const newIdeaList = ideaData.map((ideaItem) => {
        if (ideaItem.id === idea.id) {
          newIdea = {
            title: formData.title,
            category: formData.category,
            description: formData.description,
            totalPrize: idea.totalPrize,
            totalParticipants: idea.totalParticipants,
            id: idea.id,
          }
          return newIdea
        }
        return ideaItem
      })

      if (!newIdea) {
        console.error('No idea to edit!')
        return
      }

      const result = putIdea(newIdea)

      setIdeaData(newIdeaList)
      setFeedback({ open: true, message: 'Idea edited succesfully!' })
      setOpenModal(false)
    }

    const addIdea = () => {
      if (!formData) {
        console.error('No idea to add!')
        return
      }

      const newIdea: IdeaDataDef = {
        title: formData.title,
        category: formData.category,
        description: formData.description,
        totalPrize: formData.pledge,
        totalParticipants: 1,
        id: ideaData.length + 1,
      }
      const result = postIdea(newIdea)

      setIdeaData([newIdea, ...ideaData])

      setFeedback({ open: true, message: 'Idea added succesfully!' })
      setOpenModal(false)
      console.log('Idea added!')
    }

    const openIdeaFormModal = (idea?: IdeaDataDef) => {
      if (idea) {
        setFormData({
          title: idea.title,
          category: idea.category,
          description: idea.description,
          email: '',
          pledge: 0,
          editMode: true,
        })
      } else {
        setFormData(formDataInit)
      }
      setOpenModal(true)
    }

    return (
      <div>
        <Button
          variant='outlined'
          color={buttonColor}
          onClick={() => openIdeaFormModal(idea)}
          fullWidth
          size='medium'
        >
          {buttonName}
        </Button>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
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
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <Autocomplete
                disablePortal
                id='category'
                freeSolo
                options={categoryOptions}
                renderInput={(params) => <TextField {...params} label='Category' />}
                inputValue={formData.category}
                onInputChange={(event, newInputValue) =>
                  setFormData({ ...formData, category: newInputValue })
                }
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
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              {!formData.editMode && <PledgeForm formData={formData} setFormData={setFormData} />}
              <Stack direction='row' spacing={2} justifyContent='center'>
                <Button
                  size='small'
                  onClick={() => setOpenModal(false)}
                  variant='outlined'
                  color='error'
                >
                  Discard
                </Button>
                <Button
                  size='medium'
                  variant='outlined'
                  color='success'
                  onClick={formData.editMode ? editIdea : addIdea}
                >
                  {formData.editMode ? 'Save!' : 'Propose!'}
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
  },
)

IdeaForm.displayName = 'Ideas Form'
export { IdeaForm }

