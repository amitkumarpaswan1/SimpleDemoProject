import Head from 'next/head';
import { positions } from '@material-ui/system';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

import styles from '../styles/Home.module.css';

import { Msterials, Box, Grid, Button, Paper, colors, Link} from '@material-ui/core';
import NextLink from '../components/Links';
import MainPage from './home/mainhomepage.js';



import dynamic from "next/dynamic";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  btnStyle: {
    color: "#f4ff81",
  },
  btncolor: {
    color: "#18ffff",
  },
  primary: {
    light: "#ff7961",
    main: "#f44336",
    dark: "#ba000d",
    contrastText: "#000",
  },
}));




function Home() {
const classes = useStyles();
  return (
    <div>

      <Box display="flex" justifyContent="flex-end">
        {" "}
        <Button variant="contained" color="secondary">
          <Link href="/home/Login">
            <a className={classes.btnStyle}>Login here</a>{" "}
          </Link>
        </Button>
        <Button variant="contained" color="primary">
          <Link href="/home/home">
            <a className={classes.btnStyle}>Register here</a>{" "}
          </Link>
        </Button>
      </Box>
      <div>
        {/* <MainPage className={classes.mainDivStyle} /> */}

        {/*        
      <Button ><Link href="/home/Login" ><a> Login here</a> </Link></Button> 

      <Button  ><Link href="/home/home" ><a>Register here</a> </Link></Button> 
 */}
      </div>

      <Box display="flex" justifyContent="center">
        <h1 className={classes.btncolor}>Welcome to the Demo Project!</h1>
      </Box>
    </div>
  );
}
export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});