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


if ($sent) {

?><html>
<head>
<title>Your email was sent!</title>
</head>
<body>
<h1>All Sent!</h1>
<p>Thank you for your message.</p>
</body>
</html>
<?php

} else {

?><html>
<head>
<title>WOAH Didnt Work!</title>
</head>
<body>
<h1>Something went wrong on the request!</h1>
<p>We could not send your feedback. Please try again later.</p>
</body>
</html>
<?php
}
?>