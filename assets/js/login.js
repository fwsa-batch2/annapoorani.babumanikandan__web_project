let userDetailsInArray = [];

function onPageLoad() {
    const userDetailList = JSON.parse(localStorage.getItem("userDetails"));
    if (userDetailList !== null) {
        userDetailsInArray = userDetailList;
    }
}


function submitHandler(event) {
    event.preventDefault();


    const userMailId = document.getElementById("EmailValue").value;
    const passWord = document.getElementById("password").value;


    let isDetailExist = isUserDetailExist(userMailId, passWord);
    if (isDetailExist !== true) {
        document.getElementById("invalid").innerText = "Invalid login credentials";
        return null;

    }
    else {

        window.location.href = "./musicpage.html";
        localStorage.setItem("LoggedIn", userMailId);
    }


}

function isUserDetailExist(userMail, userPassword) {

    let isExist = false;
    const lengthOfArray = userDetailsInArray.length;

    for (let i = 0; i < lengthOfArray; i++) {
        const valuesInArray = userDetailsInArray[i];
        const userEmail = valuesInArray.mailId;
        const userPw = valuesInArray.Password;
        console.log(userEmail);
        console.log(userPw);

        if (userMail === userEmail && userPassword === userPw) {

            isExist = true;
            break;
        }
        // else {
        //     isExist = false;

        // }
    }
    return isExist;
}

function checking() {
    const showPassword = document.getElementById("checkbox");

    if (showPassword.checked) {
        document.getElementById("password").type = "text";
        console.log(document.getElementById("password").type = "text");

    }
    else {
        document.getElementById("password").type = "password";
        console.log(document.getElementById("password").type = "password");
    }
}

onPageLoad();






