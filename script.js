function timkiem() {
    var a = document.getElementById("search");
    a.classList.toggle("active");
}

function close_cart() {
    document.getElementById("cart").style.left = "-100%";
}

function open_cart() {
    document.getElementById("cart").style.left = "0%";
}

var timer = 4500;
var i = 0;
var max = $('#c > li').length;
$("#c > li").eq(i).addClass('active').css('left', '0');
$("#c > li").eq(i + 1).addClass('active').css('left', '20%');
$("#c > li").eq(i + 2).addClass('active').css('left', '40%');

setInterval(function() {
    $("#c > li").removeClass('active');
    $("#c > li").eq(i).css('transition-delay', '0.25s');
    $("#c > li").eq(i + 1).css('transition-delay', '0.5s');
    $("#c > li").eq(i + 2).css('transition-delay', '0.75s');

    if (i < max - 3) {
        i = i + 3;
    } else {
        i = 0;
    }
    $("#c > li").eq(i).css('left', '0').addClass('active').css('transition-delay', '1.25s');
    $("#c > li").eq(i + 1).css('left', '20%').addClass('active').css('transition-delay', '1.5s');
    $("#c > li").eq(i + 2).css('left', '40%').addClass('active').css('transition-delay', '1.75s');
}, timer);
// $(document).ready(function(){
//     $("#left").addClass("left-click");
//     $("#right").removeClass("right-click");
//     $('#sign-in').addClass("sign-in-click");
// });
// $("#right").click(function(){
//     $("#right").addClass("right-click");
//     $('#left').removeClass('left-click');
//     $("#left").css({"color": "rgb(109, 107, 107)"});
//     $("#right").css({"color":"black"});
//     $('#sign-up').addClass("sign-up-click");
//     $('#sign-in').removeClass("sign-in-click");           
// });
// $('#left').click(function(){
//     $('#left').addClass('left-click');
//     $('#right').removeClass('right-click');
//     $("#right").css({"color": "rgb(109, 107, 107)"});
//     $("#left").css({"color":"black"});
//     $('#sign-up').removeClass("sign-up-click");
//     $('#sign-in').addClass("sign-in-click");
// })
// $('#Sign-up-2').click(function(){
//     $('#sign-up').addClass("sign-up-click");
//     $('#sign-in').removeClass("sign-in-click");   
// })
// $('#Sign-in-2').click(function(){          
//     $('#sign-up').removeClass("sign-up-click");
//     $('#sign-in').addClass("sign-in-click");
// })