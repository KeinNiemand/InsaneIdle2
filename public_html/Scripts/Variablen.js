/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var anzahl = 5;

var uiv = {
    haupt: $("#Haupt"),
    main: $("#Main"),
    levels: [anzahl],
    levinh: [anzahl],
    anzeigen: [anzahl],
    KnopfA: [anzahl]
};

var Game = {
    Sp: {
        geld: [],
        preis: [],
        anzGek: []
    },
    basPreis: [],
    preiserh: [],
    prosek: []
};

//Initialiesierung der Variablen
for (i = 0; i < anzahl; i++) {
    Game.Sp.geld[i] = Decimal(0)
    Game.Sp.anzGek[i] = Decimal(0)
    Game.prosek[i] = Decimal(0)
    Game.basPreis[i] = Decimal(i ^ 2 * 100)
    Game.preiserh[i] = Decimal(1+(0.75*i)^1.5)
    

}