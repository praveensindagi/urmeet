import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
 
  },
  grid:{
    margin:'10px',
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  footer:{
   color:'#d1cdcd',
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}   style={{backgroundColor: "#161629",borderTop: '2px solid royalblue'  }}>
      <Grid container spacing={3} style={{marginTop:'30px'}}
       direction="row"
       justifyContent="center"
       alignItems="center">
           
        <Grid item xs={5} md={2} >
          
              <Typography variant='h6' color='primary'> Pages</Typography>
            
              <Typography className={classes.footer}> About</Typography>
              <Typography className={classes.footer}> Career</Typography>

        </Grid>
        <Grid item xs={5} md={2}>
        <Typography variant='h6' color='primary'> Contact Us</Typography>
              <Typography className={classes.footer}> career@urmeet.com </Typography>
              <Typography className={classes.footer}> +91 8883334422</Typography>
        </Grid>
        <Grid item xs={5} md={2}>
        <Typography variant='h6' color='primary'> Address</Typography>
              <Typography className={classes.footer}> career@urmeet.com </Typography>
              <Typography className={classes.footer}> +91 8883334422</Typography>
        </Grid>
        <Grid item xs={5} md={2}>
        <Typography variant='h6' color='primary'> Address</Typography>
              <Typography className={classes.footer}> career@urmeet.com </Typography>
              <Typography className={classes.footer}> +91 8883334422</Typography>
        </Grid>
      
        
      </Grid>
      <Divider></Divider>
      <Typography  className={classes.footer}  align='center' style={{marginTop:'30px' , fontSize:'18px'}}> Urmeet  © 2021 All rights are reserved. 
      
      
      </Typography>
    </div>
  );
}