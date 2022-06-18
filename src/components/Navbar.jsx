import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import logo from '../img/Mama trabajando.jpg'
//importamos animateScroll y le ponemos un alias, lo usamos para hacer el scroll suave
import {Link, animateScroll as scroll} from "react-scroll"
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone"
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone"
import BuildTwoToneIcon from "@material-ui/icons/BuildTwoTone"
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone"
import CancelIcon from "@material-ui/icons/Cancel"
//menu hamburguesa
import MenuIcon from "@material-ui/icons/Menu"
import { useState } from 'react'




const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen]= useState(false)
  const links=[
    {
      id: "about" ,
      text: "Acerca de mi",
      icon: <InfoTwoToneIcon fontSize="large" />
    },
    {
      id: "skills" ,
      text: "Tecnologías",
      icon: <EmojiObjectsTwoToneIcon fontSize="large" className={classes.light} />
    },
    {
      id: "work" ,
      text: "Mis Proyectos",
      icon: <BuildTwoToneIcon fontSize="large"/>
    },
    {
      id: "contact" ,
      text: "Contáctame",
      icon: <ContactMailTwoToneIcon fontSize="large"/>
    },
  ]
  // creo la funcion, llamo a scroll que importamos de react
  const scrollToTop=()=>{
    //el objeto scroll tiene un metodo scrollToTop
    scroll.scrollToTop()
  }
  return (
    <>
    {/* atributo sticky, si se hace un scroll para abajo
    la pagina se coloca dentro del nav */}
    <AppBar position = "sticky" className={classes.root}>
        {/* toolbar va a contener el logo y los componentes */}
        <Toolbar className= "clasess.toolbar">
               <img 
               src={logo} 
               className ={classes.logo} 
               alt="Logo"
               //añado el onclick con la funcion
               onClick={scrollToTop}
               />
           
           <List className={classes.menu}>
            {
              // iteramos dentro del array de objetos links
              // se necesita el id y el texto, a si desestructuro
              // y coloco index porque se necesita una llave
              links.map(({id,text}, index) =>(
                // aca utilizamos el link de react-scroll
                <Link key={index} 
                      to={id} 
                      spy ={true} 
                      activeClass="active" 
                      smooth={true} 
                      duration = {500} 
                      offset ={-70}>
                        {text}
                </Link>
              ))
            }
           </List>
             <IconButton edge="end" 
               className ={classes.menubutton}
                onClick={()=>setOpen(!open)}>
               <MenuIcon fontSize="large"/>
             </IconButton>
        </Toolbar>
    </AppBar>
    {/* onClose = podemos clickear en cualquier lugar para cerrar */}
    <Drawer anchor="right" open={open} onClose ={()=>setOpen(false)}>
       <IconButton  onClick ={()=>setOpen(false)} className={classes.cancelicon}>
          <CancelIcon fontSize="large"/>
       </IconButton>
       <Divider/>
           {
              links.map(({id,text, icon}, index) =>(
                // aca utilizamos el link de react-scroll
                <Link key={index}
                      className={classes.sidebar} 
                      to={id} 
                      spy ={true} 
                      activeClass="active" 
                      smooth={true} 
                      duration = {500} 
                      offset ={-70}>
                    <ListItem component="h5">
                      <span>
                        <ListItemIcon>
                          {icon}
                        </ListItemIcon>
                      </span> {text}
                    </ListItem>
                </Link>
              ))
            }
    </Drawer> 
   </>
  )
}

const useStyles = makeStyles((theme)=>({
    //aqui se escribe todas las clases y sus estilos
    root : {
      backgroundColor:"#fafafa",
      top:0,
      left:0,
      right:0,
      zIndex:999,
    },
    toolbar:{
      display:"flex",
      justifyContent:"flex-start",
      alignItems:"center"
    },
    
    logo: {
       height: "3rem",
       backgroundColor: "none",
       objectFit:"contain",
       borderRadius:"50%",
       "&:hover":{
        cursor:"pointer"
       }
    },
    light:{
    color:"#ffcc00"
    },

    menu:{
      //para hacerlo responsive
      // cuando en pantallas mas pequeñas de small (sm), la clase menu desaparece
      [theme.breakpoints.down("sm")]:{
        display:"none"
       },
  "& a" :{
  color:"#333",
  fontSize:"1.4rem",
  fontWeight:"bold",
  marginLeft:theme.spacing(3)
  },
  //cuando pasemos por unos de los links del nav
  "& a:hover":{
    cursor:"pointer",
    color:"tomato",
    borderBottom:"3px solid tomato"
  }
    }, 
    menubutton:{
     display:"none",
     [theme.breakpoints.down("sm")]:{
        display:"block",
        color: "tomato",
        position:"absolute",
        top: 0,
        right:10,
     }
     
    },
    cancelicon:{
     color:"tomato",
     position:"absolute",
     top:0,
     right:10,
    },

    sidebar:{
      width:"40vh",
      [theme.breakpoints.down("sm")]:{
       width:"45vh"
      },
      "& h5":{
       margin: theme.spacing(10, 0, 0, 4),
       fontSize:"1.4rem",
       color:"#333",
       fontWeight:"bold",
      },
      "& h5:hover":{
        cursor:"pointer",
        color:"tomato",
        borderBottom:"3px solid tomato"
      }
    }
     
}))
export default Navbar