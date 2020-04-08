
//Google logo
let img = document.createElement("img");
img.src = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png";
let body = document.getElementsByTagName("body")[0];
body.appendChild(img);
function hijackGoogleLogo(){
//Hack The Future logo
    img.src = "https://www.hackyourfuture.dk/static/logo-dark.svg";
};