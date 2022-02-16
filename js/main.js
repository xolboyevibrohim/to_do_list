$(function(){
    $("#btnn").on({
        click:function(e){
        e.preventDefault();   
        let title = $("#title").val();
        let author = $("#author").val();
        let key = $("#isbn").val();
        let date = $("#dt").val();
        if($("#title").val() == 0){
            $(".noadded1").css("display","block");
            $(".noadded1").fadeOut(2500);        
        }else if($("#author").val() == 0){
            $(".noadded1").css("display","block");
            $(".noadded1").fadeOut(2500);
        }else if($("#isbn").val() == 0){
            $(".noadded1").css("display","block");
            $(".noadded1").fadeOut(2500);
        }else if($("#dt").val() == 0){
            $(".noadded1").css("display","block");
            $(".noadded1").fadeOut(2500);
        }else{
            $("#endd").append(
                "<tr><td id='titlee'>"+title+"</td><td id='authorr'>"+author+"</td><td id='keyy'>"+key+"</td><td id='date'>"+date+"</td><td id='delete'><i class='fas fa-times'></i></td></tr>"
            );
            $(".added1").css("display","block");
            $(".added1").fadeOut(2500);
        }
        $(".fa-times").click(function(){
            $(this).parent().parent().remove()
        });
        }
    })
});