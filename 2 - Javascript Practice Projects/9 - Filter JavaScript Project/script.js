var basket = document.getElementById("basket");

var product = document.getElementById("product1");

var body = document.getElementById("body");

window.addEventListener("scroll", function () {  
    basket.style.position = "fixed";
    basket.style.bottom = "2%";
    basket.style.right = "3.5%";
    basket.style.width = "13%";
    basket.style.animation = "basketAnimation 1s ease-out";
})

var shopIconSpan = document.getElementById("shopIconSpan");

var scale = document.getElementById("scale");

scale.addEventListener("mouseover", function () {  
    shopIconSpan.style.animation = "shopAnimation1 0.5s forwards";
})

scale.addEventListener("mouseout", function () {  
    shopIconSpan.style.animation = "shopAnimation2 0.5s forwards";
})