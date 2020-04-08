let inp = document.getElementById("inp");
let but = document.getElementById("but");
let p = document.getElementById("p");
let value = but.addEventListener(
    "click",
    function(){
        p.innerHTML = ("$ " + inp.value);
    }
);
