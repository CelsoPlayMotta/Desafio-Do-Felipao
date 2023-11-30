let NomeHeroi = "celso";
let nivel = "iniciante";
let Xp = 100000;

switch (true) {
    case Xp >= 10001:
        nivel = "Radiante";
        break;

    case Xp >= 9001 && Xp <= 10000:
        nivel = "Imortal";
        break;

    case Xp >= 8001 && Xp <= 9000:
        nivel = "Ascendente";
        break;

    case Xp >= 7001 && Xp <= 8000:
        nivel = "Platina";
        break;

    case Xp >= 6001 && Xp <= 7000:
        nivel = "ouro";
        break;

    case Xp >= 2001 && Xp <= 5000:
        nivel = "Prata";
        break;

    case Xp >= 1001 && Xp <= 2000:
        nivel = "bronze";
        break;

    case Xp >= 1000:
        nivel = "ferro";
        break;
}

console.log("O herói de nome " + NomeHeroi + " está no nível " + nivel)




