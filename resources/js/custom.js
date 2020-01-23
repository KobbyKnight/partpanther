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
}