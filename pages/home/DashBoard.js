import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "next/link";
import { Component, useState } from "react";
import { BrowserRouter, Route } from "next/router";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export async function getStaticProps() {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=patna&units=metric&apikey=8d2de98e089f1c28e1a22fc19a24ef04"
  );
  const posts = await res.json();
  var temperature = posts.main.temp;
  var visibility = posts.visibility;
  var speed = posts.wind.speed;
  var date = posts.dt;
  var base = posts.base;

  return {
    props: {
      posts,
    },
  };
}
function Dashboard({posts,  posts: {    visibility,    main: { temp },    weather: [item],    wind: { speed },  },}) {
    console.log(posts);
       const classes = useStyles();

       const Router = useRouter();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
       
        <Typography component="h1" variant="h5">
          Today's Weather
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <span>Visibility : {visibility}</span>
              <br></br>
              <span>Temperature : {temp}</span>
              <br></br>
              <span>Speed : {speed}</span>
              <br></br>
              <span>Base : {posts.base}</span>
            </Grid>
            
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default dynamic(() => Promise.resolve(Dashboard), {
  ssr: false,
});
