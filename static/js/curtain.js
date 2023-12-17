$(document).ready(function () {
    setTimeout(function () {
        $(".curtains").addClass("curtain-open");

        setTimeout(function () {
            // $(".theatre").css("display", "none");
            // $(".theatre").css("z-index", "-1");
            $(".music-anim").css("display", "inherit");
            $(".snowflakes").css("display", "inherit");
            $("#current-theme-song").get(0).load();
        }, 3000);
    }, 1000);
})
