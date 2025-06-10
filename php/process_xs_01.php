<?php

$errorMSG = "";

// FIRST_NAME
if (empty($_POST["first_name_xs_01"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $first_name_xs_01 = $_POST["first_name_xs_01"];

}

// EMAIL
if (empty($_POST["email_xs_01"])) {
    $errorMSG .= utf8_decode("Complete este campo");
} else {
    $email_xs_01 = $_POST["email_xs_01"];

}

// EMPRESA
if (empty($_POST["empresa_xs_01"])) {
    $errorMSG .= utf8_decode("Complete este campo");
} else {
    $empresa_xs_01 = $_POST["empresa_xs_01"];

}

// TELEPHONE
if (empty($_POST["telephone_xs_01"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $telephone_xs_01 = $_POST["telephone_xs_01"];

}


//CONTACTOS Y ASUNTO
$Contacts = array('alianzatecdigital@gmail.com');
$Subject = "Nuevo lead de sitio web: Formulario Index Movil";


// CUERPO DE TEXTO MENSAJE
$Body = "";

$Body .= utf8_decode("Nombre y apellido: ");
$Body .= utf8_decode($first_name_xs_01);
$Body .= "\n";

$Body .= utf8_decode("Correo electrónico: ");
$Body .= utf8_decode($email_xs_01);
$Body .= "\n";

$Body .= utf8_decode("Empresa: ");
$Body .= utf8_decode($empresa_xs_01);
$Body .= "\n";

$Body .= utf8_decode("Celular: ");
$Body .= utf8_decode($telephone_xs_01);
$Body .= "\n";

// send email
foreach ($Contacts as $Contact){
    $to =  $Contact;
    $success = mail($to, $Subject, $Body, "From:".$email_xs_01);
}

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}
else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    }
    else {
        echo $errorMSG;
    }
}

?>
