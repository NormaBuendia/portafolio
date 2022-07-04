import { makeStyles,  Paper, Radio, TextField, Typography, Button } from '@material-ui/core'
import { useState } from 'react';
import React from 'react';
import emailjs from 'emailjs-com';
import { Alert } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const Contact = ({title, dark, id}) => {
    const classes = useStyles();
    const [value, setValue] = useState("Hola");
    const [open, setOpen] = useState(false);
   
    //funcion que admite el objeto e que se dispara al ejecutar
    // onChange, se dispara e y se captura y con setValue secambia el valor de value
    const handleChange= (e)=>{
      setValue(e.target.value)
    }
    function sendEmail(e) {
      e.preventDefault();    

      emailjs.sendForm('service_z4sougi', 'template_salxj1j', e.target, "M-IpRwo5RZ7zn2GFw")
      .then((res) => {
          console.log(res, "ola")
          window.location.reload()  //Esto es para que se recargue solo 
         
        }).catch (error =>console.log(error)) 
          
    
      
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
              <form  onSubmit={sendEmail} className={classes.form} >
                <TextField 
                 id="tu nombre"
                 label= "tu nombre"
                 name="tu nombre"
                 required
                 autoComplete="tu nombre"
                />
                <TextField
                 id="email"
                 label= "email"
                 name="email"
                 required
                 autoComplete="email"

                 />
                  {
                     value === "Escríbeme"?(
                      <>
                      <TextField 
                      id="tu teléfono de contacto"
                      label= "tu teléfono de contacto"
                      name="tu teléfono de contacto"
                      required
                      autoComplete="tu teléfono de contacto"
                      
                      />
                      <TextField 
                      id="empresa donde trabajas"
                      label= "empresa donde trabajas"
                      name="empresa donde trabajas"
                      required
                      autoComplete="empresa donde trabajas"
                      />
                      </>

                      ):null
              }
                <TextField
                 id = "escribe un mensaje"
                 label= "escribe un mensaje"
                 name="escribe un mensaje"
                 required
                 autoComplete="escribe un mensaje"
                 
                 />
                  <Collapse in={open}>
                    <Alert
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    >
                    Feliz de conectarme contigo!
                    </Alert>
                </Collapse>
                <Button 
               color= "secondary" 
               variante='contained'
               type='submit'
               variant='contained'
               onClick={() => {
                setOpen(true);
            }}             
               >
                Submit
                </Button>

              </form>
              
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
     marginTop:theme.spacing(5),
     marginLeft:theme.spacing(2),
     color:"#fff",
     background:"tomato",
     fontSize:"1rem",
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