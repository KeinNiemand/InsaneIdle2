/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var main = $("#Main");
    var levels = [0];
    levels[0] = $('<p id="level' + 0 + '">  </p>')
    main.append(levels[0])
    var levinh = [0]
    levinh[0] = $('<div id="levelinh'+ 0 +'"> Test </div>')
    levels[0].append(levinh[0])
    levels[0].accordion();
    
})