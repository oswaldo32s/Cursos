// Module Pattern
const gameBoard = (() => {
    let board = ['','','','','','','','','']

    const showBoard = () => board

    const restartBoard = () => {
        board = ['','','','','','','','','']
    }

    const render = () => {
        const gameBoardSection = document.querySelector('.game-board')
        gameBoardSection.innerHTML = ''
        board.forEach((square, index) => {
            const squareDiv = document.createElement('div')

            // add classes
            squareDiv.classList.add('tic-tac-box')
            squareDiv.classList.add(`tictac-box-${index}`)

            // add Value to div
            squareDiv.textContent = square

            // add EventListener to div
            squareDiv.addEventListener('click', GameController.handleClick)

            // append to website
            gameBoardSection.appendChild(squareDiv)
        })
    }

    const updateBoard = (index, playersMark) => {
            board[index] = playersMark
            render()
    }

    return {render, updateBoard, showBoard, restartBoard}
})()


function createPlayer(name, mark) {
    let score = 0
    const increaseScore = () => score++
    const restartScore = () => score = 0
    const showScore = () => score
    return {name, mark, increaseScore, restartScore, showScore}
}


// Module Pattern
const GameController = (() => {
    const gameControls = document.querySelector('.game-controls')
    const restartGameBtn = document.querySelector('.restart-game-btn') 
    const nextRoundBtn = document.querySelector('.next-round-btn')
    let players = []
    let currentPlayer = {}
    let isGameOver
    let winner = ''
    let isDraw = false

    // combinations for winning
    const winnerCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const handleClick = (e) => {
        const board = gameBoard.showBoard() // get board from gameBoard
        const index = e.target.classList[1].split('-')[2] // get index of the cell clickec
        if (board[index] == '' && isGameOver == false) { // check if that cell has already a value if so ignore otherwise add currentPlayer mark
            gameBoard.updateBoard(index, currentPlayer.mark)
            checkForWinner()   // check if after the change there is a winner
            checkForDraw() // check if there is a Draw
            switchPlayer()  // change turn
        }
    }

    const switchPlayer  = () => currentPlayer = currentPlayer == players[0] ? players[1] : players[0]

    const showControls = () => {  // after someone win or there is a Draw show the result and the buttons to continue or restart
        gameControls.classList.toggle('hide')
    }

    const showWinner = () => {
        const winnerHTML = document.querySelector('.winner-announcement')
        winnerHTML.innerHTML = ''
        const winnerAnnouncement = document.createElement('h2')
        if(isDraw) {
            winnerAnnouncement.textContent = `It's a Draw! Try again.`
        }
        winnerAnnouncement.textContent = `${currentPlayer.name} WON! Good Job!`
        winnerHTML.appendChild(winnerAnnouncement)
    }

    const checkForDraw = () => {
        const board = gameBoard.showBoard() // get board from gameBoard
        if(!board.includes('')) { // if board no longer has empty values
            isDraw = true
            isGameOver = true
            showWinner()
            showControls()
        }
    }

    const checkForWinner = () => {
        const currentBoardStatus = gameBoard.showBoard()
        winnerCombinations.forEach(([a,b,c]) => {
            if(currentBoardStatus[a] == currentPlayer.mark && currentBoardStatus[b] == currentPlayer.mark && currentBoardStatus[c] == currentPlayer.mark) {
                isGameOver = true
                winner = currentPlayer.mark
                currentPlayer.increaseScore()
                showWinner()
                showControls()
                renderScore()
            }
        })
    }

    const restartGame = () => {
        gameBoard.restartBoard()
        isGameOver = false
        winner = 0
        players.forEach(player => player.restartScore())
        gameControls.classList.toggle('hide')
        gameBoard.render()
        renderScore()
    }

    const nextRound = () => {
        if(isGameOver) {
            gameControls.classList.toggle('hide')
            gameBoard.restartBoard()
            isGameOver = false
            winner = 0
            gameBoard.render()
        }
    }

    const renderScore = () => {
        const gameScore = document.querySelector('.game-result')
        gameScore.innerHTML = ''
        players.forEach(player => {
            const playerElement = document.createElement('h3')
            playerElement.classList.add('player-score')
            playerElement.textContent = `Name: ${player.name} (${player.mark}) Score : ${player.showScore()}`
            gameScore.appendChild(playerElement)
        })
    }

    const play = () => {
        players = [
            createPlayer(document.querySelector('#player1').value, '×'),
            createPlayer(document.querySelector('#player2').value, 'o')
        ]
        currentPlayer = players[0]
        isGameOver = false
        gameBoard.render()
        renderScore()

        const gameSetup = document.querySelector('.game-setup')
        gameSetup.classList.toggle('hide')
    }

    restartGameBtn.addEventListener('click', restartGame)
    nextRoundBtn.addEventListener('click', nextRound)

    return {play, handleClick, restartGame, nextRound}

})()

const startGameBtn = document.querySelector('.start-game-btn')

startGameBtn.addEventListener('click', GameController.play)