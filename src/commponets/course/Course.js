import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card , Grid } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import {Button ,Typography} from '@material-ui/core';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles((theme) => ({
 
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media:{
    height:'200px',
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
 
 
  return (
    <div className={classes.root}  >
      <Typography gutterBottom variant="h5" align='center'  style={{marginTop:'40px' , color:'#696e6a'}} >Explore Free Courses</Typography>
      <Grid container spacing={3}
       direction="row"
       justifyContent="center"
       alignItems="center">
         
        <Grid item xs={10} md={3}>
          
        <Card boxBorder={3} className={classes.root}>
      <CardHeader
       
        action={
          <IconButton aria-label="bookmark">
            <BookmarkBorderIcon/>
          </IconButton>
        }
        title="Python for EveryOne"
        subheader=" Start 1st September 2021"
      />
      <CardMedia
        className={classes.media}
        image="https://content.techgig.com/photo/80100245/8-steps-to-master-python-programming-for-data-science.jpg?88712"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <Typography  variant="h6">
          Learn Python Programming Masterclass
          </Typography>
          <Typography  variant="subtitle1">
          25 sections • 469 lectures • 64h 33m total length

          </Typography>
         
        </Typography>
      </CardContent>
      <CardActions>
       
      <Button variant='outlined' color='secondary'> Enroll </Button> 
       <Button  color='primary'> Learn More</Button>
      </CardActions>
     
    </Card>
        </Grid>
        <Grid item xs={10} md={3}>
        <Card boxBorder={3} className={classes.root}>
      <CardHeader
       
        action={
          <IconButton aria-label="bookmark">
            <BookmarkBorderIcon/>
          </IconButton>
        }
        title="Modern React with Redux "
        subheader=" Start 1st October 2021"
      />
      <CardMedia
        className={classes.media}
        image="https://binaryinformatics.com/wp-content/uploads/2019/01/Front-End-Development-with-React.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <Typography  variant="h6">
          Master React and Redux with React Router.
          </Typography>
          <Typography  variant="subtitle1">
          31 sections • 570 lectures • 52h 35m total length


          </Typography>
         
        </Typography>
      </CardContent>
      <CardActions>
       
      <Button variant='outlined' color='secondary'> Enroll </Button> 
       <Button  color='primary'> Learn More</Button>
      </CardActions>
     
    </Card>
          
         
        </Grid>
        <Grid item xs={10} md={3}>
        <Card boxBorder={3} className={classes.root}>
      <CardHeader
       
        action={
          <IconButton aria-label="bookmark">
            <BookmarkBorderIcon/>
          </IconButton>
        }
        title="NodeJS Tutorial and Projects"
        subheader=" Start 1st September 2021"
      />
      <CardMedia
        className={classes.media}
        image="https://miro.medium.com/max/1000/1*fsseXIPGEhwmg6kfgXyIjA.jpeg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <Typography  variant="h6">
          Make Great Projects Node and Express
          </Typography>
          <Typography  variant="subtitle1">
          12 sections • 222 lectures • 19h 27m total length


          </Typography>
         
        </Typography>
      </CardContent>
      <CardActions>
       
       <Button variant='outlined' color='secondary'> Enroll </Button> 
       <Button  color='primary'> Learn More</Button>
      </CardActions>
     
    </Card>
          
         
        </Grid>
      
      
       
      </Grid>
      <Typography gutterBottom variant="h4" align='center' Color='primary' style={{margin:'20px'}} >
        
        <Button variant='outlined' color='primary'> 
          View All courses
          </Button> 
        
        </Typography>
    </div>
  );
      }