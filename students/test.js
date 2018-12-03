$(document).ready(()=>{
    let totalWidth = parseInt($(".students-news").css("width"));
    let imgWidth = parseInt($(".students-one-new img").css("width"));
    $(".news-info").css("width", totalWidth - imgWidth + 20 + "px");
    setTimeout(()=>{ $(".news-info").css("width", totalWidth - imgWidth + 20 + "px");}, 200);
    $(window).resize(
        ()=>{let totalWidth = parseInt($(".students-news").css("width"));
    let imgWidth = parseInt($(".students-one-new img").css("width"));$(".news-info").css("width", totalWidth - imgWidth + 20 + "px");}
    );
});