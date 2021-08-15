import React from 'react';
import Carousel from 'react-elastic-carousel'
import { makeStyles } from '@material-ui/core/styles';
import { Card , CardContent , CardMedia , CardActionArea } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Container } from 'react-bootstrap';


const useStyles = makeStyles((theme) => ({
  
  root: {
    maxWidth: 250,
    borderBottom: '2px solid #16b1e0',
  },
  
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const breakPoints =[
    {width:1, itemsToShow:1} ,
    {width:500, itemsToShow:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:4},
    {width:1500, itemsToShow:5},
  ];

  return (
    <div   style={{ marginTop:'60px', marginBottom:'60px'}} >
       <Typography  variant="h4" align='center'  style={{color:'#696e6a' , marginBottom:'30px'}}> Meet our Alumni</Typography>
      

       <Container>

       
       <Carousel breakPoints={breakPoints} >
     

      
       <Card  className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom  align='center'  variant="h5" component="h2">
             Suhas
          </Typography>
          <Typography variant="body1" align='center'  color="textSecondary" component="p">
            Infosys Pvt Ltd
          </Typography>
          <Typography variant="body1"align='center'  color="primary" component="p">
            INR 7 LPA 
          </Typography>
        </CardContent>
      </CardActionArea>
   
    </Card> 
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" align='center' component="h2">
            Nirup
          </Typography>
          <Typography variant="body1" align='center'  color="textSecondary" component="p">
            Wipro Pvt Ltd
          </Typography>
          <Typography variant="body1"align='center'  color="primary" component="p">
            INR 5 LPA 
          </Typography>
        </CardContent>
      </CardActionArea>
   
    </Card> 
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://image.shutterstock.com/image-photo/headshot-guy-wearing-spectacles-looking-260nw-1450012283.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom align='center'  variant="h5" component="h2">
            Rani
          </Typography>
          <Typography variant="body1" align='center'  color="textSecondary" component="p">
             Capgemini
          </Typography>
          <Typography variant="body1" align='center'  color="primary" component="p">
            INR 31 LPA 
          </Typography>
        </CardContent>
      </CardActionArea>
   
    </Card> 
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom align='center'  variant="h5" component="h2">
           sanjay Matho
          </Typography>
          <Typography variant="body1"  align='center'  color="textSecondary" component="p">
            Larsen And Turbo Pvt Ltd
          </Typography>
          <Typography variant="body1" align='center'  color="primary" component="p">
            INR 13 LPA 
          </Typography>
        </CardContent>
      </CardActionArea>
   
    </Card> 
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://wallpapercave.com/wp/wp4437800.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom align='center'  variant="h5" component="h2">
            Aashika R
          </Typography>
          <Typography variant="body1" align='center'  color="textSecondary" component="p">
            JP morgan
          </Typography>
          <Typography variant="body1" align='center'  color="primary" component="p">
            INR 16 LPA 
          </Typography>
        </CardContent>
      </CardActionArea>
   
    </Card> 

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://www.mykhel.com/thumb/247x100x233/cricket/players/1/4541.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom  align='center'  variant="h5" component="h2">
            Praveen M
          </Typography>
          <Typography variant="body1"  align='center' color="textSecondary" component="p">
            Urmeet
          </Typography>
          <Typography variant="body1" align='center'  color="primary" component="p">
            INR 3 LPA 
          </Typography>
        </CardContent>
      </CardActionArea>
   
    </Card> 

{/* 

       
      {/* <Grid container spacing={3}
       direction="row"
       justifyContent="center"
       alignItems="center">
        <Grid item xs={10} md={2}>
        
        </Grid>
        <Grid item xs={10} md={2}>
        
        </Grid>
        <Grid item xs={10} md={2}>
        
        </Grid>
     
      </Grid>  */}
       </Carousel>
       </Container>
     
    </div>
  );
}