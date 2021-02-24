import React from 'react'
import Poll from './Poll'
import "./Poll.css"
import UtilBox from './UtilBox'

const PollContainer = ({polls}) => {

    return (
        <div className="main-container">
            <div className="poll-container">
                {polls ? polls.map(p => (
                    <Poll poll={p} key={p._id} />
                )) : <p>No polls found.</p>}
            </div>
            <UtilBox />
        </div>
        
    )
}

export default PollContainer
