<?php

$email_address = $_POST['email_address'];
$message = $_POST['message'];


function filter_email_header($form_field) {  
return preg_replace('/[nr|!/<>^$%*&]+/','',$form_field);
}

$email_address  = filter_email_header($email_address);

$email_subject = "New Form submission";

$email_to = "yaredyyehualashet@gmail.com";

$headers = "From: $email_address \r\n";


$sent = mail($email_to, $email_subject, $message, $headers);


if ($sent){
       echo "success";
    }else{
        echo "invalid";
    } 
?>