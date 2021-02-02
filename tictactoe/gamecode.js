// var AI = document.createElement('bot');
// AI.src = './bot.js';
// document.head.appendChild(AI);

function initBoard() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    return board
}

function isMovePossible(board, r, c) {
    return (board[r][c] == '')
}

function makeMove(board, player, r, c,box) {
    if (isMovePossible(board, r, c)) {
        board[r][c] = player
        document.getElementById(box).innerHTML  = player
    }
    // return board
}

function hasFreeSpace(nb_moves){
    return (nb_moves < 9)
}

function isequal3(a,b,c){
    return(a==b)&&(b==c)
}

function isCurrentPlayerWinning(board, n,m) {
    // # checking the horizontal
    var horiz = isequal3(board[n][0],board[n][1],board[n][2])
    // # checking the vertical
    var vertic = isequal3(board[0][m],board[1][m],board[2][m])
    // # diagonal side
    diagonalRightSide = (m == 2 && n == 0) || (m == 0 && n == 2)
    diagonalLeftSide = (n == 0 && m == 0) || (n == 2 && m == 2)
    diagonaleMiddleSide = (n == 1) && (m == n)
    // console.log(diagonalRightSide,diagonalLeftSide,diagonaleMiddleSide)
    var diagLeft = false
    var diagRight = false
    var diagMid = false
    if (diagonalLeftSide){
        diagLeft = isequal3(board[0][0],board[1][1],board[2][2])
    } else if (diagonalRightSide) {
        diagRight = isequal3(board[0][2],board[1][1],board[2][0])
    } else if (diagonaleMiddleSide){
        diagMid = isequal3(board[0][0],board[1][1],board[2][2]) || isequal3(board[0][2],board[1][1],board[2][0])
    }
    // console.log(horiz,vertic,diagMid,diagRight,diagLeft)
    return (horiz || vertic || diagMid || diagRight || diagLeft)
}


// var isRunning,nb_moves,board,currentPlayer

// function setup(){
//     isRunning = true
//     nb_moves = 0
//     board = initBoard()
//     currentPlayer = 'X'
//     for(var i = 1; i <= 9 ; i++ ){
//         document.getElementById(i).innerHTML  = ''
//     }
//     document.getElementById('win').innerHTML = ''
// }

// function changePlayer(currentPlayer){
//     if(currentPlayer == "X"){
//         return "O"
//     } else {
//         return "X"
//     }
// }


// document.getElementById("reset").addEventListener("click", function(){
//     setup()
//   });

// $(function () {
//     $('table#board td').on('click', function () {
//         box = this.id;
//         boxInt = parseInt(box)
//         var n = Math.floor((boxInt-1)/3)
//         var m = (boxInt-1)%3
//         if(hasFreeSpace(nb_moves) && isRunning){
//             if(isMovePossible(board,n,m)){
//                 makeMove(board,currentPlayer,n,m,box)
//                 nb_moves += 1
//                 if(isCurrentPlayerWinning(board,n,m)){
//                     document.getElementById('win').innerHTML = currentPlayer+' الف مبروك'
//                     isRunning = false
//                 }
//                 currentPlayer = changePlayer(currentPlayer)
//             }
//         }
//     });
// });




/*
bot game

*/





function areEqual(box1, box2, player) {
    return (box1 == box2) && (box1 == player)
}

function isEmpty(box) {
    return box == ''
}



function blockTheThird(board, otherPlayer) {
    // rows
    // first row
    if (areEqual(board[0][0], board[0][1], otherPlayer) && isEmpty(board[0][2])) {
        return [0, 2]
    }
    if (areEqual(board[0][0], board[0][2], otherPlayer) && isEmpty(board[0][1])) {
        return [0, 1]
    }
    if (areEqual(board[0][1], board[0][2], otherPlayer) && isEmpty(board[0][0])) {
        return [0, 0]
    }

    // second row
    if (areEqual(board[1][0], board[1][1], otherPlayer) && isEmpty(board[1][2])) {
        return [1, 2]
    }
    if (areEqual(board[1][0], board[1][2], otherPlayer) && isEmpty(board[1][1])) {
        return [1, 1]
    }
    if (areEqual(board[1][1], board[1][2], otherPlayer) && isEmpty(board[1][0])) {
        return [1, 0]
    }

    // third row
    if (areEqual(board[2][0], board[2][1], otherPlayer) && isEmpty(board[2][2])) {
        return [2, 2]
    }
    if (areEqual(board[1][0], board[2][2], otherPlayer) && isEmpty(board[2][1])) {
        return [2, 1]
    }
    if (areEqual(board[1][1], board[2][2], otherPlayer) && isEmpty(board[2][0])) {
        return [2, 0]
    }



    // columns
    // first column
    if (areEqual(board[0][0], board[1][0], otherPlayer) && isEmpty(board[2][0])) {
        return [2, 0]
    }
    if (areEqual(board[0][0], board[2][0], otherPlayer) && isEmpty(board[1][0])) {
        return [1, 0]
    }
    if (areEqual(board[1][0], board[2][0], otherPlayer) && isEmpty(board[0][0])) {
        return [0, 0]
    }

    // second row
    if (areEqual(board[0][1], board[1][1], otherPlayer) && isEmpty(board[2][1])) {
        return [2, 1]
    }
    if (areEqual(board[0][1], board[2][1], otherPlayer) && isEmpty(board[1][1])) {
        return [1, 1]
    }
    if (areEqual(board[1][1], board[2][1], otherPlayer) && isEmpty(board[0][1])) {
        return [0, 1]
    }

    // third row
    if (areEqual(board[0][2], board[1][2], otherPlayer) && isEmpty(board[2][2])) {
        return [2, 2]
    }
    if (areEqual(board[0][2], board[2][2], otherPlayer) && isEmpty(board[1][2])) {
        return [1, 2]
    }
    if (areEqual(board[1][2], board[2][2], otherPlayer) && isEmpty(board[0][2])) {
        return [0, 2]
    }

    // diaglonal left
    if (areEqual(board[0][0], board[1][1], otherPlayer) && isEmpty(board[2][2])) {
        return [2, 2]
    }
    if (areEqual(board[0][0], board[2][2], otherPlayer) && isEmpty(board[1][1])) {
        return [1, 1]
    }
    if (areEqual(board[1][1], board[2][2], otherPlayer) && isEmpty(board[0][0])) {
        return [0, 0]
    }

    // diaglonal right
    if (areEqual(board[0][2], board[1][1], otherPlayer) && isEmpty(board[2][0])) {
        return [2, 2]
    }
    if (areEqual(board[0][2], board[2][0], otherPlayer) && isEmpty(board[1][1])) {
        return [1, 1]
    }
    if (areEqual(board[1][1], board[2][0], otherPlayer) && isEmpty(board[0][2])) {
        return [0, 2]
    }
    return null
}




function tryToGetTheThird(board, botPlayer) {
    // rows
    // first row
    if (areEqual(board[0][0], board[0][1], botPlayer) && isEmpty(board[0][2])) {
        return [0, 2]
    }
    if (areEqual(board[0][0], board[0][2], botPlayer) && isEmpty(board[0][1])) {
        return [0, 1]
    }
    if (areEqual(board[0][1], board[0][2], botPlayer) && isEmpty(board[0][0])) {
        return [0, 0]
    }

    // second row
    if (areEqual(board[1][0], board[1][1], botPlayer) && isEmpty(board[1][2])) {
        return [1, 2]
    }
    if (areEqual(board[1][0], board[1][2], botPlayer) && isEmpty(board[1][1])) {
        return [1, 1]
    }
    if (areEqual(board[1][1], board[1][2], botPlayer) && isEmpty(board[1][0])) {
        return [1, 0]
    }

    // third row
    if (areEqual(board[2][0], board[2][1], botPlayer) && isEmpty(board[2][2])) {
        return [2, 2]
    }
    if (areEqual(board[1][0], board[2][2], botPlayer) && isEmpty(board[2][1])) {
        return [2, 1]
    }
    if (areEqual(board[1][1], board[2][2], botPlayer) && isEmpty(board[2][0])) {
        return [2, 0]
    }



    // columns
    // first column
    if (areEqual(board[0][0], board[1][0], botPlayer) && isEmpty(board[2][0])) {
        return [2, 0]
    }
    if (areEqual(board[0][0], board[2][0], botPlayer) && isEmpty(board[1][0])) {
        return [1, 0]
    }
    if (areEqual(board[1][0], board[2][0], botPlayer) && isEmpty(board[0][0])) {
        return [0, 0]
    }

    // second row
    if (areEqual(board[0][1], board[1][1], botPlayer) && isEmpty(board[2][1])) {
        return [2, 1]
    }
    if (areEqual(board[0][1], board[2][1], botPlayer) && isEmpty(board[1][1])) {
        return [1, 1]
    }
    if (areEqual(board[1][1], board[2][1], botPlayer) && isEmpty(board[0][1])) {
        return [0, 1]
    }

    // third row
    if (areEqual(board[0][2], board[1][2], botPlayer) && isEmpty(board[2][2])) {
        return [2, 2]
    }
    if (areEqual(board[0][2], board[2][2], botPlayer) && isEmpty(board[1][2])) {
        return [1, 2]
    }
    if (areEqual(board[1][2], board[2][2], botPlayer) && isEmpty(board[0][2])) {
        return [0, 2]
    }

    // diaglonal left
    if (areEqual(board[0][0], board[1][1], botPlayer) && isEmpty(board[2][2])) {
        return [2, 2]
    }
    if (areEqual(board[0][0], board[2][2], botPlayer) && isEmpty(board[1][1])) {
        return [1, 1]
    }
    if (areEqual(board[1][1], board[2][2], botPlayer) && isEmpty(board[0][0])) {
        return [0, 0]
    }

    // diaglonal right
    if (areEqual(board[0][2], board[1][1], botPlayer) && isEmpty(board[2][0])) {
        return [2, 2]
    }
    if (areEqual(board[0][2], board[2][0], botPlayer) && isEmpty(board[1][1])) {
        return [1, 1]
    }
    if (areEqual(board[1][1], board[2][0], botPlayer) && isEmpty(board[0][2])) {
        return [0, 2]
    }

    return null
}

function areTheTwoSecondsEmpty(box1, box2, box3, player) {
    return (box2 == '' && box3 == '' && box1 == player)
}

function tryToMove(board, botPlayer) {
    // rows
    // first row
    if (areTheTwoSecondsEmpty(board[0][0], board[0][1], board[0][2], botPlayer)) {
        return Math.random() < 0.5 ? [0, 1] : [0, 2]
    }
    if (areTheTwoSecondsEmpty(board[0][1], board[0][2], board[0][0], botPlayer)) {
        return Math.random() < 0.5 ? [0, 2] : [0, 0]
    }
    if (areTheTwoSecondsEmpty(board[0][2], board[0][1], board[0][0], botPlayer)) {
        return Math.random() < 0.5 ? [0, 1] : [0, 0]
    }
    // second row
    if (areTheTwoSecondsEmpty(board[1][0], board[1][1], board[1][2], botPlayer)) {
        return Math.random() < 0.5 ? [1, 1] : [1, 2]
    }
    if (areTheTwoSecondsEmpty(board[1][1], board[1][2], board[1][0], botPlayer)) {
        return Math.random() < 0.5 ? [1, 2] : [1, 0]
    }
    if (areTheTwoSecondsEmpty(board[1][2], board[1][1], board[1][0], botPlayer)) {
        return Math.random() < 0.5 ? [1, 1] : [1, 0]
    }

    // third row
    if (areTheTwoSecondsEmpty(board[2][0], board[2][1], board[2][2], botPlayer)) {
        return Math.random() < 0.5 ? [2, 1] : [2, 2]
    }
    if (areTheTwoSecondsEmpty(board[2][1], board[2][2], board[2][0], botPlayer)) {
        return Math.random() < 0.5 ? [2, 2] : [2, 0]
    }
    if (areTheTwoSecondsEmpty(board[2][2], board[2][1], board[2][0], botPlayer)) {
        return Math.random() < 0.5 ? [2, 1] : [2, 0]
    }



    // columns
    // first column
    if (areTheTwoSecondsEmpty(board[0][0], board[1][0], board[2][0], botPlayer)) {
        return Math.random() < 0.5 ? [1, 0] : [2, 0]
    }
    if (areTheTwoSecondsEmpty(board[1][0], board[2][0], board[0][0], botPlayer)) {
        return Math.random() < 0.5 ? [2, 0] : [0, 0]
    }
    if (areTheTwoSecondsEmpty(board[2][0], board[1][0], board[0][0], botPlayer)) {
        return Math.random() < 0.5 ? [1, 0] : [0, 0]
    }

    // second row [0,1] [1,1] [2,1]
    if (areTheTwoSecondsEmpty(board[0][1], board[1][1], board[2][1], botPlayer)) {
        return Math.random() < 0.5 ? [1, 1] : [2, 1]
    }
    if (areTheTwoSecondsEmpty(board[1][1], board[2][1], board[0][1], botPlayer)) {
        return Math.random() < 0.5 ? [2, 1] : [0, 1]
    }
    if (areTheTwoSecondsEmpty(board[2][1], board[1][1], board[0][1], botPlayer)) {
        return Math.random() < 0.5 ? [1, 1] : [0, 1]
    }


    // third row [0,2] [1,2] [2,2]
    if (areTheTwoSecondsEmpty(board[0][2], board[1][2], board[2][2], botPlayer)) {
        return Math.random() < 0.5 ? [1, 2] : [2, 2]
    }
    if (areTheTwoSecondsEmpty(board[1][2], board[2][2], board[0][2], botPlayer)) {
        return Math.random() < 0.5 ? [2, 2] : [0, 2]
    }
    if (areTheTwoSecondsEmpty(board[2][2], board[1][2], board[0][2], botPlayer)) {
        return Math.random() < 0.5 ? [1, 2] : [0, 2]
    }

    // diaglonal left
    if (areTheTwoSecondsEmpty(board[0][0], board[1][1], board[2][2], botPlayer)) {
        return Math.random() < 0.5 ? [1, 1] : [2, 2]
    }
    if (areTheTwoSecondsEmpty(board[1][1], board[2][2], board[0][0], botPlayer)) {
        return Math.random() < 0.5 ? [0, 0] : [2, 2]
    }
    if (areTheTwoSecondsEmpty(board[2][2], board[1][1], board[0][0], botPlayer)) {
        return Math.random() < 0.5 ? [1, 1] : [0, 0]
    }

    // diaglonal right [0,2] [1,1] [2,0]
    if (areTheTwoSecondsEmpty(board[0][2], board[1][1], board[2][0], botPlayer)) {
        return Math.random() < 0.5 ? [1, 1] : [2, 0]
    }
    if (areTheTwoSecondsEmpty(board[1][1], board[0][2], board[2][0], botPlayer)) {
        return Math.random() < 0.5 ? [0, 2] : [2, 0]
    }
    if (areTheTwoSecondsEmpty(board[2][0], board[1][1], board[0][2], botPlayer)) {
        return Math.random() < 0.5 ? [1, 1] : [0, 2]
    }
    return null
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  function getRandomBox(board) {
    var i = 0
    libre = []
    for(var i = 0 ; i < 3 ; i++){
        for(var m = 0 ; m < 3 ; m++){
            if(board[i][m] == ''){
                libre.push([i,m])
            }
        }
    }
    if (libre.length == 0){
        return null
    } else {
        return libre[getRandomIntInclusive(0,libre.length-1)]
    }
}
function bot(board,player,otherPlayer){

    move = tryToGetTheThird(board,player)
    libres = []
    if(move==null){
        move=blockTheThird(board,otherPlayer)
        if(move==null){
            move = tryToMove(board,player)
            if(move == null){
                move = getRandomBox(board)
            }
        }
    }
    return move
}




var isRunning,nb_moves,board,botPlayer,humainPlayer,isBotTurn

function setup(){
    isRunning = true
    isBotTurn = true
    nb_moves = 0
    board = initBoard()
    botPlayer = Math.random() < 0.5 ? 'O' : 'X'
    if(botPlayer =='O'){
        humainPlayer='X'
    } else{
        humainPlayer='O'
    }
    for(var i = 1; i <= 9 ; i++ ){
        document.getElementById(i).innerHTML  = ''
    }
    document.getElementById('win').innerHTML = ''
    // make the first move
    makeBotMove(board,botPlayer,humainPlayer)
}

function makeBotMove(board,botPlayer,humainPlayer){
    index = bot(board,botPlayer,humainPlayer)
    console.log(index,index[0],index[1])
    if(index != null && isMovePossible(board,index[0],index[1]) && isRunning){
            makeMove(board,botPlayer,index[0],index[1],index[0]*3+index[1]+1)
        nb_moves++
        isBotTurn = false
        if(isCurrentPlayerWinning(board,index[0],index[1])){
            document.getElementById('win').innerHTML = "You lost"
            isRunning = false
        }
    }
}
document.getElementById("reset").addEventListener("click", function(){
    setup()
  });

$(function () {
    $('table#board td').on('click', function () {
        console.log(isBotTurn)
        box = this.id;
        boxInt = parseInt(box)
        var n = Math.floor((boxInt-1)/3)
        var m = (boxInt-1)%3
        if(hasFreeSpace(nb_moves) && isRunning && !isBotTurn){
            if(isMovePossible(board,n,m)){
                makeMove(board,humainPlayer,n,m,box)
                nb_moves += 1
                isBotTurn = true
                if(isCurrentPlayerWinning(board,n,m)){
                    document.getElementById('win').innerHTML = "you won !!"
                    isRunning = false
                }
            }
        }
        makeBotMove(board,botPlayer,humainPlayer)
        
    });
});