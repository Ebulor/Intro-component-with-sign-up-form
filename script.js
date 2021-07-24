const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.querySelector("form");
const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit",(e)=>{
    const error_message = document.querySelectorAll(".error-message");  
    const error_icon = document.querySelectorAll(".error-icon");  
    var isEmpty = false; 
        
    if(firstName.value == ""){ 
        error_message[0].classList.add("error");
        error_icon[0].classList.add("error"); 
        firstName.classList.add("error");    
        isEmpty = true;                 
    }
    else{
        error_message[0].classList.remove("error"); 
        error_icon[0].classList.remove("error");  
        firstName.classList.remove("error");           
    }
    if(lastName.value == ""){ 
        error_message[1].classList.add("error");
        error_icon[1].classList.add("error"); 
        lastName.classList.add("error");   
        isEmpty = true;                  
    }
    else{
        error_message[1].classList.remove("error"); 
        error_icon[1].classList.remove("error");  
        lastName.classList.remove("error");           
    }
    if(!emailExpression.test(email.value)){ 
        error_message[2].classList.add("error");
        error_icon[2].classList.add("error"); 
        email.classList.add("error");              
        isEmpty = true;       
    }
    else{
        error_message[2].classList.remove("error"); 
        error_icon[2].classList.remove("error");  
        email.classList.remove("error");           
    }
    if(password.value == ""){ 
        error_message[3].classList.add("error");
        error_icon[3].classList.add("error"); 
        password.classList.add("error");    
        isEmpty = true;                 
    }
    else{
        error_message[3].classList.remove("error"); 
        error_icon[3].classList.remove("error");  
        password.classList.remove("error");           
    }    

    if(isEmpty){
        e.preventDefault();
    }
    
    
})    
























































