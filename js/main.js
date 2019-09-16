$(document).ready(function(){
    const api_url = "http://localhost:9000"
///registration
    $(".InSend").click(function(){
        var regName = $(".regName").val();
        var regPass = $(".regPass").val();
        var regRepeatPass = $(".regRepeatPass").val();
        if(regPass.length > 4){
            if(regPass == regRepeatPass){
                $.ajax({
                    url: `${api_url}/user/signup`,
                    type:"POST",
                    data:{regName,regPass},
                    dataType:"json",
                }).done(function(res) {
                    // location.reload();
                }).fail(function(err) {
                    alert("Такое имя уже зарезервировано");
                });
            }else {
                alert("неверный пароль");
            }
        }else {
            alert("Пароль должен быть не короче 5 символов");
        }  
    });

    ///login
    $(".UpSend").click(function(){
        var name = $(".name").val();
        var password = $(".password").val();
    
        $.ajax({
            url: `${api_url}/user/signin`,
            type:"POST",
            data:{name,password},
            dataType:"json",
        }).done(function(res) {
            localStorage.setItem('x-access-token',res.token);
            window.location.href = "/";
        }).fail(function(err) {
            alert("none");
        });
        
    });

    

    $(".send").click(function(){
        var content = $('.text').val();
        $.ajax({
            url: `${api_url}/api/board/card/save`,
            type:"POST",
            data:{card:{content}},
            dataType:"json",
        }).done(function(res) {
            // window.location.href = "index.php";
        }).fail(function(err) {
            alert("none");
        });
    });
    
    $(".notes").click(function(){
        var coord = $(this).offset();
        var left = coord.left;
        var top = coord.top;
        var id_notes = $(this).attr("data_id");
        console.log(top,left)
        $.ajax({
            url: `${api_url}/api/board/card/save_board`,
            type:"POST",
            data:{left,top,id_notes},
            dataType:"json",
        }).done(function(res) {
            // window.location.href = "index.php";
        }).fail(function(err) {hg
            alert("none");
        });
    });

    $(function() {
        $('.notes').draggable({containment: ".board"});
    });

    $(".signIn").click(function(){
        $(".signUp").css("background","none");
        $(".signIn").css("background","#8bc34a"); 
        $(".signUpMenu").show();
        $(".signInMenu").css("display","none");
    });

    $(".signUp").click(function(){
        $(".signUp").css("background","#8bc34a");
        $(".signIn").css("background","none");  
        $(".signInMenu").show();
        $(".signUpMenu").css("display","none");
    });
    
})