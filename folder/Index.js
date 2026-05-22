const signIn=document.getElementById('sign')
signIn.addEventListener("click",function(){
   const userName=document.getElementById('user');
   const userPassword=document.getElementById('password');
   if(userName.value==="admin" && userPassword.value==="admin123"){
    alert("Login Successful.");
    window.location.assign("./function.html");
   }
   else if(userName.value!=="admin"){
    alert("Your Username is wrong.");
   }
   else{
    alert("Your Password is wrong.");
   }
})

