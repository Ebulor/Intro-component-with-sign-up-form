var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var button = document.getElementById("button").addEventListener("click", myFunction);

function myFunction(){
    //error message
    var firstNameError = document.getElementById("fn-error");
    var lastNameError = document.getElementById("ln-error");
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");

    //error icon

    var firstNameIcon = document.getElementById("f-n-icon");
    var lastNameIcon = document.getElementById("l-n-icon"); 
    var emailIcon = document.getElementById("email-icon");
    var passwordIcon = document.getElementById("password-icon");
    
    var emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    
  

    if(firstName.value == ""){       
       firstName.style.border = "1px solid red"; 
       firstNameError.style.display = "block";
       firstNameError.innerHTML = "First Name cannot be empty";
       firstNameIcon.style.display = "block";       
    }
    else{
        firstName.style.border = "1px solid #e7e7e9";
        firstNameIcon.style.display = "none";
        firstNameError.style.display = "none";        
    }
    if(lastName.value == ""){
        lastName.style.border = "1px solid red";
        lastNameError.style.display = "block";
        lastNameError.innerHTML = "Last Name cannot be empty";
        lastNameIcon.style.display = "block";
    }
    else{
        lastName.style.border = "1px solid #e7e7e9";
        lastNameIcon.style.display = "none";
        lastNameError.style.display = "none";        
    }
    if (!emailExpression.test(email.value)) {
        email.style.border = "1px solid red";
        emailError.style.display = "block";
        emailError.innerHTML = "Looks like this is not an email";  
        emailIcon.style.display = "block";      
    } 
    else {
        email.style.border = "1px solid #e7e7e9";
        emailError.innerHTML = "";   
        emailIcon.style.display = "none";     
    }
    if(password.value == ""){
        password.style.border = "1px solid red";
        passwordError.style.display = "block";
        passwordError.innerHTML = "Password cannot be empty";
        passwordIcon.style.display = "block";
    }
    else{
        password.style.border = "1px solid #e7e7e9";
        passwordIcon.style.display = "none";
        passwordError.style.display = "none";        
    }
}



























/** var firstName = document.getElementById("first-name").value;
        var lastName = document.getElementById("last-name").value;
        var y = document.getElementById("button").addEventListener("click", myFunction);
        function myFunction(){
            var b = document.getElementById("error-icon");
            var a = document.getElementById("error");
            
            if(firstName == ""){
                a.style.display = "block";
                b.style.display = "block";
            }
            else{
                a.style.display = "none";
                b.style.display = "none";
            }
            if(lastName == ""){
                a.style.display = "block";
                b.style.display = "block";
            }
            else{
                a.style.display = "none";
                b.style.display = "none";
            }
        }
 **/