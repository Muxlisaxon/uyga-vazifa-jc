
let Malika = +prompt("Birinchi qiz summani kiriting")
let Diyora = +prompt("Ikkinchi qiz summani kiriting")
let Mavzuna = +prompt("Uchinchi qiz summani kiriting")
let Muxlisa = +prompt("To'rtinchi qiz summani kiriting")

function money(Malika, Diyora, Mavzuna, Muxlisa) {
    if(Malika, Diyora, Mavzuna, Muxlisa >= 150000){
        return ("mablag yetar");
    } else{
        return ("mablag yetarli emas");
    }
}
console.log(money(Malika, Diyora, Mavzuna, Muxlisa));

       






