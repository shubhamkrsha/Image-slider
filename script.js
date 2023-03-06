// We have 4 images numbring of images (0 ,1 ,2 ,3)

// When you click Left button  flag = 2 + (-1) = 1

// When you click Right button flag = 2 + 1 = 3



let flag = 2;

function controller(x){
    flag = flag + x;
    slideshot(flag);
}

slideshot(flag);

function slideshot(number){
    let slides = document.getElementsByClassName("slide");

    if(number == slides.length){
        flag = 0;
        number = 0;
    }

    if(number < 0){
        flag = slides.length-1;
        number = slides.length-1;
    }
    for(let y of slides){
        y.style.display = "none";
    }
    
    slides[number].style.display = "block";

}   


