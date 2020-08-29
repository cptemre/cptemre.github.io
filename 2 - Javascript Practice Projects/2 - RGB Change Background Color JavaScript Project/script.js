function changeBc() {
    const bodyBg = document.getElementById("body").style;
    const rgbNumber1 = Math.floor(Math.random() * (256));
    const rgbNumber2 = Math.floor(Math.random() * (256));
    const rgbNumber3 = Math.floor(Math.random() * (256)); // 3 adet 256-0 arası random sayı aldım
    bodyBg.backgroundColor = "rgb(" + rgbNumber1 + "," + rgbNumber2 + ", " + rgbNumber3 + ")"; // variable "" içerisinde "+ var +" şeklinde girebilir
    const rgbFinal = "rgb("+ rgbNumber1 +", "+ rgbNumber2 +", "+ rgbNumber3 +")";
    document.getElementById("btn1").innerHTML = rgbFinal;
    document.getElementById("btn1").style.color = "rgb("+ rgbNumber1 +", "+ rgbNumber2 +", "+ rgbNumber3 +")";
}