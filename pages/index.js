import Head from 'next/head';
import { positions } from '@material-ui/system';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

import styles from '../styles/Home.module.css';

import { Msterials, Box, Grid, Button, Paper, colors, Link} from '@material-ui/core';
import NextLink from '../components/Links';
import MainPage from './home/mainhomepage.js';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  btnStyle: {
    color: "#f4ff81",
  },
  btncolor: {
    color: "#18ffff",
  },

}));

export default function Home() {
const classes = useStyles();
  return (
    <div>

      <div className={classes.root}>
        {/* <MainPage className={classes.mainDivStyle} /> */}

        {/*        
      <Button ><Link href="/home/Login" ><a> Login here</a> </Link></Button> 

      <Button  ><Link href="/home/home" ><a>Register here</a> </Link></Button> 
 */}

        <Button  variant="contained" color="secondary"><Link href="/home/Login" ><a className={classes.btnStyle}>Login here</a> </Link></Button>
        <Button variant="contained" color="primary"><Link href="/home/home" ><a className={classes.btnStyle}>Register here</a> </Link></Button>

      </div>
      
      <h1 className={classes.btncolor}>Welcome to the Demo Project!</h1>

    </div>
    
  )
}
