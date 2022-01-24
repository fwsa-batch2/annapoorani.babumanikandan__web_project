// Validating email_ID and Password
function submitHandler(event){
    event.preventDefault();

    const adminEmailId = "Admin@gmail.com";
    
    const adminPassword = "Admin@Fidaa";
    

    const adminMailInput = document.getElementById("EmailValue").value;
    console.log(adminMailInput);
    const adminPass = document.getElementById("password").value;
    console.log(adminPass);
    if(adminEmailId===adminMailInput && adminPassword === adminPass){
        const alert = document.getElementById("invalidMsg");
        alert.innerHTML = "Successfully LoggedIn";
        window.location.href="./../pages/musicpage.html";
        break;
    }
    else{
        const errorAlert = document.getElementById("invalidMsg");
        errorAlert.innerHTML = "Invalid Login Credentials"; 
    }
    }
// Showing password in html
    function showPass(){
        let passWord = document.getElementById("password");
        if(passWord.type=="password"){
            passWord.type ="text" ;
        }
        else{
            passWord.type ="password" ;
        }
    }