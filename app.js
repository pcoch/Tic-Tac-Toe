let gameboard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'x';
let winner
const grids = document.querySelectorAll('.game-grids');

const gameplay = (() => {

    const playerTurn = (event) => {
        if (event.target.dataset.type == '' && currentPlayer == 'x') {
            event.target.dataset.type = 'x';
            event.target.innerHTML = '❌';
            let gridID = event.target.id;
            gameboard[gridID] = 'x';
            changePlayer();
            checkResult();
        }

        if (event.target.dataset.type == '' && currentPlayer == 'o') {
            event.target.dataset.type = 'o';
            event.target.innerHTML = '⭕️';
            let gridID = event.target.id;
            gameboard[gridID] = 'o';
            changePlayer();
            checkResult();
        }
    };

    const changePlayer = () => {
        switch (currentPlayer) {
            case 'x':
                currentPlayer = 'o';
                document.querySelector('.player-turn').innerHTML = "Player O's Turn";
                break;

            case 'o':
                currentPlayer = 'x';
                document.querySelector('.player-turn').innerHTML = "Player X's Turn";
                break;
        }
    };

    const checkResult = () => {
        //needs refactoring. Create winning conditions arrays.
        //checking row wins
        if (gameboard[0] == 'x' && gameboard[1] == 'x' && gameboard[2] == 'x') {
            winner = '❌';
            endGame();
        };

        if (gameboard[0] == 'o' && gameboard[1] == 'o' && gameboard[2] == 'o') {
            winner = '⭕️';
            endGame();
        };

        if (gameboard[3] == 'x' && gameboard[4] == 'x' && gameboard[5] == 'x') {
            winner = '❌';
            endGame();
        };

        if (gameboard[3] == 'o' && gameboard[4] == 'o' && gameboard[5] == 'o') {
            winner = '⭕️';
            endGame();
        };

        if (gameboard[6] == 'x' && gameboard[7] == 'x' && gameboard[8] == 'x') {
            winner = '❌';
            endGame();
        };

        if (gameboard[6] == 'o' && gameboard[7] == 'o' && gameboard[8] == 'o') {
            winner = '⭕️';
            endGame();
        };

        //checking column wins
        if (gameboard[0] == 'x' && gameboard[3] == 'x' && gameboard[6] == 'x') {
            winner = '❌';
            endGame();
        };

        if (gameboard[0] == 'o' && gameboard[3] == 'o' && gameboard[6] == 'o') {
            winner = '⭕️';
            endGame();
        };

        if (gameboard[1] == 'x' && gameboard[4] == 'x' && gameboard[7] == 'x') {
            winner = '❌';
            endGame();
        };

        if (gameboard[1] == 'o' && gameboard[4] == 'o' && gameboard[7] == 'o') {
            winner = '⭕️';
            endGame();
        };

        if (gameboard[2] == 'x' && gameboard[5] == 'x' && gameboard[8] == 'x') {
            winner = '❌';
            endGame();
        };

        if (gameboard[2] == 'o' && gameboard[5] == 'o' && gameboard[8] == 'o') {
            winner = '⭕️';
            endGame();
        };

        //checking diganoal wins
        if (gameboard[0] == 'x' && gameboard[4] == 'x' && gameboard[8] == 'x') {
            winner = '❌';
            endGame();
        };
        if (gameboard[0] == 'o' && gameboard[4] == 'o' && gameboard[8] == 'o') {
            winner = '⭕️';
            endGame();
        };
        if (gameboard[2] == 'x' && gameboard[4] == 'x' && gameboard[6] == 'x') {
            winner = '❌';
            endGame();
        };
        if (gameboard[2] == 'o' && gameboard[4] == 'o' && gameboard[6] == 'o') {
            winner = '⭕️';
            endGame();
        };
    };

    const endGame = () => {
        const modal = document.querySelector('.modal');

        const h2 = document.createElement('h2');
        const btn = document.createElement('button')

        document.querySelector('.player-turn').innerHTML = 'Game Over 🙀';
        h2.innerHTML = `${winner} Wins! 🎉`;
        btn.innerHTML = 'Play Again'
        btn.id = 'btn-modal';
        h2.id = 'h2-modal';
        btn.onclick = resetGame;
        modal.append(h2);
        modal.append(btn);

        document.querySelector('.page-container').classList.add('modal-open');
        document.querySelector('.game-grids').classList.add('modal-open');
        document.querySelector('.modal').classList.remove('hide');
    };

    const resetGame = () => {
        gameboard = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'x';
        winner = null;

        for (let i = 0; i < grids.length; i++) {
            grids[i].innerHTML = '';
            grids[i].dataset.type = '';
        };

        if (document.querySelector('.modal').classList.contains('hide') == false) {
            hideModal()
        }

        document.querySelector('.player-turn').innerHTML = "Player X's Turn";
        document.querySelector('.page-container').classList.remove('disable-clicks');
        document.querySelector('.game-grids').classList.remove('disable-clicks');
    };

    return {
        playerTurn,
        changePlayer,
        checkResult,
        endGame,
        resetGame,
    };
})();

for (let i = 0; i < grids.length; i++) {
    grids[i].addEventListener('click', gameplay.playerTurn)
};

function hideModal() {
    document.querySelector('.page-container').classList.remove('modal-open'); //removing backdrop
    document.querySelector('.game-grids').classList.remove('modal-open'); //removing backdrop to grid
    document.querySelector('.page-container').classList.add('disable-clicks'); //removing backdrop
    document.querySelector('.game-grids').classList.add('disable-clicks'); //removing backdrop to grid
    document.querySelector('.modal').classList.add('hide'); //hiding modal
    document.getElementById('btn-modal').remove(); //removing modal btn
    document.getElementById('h2-modal').remove(); //removing modal btn
};