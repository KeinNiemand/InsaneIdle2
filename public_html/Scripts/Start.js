/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init() {
    Game.Sp.geld[1] = Decimal(10);
}

$(document).ready(function(){
    init();
    TextAktu()
    setInterval(protick, 1000/TPS)
});


