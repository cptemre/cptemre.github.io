var basket = document.getElementById("basket");

var product = document.getElementById("product1");

var body = document.getElementById("body");

window.addEventListener("scroll", function () {  
    basket.style.position = "fixed";
    basket.style.bottom = "2%";
    basket.style.right = "3.5%";
    basket.style.width = "13%";
    basket.style.animation = "basketAnimation 3s ease-out";
})

// var i;
// for (i = 0; i < product.length; i++) {
//     var x =document.getElementById(product + i);
//     x.addEventListener("mouseover", function () {  
//         x.style.zIndex = 4;
//     })
// }
// console.log(product + i);
