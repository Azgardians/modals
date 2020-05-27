
var modal1 = document.getElementById('simple-model-1');
var modal2 = document.getElementById('simple-model-2');
var modalBtn = document.getElementById('modalBtn');
var submitBtn = document.getElementById('next');
var closeBtn1 = document.getElementsByClassName('closeBtn')[0];
var closeBtn2 = document.getElementsByClassName('closeBtn')[1]

modalBtn.addEventListener('click',openModal);
closeBtn1.addEventListener('click',closeModal1);
closeBtn2.addEventListener('click',closeModal2);
submitBtn.addEventListener('click',openSecondModal);
window.addEventListener('click',clickOutside);


function openModal () {
    modal1.style.display = 'block';  
}

function closeModal1 (){
    modal1.style.display = 'none';
}

function closeModal2 (){
    modal2.style.display = 'none';
}

function openSecondModal (){
   modal1.style.display = 'none';
   modal2.style.display = 'block';  
}

function clickOutside (e) {
    if(e.target == modal1 || e.target == modal2){
        modal1.style.display = 'none';
        modal2.style.display = 'none';
    }
}