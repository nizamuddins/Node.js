let body = $("body")
$(document).keydown((e)=>{
    if (e.ctrlKey==true && (e.which == '61' || e.which == '107' || e.which == '173' || e.which == '109'  || e.which == '187'  || e.which == '189'  ) ) {
            e.preventDefault();
         }
        // 107 Num Key  +
        // 109 Num Key  -
        // 173 Min Key  hyphen/underscore key
        // 61 Plus key  +/= key
    });
    
    $(window).bind('mousewheel DOMMouseScroll', function (e) {
           if (e.ctrlKey == true) {
           e.preventDefault();
           }
});

let width = window.innerWidth;

if(width < 1230){


$(".box").remove();
body.css("background-image","none")
body.text("Error!")



}

window.addEventListener("resize",(e)=>{
if(window.innerWidth < 1426){
    $(".box").remove();
    body.css("background-image","none")

    body.text("Error!")
    
    

}
})