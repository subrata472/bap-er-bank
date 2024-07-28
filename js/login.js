// step- 01: add clicked event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('submit button clicked done');
// step- 02: get the email address inside the email input field always remember to use.value to get text from an input field
const emailField = document.getElementById ('user-email');
const email = emailField.value;
// console.log(email);

// set-03: get passoword
//   set id on the html Element
//   get the Element
//   get the value from the element
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
// console.log(password);

// Damger :Do not verify email password on the client side
// step -04: verify email and password and check whether valid user
if(email === 'sontan@bap.com' && password === 'secrete'){
    window.location.href = 'bank.html';
}
else{
    alert('Tui Passwors vhule gecoc !! Toke ami tejjo sontan ghosana korlam')
}
})