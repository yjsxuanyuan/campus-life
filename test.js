$(document).ready(()=>{
  var arrow_index = 0;
  var content_width = parseInt($(".campus-service-icons").width());
  $(window).resize(()=>{
    content_width = parseInt($(".campus-service-icons").width());
      $(".icons-part").css('transform','translateX(' + -arrow_index*content_width + 'px)');
  });
  $(".arrow").click(function(){
    if ($(this).hasClass("go-left") && arrow_index) { arrow_index--; }
    if ($(this).hasClass("go-right") && arrow_index<1) { console.log(1);arrow_index++; }
    $(".icons-part").css('transform','translateX(' + -arrow_index*content_width + 'px)');
    $(".dot").css("opacity","0.5");
    $("#dot"+arrow_index).css("opacity","1");
  });
  $(".dot").click(function(){
    var arrow_index = parseInt(this.id.slice(3));
    $(".icons-part").css('transform','translateX(' + -arrow_index*content_width + 'px)');
    $(".dot").css("opacity","0.5");
    $(this).css("opacity","1");
  })
});