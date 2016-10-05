/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var haupt = $("#Haupt")
    var main = $("#Main");
    var levels = [anzahl];
    var levinh = [anzahl];
    var anzeigen = [anzahl];
    var KnopfA = [anzahl];
    var nav = $("nav");
    for (i = 1; i <= anzahl; i++) { 
        levels[i] = $('<h1 id="level' + i + '">'+i+' </h1>')
        main.append(levels[i])
        levinh[i] = $('<div id="levelinh'+ 0 +'"></div>')
        main.append(levinh[i])
        anzeigen[i] =$('<p id="anzeige'+i+'"> 123 </p>')
        levinh[i].append(anzeigen[i])
        KnopfA[i] =$('<button id="KnopfA'+i+'" class="Knopf">Klick Mich</button> ')
        levinh[i].append(KnopfA[i])
}
    haupt.accordion();
    main.accordion();
    

    
    
})