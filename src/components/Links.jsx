import React from 'react'
import { Fragment } from 'react'
import { IconButton}from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core'

const Links = () => {
  const classes = useStyles();
  return (
    <Fragment>
     <IconButton className={classes.gitLinkd}  >
        <Link href="https://github.com/NormaBuendia" target="_blank">
            <GitHubIcon />
        </Link>
    </IconButton>
    <IconButton className={classes.gitLinkd}  >
        <Link href="https://www.linkedin.com/in/norma-buendia-58bb3a35/" target="_blank">
            <LinkedInIcon />
        </Link>
    </IconButton>
    </Fragment>

    
  )
}

const useStyles = makeStyles((theme)=>({

  root : {
    display:"flex",
    top:0,
    left:0,
    right:0,
  },

  gitLinkd:{
    
    paddingLeft:"55px",
  },
}))
export default Links