
let landing_page_exit = 0;
let main_loaded = 0;
const load_screen = document.querySelector(".load__screen");

document.querySelector(".banner__close").addEventListener('click', function(){
    start_loading();
    landing_page_exit = 1;
});



function start_loading() {
    document.querySelector("#nav").play();
    document.querySelector(".banner__close").closest(".banner").style.display = 'none';
    document.querySelector(".load__screen").style.display = 'block';
    document.querySelector("body").style.animation = "fadeIn 5s";
    document.querySelector("body").style.backgroundColor = "black";

    load_screen.addEventListener('click', function() {
        main_loaded = 1;
        done_loading()
    });
    

    if (main_loaded == 0) {
    setTimeout(function(){
        done_loading();
    }, 3000);
    }
}

function done_loading() {
    document.querySelector(".load__screen").style.display = 'none';
    document.querySelector("body").style.backgroundColor = "beige";
    document.querySelector(".main").style.display = 'block';
    document.querySelector("body").style.animation = "fadeIn 5s";
    var audio = document.getElementById("music");
    audio.play();
}


// initializer
window.addEventListener('load', function() {
    console.log("All assets have loaded");
    document.querySelector("#music").style.display = 'none';
    document.querySelector("#music").volume = 0.1;
    document.querySelector("#nav").style.display = 'none';
    document.querySelector("#nav").volume = 0.3;
    document.querySelector("#nav2").style.display = 'none';
    document.querySelector("#nav2").volume = 0.2;
    document.querySelector("#nav3").style.display = 'none';
    document.querySelector("#nav3").volume = 0.3;
    document.querySelector("body").style.backgroundColor = "orange";
    document.querySelector(".main").style.display = 'none';
    document.querySelector(".load__screen").style.display = 'none';
});

document.getElementById("pictures").addEventListener('click', function(){
    var nav = document.getElementById("nav2");
    nav.play();
    document.querySelector(".photo").style.display = 'block';
    document.querySelector(".intro").style.display = 'none';
});

window.addEventListener('keypress', function(event){
    if (event.key === "Enter") {
        if (landing_page_exit == 0) {
            start_loading();
            landing_page_exit = 1;
        }
    }
})

document.querySelector("#lucario").addEventListener('click', function(){
    document.querySelector("#nav3").play();
    document.querySelector(".photo").style.display = 'none';
    document.querySelector(".intro").style.display = 'block';
    });