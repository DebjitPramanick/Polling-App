import React from 'react'

const PollContainer = ({polls}) => {



    return (
        <div>
            {polls ? polls.map(p => (
                <p>
                    Polls Fetched
                </p>
            )) : <p>No polls found.</p>}
        </div>
    )
}

export default PollContainer
