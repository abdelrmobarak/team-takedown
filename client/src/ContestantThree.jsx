import React, { useEffect, useState } from 'react'
import { socket } from './Homepage'
import './Waiting.css'

function ContestantThree(props) {

    var teamMembers;
    useEffect(()=>{ 
        socket.on('game-start',(gameCode)=>{
            if (gameCode == props.roomID){
                props.setShowContestantThree(false)
                props.setShowPlayerPage(true)
            }
        })
        
    if (props.team == 'blue'){
        teamMembers = props.teamBlue.map((name, index) => {
            return <p key={index}>{name}</p>
        })
    }else if (props.team == 'blue'){
        teamMembers = props.teamBlue.map((name, index) => {
            return <p key={index}>{name}</p>
        })
    }
    },[])
    
    return(
        <h1 className='waiting'>Waiting For Host...</h1>
        
    )
}

export default ContestantThree;