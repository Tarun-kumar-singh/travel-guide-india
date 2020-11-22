import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

 function GroupSizesColors() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup variant="contained" size="small" aria-label="small outlined button group">
        <Button style={{width:'6em',height:'3em',backgroundColor:'red'}}></Button>
        <Button style={{width:'6em',height:'3em'}}></Button>
        <Button style={{width:'6em',height:'3em',backgroundColor:'green'}}></Button>
        <Button style={{width:'6em',height:'3em'}}></Button>
        <Button style={{width:'6em',height:'3em'}}></Button>
      </ButtonGroup>
    </div>
  );
}

export default GroupSizesColors;