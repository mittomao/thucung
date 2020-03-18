$(function(){
      
  

  // Jquery
    $(".navbar_header ul li:nth-child(1) a").on("click", function () {
             event.preventDefault(); 
            $('html ,body').animate({scrollTop : 0},1000);
    });
    // 
    $(".navbar_header ul li:nth-child(2) a").on("click", function () {
      event.preventDefault(); 
     $('html ,body').animate({scrollTop : $(".main-product").offset().top},1000);
});
// 
$(".navbar_header ul li:nth-child(3) a").on("click", function () {
  event.preventDefault(); 
 $('html ,body').animate({scrollTop : $(".layer2").offset().top},1000);
});
// 
$(".navbar_header ul li:nth-child(4) a").on("click", function () {
  event.preventDefault(); 
 $('html ,body').animate({scrollTop : $(".layer3").offset().top},1000);
});
// 
$(".navbar_header ul li:nth-child(5) a").on("click", function () {
  event.preventDefault(); 
 $('html ,body').animate({scrollTop : $(".layer4").offset().top},1000);
});
// 
$(".icon-up").on("click", function () {
  event.preventDefault(); 
 $('html ,body').animate({scrollTop : 0},1000);
});
});


