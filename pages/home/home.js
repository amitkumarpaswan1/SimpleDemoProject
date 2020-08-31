import Link from 'next/link';
import React, { Component,useState } from 'react';
import {BrowserRouter,Route} from 'next/router';
import Login from './Login.js';
import { useRouter } from 'next/router';
import Button from "@material-ui/core/Button";
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
export default function HomePage() {
    const Router = useRouter();

    const [fullName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");

    const [fullNameVal, setFullName] = useState();
    const [emailVal, setEmailVal] = useState();
    const [passVal, setPasswordVal] = useState();
    const [passValTwo, setPasswordValTwo] = useState();
    
    const inputName = (event) => {
        setName(event.target.value);
        return (true)
    } 

    const inputEmail = (event) => {
        setEmail(event.target.value);
        return (true)

    } 

    const passOne = (event) => {
        setPassword(event.target.value);
        return (true)

    } 

    const passTwo = (event) => {
        setPasswordTwo(event.target.value);
        return (true)

    } 


    const submitFunction=()=>{
        setFullName(fullName);
        setEmailVal(email);
        setPasswordVal(password);
        setPasswordValTwo(passwordTwo);

        try{

            var letters = /^[A-Za-z ]+$/;
            if (fullName.match(letters)) {
                // return true;
            }
            else {
                alert("Wrong name formate ");
                return false;
            }

        }catch(err){
         

        }

        try{

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                // return (true)
            } else {
                alert("You have entered an invalid email address!")
                return (false)
            }

        }catch(err){

        }
  

        try {

            if (password == passwordTwo) {
                // return (true)

            } else {
                alert("Password did not match ");
                return (false)


            }
            
        } catch (error) {
            
        }

        window.localStorage.setItem('fullNames', fullName);
        window.localStorage.setItem('emailIds', email);
        window.localStorage.setItem('psw', passwordTwo);

        if (fullName != null && email != null && passwordTwo != null) {
            Router.push("/home/Login");
            //  <Route href="/home/Login"  ></Route>
            //  window.location.href = "Login";
            return true;
        } else {

            return false;
        }


    }
    return (
        <>
            <div>

                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <label ><b>Full Name</b></label>
                <input type="text" placeholder="Enter Name" name="fullName" id="fullName" required onChange={inputName} ></input>
                    <label ><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required onChange={inputEmail}></input>

                        <label ><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required required onChange={passOne}></input>

                            <label ><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="pswRepeat" id="pswRepeat" required onChange={passTwo}></input>

                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                <Button onClick={submitFunction} variant="contained" color="primary"> Register</Button>
            </div>
        </>
    )
}