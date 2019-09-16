<?php
    session_start();
    
    if(isset($_SESSION['user'])){
        header('Location: / ');
        // session_destroy();
        
    }
    echo $_SESSION['user'];
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
<body>
    <div class="reg">
        <form action="">
            <div class="logo">Мои заметки</div>
            <div class="intel">
                <div class="signUp sign">Регистрация 
                </div>
                <div class="signIn sign">Войти</div>
            </div>
            
            <div class="signUpMenu">
                <input type="text" class="name inp" placeholder="Username">
                <input type="password" class="password inp" placeholder="Password">
                <input type="button" class="UpSend btn" value="Отправить">
            </div>
            <div class="signInMenu">
                <input type="text" class="regName inp" placeholder="Username">
                <input type="password" class="regPass inp" placeholder="Password">
                <input type="password" class="regRepeatPass inp" placeholder="Repeat Password">
                <input type="button" class="InSend btn" value="Отправить">
            </div>
            
        </form>
    </div>

</body>
</html>