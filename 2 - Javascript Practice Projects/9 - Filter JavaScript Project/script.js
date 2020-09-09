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

var mediaQuery1200 = window.matchMedia("(max-width: 1200px)");
var mediaQuery950 = window.matchMedia("(max-width: 950px)")

var items = document.getElementById("items");
var icon3 = document.getElementById("icon3");
var icon3Transform = document.getElementById("icon3Transform");
var lastIcons = document.getElementById("lastIcons");
var mainItem = document.getElementById("mainItem");


// #region Basket icon animation when scroll down

window.addEventListener("scroll", function () {
        
    if (mediaQuery950.matches) {
        basket.style.cssText = "right: 3% !important; transform: translateX(0%) !important; width: 20% !important";
        basket.style.position = "fixed";
        basket.style.animation = "basketAnimation 1s ease-out forwards";
        basket.style.gridTemplateColumns = "1fr";
        lastIcons.style.display = "grid";
        icon3.style.display = "grid";
        icon3.style.justifyItems = "center";
    } 
    else if (mediaQuery1200.matches) {
        basket.style.cssText = "right: 3%; transform: translateX(0%) !important; width: 15% !important";
        basket.style.position = "fixed";
        basket.style.animation = "basketAnimation 1s ease-out forwards";
        basket.style.gridTemplateColumns = "1fr";
        lastIcons.style.display = "grid";
        icon3.style.display = "grid";
        icon3.style.justifyItems = "center";
    }
    else {
        basket.style.cssText = "right: 3%; transform: translateX(0%) !important; width: 15% !important";
        basket.style.position = "fixed";
        basket.style.animation = "basketAnimation 1s ease-out forwards";
        basket.style.gridTemplateColumns = "1fr";
        lastIcons.style.display = "grid";
        icon3.style.display = "grid";
        icon3.style.justifyItems = "center";
    }
    basket.addEventListener("click", function () {          
        basket.style.height = "95%";
        basket.style.width = "13%";
        basket.style.gridTemplateColumns = "1fr";
    
        basket.style.gridTemplateRows = "auto";
        icon3.remove();
        items.style.alignItems = "flex-start";
        items.style.justifyItems = "center";
        basket.style.alignItems = "flex-start";
    
        lastIcons.style.display = "grid";
        for (let i = 0; i < lastItems.length; i++) {
            lastItems[i].style.display = "grid";
        }
    })
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
        itemNames[i].style.display = "grid";

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
                    itemNames[i].style.display = "grid";
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
                    itemNames[i].style.display = "grid";
                }

                break;
                    
            default:
                break;
        }
    })
}
// #endregion Our store buttons' colors



var lastNames = document.getElementsByClassName("lastNames");
// To add name

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
        
        lastItems[count].style.display = "none";
        lastItems[count].style.gridTemplateColumns = "1fr 1fr";
        lastItems[count].style.alignItems = "center";
        lastItems[count].style.justifyItems = "center";

        basket.style.gridTemplateColumns = "1fr";
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

var containers = document.getElementsByClassName("containers");

for (let i = 0; i < containers.length; i++) {
    containers[i].addEventListener("click", function () {
        basket.style.height = "21.4%";
        lastIcons.style.display = "grid";
        for (let i = 0; i < lastItems.length; i++) {
            lastItems[i].style.display = "none";
        }
    })
}

var check = document.getElementById("check");
check.addEventListener("click",function () {
    var txt;
    var name = prompt("Please enter your name");
    var address = prompt("Please enter your address");
    
    if (name == null || name == "") {
        alert("Please enter a valid name");
    } else if (address == null || address == "") {
        alert("Please enter a valid address");
    }
    else {
        alert("Your order has taken");
    }
})

// Search autocomplete JQuery

$("#input1").click(function () {
    var name = document.getElementsByClassName("name");  
    var availableTags = [];
    for (let i = 0; i < name.length; i++) {
        availableTags.push(name[i].innerHTML);
        
    }
    $( "#input1" ).autocomplete({
        source: availableTags
    });
} );

var input1 = document.getElementById("input1");
var itemNames = document.getElementsByClassName("itemNames");
input1.addEventListener("keyup", function (event)
{

    var name = document.getElementsByClassName("name");  
    var availableTags = [];
    var itemNamesNew = [];
    var newProduct = [];
    for (let i = 0; i < name.length; i++) {
        availableTags.push(name[i].innerHTML);
        itemNamesNew.push(itemNames[i]);
        newProduct.push(product[i]);
        if (event.keyCode === 13) {
            newProduct[i].style.display = "none";
            if (input1.value == availableTags[i]) {
                itemNamesNew[i].style.display = "grid";
                newProduct[i].style.display = "grid";
                
            }
        }
        
    }
})

var iconSearch = document.getElementById("iconSearch");

iconSearch.addEventListener("click",function () {  
    var name = document.getElementsByClassName("name");  
    var availableTags = [];
    var itemNamesNew = [];
    var newProduct = [];
    for (let i = 0; i < name.length; i++) {
        availableTags.push(name[i].innerHTML);
        itemNamesNew.push(itemNames[i]);
        newProduct.push(product[i]);
        
        newProduct[i].style.display = "none";
            if (input1.value == availableTags[i]) {
                itemNamesNew[i].style.display = "grid";
                newProduct[i].style.display = "grid";
            }
        }
    }
)
var body = document.getElementById("body");
var links = document.getElementById("links");
var menu = document.getElementById("menu");
var phone = document.getElementById("phone");
var clicks = 0

$("#menu").click(function () { 

    if (clicks == 0) {
        $("#links").fadeIn(1500);
        $("#phone").fadeIn(1500);
        links.style.cssText = "display: grid !important";
        body.style.gridTemplateRows = "40vh 90vh 120vh auto 15vh";
        phone.style.cssText = "display: grid !important";
        console.log(clicks);
        clicks++;
    } else {
        $("#links").fadeOut();
        $("#phone").fadeOut();
        links.style.cssText = "display: none !important";
        body.style.gridTemplateRows = "10vh 90vh 120vh auto 15vh";
        phone.style.cssText = "display: none !important";
        console.log(clicks);
        clicks--;
    }    
});
var container4 = document.getElementById("container4");

for (let i = 0; i < product.length; i++) {
    product[i].addEventListener("click", function () { 
        var productImages = document.getElementsByClassName("productImages");
        var newImg = document.createElement("DIV");
        document.body.appendChild(newImg);
        newImg.id = "newDiv";
        var newDiv = document.getElementById("newDiv");
        newDiv.style.width = "80%";
        newDiv.style.height = "80%";
        newDiv.style.background = "url("+productImages[i].src+")";
        newDiv.style.backgroundRepeat = "no-repeat";
        newDiv.style.backgroundSize = "100%";
        newDiv.style.backgroundPosition = "center";
        newDiv.style.position = "fixed";
        newDiv.style.bottom = "10%";
        newDiv.style.left = "10%";
        newDiv.style.zIndex = 5;
        newDiv.style.display = "grid";
        newDiv.style.border = "2px solid black";

        container5.style.cssText = "filter: blur(10px)";
        container4.style.cssText = "filter: blur(10px)";
        container3.style.cssText = "filter: blur(10px)";
        container2.style.cssText = "filter: blur(10px)";
        container1.style.cssText = "filter: blur(10px)";

        var newSpan = document.createElement("span");
        newSpan.id = "newSpan1";
        document.getElementById("newSpan1");
        document.body.appendChild(newSpan);
        newSpan1.innerHTML ='<i id = "rightArrow" class="fas fa-arrow-alt-circle-right fa-3x"></i>';
        newSpan1.style.width = "50%";
        newSpan1.style.height = "20%";
        newSpan1.style.position = "fixed";
        newSpan1.style.bottom = "29%";
        newSpan1.style.right = "-42%";
        newSpan1.style.zIndex = 50;

        var right = document.getElementById("rightArrow");
        right.style.width = "100%";
        right.style.height = "32%";
        right.style.cursor = "pointer"
        right.style.color = "rgb(174, 71, 98)";
        right.style.borderRadius = "50%";
        right.style.transition = "all 0.5s";
        right.addEventListener("mouseover", function () {  
            right.style.color = "coral";
        })
        right.addEventListener("mouseout", function () {  
            right.style.color = "rgb(174, 71, 98)";
        })

        var newSpanTwo = document.createElement("span");
        newSpanTwo.id = "newSpan2";
        document.getElementById("newSpan2");
        document.body.appendChild(newSpanTwo);
        newSpan2.innerHTML ='<i id = "leftArrow" class="fas fa-arrow-alt-circle-left fa-3x"></i>';
        newSpan2.style.width = "50%";
        newSpan2.style.height = "20%";
        newSpan2.style.position = "fixed";
        newSpan2.style.bottom = "29%";
        newSpan2.style.right = "46%";
        newSpan2.style.zIndex = 50;

        var left = document.getElementById("leftArrow");
        left.style.width = "100%%";
        left.style.height = "32%";
        left.style.cursor = "pointer";
        left.style.color = "rgb(174, 71, 98)";
        left.style.borderRadius = "50%";
        left.style.transition = "all 0.5s";
        left.addEventListener("mouseover", function () {  
            left.style.color = "coral";
        })
        left.addEventListener("mouseout", function () {  
            left.style.color = "rgb(174, 71, 98)";
        })

        var cancelSpan = document.createElement("span");
        cancelSpan.id = "cancel";
        document.getElementById("cancel");
        document.body.appendChild(cancelSpan);
        cancel.innerHTML ='<i id = "cancelI" class="fas fa-window-close fa-3x"></i>';
        cancel.style.width = "1%";
        cancel.style.height = "20%";
        cancel.style.position = "fixed";
        cancel.style.bottom = "76.7%";
        cancel.style.right = "12.7%";
        cancel.style.zIndex = 50;
        cancel.style.color = "rgb(131, 52, 73)";

        var cancelVar = document.getElementById("cancelI");
        cancelVar.style.width = "100%";
        cancelVar.style.height = "32%";
        cancelVar.style.cursor = "pointer";
        cancelVar.style.transition = "all 0.5s";
        cancelVar.addEventListener("mouseover", function () {  
            cancelVar.style.color = "coral";
        })
        cancelVar.addEventListener("mouseout", function () {  
            cancelVar.style.color = "rgb(174, 71, 98)";
        })
    })
}

var container3 = document.getElementById("container3");
var container2 = document.getElementById("container2");
var container1 = document.getElementById("container1");
var container5 = document.getElementById("container5");
$("#container4").click(function () { 

    if (clicks == 0) {
        $("#newDiv").fadeIn(1000);
        $("#newSpan1").fadeIn(1000);
        $("#newSpan2").fadeIn(1000);
        $("#cancel").fadeIn(1000);
        
        clicks++;
    } else {
        $("#newDiv").fadeOut(1000);
        $("#newSpan1").fadeOut(1000);
        $("#newSpan2").fadeOut(1000);
        $("#cancel").fadeOut(1000);
        clicks--;
        container5.style.cssText = "filter: blur(0px)";
        container4.style.cssText = "filter: blur(0px)";
        container3.style.cssText = "filter: blur(0px)";
        container2.style.cssText = "filter: blur(0px)";
        container1.style.cssText = "filter: blur(0px)";
    }    
});

