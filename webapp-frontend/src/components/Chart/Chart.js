import React, {useState} from 'react'
import { Pie} from 'react-chartjs-2'
import "./Chart.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


const Chart = ({ poll }) => {

    const [open, setOpen] = useState(false)
    const [up, setUp] = useState(false)

    const expand = () =>{
        setOpen(!open)
        setUp(!up)
    }

    const info = {
        labels: poll.options.map(op => op.option),
        datasets: [
            {
                label: poll.question,
                backgroundColor: ['#45B8AC', '#FF6F61', '#92A8D1', '#DD4124'],
                borderColor: '#8B8680',
                data: poll.options.map(op => op.votes)
            }
        ]
    }

    return (
        <div>
            <div className="dropdown" onClick={expand}>
                Show stats
                {up ? <ExpandLessIcon onClick={expand}/>
                    : <ExpandMoreIcon onClick={expand}/>}
                
            </div>
            <div className={`chart-container ${open && 'show'}`}>
                <Pie data={info} />
            </div>

        </div>
    )
}

export default Chart
