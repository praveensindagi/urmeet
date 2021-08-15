import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'0px',
    backgroundColor:'#f2f0f0',
    
  },
  grid:{
    margin:'50px',
  },
 head:{
  fontFamily:'Anton sans-serif',
 },

}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}  style={{paddingBottom:'20px'}} >
      <Container maxWidth="lg">

      <Grid container   direction="row"
  justifyContent="center"
  alignItems="center" spacing={5}>
        
        <Grid item xs={11} md={10}>
        <Typography variant='subtitle1' style={{fontFamily:'Aston',fontSize:'20px', color:'#292b2e'}} >
Our Track Record
</Typography>
<Typography  style={{fontFamily:'Aston',fontSize:'40px',color:'#4a4949' }}>
Because words aren’t enough, we let numbers do the talking.
</Typography>
        </Grid>
       
        <Grid item xs={11} md={5} >
      
<Typography  style={{fontFamily:'Aston',fontSize:'50px',color:'#4a4949' }}>
10,00,000
</Typography>
<Typography variant='subtitle1' style={{fontFamily:'Aston',fontSize:'18px', color:'#6e6969'}} >
registered Learners 
</Typography>
            </Grid>
            <Grid item xs={11} md={5} >
       
       <Typography  style={{fontFamily:'Aston',fontSize:'50px', color:'#4a4949'}}>
       INR 95 LPA 
       </Typography>
       <Typography variant='subtitle1' style={{fontFamily:'Aston',fontSize:'18px', color:'#6e6969'}} >
       Highest Salary Offered
       </Typography>
               </Grid>

     <Grid item xs={11} md={5} >
   
<Typography  style={{fontFamily:'Aston',fontSize:'50px',color:'#4a4949' }}>
50%
</Typography>
<Typography variant='subtitle1' style={{fontFamily:'Aston',fontSize:'18px', color:'#6e6969'}} >
  Avarage Salary Hike
</Typography>
        </Grid>
        <Grid item xs={11} md={5} >
   
<Typography  style={{fontFamily:'Aston',fontSize:'50px',color:'#4a4949' }}>
300+
</Typography>
<Typography variant='subtitle1' style={{fontFamily:'Aston',fontSize:'18px', color:'#6e6969'}} >
Hiring Partner
</Typography>
            </Grid>

     <Grid item xs={11} md={10}>
    
<Typography  style={{fontFamily:'Aston',fontSize:'50px',color:'#4a4949' }}>
700+
</Typography>
<Typography variant='subtitle1' style={{fontFamily:'Aston',fontSize:'18px', color:'#6e6969'}} >
Industry Experts
</Typography>
        </Grid>
         
     
      </Grid>
      </Container>
    </div>
  );
}