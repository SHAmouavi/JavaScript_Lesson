// const class9 = [
//     {
//         name: "Kostas",
//         surname: "Minaidis",
//         country: "Greece"
//     },
//     {
//         name: "Evina",
//         surname: "Mouselimi",
//         country: "Greece"
//     },
//     {
//         name: "Charalampos",
//         surname: "Anagnostou",
//         country: "Greece"
//     },
//     {
//         name: "Paris",
//         surname: "Charalampidis",
//         country: "Greece"
//     },
//     {
//         name: "Amirhossein",
//         surname: "Mousavi",
//         country: "Afghanistan"
//     },
//     {
//         name: "George",
//         surname: "Andris",
//         country: "Greece"
//     },
//     {
//         name: "Sobhan",
//         surname: "Esfandyari",
//         country: "Iran",
//     },
//     {
//         name: "Maria",
//         surname: "Bouguettaya",
//         country: "Morocco"
//     },
// {
//         name: "Stefanos",
//         surname: "Gkikas",
//         country: "Greece"
//     },
//     {
//         name: "abdellatif",
//         surname: "ketoun",
//         country: "Morocco"
//     },
//     {
//         name: "Achilles",
//         surname: "Kestekides",
//         country: "Greece"
//     },
//     {
//         name: "Giannis",
//         surname: "Lagos",
//         country: "Greece",
//     },
//     {
//         name: "Murtaza",
//         surname: "Hassani",
//         country: "Afghanistan"
//     }
// ];

/////////////////////////////////////////
//to select some thigs togader ctr+d
//to copy some paragraph alt+shift+down
////////////////////////////////////////












//async
// console.log(1);
// setTimeout(function(){
//     onscroll.log();
// });
// console.log(2)
// console.log(3)



/////////////////////////////////////////////////////////
// //geolocation
// console.log(navigator.geolocation);
// console.log(navigator.geolocation.getCurrentPosition);

// if (navigator.geolocation) {
//     console.log("geolocation supported!");
//     navigator.geolocation.getCurrentPosition(function (data) {
//         console.log("data recevid", data);
//         data.coords.latitude;
//     });
//     console.log("rest of the code ..");
// }
/////////////////////////////////////////////////////////





///////////////////////////////////////////////
//map
const prices = [100,200,300];
function getToltalPrice(price){
    return price * 1.24;
};
const total =prices.map(getToltalPrice);
console.log(total);





