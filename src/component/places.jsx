import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 645,
      marginTop: '30px'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    
  }));
const Place = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
       >
      <Grid item>

       <Card className={classes.root}>
        <CardHeader
          title={props.placeName}
        />
        <CardMedia
          className={classes.media}
          image="https://media-cdn.tripadvisor.com/media/photo-m/1280/13/53/f2/b5/golghar-from-outside.jpg"
          title={props.placeName}
        />
        <CardContent>
        <Typography paragraph>Address</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.address}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
             {props.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </Grid>
      
      </Grid>
    );
}

export default Place;