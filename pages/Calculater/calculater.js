import Link from 'next/link'

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
export default function FirstPost() {
    var loginEmails;
    var loginPsws;
    var emailId;
    var psw;
    var getEmail;
    var getPassword;
    var getEmailDash;
    var fullNames;
    var nameVal;



 function nameValidation(e){

         var letters = /^[A-Za-z ]+$/;
         if (e.target.value.match(letters)) {
             nameVal = e.target.value;
             return true;
         }
         else {
             alert("Wrong name formate ");
             return false;
         }
 
    }


    function emailValidation(e) {

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
                return (true)
            }
            alert("You have entered an invalid email address!")
            return (false)
        }
        var pass1Var;
    function passOne(e){
        var pass1=e.target.value;
        pass1Var = pass1;

        return (true)

    }
    function passValidation(e){
        if (pass1Var==e.target.value){
            return (true)

        }else{
            alert("Password did not match ");
            return (false)


        }

    }


    function submitFunction() {

        fullNames = nameVal;
        emailId = document.getElementById("email").value;
        psw = document.getElementById("psw").value;


        window.localStorage.setItem('fullNames', fullNames);
        window.localStorage.setItem('emailIds', emailId);
        window.localStorage.setItem('psw', psw);

        if (fullNames != null && emailId != null && psw != null) {

            window.location.href = "Login.html";
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
                <label for="name"><b>Full Name</b></label>
                    <input type="text" placeholder="Enter Name" name="fullName" id="fullName" required onBlur={nameValidation} ></input>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required onBlur={emailValidation}></input>

                        <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required required onBlur={passOne}></input>

                            <label for="psw-repeat"><b>Repeat Password</b></label>
                            <input type="password" placeholder="Repeat Password" name="pswRepeat" id="pswRepeat" required onBlur={passValidation}></input>

                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button class="registerbtn" onClick={submitFunction}>  Register</button>
            </div>
        </>
    )
}