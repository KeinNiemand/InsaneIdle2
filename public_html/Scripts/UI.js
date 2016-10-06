/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    uiv.main = $("#Main")
    for (i = 1; i <= anzahl; i++) { 
        
        uiv.levels[i] = $('<h1 id="level' + i + '">'+i+' </h1>')
        uiv.main.append(uiv.levels[i])
        uiv.levinh[i] = $('<div id="levelinh'+ 0 +'"></div>')
        uiv.main.append(uiv.levinh[i])
        uiv.anzeigen[i] =$('<p id="anzeige'+i+'"> 123 </p>')
        uiv.levinh[i].append(uiv.anzeigen[i])
        uiv.KnopfA[i] =$('<button id="KnopfA'+i+'" class="Knopf">Klick Mich</button> ')
        uiv.levinh[i].append(uiv.KnopfA[i])
}
    
    uiv.main.accordion();
    $("nav>*:first").click(function() {
      // if (mainstat) {
         //   main.hide();
         //  mainstat = false;
      //  }
      //  else {
        //    main.show();
        //    mainstat = true;
      //  }  
      main.slideToggle();
    })
    $("*").css("font-family" , "Segoe UI Semibold,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue Frutiger, Verdana");
    $("#main").css("font-family" , "Segoe UI,Frutiger Linotype,Dejavu Sans,Helvetica Neue Frutiger, Verdana");
})