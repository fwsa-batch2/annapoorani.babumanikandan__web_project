function submitHandler(event){
    event.preventDefault();

    const adminEmailId = "Admin@gmail.com";
    const adminPassword = "Admin@Fidaa";

    const adminMailInput = document.getElementById("emailId");
    const adminPass = document.getElementById("password");

    if(adminEmailId==adminMailInput && adminPassword==adminPass){
        const alert = document.getElementById("alert");
        alert.innerHTML = "Successfully LoggedIn";
        window.location.href="./../pages/musicpage.html"
    }
    else{
        const errorAlert = document.getElementById("alert");
        errorAlert.innerHTML = "Invalid Login Credentials";
        return
    }
    }