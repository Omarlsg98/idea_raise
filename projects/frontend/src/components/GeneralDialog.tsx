import Button, { ButtonOwnProps } from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { FC, memo, useState } from 'react'

interface GeneralDialogProps {
  buttonName: string
  title: string
  message: string
  buttonColor: ButtonOwnProps['color']
  closeButtonLabel: string
}

const GeneralDialog: FC<GeneralDialogProps> = memo(
  ({ buttonName, title, message, buttonColor, closeButtonLabel }) => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false)
    }

    return (
      <>
        <Button
          variant='outlined'
          color={buttonColor}
          onClick={handleClickOpen}
          size='medium'
          sx={{ textAlign: 'center' }}
        >
          {buttonName}
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>{message}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus color={buttonColor}>
              {closeButtonLabel}
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  },
)

export default GeneralDialog
