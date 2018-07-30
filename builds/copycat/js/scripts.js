$(function (){
    
    "use strict";
    
    if($(window).width() < 768){
        $("#specialCol").addClass("bgGray");
    }
    
    $(window).resize(function(){
        if($(window).width() < 638){
            $("#specialCol").addClass("bgGray");
            $(".wrapper").hide();
        }else{
            $("#specialCol").removeClass("bgGray");
            $(".wrapper").show();
        }
    });
    
    $(".toggle-button").click(function(){
        $(".wrapper").slideToggle();
        
    });
    
    $(".clientSurvey").hover(
        function(){
            $(".clientSurvey").css({
                "background": "url(../img/sidebtn_befhov.png) no-repeat",
                "background-position": "6px 10px",
                "background-color": "#1a1478"
            });
            $(".clientSurveyText").css({
                "color":"#fff"
            });
        },function(){
            $(".clientSurvey").css({
                "background": "url(../img/sidebtn_bef.png) no-repeat",
                "background-position": "6px 10px",
                "background-color": ""
            });
            $(".clientSurveyText").css({
                "color":""
            });
        }
    );
    
});