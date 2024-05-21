<?php
header('Content-Type: application/json');
error_reporting(0);

// Включаем буферизацию вывода
ob_start();

// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$description = $_POST['description'];

// Формирование самого письма
$title = "Обращение с сайта";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>Почта:</b> $email<br><br>
<b>Сообщение:</b><br>$description
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 0;

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'nikiwhatch@yandex.ru'; // Логин на почте
    $mail->Password   = 'ioyzxmkqasixdmtm'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('nikiwhatch@yandex.ru', 'Заявка'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('nikiwhatch@yandex.ru');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверяем
    if ($mail->send()) {
        $result = "success";
        $status = "Сообщение отправлено";
    } else {
        $result = "error";
        $status = "Сообщение не было отправлено. Ошибка: {$mail->ErrorInfo}";
    }
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
// Очистка буфера и отправка результата
$output = ob_get_clean();
if ($output) {
    error_log("Unexpected output: " . $output);
}
echo json_encode(["result" => $result, "status" => $status]);
?>

