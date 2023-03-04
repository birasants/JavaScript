let radar = verificadorDeVel(89.2);
console.log(radar);
function verificadorDeVel(vel) {
    if (vel <= 80)
        return 'ok';
    else {
        const pontos = Math.floor((vel - 80) / 5);
        if (pontos >= 12) {
            console.log("Carteira Suspensa");
        } else {
            console.log("Pontos", pontos)
        }
    }



}
