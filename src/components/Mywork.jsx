import { Card, CardContent, CardMedia, Grid, makeStyles, Typography, Link } from '@material-ui/core'
import React from 'react'
import mockData from '../mockData';

const Mywork = ({title, dark, id}) => {
  const classes = useStyles();
  return (
    <div className= {`${classes.section} ${dark && classes.sectiondark} `}>
        <div className={classes.sectioncontent} id={id }>
          <Typography variant ="h3">{title}</Typography>
          <Grid container className={classes.grid}>
            {
              mockData.map(({title, image, link, tech},index)=>(
                <Grid item key={index} xs={6} s={6} md={3}>
                 <Card className={classes.cardshadow}>
                      <CardMedia  className={classes.caratula}image={image} title="caratula"/>
                    <CardContent className={classes.cardcontent}>
                        <Typography className={classes.card} variant="h8" color="textSecondary" component="p">{tech}</Typography>
                      <Link href={link} color="primary" target="_blank" rel="noopener noreferrer">
                        <Typography  className={classes.card} variant ="h6">{title}</Typography>
                      </Link>
                   </CardContent>
                 </Card>
                </Grid>  
              ))
            }
          </Grid>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme)=>({
    //aqui se escribe todas las clases y sus estilos
    // se le va a dar una altura a estos componentes, como
    // minimo 100 vh
    section: {
  minHeight: "100vh"
  
    },
    sectiondark:{
     background:"#333",
     color:"#fff"
    },
    sectioncontent:{
     maxWidth:"80vw",
     margin:"0 auto",
     padding:theme.spacing(2.2),
    },
    grid:{
      marginTop:theme.spacing(10)
    },
    cardcontent:{
    maxWidth:"40vw",
    maxHeigth:"40vw"
    },
    card:{
      alignItems:'center',
      maxWidth: 300,
      [theme.breakpoints.down("sm")]:{
        maxHeigth:"10vw",
        fontSize:8
      // minHeight:275,
      }
    }, 
    
    caratula:{
      [theme.breakpoints.down("sm")]:{
        height:20,
        fontSize:20
     },
      
      height:100,
      padding:"48%",//16:9
      "&:hover":{
        vector:[0,10,30],
        display:"block",
        transform:"translate3d(0px, 0,0) scale(1) rotateX(0deg)",
        boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
       }

    },

     cardshadow:{ 
      [theme.breakpoints.down("sm")]:{
        minHeigth:100,
        fontSize:8
      // minHeight:275,
      },
      margin:theme.spacing(2),
      zIndex:999,
      maxWidth: 450,
      minHeight:200,
      padding: "6px 6px",
      color:"#f7f8f7",
      textdecoration: "none",
      textshadow: "0px 0px 8px gray",

      "&:hover":{
        transform:"scale(1.1)",
        transition:".5s",
    }
    }
   
  }))
export default Mywork