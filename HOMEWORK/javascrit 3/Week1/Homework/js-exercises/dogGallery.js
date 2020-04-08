var img = document.getElementById("img");
function clickc() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function (){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            img.src = this.responseURL;
        };
    };
    xhttp.open("GET" , "https://dog.ceo/api/breeds/image/random" , true);
    xhttp.send();
};