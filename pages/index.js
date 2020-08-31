import Head from 'next/head'
import Link from 'next/link'
import { positions } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';

import styles from '../styles/Home.module.css'

import {Msterials,Box,Grid,Button,Paper} from '@material-ui/core'

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></script>;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:5,
    width:100,
  },
}));
export default function Home() {

  const classes = useStyles();
  function FormRow() {
    return (
      <>
        <Grid item xs={6}>
          <Paper ><Link href="/home/home" ><Button variant="contained">Register here</Button></Link></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper > <Link href="/home/Login"><Button variant="contained"> Login here</Button></Link></Paper>
        </Grid>

      </>
    );
  }



  return (
    <div >

      <title>Demo App</title>


      <Grid container spacing={1} alignItems='flex-end' justify='flex-end'>
        <Grid container item xs={3} spacing={1} alignItems='flex-start' justify='center'>
          <FormRow />
        </Grid>
 
      </Grid>




    </div>
  )
}
