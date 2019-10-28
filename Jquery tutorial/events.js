$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide(1000);
    });

    $("#show").dblclick(function(){
        $("p").show(1000);
    });

    $("#toggle").click(function(){
        $("p").toggle();
    });

    $("#fade-btn").click(function(){
        console.log("Hello world")
        $("#div1").fadeIn();
        $("#div2").fadeIn("fast");
        $("#div3").fadeIn("slow");
    });

    $("#panel").click(function(){
        $("#slide").slideDown();
    });

    $("#anm-btn").click(function(){
        console.log("working");
        $("#animation").animate({left: '250px'});
    });

    $("#text").click(function(){
       alert("Text:" + $("#test").text()); 
    });

    $("#html").click(function(){
        alert("HTML:" + $("#test").html());
    });

    $(document).ready(function(){
        $("button").click(function(){
          $("#p1").css("color", "red")
            .slideUp(2000)
            .slideDown(2000);
        });
    });    
});