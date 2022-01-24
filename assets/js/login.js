let userDetailsInArray = [];
// OnPage load.
function onPageLoad() {
    const userDetailList = JSON.parse(localStorage.getItem("userDetails"));
    if (userDetailList !== null) {
        userDetailsInArray = userDetailList;
    }
}

// Getting Email_Id , Password from user and Validating both the credentials .
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

        localStorage.setItem("LoggedIn", userMailId);
        window.location.href = "./../pages/musicpage.html";
       
    }


}
// Validating Email_Id and Password.
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
        
    }
    return isExist;
}


// Showing Password in html
function showPass(){
    let passWord = document.getElementById("password");
    if(passWord.type=="password"){
        passWord.type ="text" ;
    }
    else{
        passWord.type ="password" ;
    }
}
onPageLoad();






