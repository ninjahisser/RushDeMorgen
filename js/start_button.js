function link_button(){
    let button = document.getElementById("start_button");
    button.onclick = function(){
        micInterface.initiateAudio();
    };
}

link_button();