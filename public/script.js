

// name variables

let current_track_name = '';

// state variables

let landing_page_exit = 0;
let play_state = 1;

// constants

const init = document.querySelector('#init_div');
const load_screen = document.querySelector(".load__screen");
const bgm = document.querySelector("#bgm");
const nav1 = document.querySelector("#nav");
const hover = document.querySelector("#hover");
const current_track = document.querySelector("#current_track");
const rickroll = document.querySelector(".rickroll");
const rickrollVideo = document.querySelector(".rickrollVideo");
const postRickroll = document.querySelector("#postRickroll");
const hiddenButton = document.querySelector(".hiddenButton");

document.querySelector(".banner__close").addEventListener('click', function(){
    start_loading();
    landing_page_exit = 1;
});



function start_loading() {
    document.querySelector("#nav").play();
    document.querySelector(".banner__close").closest(".banner").style.display = 'none';
    document.querySelector(".load__screen").style.display = 'block';
    document.querySelector("body").style.animation = "fadeIn 2s";
    document.querySelector("body").style.backgroundColor = "black";
    setTimeout(function(){
        start_menu();
    }, Math.random()*3000);
}

function start_menu() {
    document.querySelector(".load__screen").style.display = 'none';
    document.querySelector("body").style.backgroundSize = "cover";
    document.querySelector("body").style.backgroundImage = "url('assets/bg.webp')";
    document.querySelector(".content").style.display = 'block';
    bgm.play();
}

let main_counter = 0;

function set_main_counter() {
main_counter++;
if (main_counter == 5) {
    document.querySelector('#main_header').querySelector('h1').innerHTML = "UWU";
    document.querySelector('#main_header').querySelector('h1').style.fontSize = '90px';
}
if (main_counter == 10) {
    document.querySelector('#main_header').querySelector('h1').innerHTML = "OWO";
    document.querySelector('#main_header').querySelector('h1').style.fontSize = '90px';
}

if (main_counter == 15) {
    document.querySelector('#main_header').querySelector('h1').innerHTML = "O//W//O";
    document.querySelector('#main_header').querySelector('h1').style.fontSize = '50px';
}

if (main_counter == 25) {
    cocaine()
}
}


// initializer
    window.addEventListener('load', function() {
    console.log("All assets have loaded");
    init.style.display = "none";
    set_bgm(random_select_bgm()); // sets bgm source to random in list
    bgm.style.display = 'none';
    bgm.volume = 0.3;
    document.querySelector("#nav").style.display = 'none';
    document.querySelector("#nav").volume = 0.3;
    document.querySelector("#nav2").style.display = 'none';
    document.querySelector("#nav2").volume = 0.2;
    document.querySelector("#nav3").style.display = 'none';
    document.querySelector("#nav3").volume = 0.3;
    document.querySelector("#hover").style.display = 'none';
    document.querySelector("#hover").volume = 0.5;
    document.querySelector("body").style.backgroundColor = "#e292e8";
    document.querySelector(".content").style.display = 'none';
    document.querySelector(".load__screen").style.display = 'none';
    document.querySelector("#about").style.display = 'none';
    document.querySelector("#art").style.display = 'none';
    document.querySelector("#hobbies").style.display = 'none';
    document.querySelector("#pictures").style.display = 'none';
    document.querySelector("#contact").style.display = 'none';
    document.querySelector("#randomR34Image").style.display = 'none';
    rickroll.style.display = 'none';
    postRickroll.style.display = 'none';
    hiddenButton.style.display = 'none';

});

window.addEventListener('keypress', function(event){
    if (event.key === "Enter") {
        if (landing_page_exit == 0) {
            start_loading();
            landing_page_exit = 1;
        }
    }
})


let initial_volume = "0.5";

function toggle_bgm(x) {

    if(play_state == 1) {
    initial_volume = bgm.volume;
    x.volume = "0";
    document.querySelector("#main_mute_button").src = "assets/muted.svg";
    play_state = 0;
    } 
    else {
    x.volume = initial_volume; // set the volume to the initial state
    document.querySelector("#main_mute_button").src = "assets/sound.svg";
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

function open_contact() {
    reset_page();
    set_bgm('contact.mp3');
    bgm.volume = 0.05;
    play_bgm();
    document.querySelector("#contact").style.display = 'block';
    document.querySelector("body").style.backgroundImage = "url('assets/city.jpg')";
    document.querySelector("body").style.backgroundSize = "cover";
    document.querySelector("body").style.backgroundColor = "#ff0000";
    document.querySelector('body').style.backgroundBlendMode = "hard-light";
    document.querySelector('#home_button').style.display = "none";
    document.querySelector('#randomize_div').style.display = "none";
    document.querySelector('.volume-slider').style.backgroundColor = "#ffffff";
    document.querySelector('#current_track_div').style.display = "none";
    document.querySelector('#volume_control').style.display = "none";

}

function close_contact() {
    document.querySelector("body").style.backgroundImage = "url('assets/bg.webp')";
    document.querySelector('body').style.backgroundBlendMode = "";
    document.querySelector('#home_button').style.display = "initial";
    document.querySelector('#randomize_div').style.display = "block";
    document.querySelector('.volume-slider').style.backgroundColor = "#ffb5fd";
    document.querySelector('#current_track_div').style.display = "block";
    document.querySelector('#volume_control').style.display = "block";
    reset_page()
    return_to_main()
    set_bgm(random_select_bgm());
    play_bgm();
}

function return_to_main() {
    reset_page()
    document.querySelector("#main").style.display = 'block';
}

function reset_page() {
    document.querySelector("#main").style.display = 'none';
    document.querySelector("#about").style.display = 'none';
    document.querySelector("#art").style.display = 'none';
    document.querySelector("#hobbies").style.display = 'none';
    document.querySelector("#pictures").style.display = 'none';
    document.querySelector("#contact").style.display = 'none';
    document.querySelector("#randomR34Image").style.display = 'none';
    rickroll.style.display = 'none';
    rickrollVideo.pause();
    rickrollVideo.currentTime = 0;
    bgm.play();
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


//1. add track to the bgm folder
//2. add track to bgm list
bgm_track_list = ["camera.mp3", "main.mp3", "theme.mp3", "nintendovideo.mp3", "dnbshop.mp3", "eshopbossa.mp3", "july2014.mp3"];

function random_select_bgm() {
    // insert random select function here
    let num_of_tracks = bgm_track_list.length;
    let selected;
    let adjusted_selected;
    let selected_track;
    
    do {
    selected = Math.random() * num_of_tracks;
    adjusted_selected = Math.floor(selected);
    selected_track = bgm_track_list[adjusted_selected];
    } while (selected_track==current_track_name)
    return selected_track;
        // call the array and input the selected index and assign the value to selected track
    // play the music from the selected track
    
}

// eliminate the loading screen
// implement a real loading screen

function set_bgm(music) {
    bgm.src = "assets/bgm/" + music;
    var result = /[^/]*$/.exec(bgm.src)[0];
    current_track.innerHTML = result;
    current_track_name = result;

}

function play_bgm() {
    bgm.play();
}

// add socials such as github and linkedin
//add a gallery section to your code or something




// volume rocker function

var e = document.querySelector('.volume-slider-con');
var eInner = document.querySelector('.volume-slider');
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
        bgm.volume = percentage / 100;
    } else {
        initial_volume = percentage / 100;
    }
};

eInner.style.width = 30 + '%';



function cocaine() {

    document.querySelector("body").style.backgroundImage = "url('assets/horny_eevee.jpg')";
    document.querySelector("body").style.backgroundSize = ""

    let array = document.querySelectorAll('button');
    for (i=0;i<array.length;i++) {
        array[i].innerHTML = "POOP";
        array[i].style.backgroundImage = "url('assets/horny_buttons.jpg')";
        array[i].style.backgroundPositionX = "center";
        array[i].style.backgroundSize = "cover";
        array[i].onclick = () => open('https://e621.net/posts/random');
    }

    array = document.querySelectorAll('h1');
    for (i=0; i<array.length; i++) {
        array[i].innerHTML = "horny mode activated";
        array[i].style.fontSize = "30px";
        array[i].onclick = () => open('https://e621.net/posts/random');
    }
    document.querySelector('#hover').src = 'assets/fart.mp3';
    (function(){
        document.documentElement.style.transitionDuration="60s"; document.documentElement.style.transitionTimingFunction="ease-in" ; document.documentElement.style.transform="rotate(1080deg)";
    }());
    set_bgm('dummy.mp3');
    play_bgm()

    

    // click button, opens tab, chinese rick rolls them.
}



function randomR34Image() {
        reset_page(); //resets page
        document.querySelector("#randomR34Image").style.display = 'block'; //displays randomR34Image
        rickroll.style.display = 'block';
        bgm.pause();
        rickrollVideo.play();
        hiddenButton.style.display = 'block';
}

function postRickrollOpen() {
    reset_page(); //resets page
        document.querySelector("#randomR34Image").style.display = 'block'; //displays randomR34Image
        document.querySelector("body").style.backgroundSize = ""
        document.querySelector("body").style.backgroundImage = "url('assets/horny_eevee.jpg')";
        rickroll.style.display = 'block';
        bgm.pause();
        rickrollVideo.play();
        hiddenButton.style.display = 'none';
        array = document.querySelectorAll('h1');
        for (i=0; i<array.length; i++) {
            array[i].innerHTML = "18+ nsfw warning. click me at your own risk";
            array[i].style.fontSize = "30px";
            array[i].onclick = () => open('https://e621.net/posts/random');
        }
        (function(){
            document.documentElement.style.transitionDuration="60s"; document.documentElement.style.transitionTimingFunction="ease-in" ; document.documentElement.style.transform="rotate(1080deg)";
        }());

}

function linkedinRickroll() {
    reset_page()
    rickroll.style.display = 'block';
    bgm.pause();
    rickrollVideo.play();
}

