let userDetailsInArray = [];

function onPageLoad() {
    let userList = JSON.parse(localStorage.getItem("userDetails"));
    if (userList) {
        userDetailsInArray = userList;
    }
}

function submitHandler() {
    event.preventDefault();
    let mailId = document.getElementById("mailId").value;
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

    // console.log(userDetails);-]

    let validatingEmail = validate(mailId);
    console.log(validatingEmail);

    if (validatingEmail) {
        alert("This email_Id is already existed!");
        return;
    }


    userDetailsInArray.push(userValue);
    const valueInString = JSON.stringify(userDetailsInArray);
    localStorage.setItem("userDetails", valueInString);

    window.location.href = "./musicpage.html";
}

onPageLoad();

function validate(mailIdOfUser) {

    let userList = JSON.parse(localStorage.getItem("userDetails"));
    let isExist = false;


    if (userList != null) {
        for (i = 0; i < userList.length; i++) {

            const userDetailList = userList[i];
            const userEmail = userDetailList.mailId;

            if (mailIdOfUser == userEmail) {
                isExist = true;
                break;
            }
            else {
                isExist = false;
            }
        }
    }

    return isExist;
}










