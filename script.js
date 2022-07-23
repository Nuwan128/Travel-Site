
//variable

const btnDiv = document.getElementById('navigation');
const bgImage = document.getElementById('home');
const btnList = document.getElementsByTagName('input');
const btnLable = document.getElementsByTagName('label');
const arrowDiv = document.getElementById('arrowDiv');

let count = 0;
let time = 5000;
let imges = [];

imges[0] = "url('img/1.png') rgba(0, 0, 0, 0.19)";
imges[1] = "url('img/2.png') rgba(0, 0, 0, 0.19)";
imges[2] = "url('img/3.png') rgba(0, 0, 0, 0.19)";
imges[3] = "url('img/4.png') rgba(0, 0, 0, 0.19)";

//events
btnDiv.addEventListener('click',changeRadio);
arrowDiv.addEventListener('click',arrowKeys);

window.onload = changeImg;


//--Funtions--
//--change image--

function changeImg(){

    btnList[count].checked = true;
    bgImage.style.background = imges[count];
    bgImage.style.transition = '1s';
    
    for (let i = 0; i < btnList.length; i++) {
        
        if(btnList[i].checked == true){
            count++;
            btnLable[i].style.background = 'rgb(235, 59, 112)';
            btnLable[i].style.transform = 'scale(1.25)';
            // console.log(count);
        }
        else{
            btnLable[i].style.background = '';
            btnLable[i].style.transform = 'scale(1)';
            
        }
        
    } 
    if(count > imges.length-1){
        count = 0;
    }

    setTimeout("changeImg()",time);
}
   



 //manual btn

 function changeRadio(e){
    

    if(e.target.className == 'radio btn-1'){
        
        bgImage.style.background = imges[0];
        count = 0;
    }
    else if(e.target.className == 'radio btn-2'){
        bgImage.style.background = imges[1];
        count = 1;
    }
    else if(e.target.className == 'radio btn-3'){
        bgImage.style.background = imges[2];
        count = 2;
    }
    else if(e.target.className == 'radio btn-4'){
        bgImage.style.background = imges[3];
        count = 3;
        
    }
 }
 
//arrow keys
function arrowKeys(e){
    
    
    if(e.target.className == 'arrow-left'){
        
        count = count - 2;
        if(count >= 0){
            
            console.log(count);
            bgImage.style.background = imges[count];
        }
        else{
            console.log(count);
            count = count + 4;
            console.log(count);
        }
    }
    else if(e.target.className == 'arrow-right'){

        console.log(count);
        bgImage.style.background = imges[count];
       
    }
    
}