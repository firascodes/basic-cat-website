//Write Javascript here

// alert("HELLO FROM APP.JS!")

var pics = [         //array
    "cat1.jpg",
    "cat2.jpg",
    "cat3.jpg"
]

var butt = document.querySelector("button");
var img = document.querySelector("img");
var x=0;
butt.addEventListener("click",function(){
    img.src = pics[x];
    if(x>1)
        x=0;
    else
        x++;
});

