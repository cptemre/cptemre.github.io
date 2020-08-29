var currentImage = 0;
var source = document.getElementById("container").style;
var img0 = "url('./Images/0.JPG')";
var img1 = "url('./Images/1.jpg')";
var img2 = "url('./Images/2.jpg')";
var img3 = "url('./Images/3.JPG')";
var img4 = "url('./Images/4.JPG')";
var img5 = "url('./Images/5.JPG')";

var images = [img0,img1,img2,img3,img4,img5];
// All images are set and listed in an array

window.addEventListener("keyup", function (event) {  
    if (event.keyCode === 39) {
        if (currentImage < images.length-1 && currentImage >= 0) {
            currentImage++;
            source.backgroundImage = images[currentImage];
        } // If is less than 6 and bigger than 0 and equal, increase one and that number of image will be shown 
        else if (currentImage < 0) {
            currentImage++;
            source.backgroundImage = images[images.length+currentImage]; //If less than 0 than increase 1 and img length + number will be shown
            if (currentImage == 0) {
                source.backgroundImage = images[currentImage];
            } // if it is 0 show 0 img
        }
        
        else {
            source.backgroundImage = images[0];
            currentImage = 0;
        }
    }
})

var right = document.getElementById("right").addEventListener("click", function () {
    if (currentImage < images.length-1 && currentImage >= 0) {
        currentImage++;
        source.backgroundImage = images[currentImage];
    } // If is less than 6 and bigger than 0 and equal, increase one and that number of image will be shown 
    else if (currentImage < 0) {
        currentImage++;
        source.backgroundImage = images[images.length+currentImage]; //If less than 0 than increase 1 and img length + number will be shown
        if (currentImage == 0) {
            source.backgroundImage = images[currentImage];
        } // if it is 0 show 0 img
    }
    
    else {
        source.backgroundImage = images[0];
        currentImage = 0;
    }
})

window.addEventListener("keyup", function (event) {  
    if (event.keyCode === 37) {
        if (currentImage <= 0 && currentImage > -6) {
            currentImage--;
            source.backgroundImage = images[images.length+currentImage]; //If less or equal to zero or bigger than -6, decrease 1 and show img.length+currentimage background
        }
        else if (currentImage == -6 ) {
            currentImage = -1;
            source.backgroundImage = images[5];
        } // If it is -6, equal it to -1 and show last image 5
        else if (currentImage > 0) {
            currentImage--;
            source.backgroundImage = images[currentImage];
        } // If it is bigger than 0 decrease 1 and show that number of image
        else {
            console.log(currentImage);
        }
    }
})
document.getElementById("left").addEventListener("click", function () {
    if (currentImage <= 0 && currentImage > -6) {
        currentImage--;
        source.backgroundImage = images[images.length+currentImage]; //If less or equal to zero or bigger than -6, decrease 1 and show img.length+currentimage background
    }
    else if (currentImage == -6 ) {
        currentImage = -1;
        source.backgroundImage = images[5];
    } // If it is -6, equal it to -1 and show last image 5
    else if (currentImage > 0) {
        currentImage--;
        source.backgroundImage = images[currentImage];
    } // If it is bigger than 0 decrease 1 and show that number of image
    else {
        console.log(currentImage);
    }
})