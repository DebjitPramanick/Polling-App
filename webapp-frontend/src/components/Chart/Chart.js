import React from 'react'
import {Pie} from 'react-chartjs-2'
import "./Chart.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const color = () => {
    return ('#'+ Math.random().toString().slice(2,8))
}

const Chart = ({poll}) => {

    const data = {
        lebels: poll.options.map( op => op.option),
        dataset: [
            {
                label: poll.question,
                backgroundColor: poll.options.map(op => color()),
                borderColor: '#323643',
                data: poll.options.map(op=>op.votes)
            }
        ]
    }

    console.log(data)

    return (
        <div>
            <div className="dropdown">
                Show stats
                <ExpandMoreIcon />
            </div>
            <Pie data={data}/>
        </div>
    )
}

export default Chart
