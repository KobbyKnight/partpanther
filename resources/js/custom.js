"use strict";
$(()=>{

    console.log("hello");

    formManipulator();    


});

var formManipulator = ()=>{
    const form1 = $("#formPart1");
    const form2 = $("#formPart2");
    form2.hide();
    $("#searchbtn").on("click",(e)=>{       
        setTimeout(() => { 
            form2.fadeIn("slow");
            form1.slideUp("slow");         
        }, 1000);
        
    });
    
    $("#back").on("click",(e)=>{
        setTimeout((e)=>{
            form1.slideDown("slow");
            form2.fadeOut("slow");
        },500);        
    });
}