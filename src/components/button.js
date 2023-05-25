import React, { Component } from 'react'
import { commandIcon } from '../assets/icons'
import './component.css'

function Button1(props) {
    return (
        <div className='button1' onClick={()=>props.onClick()}>
            <div >{props.title}</div>
            <div>
                <span style={{borderBottom:'1px solid white'}}> (
                <img src={commandIcon} style={{ height: '10px', width: '10px' }} />
                <text style={{ fontSize: '20px' }}> &nbsp;s</text>)
                </span>
               
            </div>

        </div>

    )
};



function Button2(props) {
    return (
        <div className='button2' onClick={() => props.onClick()} >
            <div > {props.title} </div>
            <text style={{ color: 'palevioletred', textDecoration: 'underline',
        marginTop:'6px'}}>(ESC)</text>
        </div>
    )
}

export {
    Button1,
    Button2
}