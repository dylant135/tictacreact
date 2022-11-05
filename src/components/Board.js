import React from "react";

export default function Board(props) {

    return (
        <div className="container">
            <div className="square" id='0' onClick={props.handleClick}></div>
            <div className="square" id='1' onClick={props.handleClick}></div>
            <div className="square" id='2' onClick={props.handleClick}></div>
            <div className="square" id='3' onClick={props.handleClick}></div>
            <div className="square" id='4' onClick={props.handleClick}></div>
            <div className="square" id='5' onClick={props.handleClick}></div>
            <div className="square" id='6' onClick={props.handleClick}></div>
            <div className="square" id='7' onClick={props.handleClick}></div>
            <div className="square" id='8' onClick={props.handleClick}></div>
        </div>
    )
}