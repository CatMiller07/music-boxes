$(document).ready(function(){
   
var catMeow=document.getElementById("catMeow"); 
var dogBark=document.getElementById("dogBark");
var horseNeigh=document.getElementById("horseNeigh"); 
    
/** var f_note=document.getElementById("f_note"); 
var g_note=document.getElementById("g_note"); 
var a_note=document.getElementById("a_note"); 
var b_note=document.getElementById("b_note");
**/

    /*$("#c").on("click mouseover",function(){
        c_note.currentTime=0;
        c_note.play();
    });
     $("#d").on("click mouseover",function(){
        d_note.currentTime=0;
        d_note.play();
    });
     $("#e").on("click mouseover",function(){
        e_note.currentTime=0;
        e_note.play();
    });
     $("#f").on("click mouseover",function(){
        f_note.currentTime=0;
        f_note.play();
    });
     $("#g").on("click mouseover",function(){
        g_note.currentTime=0;
        g_note.play();
    });
     $("#a").on("click mouseover",function(){
        a_note.currentTime=0;
        a_note.play();
    });
     $("#b").on("click mouseover",function(){
        c_note.currentTime=0;
        c_note.play();
    });
    */
    //attach listener for keypresses
    
    $(document).on("keypress",function(evt){
        console.log(evt.keyCode);
        switch(evt.keyCode) {
            case 99:
                    catMeow.currentTime=0;
                    catMeow.play();
                    break;
            case 100:
                    dogBark.currentTime=0;
                    dogBark.play();
                    break;
            case 104:
                    horseNeigh.currentTime=0;
                    horseNeigh.play();
                    break;
        }
        
    });
});                  
               



