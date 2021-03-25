export function didUserWin(player, computer) {
    if (player === computer) {
        return 'draw';}

    if (computer === 'rock' && player === 'scissors'){
        return 'loss'}

    if (computer === 'rock' && player === 'paper'){
        return 'win'}

    if (computer === 'paper' && player === 'scissors'){
    return 'win'}

    if (computer === 'paper' && player === 'rock'){
        return 'loss'}

    if (computer === 'scissors' && player === 'paper'){
    return 'loss'}

    if (computer === 'scissors' && player === 'rock'){
        return 'win'}

    }