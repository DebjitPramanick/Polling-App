import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import "./Popup.css"
import PollContainer from '../PollContainer/PollContainer';

const Popup = ({setPopup, polls}) => {

    console.log(polls)
    
    return (
        <div className="popupScreen">
            <div className="popup">
                <CancelIcon className="cancel" onClick={() => setPopup(false)} />
                <h3>Your Polls ({polls.length})</h3>
                <PollContainer polls={polls} controls={true} />

            </div>
        </div>
    )
}

export default Popup
