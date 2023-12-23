function openCurtain(){
    // setTimeout(function () {
    $(".curtain-scissor").css("visibility","hidden");
    $(".curtain-scissor").css("opacity","0");
    $(".curtains").addClass("curtain-open");

    setTimeout(function () {
        // $(".theatre").css("display", "none");
        // $(".theatre").css("z-index", "-1");
        $(".music-anim").css("display", "inherit");
        // $(".snowflakes").css("display", "inherit");
        // var snow = new Snowfall();
        startSnow();
        playAudio();
        $(".music-control").show();
        $(".whatsapp-float").show();
    }, 2000);
    // }, 1000);
}

function playAudio() {
    $(".music-control-play").hide();
    $(".music-control-pause").show();
    $("#current-theme-song").get(0).play();
    $(".music-control").attr("onclick", "pauseAudio();");
}

function pauseAudio() {
    $(".music-control-play").show();
    $(".music-control-pause").hide();
    $("#current-theme-song").get(0).pause();
    $(".music-control").attr("onclick", "playAudio();");
}
