<?php

$errorMSG = "";

// FIRST_NAME
if (empty($_POST["first_name_web_01"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $first_name_web_01 = $_POST["first_name_web_01"];

}

// EMAIL
if (empty($_POST["email_web_01"])) {
    $errorMSG .= utf8_decode("Complete este campo");
} else {
    $email_web_01 = $_POST["email_web_01"];

}

// EMPRESA
if (empty($_POST["empresa_web_01"])) {
    $errorMSG .= utf8_decode("Complete este campo");
} else {
    $empresa_web_01 = $_POST["empresa_web_01"];

}

// TELEFONO
if (empty($_POST["telephone_web_01"])) {
    $errorMSG .= utf8_decode("Complete este campo");
} else {
    $telephone_web_01 = $_POST["telephone_web_01"];

}


//CONTACTOS Y ASUNTO
$Contacts = array('alianzatecdigital@gmail.com');
$Subject = "Nuevo lead de sitio web: Formulario Telecomunicaciones Web";


// CUERPO DE TEXTO MENSAJE
$Body = "";

$Body .= utf8_decode("Nombre y apellido: ");
$Body .= utf8_decode($first_name_web_01);
$Body .= "\n";

$Body .= utf8_decode("Correo electrónico: ");
$Body .= utf8_decode($email_web_01);
$Body .= "\n";

$Body .= utf8_decode("Empresa: ");
$Body .= utf8_decode($empresa_web_01);
$Body .= "\n";

$Body .= utf8_decode("Número de Celular: ");
$Body .= utf8_decode($telephone_web_01);
$Body .= "\n";


// send email
foreach ($Contacts as $Contact){
    $to =  $Contact;
    $success = mail($to, $Subject, $Body, "From:".$email_web_01);
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
