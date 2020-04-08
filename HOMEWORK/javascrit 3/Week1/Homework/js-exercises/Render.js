var img = document.createElement("img");
var body = document.getElementsByTagName('body')[0];
body.appendChild(img);
function loadXMLDoc(){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if(this.readyState == 4 && this.status == 200){
                img.src = this.responseURL;
          };
      };
      xhttp.open("GET" ,"https://xkcd.com/info.0.json" ,true);
      xhttp.send();
  };
  loadXMLDoc();
