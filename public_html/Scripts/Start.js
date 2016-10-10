/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init() {
    for (i=1;i<=anzahl;i++ ){
        $("KnopfA" + i).click(kauf(i));
    }
    Game.Sp.geld[0] = Decimal(100);
}

$(document).ready(function(){
    init();
    TextAktu()
});


