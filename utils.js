export function didUserWin(player, computer) {
    if (player === computer) {
        return 'draw';
    }

    if (computer === 'rock' && player === 'scissors'){
        return 'loss'
    }

    if (computer === 'rock' && player === 'paper'){
        return 'win'
    }

    if (computer === 'paper' && player === 'scissors'){
    return 'win'
    }

    if (computer === 'paper' && player === 'rock'){
        return 'loss'
    }

    if (computer === 'scissors' && player === 'paper'){
    return 'loss'
}

    if (computer === 'scissors' && player === 'rock'){
        return 'win'
    }

    }


    export function randomThrow() {

        const throwNumber = Math.ceil(Math.random() * 3);

        if (throwNumber === 1) return 'rock';

        if (throwNumber === 2) return 'paper';

        if (throwNumber === 3) return 'scissors';
    }