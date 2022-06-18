import React from 'react'
import { makeStyles, Typography} from '@material-ui/core'
import Technologies from './Technologies';
const Skills = ({title, dark, id}) => {
  const classes = useStyles();
  return (
    <div className= {`${classes.section} ${dark && classes.sectiondark} `}>
        <div className={classes.sectioncontent} id={id }>
          <Typography variant ="h3">{title}</Typography>
          <Technologies />
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
  }))

export default Skills