import React from "react";
import Board from "./Board";

export default function Game(props) {
    const [turn, setTurn] = React.useState('X')
    const [play, setPlay] = React.useState(false)
    const [winner, setWinner] = React.useState(
        ['', '', '', '', '', '', '', '', '']
    )

    const winConditions = [[0, 1, 2],
                           [3, 4, 5],
                           [6, 7, 8],
                           [0, 3, 6],
                           [1, 4, 7],
                           [2, 5, 8],
                           [0, 4, 8],
                           [2, 4, 6]]

    let won = ''
    for(let i = 0; i < winConditions.length; i++) {
        let condition = winConditions[i]
        let conditionA = winner[condition[0]]
        let conditionB = winner[condition[1]]
        let conditionC = winner[condition[2]]

        if(conditionA === conditionB && conditionC === conditionA && conditionA !== '') {
            won = conditionA
        }
    }
    
    function handleClick(event) {
        if(won) {
            return
        }
        if(!play) {
            return
        }
        const theSquare = event.target
        const theId = theSquare.id
        setWinner(prevState => {
            prevState[theId] = turn
            return (
                [...prevState]
            )
        })
        if(theSquare.innerText !== '') {
            return
        }
        theSquare.innerText = turn
        setTurn(prevState => {
            if(prevState === 'X') {
                return prevState = 'O'
            } else {
                return prevState = 'X'
            }
        })
    }
                
    function togglePlay() {
        setPlay(true)
    }
    return (
        <div>
            <div className="start">{!play && <button onClick={togglePlay} className='startbtn'>Start</button>}</div>
            {won && <h2 className="win">{won} Won!</h2>}
            {play && !won && <div className="turn">{turn}'s Turn</div>}
            {play && <Board 
            turn={turn}
            setTurn={setTurn}
            winner={winner}
            setWinner={setWinner}
            play={play}
            handleClick={handleClick}
            />}
        </div>
    )
}