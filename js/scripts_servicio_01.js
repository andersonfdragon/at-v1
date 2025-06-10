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

//FORMULARIO DE CONTACTO - ENVIAR DESDE FORMULARIO PAGINA INICIO XS
$("#contactForm_xs_01").validator().on("submit", function (event) {
    var valido_form_xs = 0;
    var valido_select_xs_01 = 0;
    var valido_select_xs_02 = 0;
    var valido_check_xs = 0;

    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG_xs_01(false, "Complete los campos que faltan.");
    } else {
        event.preventDefault();
        valido_form_xs = 1;
    }

    //Opcion de numero de computadores
    if ($('#numero_computadores_xs_01').val() === 'Número de Computadores'){
        submitMSG_computadores_xs_01(false, "Seleccione una opción.");
    }
    else {
        event.preventDefault();
        submitMSG_computadores_xs_01(true, "");
        valido_select_xs_01 = 1;
    }

    //Opcion de numero de computadores
    if ($('#numero_servidores_xs_01').val() === 'Número de Servidores'){
        submitMSG_servidores_xs_01(false, "Seleccione una opción.");
    }
    else {
        event.preventDefault();
        submitMSG_servidores_xs_01(true, "");
        valido_select_xs_02 = 1;
    }

    if ($("input[type='checkbox']").is(':checked') === false){
        submitMSG_condiciones_xs_01(false, "Aún no acepta terminos y condiciones.");
    }

    else {
        event.preventDefault();
        submitMSG_condiciones_xs_01(true, "");
        valido_check_xs = 1;
    }

    if ((valido_form_xs)&&(valido_select_xs_01)&&(valido_select_xs_02)&&(valido_check_xs) === 1) {
        submitForm_xs_01();
        submitMSG_xs_01(true, "");
    }

    else {
        event.preventDefault();
        submitMSG_xs_01(false, "Complete los campos que faltan");
    }
});

function submitForm_xs_01(){
    // Initiate Variables With Form Content
    var first_name_xs_01 = $("#first_name_xs_01").val();
    var email_xs_01 = $("#email_xs_01").val();
    var empresa_xs_01 = $("#empresa_xs_01").val();
    var telephone_xs_01 = $("#telephone_xs_01").val();
    var computadores_xs_01 = ($('select[id=numero_computadores_xs_01]').val());
    var servidores_xs_01 = ($('select[id=numero_servidores_xs_01]').val());

    $.ajax({
        type: "POST",
        url: "php/process_xs_02.php",
        data: "first_name_xs_01=" + first_name_xs_01 + "&email_xs_01=" + email_xs_01 + "&empresa_xs_01=" + empresa_xs_01 + "&telephone_xs_01=" + telephone_xs_01 + "&computadores_xs_01=" + computadores_xs_01 + "&servidores_xs_01=" + servidores_xs_01,
        success : function(text){
            if (text == "success"){
                formSuccess_xs_01();
                window.location.href = "agradecimiento_infraestructura.html";
            } else {
                submitMSG_xs_01(false,text);
            }
        }
    });
}

function formSuccess_xs_01(){
    $("#contactForm_xs_01")[0].reset();
    submitMSG_xs_01(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitMSG_xs_01(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_xs_01").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones_xs_01(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_condiciones_xs_01").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_computadores_xs_01(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_computadores_xs_01").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_servidores_xs_01(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_servidores_xs_01").removeClass().addClass(msgClasses).text(msg);
}





//FORMULARIO DE CONTACTO - ENVIAR DESDE FORMULARIO PAGINA INICIO PC
$("#contactForm_web_01").validator().on("submit", function (event) {
    var valido_form = 0;
    var valido_select_01 = 0;
    var valido_select_02 = 0;
    var valido_check = 0;

    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        submitMSG_web_01(false, "Complete los campos que faltan.");
    } else {
        event.preventDefault();
        valido_form = 1;
    }

    //Opcion de numero de computadores
    if ($('#numero_computadores_web_01').val() === 'Número de Computadores'){
        submitMSG_computadores_web_01(false, "Seleccione una opción.");
    }
    else {
        event.preventDefault();
        submitMSG_computadores_web_01(true, "");
        valido_select_01 = 1;
    }

    //Opcion de numero de computadores
    if ($('#numero_servidores_web_01').val() === 'Número de Servidores'){
        submitMSG_servidores_web_01(false, "Seleccione una opción.");
    }
    else {
        event.preventDefault();
        submitMSG_servidores_web_01(true, "");
        valido_select_02 = 1;
    }

    if ($("input[type='checkbox']").is(':checked') === false){
        submitMSG_condiciones_web_01(false, "Aún no acepta terminos y condiciones.");
    }

    else {
        event.preventDefault();
        submitMSG_condiciones_web_01(true, "");
        valido_check = 1;
    }

    if ((valido_form)&&(valido_select_01)&&(valido_select_02)&&(valido_check) === 1) {
        submitForm_web_01();
        submitMSG_web_01(true, "");
    }

    else {
        event.preventDefault();
        submitMSG_web_01(false, "Complete los campos que faltan");
    }
});

function submitForm_web_01(){
    // Initiate Variables With Form Content
    var first_name_web_01 = $("#first_name_web_01").val();
    var email_web_01 = $("#email_web_01").val();
    var empresa_web_01 = $("#empresa_web_01").val();
    var telephone_web_01 = $("#telephone_web_01").val();
    var computadores_web_01 = ($('select[id=numero_computadores_web_01]').val());
    var servidores_web_01 = ($('select[id=numero_servidores_web_01]').val());

    $.ajax({
        type: "POST",
        url: "php/process_web_02.php",
        data: "first_name_web_01=" + first_name_web_01 + "&email_web_01=" + email_web_01 + "&empresa_web_01=" + empresa_web_01 + "&telephone_web_01=" + telephone_web_01 + "&computadores_web_01=" + computadores_web_01 + "&servidores_web_01=" + servidores_web_01,
        success : function(text){
            if (text == "success"){
                formSuccess_web_01();
                window.location.href = "agradecimiento_infraestructura.html";
            } else {
                submitMSG_web_01(false,text);
            }
        }
    });
}

function formSuccess_web_01(){
    $("#contactForm_web_01")[0].reset();
    submitMSG_web_01(true, "Gracias por dejar sus datos, pronto estaremos en contacto.")
}

function submitMSG_web_01(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_web_01").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_condiciones_web_01(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_condiciones_web_01").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_computadores_web_01(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_computadores_web_01").removeClass().addClass(msgClasses).text(msg);
}

function submitMSG_servidores_web_01(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center text-warning";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit_servidores_web_01").removeClass().addClass(msgClasses).text(msg);
}
