/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//UI Initialiesierung
$(document).ready(function(){
    uiv.main = $("#Main")
    for (i = 1; i <= anzahl; i++) { 
        
        uiv.levels[i] = $('<h1 id="level' + i + '">lvl'+i+' </h1>')
        uiv.main.append(uiv.levels[i])
        uiv.levinh[i] = $('<div id="levelinh'+ 0 +'"></div>')
        uiv.main.append(uiv.levinh[i])
        uiv.anzeigen[i] =$('<p id="anzeige'+i+'"> 123 </p>')
        uiv.levinh[i].append(uiv.anzeigen[i])
        uiv.KnopfA[i] =$('<button id="KnopfA'+i+'" class="Knopf">Buy 1/10%More</button> ')
        uiv.levinh[i].append(uiv.KnopfA[i])
        uiv.preisanzeigen[i] = $('<span id="pAnzeige'+i+'"> Preis: </span>')
        uiv.levinh[i].append(uiv.preisanzeigen[i])
}
    
    uiv.main.accordion();
    $("nav>*:first").click(function() {
      uiv.main.slideToggle();
    })
    $("*").css("font-family" , "Segoe UI Semibold,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue Frutiger, Verdana");
    $("#Main").css("font-family" , "Segoe UI,Frutiger Linotype,Dejavu Sans,Helvetica Neue Frutiger, Verdana");
})

function TextAktu() {
    for (i=1; i<=anzahl;i++) {
        $("#anzeige"+i).text(Game.Sp.geld[i].toPrecision(3) + '');
        $("#pAnzeige"+i).text("Price:" + Game.Sp.preis[i].toPrecision(3) + ' lvl1');
        uiv.anzeigen[0]
    }
}

