var basket = document.getElementById("basket");

var product = document.getElementsByClassName("product");

var shopIconSpan = document.getElementsByClassName("shopIconSpan");

var scale = document.getElementsByClassName("scale");

var btnLast = document.getElementsByClassName("btnLast");

var sherbet = document.getElementsByClassName("sherbet");

var ice = document.getElementsByClassName("ice");

var milky = document.getElementsByClassName("milky");

var item = document.getElementById("item");

var itemNumber = document.getElementById("itemNumber");

var dollar = document.getElementById("dollar");

var price = document.getElementsByClassName("price");

// #region Basket icon animation when scroll down

window.addEventListener("scroll", function () {  
    basket.style.position = "fixed";
    basket.style.bottom = "2%";
    basket.style.right = "3.5%";
    basket.style.width = "13%";
    basket.style.animation = "basketAnimation 1s ease-out";
})
// #endregion Basket icon animation when scroll down

// #region Shop icon iteration for all images in last container
for (let i = 0; i < scale.length; i++) {
    scale[i].addEventListener("mouseover", function () {  
        shopIconSpan[i].style.animation = "shopAnimation1 0.5s forwards";
    })
}

for (let i = 0; i < scale.length; i++) {
    scale[i].addEventListener("mouseout", function () {  
        shopIconSpan[i].style.animation = "shopAnimation2 0.5s forwards";
    })
}
// #endregion Shop icon iteration for all images in last container


// #region Our store buttons' colors
for (let i = 0; i < btnLast.length; i++) {
    btnLast[i].addEventListener("click", function () {
        switch (i) {
            case 0:
                btnLast[i].style.background = "white";
                btnLast[i].style.color = "coral";

                btnLast[i+1].style.background = "transparent";
                btnLast[i+1].style.color = "black";

                btnLast[i+2].style.background = "transparent";
                btnLast[i+2].style.color = "black";
                btnLast[i+3].style.background = "transparent";
                btnLast[i+3].style.color = "black";

                for (let i = 0; i < product.length; i++) {
                    product[i].style.display = "grid";
                }

                break;
            case 1:
                btnLast[i].style.background = "white";
                btnLast[i].style.color = "coral";
    
                btnLast[i-1].style.background = "transparent";
                btnLast[i-1].style.color = "black";

                btnLast[i+1].style.background = "transparent";
                btnLast[i+1].style.color = "black";
    
                btnLast[i+2].style.background = "transparent";
                btnLast[i+2].style.color = "black";

                for (let i = 0; i < sherbet.length; i++) {
                    sherbet[i].style.display = "grid";
                    ice[i].style.display = "none";
                    milky[i].style.display = "none";
                }

                break;
            case 2:
                btnLast[i].style.background = "white";
                btnLast[i].style.color = "coral";
        
                btnLast[i-2].style.background = "transparent";
                btnLast[i-2].style.color = "black";
    
                btnLast[i-1].style.background = "transparent";
                btnLast[i-1].style.color = "black";
        
                btnLast[i+1].style.background = "transparent";
                btnLast[i+1].style.color = "black";
                
                for (let i = 0; i < sherbet.length; i++) {
                    sherbet[i].style.display = "none";
                    ice[i].style.display = "grid";
                    milky[i].style.display = "none";
                }

                break;
            case 3:
                btnLast[i].style.background = "white";
                btnLast[i].style.color = "coral";
            
                btnLast[i-3].style.background = "transparent";
                btnLast[i-3].style.color = "black";
        
                btnLast[i-2].style.background = "transparent";
                btnLast[i-2].style.color = "black";
            
                btnLast[i-1].style.background = "transparent";
                btnLast[i-1].style.color = "black";

                for (let i = 0; i < sherbet.length; i++) {
                    sherbet[i].style.display = "none";
                    ice[i].style.display = "none";
                    milky[i].style.display = "grid";
                }

                break;
                    
            default:
                break;
        }
    })
}
// #endregion Our store buttons' colors


var lastNames = document.getElementsByClassName("lastNames");
//Bunu isim eklemek için kullan
for (let i = 0; i < shopIconSpan.length; i++) {
    var count = 0
    var name = document.getElementsByClassName("name"); 
    var lastNumbers = document.getElementsByClassName("lastNumbers");
    var lastItems = document.getElementsByClassName("lastItems");
    shopIconSpan[i].addEventListener("click", function () {
        var name = document.getElementsByClassName("name"); 
        var allNames = name[i].innerHTML;
        lastNames[count].innerHTML = allNames;
        lastNames[count].style.display = "block";
        lastNumbers[count].style.display = "block";

        lastItems[count].style.display = "grid";
        lastItems[count].style.gridTemplateColumns = "1fr 1fr";
        lastItems[count].style.alignItems = "center";
        lastItems[count].style.justifyItems = "center";

        basket.style.gridTemplateColumns = "1fr";
        icon3.remove();
        items.style.alignItems = "flex-start";
        items.style.justifyItems = "center";
        count++;

    })
}

// #region onclick of icon to shop, item number increases 1 and if it is more than 1 writing changes from item to items. 
for (let i = 0; i < shopIconSpan.length; i++) {
    let count = 0
        
    shopIconSpan[i].addEventListener("click", function () {
        count++;
        if (count > 1) {
            item.innerHTML = " Items";
        }
        itemNumber.innerHTML++;
    })
}
// #endregion onclick of icon to shop, item number increases 1 and if it is more than 1 writing changes from item to items.

var x = Number(dollar.innerHTML);
for (let i = 0; i < shopIconSpan.length; i++) {
    shopIconSpan[i].addEventListener("click", function () {
        var name = document.getElementsByClassName("name");  
        var p = Number(price[i].innerHTML);

        x += p;

        // For arranging a number to exact decimal as you like. Write a value and desired decimals.
        function round(value, decimals) {
            return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
        }
        x = round(x,2);
        dollar.innerHTML = " " + x;
    })
}
var items = document.getElementById("items");
var icon3 = document.getElementById("icon3");
var icon3Transform = document.getElementById("icon3Transform");
basket.addEventListener("click", function () {  
    
    basket.style.height = "80%";
    basket.style.width = "20%";
    basket.style.gridTemplateColumns = "1fr";
    
    basket.style.gridTemplateRows = "auto";
    icon3.remove();
    items.style.alignItems = "flex-start";
    items.style.justifyItems = "center";
})
// for break line
// var br = document.createElement("br");
//     basket.appendChild(br);

// var items = document.getElementById("items");
// var icon3 = document.getElementById("icon3");
// basket.addEventListener("click", function () {  
//     var newP1 = document.createElement("p");
//     var node1 = document.createTextNode("New para");
//     newP1.appendChild(node1);
    
//     basket.insertBefore(newP1, items);
//     basket.style.height = "80%";
//     items.style.display = "inline-block";
//     icon3.style.display = "none";
// })