// don't know if I need this

const userPassword = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

console.log(userPassword);

function validatePassword() {
    if (userPassword.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords don't match.")
    } else {
        confirmPassword.setCustomValidity("")
    }
}

// userPassword.onchange = validatePassword();
// confirmPassword.onkeyup = validatePassword();

// show error message if email doesn't follow expected structure

const userEmail = document.getElementById("email");

function ValidateEmail(userEmail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

ValidateEmail();

// when user submits the form, run the password validation and show error message if the passwords don't match
