import React from 'react';
import './LivePost.css';
import SendIcon from '@material-ui/icons/Send';
import {useState} from 'react';

function LivePost() {

    return (
        <div className="liveChat">
            <input type="text"/>
            <button className="liveChat__button"><SendIcon /></button>
        </div>
    )
}

export default LivePost
