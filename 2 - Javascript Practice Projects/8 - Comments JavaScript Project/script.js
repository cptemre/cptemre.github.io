var left = document.getElementById("left");

var right = document.getElementById("right");

var buttons = document.getElementsByClassName('buttons');

var img1 = document.getElementById("img1-1");

var heading3 = document.getElementById("heading3");

var heading4 = document.getElementById("heading4");

var avatar1 = "./avatar-1.png";
var avatar2 = "./avatar-2.png";
var avatar3 = "./avatar-3.png";

var avatars = [avatar1, avatar2, avatar3];

var names = ["Jack", "Rose", "Titanic"];

var comments = ["Service was extremely slow, food was cold and overall It was expensive. I do not plan to come here again.", "Design of the restaurant is amazing. Food was delicious, I would like to come here often.", "More More More More More More More More More More..."];

var count = -1;

window.addEventListener("keyup", function (event) {  
    if (event.keyCode === 37) {
        if (count <= 0 && count > (avatars.length+1) * -1) {
            img1.src = avatars[avatars.length+count];
            heading3.innerHTML = names[names.length+count];
            heading4.innerHTML = comments[comments.length+count];
            count--;
        } 
        else if (count == (avatars.length+1) * -1) {
            count = -1;
            img1.src = avatars[avatars.length+count];
            heading3.innerHTML = names[names.length+count];
            heading4.innerHTML = comments[comments.length+count];
            count--;
        }
        else if (count > 1 && count <= avatars.length) {
            count--
            img1.src = avatars[count-1];
            heading3.innerHTML = names[count-1];
            heading4.innerHTML = comments[count-1];
        }
        else {
            count = -1;
            img1.src = avatars[avatars.length+count];
            heading3.innerHTML = names[names.length+count];
            heading4.innerHTML = comments[comments.length+count];
            count--;
        }
        console.log(count);
    }
})

left.addEventListener("click", function () {
    if (count <= 0 && count > (avatars.length+1) * -1) {
        img1.src = avatars[avatars.length+count];
        heading3.innerHTML = names[names.length+count];
        heading4.innerHTML = comments[comments.length+count];
        count--;
    } 
    else if (count == (avatars.length+1) * -1) {
        count = -1;
        img1.src = avatars[avatars.length+count];
        heading3.innerHTML = names[names.length+count];
        heading4.innerHTML = comments[comments.length+count];
        count--;
    }
    else if (count > 1 && count <= avatars.length) {
        count--
        img1.src = avatars[count-1];
        heading3.innerHTML = names[count-1];
        heading4.innerHTML = comments[count-1];
    }
    else {
        count = -1;
        img1.src = avatars[avatars.length+count];
        heading3.innerHTML = names[names.length+count];
        heading4.innerHTML = comments[comments.length+count];
        count--;
    }
    console.log(count);
})

window.addEventListener("keyup", function (event) {  
    if (event.keyCode === 39) {
        if (count == -1) {
            count = 1
            img1.src = avatars[count];
            heading3.innerHTML = names[count];
            heading4.innerHTML = comments[count];
            count++; 
        }
        else if (count >= 0 && count < avatars.length) {
            img1.src = avatars[count];
            heading3.innerHTML = names[count];
            heading4.innerHTML = comments[count];
            count++; 
        }
        else if (count == avatars.length) {
            count = 0;
            img1.src = avatars[count];
            heading3.innerHTML = names[count];
            heading4.innerHTML = comments[count];
            count++; 
        }
        else if (count > -1 && count >= (avatars.length) * -1) {
            count++
            img1.src = avatars[count+1];
            heading3.innerHTML = names[count+1];
            heading4.innerHTML = comments[count+1];
        }
        else {
            count = 0;
            img1.src = avatars[count];
            heading3.innerHTML = names[count];
            heading4.innerHTML = comments[count];
            count++;
        }
        console.log(count);
    }
})

window.addEventListener("keydown", function (event) {  
    if (event.keyCode === 39) {
        buttons[1].style.background = "linear-gradient(rgba(221, 189, 118, 0.479), rgba(255, 69, 0, 0.479))";
    }
})

window.addEventListener("keyup", function (event) {  
    if (event.keyCode === 39) {
        buttons[1].style.background = "transparent";
    }
})

window.addEventListener("keydown", function (event) {  
    if (event.keyCode === 37) {
        buttons[0].style.background = "linear-gradient(rgba(221, 189, 118, 0.479), rgba(255, 69, 0, 0.479))";
    }
})

window.addEventListener("keyup", function (event) {  
    if (event.keyCode === 37) {
        buttons[0].style.background = "transparent";
    }
})


right.addEventListener("click", function () {
    if (count == -1) {
        count = 1
        img1.src = avatars[count];
        heading3.innerHTML = names[count];
        heading4.innerHTML = comments[count];
        count++; 
    }
    else if (count >= 0 && count < avatars.length) {
        img1.src = avatars[count];
        heading3.innerHTML = names[count];
        heading4.innerHTML = comments[count];
        count++; 
    }
    else if (count == avatars.length) {
        count = 0;
        img1.src = avatars[count];
        heading3.innerHTML = names[count];
        heading4.innerHTML = comments[count];
        count++; 
    }
    else if (count > -1 && count >= (avatars.length) * -1) {
        count++
        img1.src = avatars[count+1];
        heading3.innerHTML = names[count+1];
        heading4.innerHTML = comments[count+1];
    }
    else {
        count = 0;
        img1.src = avatars[count];
        heading3.innerHTML = names[count];
        heading4.innerHTML = comments[count];
        count++;
    }
    console.log(count);
})