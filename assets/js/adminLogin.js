function submitHandler(event){
    event.preventDefault();

    const adminEmailId = "Admin@gmail.com";
    // console.log(adminEmailId);
    const adminPassword = "Admin@Fidaa";
    // console.log(adminPassword);

    const adminMailInput = document.getElementById("emailId").value;
    console.log(adminMailInput);
    const adminPass = document.getElementById("password").value;
    console.log(adminPass);
    if(adminEmailId===adminMailInput && adminPassword === adminPass){
        const alert = document.getElementById("alert");
        alert.innerHTML = "Successfully LoggedIn";
        window.location.href="./../pages/musicpage.html";
        return;
    }
    else{
        const errorAlert = document.getElementById("alert");
        errorAlert.innerHTML = "Invalid Login Credentials"; 
    }
    }