// function loadXMLDoc() {
//     var xhttp = new XMLHttpRequest(); 

//     xhttp.onreadystatechange = function() {

//       if (this.readyState == 4 && this.status == 200) {
//         console.log(typeof(this.responseURL));
//       }
//     };
//     xhttp.open("GET", "https://source.unsplash.com/random", true);
//     xhttp.send();
//   }
  // loadXMLDoc();




  
// var datas ;
// fetch("https://source.unsplash.com/random")
// .then(res => res.json)
// .then(data => datas = data)
// .then(() => formateData());
// function formateData (){
//   console.log(typeof(datas))
// };
var datas;
fetch ('https://jsonplaceholder.typicode.com/todos/')
.then(res => res.json())
.then(data => datas = data)
.then(() => func());

function func () {
  // let dataa = datas.map(datas.title);
  // return dataa;
  for(let i =0; i< datas.length; i ++){
console.log(datas[i].title);
  }
}


