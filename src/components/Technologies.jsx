import React from 'react'
import {Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator} from "@mui/lab"
import html from "../img/html.png"
import css from "../img/css.png"
import angular from "../img/angular.png"
import typescript from "../img/typescript.png"
import js from "../img/js.png"
import react from "../img/react.jpg"
import node from "../img/node.png"
import {makeStyles, Paper, Typography } from '@material-ui/core'
// import StartRating from './StartRating'

const Technologies = () => {
const classes =useStyles()    
const skills =[
    {
      year:"2023",
      src:angular,
      title:"Angular",
      starts:4,
  },
  {
      year:"2023",
      src:typescript,
      title:"TypeScript",
      starts:4,
  },
    {
        year:"2022",
        src:html,
        title:"HTML",
        starts:4,
    },
    {
        year:"2022",
        src:css,
        title:"CSS",
        starts:4,
    },
    {
        year:"2022",
        src:js,
        title:"Javascript",
        starts:3,
    }, 
    {
        year:"2022",
        src:react,
        title:"React js",
        starts:3,
    },
    {
        year:"2022",
        src:node,
        title:"Node js",
        starts:2,
    },

]

  return (
    <Timeline align="left">
     {
      skills.map(({year, src, title, starts},index) => (
     <TimelineItem  key={index}>
         <TimelineOppositeContent >
           <Typography variant ="h6" color="textSecondary">
            {year}
           </Typography>
         </TimelineOppositeContent>
        <TimelineSeparator>
            <img src={src} alt={title} className={classes.logo}></img>
        <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.title}  variant="h6" componet="h1">
                  {title}
                </Typography>
                {/* <StartRating starts={starts} /> */}
            </Paper>  
        </TimelineContent>
     </TimelineItem>
      ))  
     }
    </Timeline>
  )
}

const useStyles = makeStyles ((theme)=>({
    //aqui se escribe todas las clases y sus estilos
    logo: {
      width:"25px"
    },
    paper:{
      padding:"6px 16px",
      maxWidth:"200px",
    },

    title:{
    [theme.breakpoints.down("sm")]:{
      fontSize: ".8rem",
    },
    fontSize: "1.2rem",
    // font-family: "Roboto", "Helvetica", "Arial", sans-serif,
    fontWeight: 500,
    lineHeight: "1.6",
    letterSpacing: "0.0075rem",
}


  }))


export default Technologies