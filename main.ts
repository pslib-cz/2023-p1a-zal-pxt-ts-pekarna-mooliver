/*
    cas: je doba v sekundách, po kterou trouba
    odebírala uvedený příkon
    spotreba: je kolik energie by bylo spotřebováno,
    pokud by takto trouba pekla celou hodinu
    (jsou to watthodiny [Wh])

    pro cas: 600s a spotreba: 3500 Wh je skutečné
    odebrané množství "energie":
    3500 * (600 / 3600) === 3500 * (1/6) === 583,333W

    Zadání
    Pekárna zobrazí
    1) kolik nás stálo pečení (v Kč)
    2) jaký měla pelárna průměrný odběr elektrické energie (v kWh)
*/
type Odber = {
    cas: number, //čas je v sekundách
    spotreba: number //spotřeba ve watech za hodinu
}
const cena: number = 6.70; // Kč / kWh
let data: Array<Odber> = [
    { cas: 600, spotreba: 3500 }, // za 600s peceni spotrebovano 3500Wh
    { cas: 120, spotreba: 0 },
    { cas: 300, spotreba: 1700 }, // data[2].cas
    { cas: 60, spotreba: 0 },
    { cas: 800, spotreba: 1500 },
]

let cas600: number = data[0].spotreba / 3600 * data[0].cas; // W
let cas120: number = 0; // W
let cas300: number = data[2].spotreba / 3600 * data[2].cas; // W
let cas60: number = 0; // W
let cas800: number = data[4].spotreba / 3600 * data[4].cas; // W

let celkovyCas: number = (data[0].cas + data[1].cas + data[2].cas + data[3].cas + data[4].cas) / 3600; // h
let celkovaSpotreba: number = cas600 + cas300 + cas800; // W
let cenaPeceni: number = (celkovaSpotreba * celkovyCas) / 1000 * 6.7; // kWh

let prumernyOdber: number = (celkovaSpotreba / 5) * celkovyCas / 1000;

for (const peceme of data){
    console.logValue("čas: ", peceme.cas);
    console.logValue("spotřeba: ", peceme.spotreba);
    console.logValue("spotřebováno: ", peceme.spotreba / 3600 * peceme.cas);
}

console.logValue("Cena pečení: ", cenaPeceni);
console.logValue("Průměrný odběr: ", prumernyOdber)