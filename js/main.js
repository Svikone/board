
const api_url = "http://localhost:9000";
$(document).ready(function(){
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
        const user = localStorage.getItem("user");
        $.ajax({
            url: `${api_url}/api/board/card/save`,
            type:"POST",
            data:{card:{content,name:user}},
            headers: {"x-access-token": localStorage.getItem('x-access-token')},
            dataType:"json",
        }).done(function(res) {
            // window.location.href = "index.php";
        }).fail(function(err) {
            alert("none");
        });
    });
    
    $(".notes").click(function(){
        $(this).addClass("selected");
        $(".notes").not(".selected").css("z-index","99")
        $(this).css("z-index","100")
        var coord = $(this).offset();
        var id_notes = $(this).attr("data_id");
        const card = {
            posX: coord.left,
            posY: coord.top,
            id_notes
        }
        console.log(card)
        $.ajax({
            url: `${api_url}/api/board/card/update`,
            type:"POST",
            data:{card},
            dataType:"json",
        }).done(function(res) {
            // window.location.href = "index.php";
        }).fail(function(err) {
        });
    });

    $('.notes').draggable({containment: ".board"});
    
    
    // <% for (item of message) { %>
    //     <% } %>
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
render();
function render(){
    const token = localStorage.getItem("x-access-token");


    $.ajax({
        url: `${api_url}/api/board/card/get`,
        type:"POST",
        data:{token},
        dataType:"json",
    }).done(function(res) {
        const board = $('.board');
        localStorage.setItem("user",res.user)
        console.log(res)
        for (item of res.result) {
             
            const note = `
            
                <div class="notes" data_id="${item._id}" style="left: ${item.posX}px; top: ${item.posY-115}px ;">
                    <div class="name">
                        ${item.name}
                    </div>
                    <div class="text">
                        ${item.content}   
                    </div>
                    <div class="date">12/12/19</div>
                </div>

            `
            // $(note).css({left: item.posX + 'px', top: res.posY + 'px'});
            // console.log(item.posX, res.posY)
            board.append(note);
        }
    }).fail(function(err) {
    });
    getUsers();
    
}
function getUsers() {
    $.ajax({
        url: `${api_url}/user/full`,
        type:"POST",
        dataType:"json",
    }).done(function(res) {
        for (item of res) {
            const user = `<li>${item.name} <div class="btn">Invite</div> </li>
                            
                            `
           $('.Users').append(user);
        }
        // window.location.href = "index.php";
    }).fail(function(err) {
    });
}


