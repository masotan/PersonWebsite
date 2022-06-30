

// state variables

let landing_page_exit = 0;
let content_loaded = 0;

// getter constants

const load_screen = document.querySelector(".load__screen");
const main_bgm = document.querySelector("#main_bgm");
const nav1 = document.querySelector("#nav");



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
        content_loaded = 1;
        start_menu()
    });
    

    if (content_loaded == 0) {
    setTimeout(function(){
        start_menu();
    }, 3000);
    }
}

function start_menu() {
    document.querySelector(".load__screen").style.display = 'none';
    document.querySelector("body").style.backgroundImage = "url('https://static.displate.com/857x1200/displate/2019-09-05/06cd4c0616ca89d78f40b74224752308_e0fd5739385af0b157f707eca9974494.jpg')";
    document.querySelector(".content").style.display = 'block';
    document.querySelector("body").style.animation = "fadeIn 5s";
    var audio = document.getElementById("main_bgm");
    audio.play();
}

function rickroll() {
    document.querySelector(".main").style.display = 'none';
    main_bgm.pause();
    document.querySelector("#shonan").style.display = 'block';
    document.querySelector("#shonan").style.opacity = "1";
    document.querySelector("#shonan").play();
    document.querySelector("#shonan").volume = 0.1;
}


// initializer
window.addEventListener('load', function() {
    console.log("All assets have loaded");
    document.querySelector("#shonan").style.display = 'none';
    main_bgm.style.display = 'none';
    main_bgm.volume = 0.1;
    document.querySelector("#nav").style.display = 'none';
    document.querySelector("#nav").volume = 0.3;
    document.querySelector("#nav2").style.display = 'none';
    document.querySelector("#nav2").volume = 0.2;
    document.querySelector("#nav3").style.display = 'none';
    document.querySelector("#nav3").volume = 0.3;
    document.querySelector("body").style.backgroundColor = "orange";
    document.querySelector(".content").style.display = 'none';
    document.querySelector(".load__screen").style.display = 'none';
    document.querySelector(".about").style.display = 'none';
    document.querySelector(".art").style.display = 'none';
    document.querySelector(".hobbies").style.display = 'none';
    document.querySelector(".pictures").style.display = 'none';


});

function open_pictures(){  
    var nav = document.getElementById("nav2");
    nav.play();
    document.querySelector(".pictures").style.display = 'block';
    document.querySelector(".main").style.display = 'none';
}

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
    document.querySelector(".pictures").style.display = 'none';
    document.querySelector(".main").style.display = 'block';
    });

function toggle_bgm(x) {
    if(x.paused != 1) {
    x.pause();
    document.querySelector("#main_mute_button").src = "muted.svg";
    } 
    else {
    x.play();
    document.querySelector("#main_mute_button").src = "sound.svg";
    }

}
function open_about() {
    reset_page();
    document.querySelector(".about").style.display = 'block';
}

function open_art() {
    reset_page();
    document.querySelector(".art").style.display = 'block';
}

function open_hobbies() {
    reset_page()
    document.querySelector(".hobbies").style.display = 'block';
}

function open_pictures() {
    reset_page()
    document.querySelector(".pictures").style.display = 'block';
}

function return_to_main(x) {
    reset_page()
    document.querySelector(".main").style.display = 'block';
}

function reset_page() {
    document.querySelector(".main").style.display = 'none';
    document.querySelector(".about").style.display = 'none';
    document.querySelector(".art").style.display = 'none';
    document.querySelector(".hobbies").style.display = 'none';
    document.querySelector(".pictures").style.display = 'none';
}

function play_sound(audio) {
    audio.currentTime = 0;
    audio.play();

}

function button_click(x) {
    play_sound(nav1);
    x;
}