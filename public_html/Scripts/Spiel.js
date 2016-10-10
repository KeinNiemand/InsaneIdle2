/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function kauf(nummer) {
    if(Game.Sp.geld[1].gte(Game.preis[nummer]) && nummer !=1 ) {
        if(Game.Sp.geld[nummer].gt(0)){
            Game.Sp.geld[1] = Game.Sp.geld[1].sub(Game.preis[nummer]);
            Game.Sp.geld[nummer] = Game.Sp.geld[nummer].mul(1.1);
            
            TextAktu()
        }
        else {
            Game.Sp.geld[1] = Game.Sp.geld[1].sub(Game.preis[nummer]);
            Game.Sp.geld[nummer] = Decimal(1);
            
            TextAktu()
        }
    }
}