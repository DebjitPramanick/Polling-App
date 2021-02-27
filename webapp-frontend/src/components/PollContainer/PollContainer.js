import React from 'react'
import Poll from './Poll'
import "./Poll.css"
import UtilBox from './UtilBox'

const PollContainer = ({ polls, controls}) => {

    return (
        <div className="poll-container">
            {polls ? polls.map(p => (
                <Poll poll={p} key={p._id} controls={controls} />
            )) : <p>No polls found.</p>}
        </div>
        
    )
}

export default PollContainer
