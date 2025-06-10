//MOVIMIENTO SUAVIZADO ANCLAS
$(function(){

    $('a[href*=#]').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

            if ($target.length) {

                var targetOffset = $target.offset().top;

                $('html,body').animate({scrollTop: targetOffset}, 700);

                return false;

            }

        }

    });

});

// Colapsar menu - despues de click en menu hamburguesa
$(document).ready(function(){
    $(".cerrarMenu").click(function () {
        $('.navbar-toggle').click();
    });
});

//SCROLL SPY - SEGUIMIENTO DE NODOS
$('body').scrollspy({ target: '#nav-lateral'})

//DROPDOWN MENU XS
$('.dropdown-toggle').dropdown()