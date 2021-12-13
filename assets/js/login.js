let userDetailsInArray = [];

function onPageLoad (){
    const userDetailList = JSON.parse(localStorage.getItem("userDetails"));
    console.log(userDetailList);
    if (userDetailList == null){
        userDetailsInArray = userDetailList;
    }

}
onPageLoad ();

function submitHandler(){
    event.preventDefault();

    // const userDetailList = JSON.parse(localStorage.getItem("userDetails"));
    // console.log(userDetailList);
    

    const userMailId = document.getElementById("EmailValue").value;
    const passWord = document.getElementById("Password").value;

        for(let i=0;i<userDetailsInArray.length;i++){
            const valuesInArray = userDetailsInArray[i];
            const userEmail = valuesInArray.mailId ;
            const userPw =valuesInArray.passWord;

            if (userMailId !== userEmail || passWord !== userPw){
                document.getElementById("invalid").innerHTML= "Invalid login credentials";
            }
            else{
                document.getElementById("invalid").innerHTML = "Successfully Loggedin";
                window.location.href = "./musicpage.html"
            }
        }
    }

    function checking(){
        const showPassword = document.getElementById("checkbox");

        if(showPassword.checked == true){
            document.getElementById("password").type = "text";
            console.log(document.getElementById("password").type = "text");
        }
        else{
            document.getElementById("password").type = "password";
            console.log(document.getElementById("password").type ="password");
        }
    }
    

 


    
