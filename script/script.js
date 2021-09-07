// let img = document.querySelectorAll('img');

// for (let i = 0; i < img.length; i++) {
    
//     img[i].addEventListener('mouseover', function mouseOver(element){
//         document.getElementsByClassName('place').innerHTML = element.alt;
//     })
    
// }


function showPreview(element){

    document.querySelector('.place').innerHTML = element.alt;
    document.querySelector('.place').style.backgroundImage = "url("+element.src+")";
    document.querySelector('.place').style.transition = '5s';

    

}

function hideProperties(){
    document.querySelector('.place').innerHTML = "Hover Over An Image";
    document.querySelector('.place').style.backgroundImage = "";
}