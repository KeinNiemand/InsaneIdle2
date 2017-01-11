/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Einstellugnen
var anzahl = 5;
var TPS = 30;
Decimal.config({ precision: 12 })
var savever = 1;

var uiv = {
    haupt: $("#Haupt"),
    main: $("#Main"),
    levels: [anzahl],
    levinh: [anzahl],
    anzeigen: [anzahl],
    KnopfA: [anzahl],
    preisanzeigen: [],
    produkanzeigen: [],
    options: $("#Options")
};

var Game = {
    Sp: {
        geld: [],
        anzGek: [],
        produmul: []
    },
    basPreis: [],
    preiserh: [],
    preis: [],
    protick: [],
    savever: savever,
    protickMul: []
};


//Initialiesierung der Variablen
function initvars() {
  for (i = 1; i <= anzahl; i++) {
    Game.Sp.geld[i] = Decimal(0);
    Game.Sp.anzGek[i] = Decimal(0);
    Game.protick[i] = Decimal(0);
    Game.protickMul[i] = Decimal(0);
    //Game.basPreis[i] = Decimal(Math.pow(1+((i*0.1)-0.2), 66.66) * 100)
    //BASIS PREIS FORMEL
    Game.basPreis[i] = Decimal(Decimal.pow(Decimal.mul(i,0.1).sub(0.2).add(1), 186.66).mul(2));
    //Game.preiserh[i] = Decimal(1+(1.5*i)^1.8)
    //PREIS ERHÖUNGS FORMEL
    Game.preiserh[i] = Decimal(Decimal.mul(0.7,i).pow(1.3).add(1));
    Game.preis[i] = Game.basPreis[i];
    Game.Sp.produmul[i] = Decimal(0.0001);
}    
//Startgeld
   Game.Sp.geld[1] = Decimal(40);
   Game.Sp.wurzel = 2;
}
