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
              mockData.map(({title, image, link},index)=>(
                <Grid item key={index} xs={6} s={6} md={4}>
                 <Card className={classes.card}>
                   <CardMedia className={classes.caratula} image={image} title="caratula"/>
                   <CardContent>
                     <Link href={link} color="primary" target="_blank" rel="noopener noreferrer">
                      {title}
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
     padding:theme.spacing(5),
    },
    grid:{
      marginTop:theme.spacing(10)
    },
    card:{
      alignItems:'center',
      maxWidth: 450,
      minHeight:275,
      margin:theme.spacing(4),
    }, 
    caratula:{
      
      height:120,
      padding:"56.25%",//16:9
    }
  }))
export default Mywork