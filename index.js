let chek = true
document.querySelector('.header-burger-button').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.header-menu-list').classList.toggle('open');
    document.querySelector('.header-menu').classList.toggle('open');
    let img = document.querySelector('.burger-poloski');
    if (chek == true){
        img.src="imgs/IconImgs/iconClosee.svg"
        chek = false;
    }else{
        img.src = "/imgs/IconImgs/iconMenu.svg";
        chek = true;
    }
})

function toggleMenu(){
    let menuIcon = document.querySelector(".open-close-img");
    let menu = document.querySelector(".contact-menu");
    if (menu.style.display !== "none"){
        menu.style.display = "none";
        menuIcon.src="/imgs/IconImgs/iconMessage.jpg";
    }else{
        menu.style.display = "flex";
        menuIcon.src="imgs/IconImgs/iconClose.svg"; 
    }
}

const slideBarImgs = document.querySelector(".slide-bar-imgs");
function moveLeft(){
    slideBarImgs.scrollLeft -= 400;
}
function moveRight(){
    slideBarImgs.scrollLeft += 400;
    checkEnd();
}
setInterval( moveRight,3500);
function checkEnd(){
    if(slideBarImgs.scrollLeft >= slideBarImgs.scrollWidth - slideBarImgs.clientWidth){
        slideBarImgs.scrollTo({
            left: 0,
            behavior: "smooth",
        });
    }
}


function dropDown(button){
    let questionContent = button.parentElement.querySelector('.question-content');
    questionContent.classList.toggle('question-open');
    flippImg(button.parentElement.querySelector('.question-open-close'));
}
function flippImg(image){
    image.classList.toggle('rotate');
}
function initMap(){
    let myAdress = {lat:89 ,ing:908};
    let map = new google.maps.Map(document.querySelector(".map-window"),{
        zoom:15,
        center: myAdress,
    });
    let pointAdress = new google.maps.PointAdress({
        position: myAdress,
        map: map,
        title: 'name'
    });
}