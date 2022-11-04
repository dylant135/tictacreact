import React from "react";
import Board from "./Board";

export default function Game(props) {
    const [turn, setTurn] = React.useState('X')
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

    for(let i = 0; i < winConditions.length; i++) {
        let condition = winConditions[i]
        let conditionA = winner[condition[0]]
        let conditionB = winner[condition[1]]
        let conditionC = winner[condition[2]]

        if(conditionA === conditionB && conditionC === conditionA && conditionA !== '') {
            console.log(conditionA + ' won')
        }
    }
                         
    return (
        <div>
            <div className="turn">{turn}'s Turn</div>
            <Board 
            turn={turn}
            setTurn={setTurn}
            winner={winner}
            setWinner={setWinner}
            />
        </div>
    )
}