//Chang the family font of html body
let body = document.getElementById("body");
body.style.fontFamily = "Arial, sans-serif";
// Replace each of the spans (nickname, fav-food, hometown) with your own information
let nickname = document.getElementById("nickname").innerHTML = ("Amir");
let favfood = document.getElementById("fav-food").innerHTML = ("egg");
let hometown = document.getElementById("hometown").innerHTML = ("mashhad");
//classing li
let ul = document.getElementsByTagName("ul")[0];
let li1 = ul.getElementsByTagName("li")[0];
let li2 = ul.getElementsByTagName("li")[1];
let li3 = ul.getElementsByTagName("li")[2];
li1.classList = "list-item";
li2.classList = "list-item"
li3.classList = "list-item"
//Adding img
let img = document.createElement("img");
body.appendChild(img);
img.setAttribute("src","https://cdn1.imggmi.com/uploads/2020/1/9/a8a392e01ef7530bf956c9ac7605f6d0-full.jpg");
img.style.width = "80%";
img.style.marginLeft = "10%";
img.style.height = "10%"


