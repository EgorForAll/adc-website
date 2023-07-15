<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
$mail = new PHPMailer(true);
$mail->Charset = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('adc@mail.ru', 'АДС вебсайт');
$mail->addAddress('eia.web.ss@gmail.com');
$mail->Subject = 'Заявка на техобслуживание';

$body = '<h1>К вам поступила следующая завяка на техобслуживание:</h1>';

if(trim(!empty($_POST['name']))) {
  $body.='<p><strong>Имя</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))) {
  $body.='<p><strong>Email</strong> '.$_POST['email'].'</p>';
}

$mail->Body = body;

if(!$mail->send()) {
  $message = 'Ошибка';
} else {
  $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>
