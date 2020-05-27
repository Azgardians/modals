
var modal1 = document.getElementById('simple-model-1');
var modal2 = document.getElementById('simple-model-2');
var modalBtn = document.getElementById('modalBtn');
var submitBtn = document.getElementById('next');
var closeBtn1 = document.getElementsByClassName('closeBtn')[0];
var closeBtn2 = document.getElementsByClassName('closeBtn')[1]
var phoneOption = document.getElementById('phoneOpt');
var emailOption = document.getElementById('emailOpt');
var x=0;

modalBtn.addEventListener('click',openModal);
closeBtn1.addEventListener('click',closeModal1);
closeBtn2.addEventListener('click',closeModal2);
submitBtn.addEventListener('click',openSecondModal);
window.addEventListener('click',clickOutside);
emailOption.addEventListener('click',emailValidation);
phoneOption.addEventListener('click',phoneValidation);


function openModal () {
    modal1.style.display = 'block';  
}

function closeModal1 (){
    modal1.style.display = 'none';
}

function closeModal2 (){
    modal2.style.display = 'none';
}
function phoneValidation (){
    x = 1;
    // console.log("x = "+x);
}
function emailValidation (){
    x = 2;
    // console.log("x = "+x);
}
function validateEmail(){
    var emailID = document.myForm.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID")
        document.myForm.email.focus() ;
        return false;
    }
    return( true );
}
function validatePhone (){
    if( document.myForm.phone.value == "" ) {
        alert( "Please provide your phone!" );
        document.myForm.phone.focus() ;
        return false;
    }
    return true;
}
function openSecondModal (){
    var value = false;
    if(x == 0){
        alert("Please Check an Option");
    }
    if (x == 1){
        // console.log("phone checked");
        value = validatePhone();
    }
    if (x == 2) {
        // console.log("email checked");
        value = validateEmail();
    }
    // console.log(value);
    if(value){
        modal1.style.display = 'none';
        modal2.style.display = 'block';
    }
    
     
}

function clickOutside (e) {
    if(e.target == modal1 || e.target == modal2){
        modal1.style.display = 'none';
        modal2.style.display = 'none';
    }
}