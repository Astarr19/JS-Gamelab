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
}

isDead = (health) => {
    return health <= 0;
}

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
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

// Extended Challenges

/* function printSquare(width) {
    let i = width;
    let square = '';
    while (i > 0) {
        while (width > square.length) {
            square += '#';
        } 
        console.log(square);
        i--;
    }
}
printSquare(4);

printTriangle = (width) => {
    let i = width;
    let triangle = '';
    while (i > 0) {
        triangle += '#';
        console.log(triangle);
        i--;
    }
}
printTriangle(5);

function printDiamond(width) {
    let i = width;
    let diamond = '';
    while (i > 0) {
        diamond += '#';
        console.log(diamond);
        i--;
    }
    while (i < width) {
        diamond = diamond.substring(1);
        console.log(diamond);
        i++;
    }
}
printDiamond(5);

function getGrade(grade) {
    if (grade >= 90) {
        return 'A';
    } else if ((grade >= 80) && (grade < 90)) {
        return 'B';
    } else if ((grade >= 70) && (grade < 80)) {
        return 'C';
    } else if ((grade >= 60) && (grade < 70)) {
        return 'D';
    } else {
        return 'F'
    }

}
console.log(getGrade(65));

prioritize = (urgent, important) => {
    if ((urgent === true) && (important === true)) {
        return 1;
    } else if ((urgent === false) && (important === true)) {
        return 2;
    } else if ((urgent === true) && (important === false)) {
        return 3;
    } else {
        return 4;
    }
}

console.log(prioritize(false, true)); */
