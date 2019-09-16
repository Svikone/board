<?php
    session_start();
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
    $link = mysql_connect("localhost", "root", "") or die (mysql_error());
    mysql_select_db("board") or die(mysql_error());
    $action = $_POST['action'];
    if(isset($_POST['destroy']))    session_destroy();
    
    switch ($action) {
        case 'reg':
            $regName = $_POST['regName'];
            $regPass = $_POST['regPass'];
            $regRepeatPass = $_POST['regRepeatPass'];
            
            $result = mysql_query("SELECT id FROM user WHERE username='$regName'");
            $myrow = mysql_fetch_array($result);
            if(!empty($myrow['id'])){
                http_response_code(400);
            }
            else{
                mysql_query("INSERT INTO user(username,password) VALUES('$regName','$regRepeatPass')");
                
        }
        echo json_encode($myrow['id']);
        break;

        case 'login':
            $name = $_POST['name'];
            $password = $_POST['password'];
            $result = mysql_query("SELECT * FROM user WHERE username='$name' AND password='$password' ");
            $rows = [];
            
            while ($row = mysql_fetch_assoc($result)) {
                                                            //сортирует 
                $rows[] = $row;
            }
            $_SESSION['user'] = $rows;
            echo json_encode($rows);
           
            
        break;

        case 'board':
            $text = $_POST['text'];
            $top = 133;
            $left = 0;
            mysql_query("INSERT INTO cards(text,top_X,left_Y) VALUES('$text','$top','$left')");
            $json_obj = '{status:200}';
            echo json_encode($json_obj);
           
            
        break;
    }
    
?>