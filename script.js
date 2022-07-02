

// state variables

let landing_page_exit = 0;
let content_loaded = 0;
let play_state = 1;

// getter constants

const load_screen = document.querySelector(".load__screen");
const bgm = document.querySelector("#bgm");
const nav1 = document.querySelector("#nav");
const hover = document.querySelector("#hover");


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
    bgm.play();
}


// initializer
window.addEventListener('load', function() {
    console.log("All assets have loaded");
    set_bgm(random_select_bgm()); // initializes the bgm using main bgm // make an option for playing random bgms
    bgm.style.display = 'none';
    bgm.volume = 0.3;
    document.querySelector("#nav").style.display = 'none';
    document.querySelector("#nav").volume = 0.3;
    document.querySelector("#nav2").style.display = 'none';
    document.querySelector("#nav2").volume = 0.2;
    document.querySelector("#nav3").style.display = 'none';
    document.querySelector("#nav3").volume = 0.3;
    document.querySelector("#hover").style.display = 'none';
    document.querySelector("body").style.backgroundColor = "#e292e8";
    document.querySelector(".content").style.display = 'none';
    document.querySelector(".load__screen").style.display = 'none';
    document.querySelector("#about").style.display = 'none';
    document.querySelector("#art").style.display = 'none';
    document.querySelector("#hobbies").style.display = 'none';
    document.querySelector("#pictures").style.display = 'none';


});

function open_pictures(){  
    var nav = document.getElementById("nav2");
    nav.play();
    document.querySelector("#pictures").style.display = 'block';
    document.querySelector("#main").style.display = 'none';
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
    document.querySelector("#pictures").style.display = 'none';
    document.querySelector("#main").style.display = 'block';
    });

let initial_volume = "0.5";

function toggle_bgm(x) {

    if(play_state == 1) {
    initial_volume = bgm.volume;
    x.volume = "0";
    document.querySelector("#main_mute_button").src = "muted.svg";
    play_state = 0;
    } 
    else {
    x.volume = initial_volume; // set the volume to the initial state
    document.querySelector("#main_mute_button").src = "sound.svg";
    play_state = 1;
    }
//dont forget to save the audio volume state so that the app does not rewrite the volume state
}
function open_about() {
    reset_page();
    document.querySelector("#about").style.display = 'block';
}

function open_art() {
    reset_page();
    document.querySelector("#art").style.display = 'block';
}

function open_hobbies() {
    reset_page()
    document.querySelector("#hobbies").style.display = 'block';
}

function open_pictures() {
    reset_page()
    document.querySelector("#pictures").style.display = 'block';
}

function return_to_main(x) {
    reset_page()
    document.querySelector("#main").style.display = 'block';
}

function reset_page() {
    document.querySelector("#main").style.display = 'none';
    document.querySelector("#about").style.display = 'none';
    document.querySelector("#art").style.display = 'none';
    document.querySelector("#hobbies").style.display = 'none';
    document.querySelector("#pictures").style.display = 'none';
}

function play_sound(audio) {
    audio.currentTime = 0;
    audio.play();

}

function button_click(x) {
    play_sound(nav1);
    x;
}

function main_button() {
    if (document.querySelector("#main").style.display == 'none') {
    play_sound(nav3);
    return_to_main();
    }
}

//define the bgm track list array

bgm_track_list = ["camera.mp3", "main.mp3", "theme.mp3"];

function random_select_bgm() {
    // insert random select function here
    let num_of_tracks = bgm_track_list.length;
    let selected;
    let adjusted_selected;
    let selected_track;
    selected = Math.random() * num_of_tracks;
    adjusted_selected = Math.floor(selected);
    selected_track = bgm_track_list[adjusted_selected];

    
    return selected_track
    
    
    alert("NOW PLAYING " + selected_track + "!!!");
    set_bgm("./bgm/" + selected_track);
    bgm.play()
        // call the array and input the selected index and assign the value to selected track
    // play the music from the selected track
    
}

// eliminate the loading screen
// implement a real loading screen

function set_bgm(music) {
    bgm.src = "./bgm/" + music;
}

function play_bgm() {
    bgm.play();
}

// add socials such as github and linkedin
//add a gallery section to your code or something




// volume rocker function

var e = document.querySelector('.volume-slider-con');
var eInner = document.querySelector('.volume-slider');
var audio = document.querySelector('#bgm');
var drag = false;
e.addEventListener('mousedown',function(ev){
   drag = true;
   updateBar(ev.clientX);
});
document.addEventListener('mousemove',function(ev){
   if(drag){
      updateBar(ev.clientX);
   }
});
document.addEventListener('mouseup',function(ev){
 drag = false;
});
var updateBar = function (x, vol) {
   var volume = e;
        var percentage;
        //if only volume have specificed
        //then direct update volume
        if (vol) {
            percentage = vol * 100;
        } else {
            var position = x - volume.offsetLeft;
            percentage = 100 * position / volume.clientWidth;
        }

        if (percentage > 100) {
            percentage = 100;
        }
        if (percentage < 0) {
            percentage = 0;
        }

        //update volume bar and video volume
        eInner.style.width = percentage +'%';

        if (play_state == 1) {
        audio.volume = percentage / 100;
    } else {
        initial_volume = percentage / 100;
    }
};

eInner.style.width = 30 + '%';