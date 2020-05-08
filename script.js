randomDamage = () => {
    return (Math.floor(Math.random() * 10) + 1);
}

chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    let choice = randNum === 0 ? opt1 : opt2;
    return choice;
}

const attackPlayer = function (health) {
    return health - randomDamage();
}

logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
}

logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
    i--;
}

isDead = (health) => {
    return health <= 0;
}

function fight(player1, player2, player1Health, player2Health) {
    i = 1;
    while (i = 1) {
        let attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health) === true) {
                logDeath(player1, player2);
                break;
            }
        } else if (attacker === player2) {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health) === true) {
                logDeath(player2, player1);
                break;
            }
        }
        
    }
    
}
fight('Aidan', 'Oliver', 100, 100);






