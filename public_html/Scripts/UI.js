/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//UI Initialiesierung
$(document).ready(function(){

    uiv.main = $("#Main")
    for (i = 1; i <= anzahl; i++) { 
        
        uiv.levels[i] = $('<h1 id="level' + i + '" class="levels">lvl'+i+' </h1>')
        uiv.main.append(uiv.levels[i])
        uiv.levinh[i] = $('<div id="levelinh'+ i +'" class="levelinh"></div>')
        uiv.main.append(uiv.levinh[i])
        uiv.anzeigen[i] =$('<div id="anzeige'+i+'"> 123 </div>')
        uiv.levinh[i].append(uiv.anzeigen[i])
        uiv.KnopfA[i] =$('<button id="KnopfA'+i+'" class="Knopf" onclick="kauf('+i+')">Buy 1/50%More</button> ')
        if (i != 1)
        uiv.levinh[i].append(uiv.KnopfA[i])
        uiv.preisanzeigen[i] = $('<span id="pAnzeige'+i+'"> Preis: </span>')
        if (i != 1)
        uiv.levinh[i].append(uiv.preisanzeigen[i])
        uiv.produkanzeigen[i] = $("<div id='produktanzeige"+i+"'> you get xxx lvl "+i+" Pt </div>");
        uiv.levinh[i].append(uiv.produkanzeigen[i]);
}
    uiv.options.slideUp();
    //uiv.main.accordion();
        //Test Code
                 $('.levels').on('click', function() {
                 $(this).next('.levelinh').slideToggle();
                });
    //End Test Code
    $("nav>*:first").click(function() {
      uiv.main.slideToggle();
      uiv.options.slideUp();
    })
    $("*").css("font-family" , "Segoe UI Semibold,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue Frutiger, Verdana");
    $("#Main").css("font-family" , "Segoe UI,Frutiger Linotype,Dejavu Sans,Helvetica Neue Frutiger, Verdana");
    uiv.options.css("font-family" , "Segoe UI,Frutiger Linotype,Dejavu Sans,Helvetica Neue Frutiger, Verdana");
    $("#NavOpt").click(function() {
      uiv.main.slideUp();
      uiv.options.slideToggle();
    })
})

function TextAktu() {
    for (i=1; i<=anzahl;i++) {
        $("#anzeige"+i).text(Game.Sp.geld[i].toPrecision(3) + 'lvl' +i);
        $("#pAnzeige"+i).text("Price:" + Game.preis[i].toPrecision(3) + ' lvl1');
        $("#produktanzeige"+i).text("you get "+Game.protick[i].toPrecision(3)+" lvl "+i+" Pt")
        uiv.anzeigen[0]
    }
}

