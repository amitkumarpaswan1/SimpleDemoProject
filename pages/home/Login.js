import Link from 'next/link'



export default function Login() {
  var loginEmails;
  var loginPsws;
  var getEmail;
  var getPassword;
  function getEmailFn(e) {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      loginEmails = e.target.value;
      return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)


  } function getPass(e) {

    loginPsws= e.target.value;

    return (true)


  }
  function loginFn() {
    getEmail = localStorage.getItem("emailIds");
    getPassword = localStorage.getItem("psw");

    if (getEmail == loginEmails && getPassword == loginPsws) {
      window.location.href = "DashBoard";
      return true;
    } else {
      return false;
    }

  }

    return (
        <>

          <h1>Login</h1>

            <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="loginEmail" id="loginEmail" required onBlur={getEmailFn}></input>

              <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="loginPsw" id="loginPsw" required onBlur={getPass}></input>



                <button class="registerbtn" onClick={loginFn}> Login</button>

        </>
    )
}