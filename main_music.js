$(document).ready(function () {
    var c_note = document.getElementById("c_note");
    var d_note = document.getElementById("d_note"); 
    var e_note = document.getElementById("e_note");    
    var f_note = document.getElementById("f_note"); 
    var g_note = document.getElementById("g_note"); 
    var a_note = document.getElementById("a_note"); 
    var b_note = document.getElementById("b_note");


    $("#c").on("click mouseover",function(){
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
        b_note.currentTime=0;
        b_note.play();
    });
    
    $(document).keypress(function(event) {
        /** alert('this key was pressed'+event.which); **/
          
          switch(event.which || event.keyCode) {
              case 97:
                  c_note.currentTime=0;
                  c_note.play();
                  break;
              case 115:
                  d_note.currentTime=0;
                  d_note.play();
                  break;
              case 100:
                  e_note.currentTime=0;
                  e_note.play();
                  break;
              case 102:
                  f_note.currentTime=0;
                  f_note.play();
                  break;
             case 103:
                  g_note.currentTime=0;
                  g_note.play();
                  break;
             case 104:
                  a_note.currentTime=0;
                  a_note.play();
                  break;
             case 106:
                  b_note.currentTime=0;
                  b_note.play();
                  break;          
          } 
    });
    
   
});                  
               



