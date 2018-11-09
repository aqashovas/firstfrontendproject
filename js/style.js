$(document).ready(function () {


    $('.drslide').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        items: 1,
        dots: true,



    });
    $('.drslide1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsiveClass: true,
        items: 1,
        dots: false



    });
    // $('.collapse').collapse();

    // $(".card-header").click(function () {
    //     $(this).css("background-color","#f2963f");

    //     if ($(this).next().hasClass("collapse")) {
    //         console.log('acilmalidi')
    //         $(this).next().removeClass("collapse");
    //         $(this).next().addClass("collapse-show");
    //     }
    //     else {
    //         $(this).next().removeClass("collapse-show");
    //         $(this).next().addClass("collapse");


    //     }


    // });;
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {

            this.classList.toggle("active2");

            var panel = this.nextElementSibling;

        });
    }
    $(".accordion").click(function () {

        if (!$(this).hasClass("active2")) {
            $(this).find("span").text("+");
            $(".acco").find(".active2").removeClass("active2")
            $(".acco").find(".activePanel").removeClass("activePanel")
            $(".acco").find("span").text("+");

        } else {

            $(".acco").find("span").text("+"); $(this).find("span").text("-")
            $(".acco").find(".active2").removeClass("active2")
            $(".acco").find(".activePanel").removeClass("activePanel")
            $(this).addClass("active2")
            $(this).next().addClass("activePanel")


        }





        //    $(this).css("border-color","white");
        //     $(this).css("background-color","#f2963f");
        //     $(this).css("color","white");

    })
    $(".accordion").focus(function () {
        $(this).css("outline", "none");
    })

    // $("#carouselExampleControls").on('slide.bs.carousel', function () {
    //   console.log("salam")
    //   })
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top").style.display = "block";
    } else {
        document.getElementById("top").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
});

// if($(".accordion").hasClass("active2")){
//     $(".acco").find("span").text("-");
// }
// else{
//     $(".acco").find("span").text("+");

// }
// $(".carousel").swipe({

//     swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

//         if (direction == 'left') $(this).carousel('next');
//         if (direction == 'right') $(this).carousel('prev');

//     },
//     allowPageScroll: "vertical"

// });

$(".input").focus(function () {
    $(this).css("outline", "none");
   
    
})
$(".halfinput").focus(function () {
    $(this).css("outline", "none");
  
   
    
})