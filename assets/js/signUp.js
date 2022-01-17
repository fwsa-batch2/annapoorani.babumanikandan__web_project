console.group("validateDateOfBirth");
    let currentYear = new Date().getFullYear();
    console.log(currentYear);
    let maxYear = currentYear-10;
    console.log(maxYear);
    let maxDate = `${maxYear}-01-01`;
    document.getElementById("DOB").setAttribute("max", maxDate);


    console.groupEnd("validateDateOfBirth");

let userDetailsInArray = [];

function onPageLoad() {
    console.group("onPageLoad");
    let userList = JSON.parse(localStorage.getItem("userDetails"));
    console.table(userList);
    if (userList) {
        userDetailsInArray = userList;
    }
    console.groupEnd("onPageLoad");
}

function submitHandler(event) {
    event.preventDefault();
    console.group("submitHandler");
    let mailId = document.getElementById("mailId").value.toLowerCase();
    let passWord = document.getElementById("password").value;
    let confirmingPassword = document.getElementById("confirmingPassword").value;
    let dateOfBirth = document.getElementById("DOB").value;
    let profileName = document.getElementById("profileName").value;


    const userValue = {
        "mailId": mailId,
        "Password": passWord,
        "ConfirmedPassword": confirmingPassword,
        "Date_of_birth": dateOfBirth,
        "Profilename": profileName
    }
    
    if (passWord != confirmingPassword) {
        document.getElementById("invalid").innerHTML = "Invalid password";
        return;
    }



    let validatingEmail = validate(mailId);
    if (validatingEmail){
        alert("This email_Id is already existed!");
        return;
    }

    

    userDetailsInArray.push(userValue);
    const valueInString = JSON.stringify(userDetailsInArray);
    console.table(valueInString);
    localStorage.setItem("userDetails", valueInString);

    console.groupEnd("submitHandler")

    window.location.href = "./../pages/login.html";
}



function validate(mailIdOfUser){

    console.group("Validation of mailId");

    let userList = JSON.parse(localStorage.getItem("userDetails"));
    let isExist = false;


    if (userList != null) {
        let len =userList.length;
        for (let i=0;i<len;i++) {

            const userDetailList = userList[i];
            const userEmail = userDetailList.mailId;

            if (mailIdOfUser == userEmail) {
                isExist = true;
                break;
            }

        }
    }
    console.groupEnd("Validation of mailId");
    return isExist;
}



onPageLoad();

function showpass(){
     let passWord = document.getElementById("password");
     let confirmPass = document.getElementById("confirmingPassword");
      if (passWord.type === "password" && confirmPass.type==="password") { 
        passWord.type = "text";
        confirmPass.type = "text";
        
     }
       else { passWord.type = "password"; 
       confirmPass.type = "password";
       
    } 

} 



