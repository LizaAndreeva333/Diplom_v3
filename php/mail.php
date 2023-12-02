<?php
	//получение данных с формы
	$name = $_POST['name'];
	$email  = $_POST['email'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];

	//обоработка полученных данных
	$name = htmlspecialchars($name); //преобразование символов в сущности (мнемоники)
	$email = htmlspecialchars($email);
	$phone = htmlspecialchars($phone);
	$message = htmlspecialchars($message);

	$name = urldecode($name); //декдирование URL
	$email = urldecode($email);
	$phone = urldecode($phone);
	$message = urldecode($message);

	$name = trim($name); //удаление пробелов с дрвух сторон
	$email = trim($email);
	$phone = trim($phone);
	$message = trim($message);

	//отправляем данные на почту
	if (mail("liza.andreeva.2012@list.ru",
		"Новое письмо с сайта \"Дипломная работа\"",
		"Имя клиента: ".$name."\n".
		"Эл.почта: ".$email."\n".
		"Телефон: ".$phone."\n".
		"Сообщение: ".$message,
		"From: no-reply@mydomain.ru \r\n")
	) {
		echo "<h2>Заявка отправлена</h2>";


	} else {
		echo("Ecnm проблема! Проверьте данные...");
	}
?>





