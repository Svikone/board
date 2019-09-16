<?php
session_start();
$link = mysql_connect("localhost", "root", "") or die (mysql_error());
mysql_select_db("board") or die(mysql_error());
if ($_SESSION['user'] == null){
    header('Location: /reg.php ');
}
print_r( $_SESSION['user'][0]['id']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link rel="stylesheet" href="/stylesheets/main.css">
    <script src="https://code.jquery.com/ui/1.11.3/jquery-ui.min.js"></script>
    <title>Document</title>
</head>

<?
echo"
<body data-id=".$_SESSION['user'][0]['id'].">
";?>
    
    <div class='form' >
        <div class='container'>
            <div class='result'></div>
        </div>
        <div class='sendContainer'>
            Введите текст
            <input type='text' class='text' >
            <div class='send'>Отправить</div>
        </div>
        <div class=''></div>
    
    </div>
    
    <div class="board">
        <div class="notes">
            <div class="name">Vlad</div>
            <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, minus.       </div>
            <div class="date">12/12/19</div>
        </div>
    </div>
</body>
</html>