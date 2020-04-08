var cat = document.getElementsByTagName("img")[0];
var left = 0;
cat.style.left = "0px";
var screen = window.innerWidth;
console.log(screen)
function catWalk(){
    var set = parseFloat(cat.style.left);
    if(set < screen){
    cat.style.left = set + 10 + "px";
}else{
    cat.style.left = set - 10 + "px";
}
};
setInterval(catWalk,100)






























































// //get the cat gift width Id and save it on a varible
// let img = document.getElementById("cat");

// //set a value for style.left 
// let left = 0;
// let right = 0;
// //get the width of your screen
// let width =  document.body.clientWidth;
 
// // function = 10 move left
// function catWalk() {
//     let catStyleR = parseFloat(right);
//     //create a parseFloat for using the value of style.left on your if element and put this parseFloat in catWlak function
//     let catStyle = parseFloat(left);
//     //create a if element in catWlak funciton to move cat just when the width of screen smaller than style.left and put codes for moving cat on this if element
//     if(width >= catStyle){
//     left += 10;
//     img.style.left = left + "px";
// }else if(width <= 0){
//     right = right + 15;
//     img.style.right = right + "px";
// };
// };
// //setInterval to call function every 1 second
// setInterval(catWalk, 100)







////////////////////////////////////////////
//what should I do

//get the cat gift width Id and save it on a varible
//get the width of your screen
//set a value for style.left 
//function = 10 move left
//create a parseFloat for using the value of style.left on your if element and put this parseFloat in catWlak function
//create a if element in catWlak funciton to move cat just when the width of screen smaller than style.left and put codes for moving cat on this if element
//setInterval to call function every 1 second
////////////////////////////////////////////


///////////////////////////////////////////
//what I did on first 20 minut

//innerWidth -15 is true maybe
//puted if element in to catWalk function
