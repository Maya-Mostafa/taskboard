// React
import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import moment from 'moment';

const TaskCard = ({col, taskInfo, deleteClickHandler}) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dialogYesClickHandler = () => {
    setOpen(false);
    deleteClickHandler();
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, marginBottom: 2, listStyleType: 'none' }} component='li'>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h6">
              {taskInfo.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" name="dueDate" component='label'>
              Due: {moment(new Date(taskInfo.deadline)).format("MM/DD/YYYY")}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button component={RouterLink} size="small" color="primary" to={`${col}/tasks/task-details/${taskInfo.name}/`}>
            View
          </Button>
          <Button component={RouterLink} size="small" color="primary" to={`${col}/tasks/edit-task/${taskInfo.name}/`}>
            Edit
          </Button>
          <Button size="small" color="primary" onClick={handleClickOpen}>
            Delete
          </Button>
        </CardActions>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Task"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete "{taskInfo.name}" task?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={dialogYesClickHandler} autoFocus>Yes</Button>
        </DialogActions>
      </Dialog>
    </>
  )
};

export default TaskCard;
