import React from 'react'
import foto from '../img/Fotoanime.png'
import { Card, CardActions, CardContent, CardMedia, makeStyles, Typography, Button} from '@material-ui/core'
import TypeWriterEffect from "react-typewriter-effect"
import cv1 from "../img/cv_portafolio.jpg"

//aceptamos todos los atributos como props
const About = ({title, dark, id}) => {
  const classes = useStyles();
  return (
    //colocamos 2 clases, y la segunda si dark es verdadero  agrega  la clase section dark 
    <div className= {`${classes.section} ${dark && classes.sectiondark} `}>
        {/* le creamos una clase, y le pasamos un id, para que funcione el scroll */}
        <div className={classes.sectioncontent} id={id }>
          <Typography variant ="h3">{title}</Typography>
          <Card className={classes.card}>
            <CardMedia  image ={foto} className={classes.media} title="picture"/>
            <CardContent className={classes.content}>
             <TypeWriterEffect 
             //atributos
              text=" Hola, soy Norma Buendía De Vettori"
              textStyle={{fontSize:"2rem", fontWeith:"700px", color:"tomato"}}
              startDelay = {100}
              cursorColor="black"
              typeSpeed = {100}
             />
             <TypeWriterEffect 
             //atributos
              text=" Y me convertí en Desarrolladora FrontEnd"
              textStyle={{fontSize:"1.2rem", fontWeith:"500px", color:"black"}}
              startDelay = {4000}
              cursorColor="black"
              typeSpeed = {100}
             />
             <Typography variant="h6" color="textSecondary">
             Front-End Developer, madre, esposa y arquitecta.
             Soy una mujer que se motiva mucho con los grandes desafíos. Asi en mi afán de seguir aprendiendo
             y con mi lema “Nunca es Tarde” me encontre con la programación , con la cual estoy completamente 
             comprometida a perseverar y seguir siendo autodidacta , para poder desarrollar mi carrera y así crear y descubrir
             este  mundo maravilloso de la tecnología.
             </Typography>
            </CardContent>
            <CardActions>
              <Button className={classes.pdfbutton} variant="contained">
                <a href={cv1} download>
                Descarga CV
                </a>
              </Button>
            </CardActions> 
          </Card>
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
    },
    // al padre, de media y content hay que darle la altura
    card:{
      position:"relativa",
      height:"70vh",
      display:"flex",
      //cada unidad son 8 pixeles, osea 6 son 48 px
      marginTop:theme.spacing(6),
    },
    media:{
     width:"500px",
     height:"auto",
     borderRadius:"10px",
     margin:"1rem",
    },
    content:{
    marginTop:theme.spacing(2),
    "& h6":{
    marginTop:theme.spacing(6),
    [theme.breakpoints.down("sm")]:{
      display:"none",
     
     },
    },
    [theme.breakpoints.down("sm")]:{
        right:"7rem",
        bottom:"11.5rem",
       },
       
    },
    pdfbutton:{
      position:"absolute",
      height:"1rem",
      bottom:"6rem",
      right:"12rem",
      [theme.breakpoints.down("xs")]:{
        left:"11rem",
        top:"35rem",
       },
      [theme.breakpoints.down("sm")]:{
        right:"7rem",
        bottom:"11.5rem",
       },
      border:"tomato 3px solid",
      padding:theme.spacing(3),
      "&:hover":{
        backgroundColor:"#fff"
      },
      "& a":{
        color:"grey",
        textDecoration:"none",
        fontWeith:900,
      },
      "& a:hover":{
       color:"tomato",
      },

      
    }

  }))
export default About