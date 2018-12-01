$(document).ready(()=>{
    let totalWidth = parseInt($(".students-news").css("width"));
    let imgWidth = parseInt($(".students-one-new img").css("width"));
    $(".news-info").css("width", totalWidth - imgWidth + 20 + "px");
    $(window).resize(
        ()=>{let totalWidth = parseInt($(".students-news").css("width"));
    let imgWidth = parseInt($(".students-one-new img").css("width"));$(".news-info").css("width", totalWidth - imgWidth + 20 + "px");}
    );
});