<?

$page = $_GET['page'] ?? 'about';
$route = './pages/';

$about_state = '';
$vendors_state = '';
$contacts_state = '';

switch ($page)
{
	case 'about':
		$route .= 'about.php';
		$about_state = 'active';
		break;

	case 'vendors':
		$route .= 'vendors.php';
		$vendors_state = 'active';
		break;

	case 'contacts':
		$route .= 'contacts.php';
		$contacts_state = 'active';
		break;
	
	default:
		$route .= 'about.php';
		$about_state = 'active';
		break;
}

?>
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, , maximum-scale=3.0, minimum-scale=0.8">

    <title>CV timeline</title>
    <meta name="description" content="CV timeline">
    <meta name="author" content="wise.init@ya.ru">
    <meta name="generator" content="Hugo SSG">

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <link rel="apple-touch-icon" type="image/png" href="https://cpwebassets.codepen.io/assets/favicon/apple-touch-icon-5ae1a0698dcc2402e9712f7d01ed509a57814f994c660df9f7a952f3060705ee.png">
    <link rel="shortcut icon" type="image/x-icon" href="https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico">
    <link rel="mask-icon" type="image/x-icon" href="https://cpwebassets.codepen.io/assets/favicon/logo-pin-b4b4269c16397ad2f0f7a01bcdf513a1994f4c94b8af2f191c09eb0d601762b1.svg" color="#111">
	
	<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"> -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css" integrity="sha512-dPXYcDub/aeb08c63jRq/k6GaKccl256JQy/AnOq7CAnEZ9FzSL9wSbcZkMp4R26vBsMLFYH4kQ67/bbV8XaCQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="css/style.css" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

  </head>
  <body id='app' class="position-relative" data-spy="scroll" data-target="#nav-list" data-offset="0">

  <div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div>

  <div class="container-fluid">
	<div class="row">
		<div class="col-md-2 d-none d-md-block">
			<!-- <div id="nav-list" class="list-group">
				<a class="list-group-item list-group-item-action opacity-75" href="#year_2024">2024</a>
				<a class="list-group-item list-group-item-action opacity-75" href="#year_2023">2023</a>
				<a class="list-group-item list-group-item-action opacity-75" href="#year_2022">2022</a>
				<a class="list-group-item list-group-item-action opacity-75" href="#year_2021">2021</a>
				<a class="list-group-item list-group-item-action opacity-75" href="#year_2020">2020</a>
				<a class="list-group-item list-group-item-action opacity-75" href="#year_2019">2019</a>
				<a class="list-group-item list-group-item-action opacity-75" href="#year_2018">2018</a>
				<a class="list-group-item list-group-item-action opacity-75" href="#year_2017">2017</a>
				<a class="list-group-item list-group-item-action opacity-75" href="#year_2016">2016</a>
				<a class="list-group-item list-group-item-action opacity-75" href="#year_2015">2015</a>
				<a class="list-group-item list-group-item-action opacity-75" href="#year_2014">2014</a>
			</div> -->
		</div>
		<div class="col-md-10">
			<div class="page-header">
				<hr class="opacity-0" />
				<div class="row">
					<div class="col-md-7 ps-4">
						<h3 class="d-inline-block page-title"><strong>Васин Юрий</strong>&nbsp;<span class="text-muted opacity-75">Александрович</span></h3>
					</div>
					<div class="col-md-5">
						<div class="text-start">Управление техническими проектами и продуктами<br/><span class="text-muted opacity-50">ROLE: </span>Technology & Product Officer (Owner)</div>
					</div>
				</div>
				<hr class="border-top divider" />

				<ul class="nav nav-pills" role="tablist">
				  <li class="nav-item" role="presentation"><a class="nav-link <?=$about_state?>" href="index.php?page=about">Общая информация</a></li>
				  <div class="vr"></div>
				  <li class="nav-item" role="presentation"><a class="nav-link <?=$vendors_state?>" href="index.php?page=vendors">Подрядчики/вендоры</a></li>
				  <div class="vr"></div>
				  <li class="nav-item" role="presentation"><a class="nav-link <?=$contacts_state?>" href="index.php?page=contacts">Контакты</a></li>
				  <!-- <div class="vr"></div>
				  <li class="nav-item" role="presentation"><a class="nav-link" href="#prods">Продукты/проекты</a></li>
				  <div class="vr"></div>
				  <li class="nav-item" role="presentation"><a class="nav-link" href="#customers">Заказчики</a></li>
				  <div class="vr"></div>
				  <li class="nav-item" role="presentation"><a class="nav-link" href="#arch">Технологический стек/экосистема</a></li> -->
				</ul>

			</div>
		</div>
	</div>

	<hr class="opacity-0" />


<?php

require_once($route);


?>


	<hr class="opacity-0" />
	<hr class="opacity-0" />
	<hr class="opacity-0" />



</div>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
    <!-- <script src="js/popper.min.js"></script> -->
    <!-- https://github.com/nk-o/jarallax -->

        <!-- https://gsap.com/scroll/ -->
	    <!-- https://jsfiddle.net/k5afwfva/ -->
		<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    <script src="js/scripts.js"></script>

  </body>
</html>