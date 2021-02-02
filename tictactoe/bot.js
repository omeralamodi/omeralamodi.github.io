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

// board = [
//     ['', '', ''],
//     ['', '', ''],
//     ['', '', '']
// ]
// var bot1 = 'X'
// var bot2 = 'O'
// var i = 0
// while(i< 9){
//     index = bot(board,bot1,bot2)
//     if(index != null){
//         board[index[0]][index[1]] = bot1
//     }
//     console.log(board)
//     i++
//     index = bot(board,bot2,bot1)
//     if(index != null){
//         board[index[0]][index[1]] = bot2
//     }
//     i++
//     console.log(board)
// }