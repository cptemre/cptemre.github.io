function change() {
    const values = ["A","B","C","D","E","F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const bodyBackground = document.getElementById("body").style;

    const one = values[Math.floor(Math.random() * (values.length))];
    const two = values[Math.floor(Math.random() * (values.length))];
    const three = values[Math.floor(Math.random() * (values.length))];
    const four = values[Math.floor(Math.random() * (values.length))];
    const five = values[Math.floor(Math.random() * (values.length))];
    const six = values[Math.floor(Math.random() * (values.length))];
    // Random değeri 0 ile array eleman sayısı arasından alır
    bodyBackground.backgroundColor ="#"+ one +""+ two +""+ three +""+ four + ""+ five +""+ six +"";
    document.getElementById("btn1").innerHTML = "#"+ one +""+ two +""+ three +""+ four + ""+ five +""+ six +"";
    document.getElementById("btn1").style.color = "#"+ one +""+ two +""+ three +""+ four + ""+ five +""+ six +""
}