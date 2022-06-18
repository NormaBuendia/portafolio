import { makeStyles,  Paper, Radio, TextField, Typography, Button } from '@material-ui/core'
import { useState } from 'react';
import React from 'react'



const Contact = ({title, dark, id}) => {
    const classes = useStyles();
    const [value, setValue] = useState("Hola");
    //funcion que admite el objeto e que se dispara al ejecutar
    // onChange, se dispara e y se captura y con setValue secambia el valor de value
    const handleChange= (e)=>{
      setValue(e.target.value)
    }
    return (
      <div className= {`${classes.section} ${dark && classes.sectiondark} `}>
        <div className={classes.sectioncontent} id={id }>
            <Typography variant ="h3">{title}</Typography>
          <Paper className={classes.root}>
             <div className={classes.titleandchoices}>
                   <Typography variant ="h5">CONTACTAME</Typography>
                <div className={classes.choices}>
                  <span> Hola</span>
                     <Radio 
                      value="Hola"
                      //tenemos que declarar valor useState
                      checked={value === "Hola"}
                      color={"primary"}
                      onChange={handleChange}
                       />
                  <span> Escríbeme </span>
                     <Radio 
                     value="Escríbeme"
                    //tenemos que declarar valor useState
                     checked={value === "Escríbeme"}
                     color={"primary"}
                     onChange={handleChange}
                     />
               </div>
            </div>
              <form className={classes.form} noValidate autoComplete="off">
                <TextField label= "nombre"/>
                <TextField label= "email"/>
                  {
                     value === "Escríbeme"?(
                      <>
                      <TextField label= "tu número de contacto"/>
                      <TextField label= "donde trabajas"/>
                      </>

                      ):null
              }
                <TextField label= "Escribe un mensaje"/>
              </form>
               <Button color= "secondary" variante='contained'>Submit</Button>
          </Paper>
        </div> 
      </div>
  )
}

const useStyles = makeStyles((theme)=>({
    //aqui se escribe todas las clases y sus estilos
    // se le va a dar una altura a estos componentes, como
    // minimo 100 vh
    section: {
    minHeight: "100vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center",
  
    },
    sectiondark:{
     background:"#333",
     color:"#fff"
    },
    
    root:{
     marginTop:theme.spacing(4),
     marginLeft:theme.spacing(4),
     color:"#fff",
     background:"tomato",
     fontSize:"1.2rem",
     maxWidth:"500px",
     display:"flex",
     flexDirection:"column",
     justifyContent:"space-between",
     padding:theme.spacing(4),
     "& button":{
      backgroundColor:"#fff",
      color:"tomato",
      fontWeight:900,
      fontSize:"1.2rem" ,
      marginTop:theme.spacing(4),   
    },
    "& button:hover":{
      //traigo el valor del color que se creo en app.js
      backgroundColor: theme.palette.primary.main,
      color:"#fff",
    },
    },
    sectioncontent:{
      //anchura max, para que sea mas chico que del padre
     maxWidth:"80vw",
     margin:"0 auto",
    },
    titleandchoices:{
      "& h5":{
         marginTop:theme.spacing(1),
       },
    },
    form:{
      display:"flex",
      flexDirection:"column",
      "& input":{
        marginBottom: theme.spacing(1),
      }
    },
  }))

export default Contact