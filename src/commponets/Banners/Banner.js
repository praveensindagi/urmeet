import React from 'react';
import Carousel from 'react-elastic-carousel'
import { makeStyles } from '@material-ui/core/styles';
import { Card , CardContent , CardMedia , CardActionArea } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Container } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  
  root: {
    maxWidth: 260,
    borderBottom: '2px solid #16b1e0',
  },
  Banner:{
    paddingTop:'150px',
    paddingBottom:'100px',
     backgroundColor:'#1293e3',
  },
  
}));


const Banner = () => {
  const classes = useStyles();
  const breakPoints =[
    {width:1, itemsToShow:1} ,
    {width:500, itemsToShow:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:4},
    {width:1500, itemsToShow:5},
  ];


    return (
        <div   className={classes.Banner} >

    
<Container>

       
<Carousel breakPoints={breakPoints} >



<Card  className={classes.root}>
<CardActionArea>
 <CardMedia
   component="img"
   alt="Contemplative Reptile"
   height="140"
   image="https://lids.mit.edu/sites/default/files/field/image/MicroMasters-in-Statistics-Data-Science-MIT-00_0.jpeg"
   title="Contemplative Reptile"
 />
 <CardContent>
   <Typography gutterBottom  align='center'  variant="h5" component="h2">
      Data science
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
   image="https://al.nd.edu/assets/380450/1000x562/bacs_code.jpg"
   title="Contemplative Reptile"
 />
 <CardContent>
   <Typography gutterBottom variant="h5" align='center' component="h2">
   Computer science
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
   image="https://d1aogsfjmxwtup.cloudfront.net/images/article_images/_inlineArticleImage/online-buz.jpg"
   title="Contemplative Reptile"
 />
 <CardContent>
   <Typography gutterBottom align='center'  variant="h5" component="h2">
     Bussiness
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
   image="https://www.market-prospects.com//storage/images/mp227-1200x675.jpg"
   title="Contemplative Reptile"
 />
 <CardContent>
   <Typography gutterBottom align='center'  variant="h5" component="h2">
     Development
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
   image="https://images.financialexpress.com/2021/07/SPDR-SP-500-ETF-5-things-to-know-before-investing-1.jpg"
   title="Contemplative Reptile"
 />
 <CardContent>
   <Typography gutterBottom align='center'  variant="h5" component="h2">
     Stock Market
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
   image="https://thejournalofmhealth.com/wp-content/uploads/2019/10/KLAS-Research-Ranks-InterSystems-Among-Top-Interoperability-Vendors-of-2019.jpg"
   title="Contemplative Reptile"
 />
 <CardContent>
   <Typography gutterBottom  align='center'  variant="h5" component="h2">
     Helth
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
   image="https://socialsciences.org.au/socialsciencesweek/wp-content/uploads/sites/2/2020/07/event.jpg"
   title="Contemplative Reptile"
 />
 <CardContent>
   <Typography gutterBottom  align='center'  variant="h5" component="h2">
     Social Science
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
    )
}

export default Banner
