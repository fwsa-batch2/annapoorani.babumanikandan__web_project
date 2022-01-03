let userDetailsInArray = [];

function onPageLoad() {
    console.group("onPageLoad")
    let userList = JSON.parse(localStorage.getItem("userDetails"));
    console.table(userList);
    if (userList) {
        userDetailsInArray = userList;
    }
    console.groupEnd("onPageLoad")
}

function submitHandler(event) {
    event.preventDefault();
    console.group("submitHandler")
    let mailId = document.getElementById("mailId").value.toLowerCase(); 
    let passWord = document.getElementById("password").value;
    let confirmingPassword = document.getElementById("confirmingPassword").value;
    let dateOfBirth = document.getElementById("gettingDOB").value;
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
    if (validatingEmail) {
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



function validate(mailIdOfUser) {

    console.group("Validate")

    let userList = JSON.parse(localStorage.getItem("userDetails"));
    let isExist = false;


    if (userList != null) {
        for (let i of userList) {

            const userDetailList = userList[i];
            const userEmail = userDetailList.mailId;

            if (mailIdOfUser == userEmail) {
                isExist = true;
                break;
            }
            // else {
            //     isExist = false;
            // }
        }
    }
    console.groupEnd("Validate")
    return isExist;
}

function check(){
    console.group("check")
    const showPassword = document.getElementById("checkbox");

    if(showPassword.checked){
        document.getElementById("password").type = "text";
        document.getElementById("confirmingPassword").type = "text";
        

    }
    else{
        document.getElementById("password").type = "password";
        document.getElementById("confirmingPassword").type = "password";
        
    }
    console.groupEnd("check")
}

onPageLoad();







