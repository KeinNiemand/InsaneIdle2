/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var main = $("#Main");
    var levels = [anzahl];
    for (i = 0; i < anzahl; i++) { 
    levels[i] = $('<p id="level' + anzahl + '">'+anzahl+' </p>')
}
    
    main.append(levels[0])
    var levinh = [0]
    levinh[0] = $('<div id="levelinh'+ 0 +'"> Test AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA </div>')
    main.append(levinh[0])
    main.accordion();
    
})