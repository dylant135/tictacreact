import React from "react";

export default function Board(props) {
    function handleClick(event) {
        const theSquare = event.target
        if(theSquare.innerText !== '') {
            return
        }
        theSquare.innerText = props.turn
        props.setTurn(prevState => {
            if(prevState === 'X') {
                return prevState = 'O'
            } else {
                return prevState = 'X'
            }
        })
    }

    return (
        <div className="container">
            <div className="square" id='0' onClick={handleClick}></div>
            <div className="square" id='1' onClick={handleClick}></div>
            <div className="square" id='2' onClick={handleClick}></div>
            <div className="square" id='3' onClick={handleClick}></div>
            <div className="square" id='4' onClick={handleClick}></div>
            <div className="square" id='5' onClick={handleClick}></div>
            <div className="square" id='6' onClick={handleClick}></div>
            <div className="square" id='7' onClick={handleClick}></div>
            <div className="square" id='8' onClick={handleClick}></div>
        </div>
    )
}