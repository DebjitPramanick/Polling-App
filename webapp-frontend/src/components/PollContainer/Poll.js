import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import { deletePoll, vote } from '../../utils/redux/Actions';
import DeleteIcon from '@material-ui/icons/Delete';

const Poll = ({ poll, controls }) => {
    const dispatch = useDispatch()
    const authUser = useSelector(state => state.auth)
    const {isAuth, user} = authUser


    const [id, setId] = useState('')
    let date = new Date(poll.created);
    const pollDate = `${date.getUTCDate()} ${date.toLocaleString('default', { month: 'short' })}, ${date.getUTCFullYear()}`

    const handleVote = (optionId, option) =>{
        dispatch(vote(poll._id, {answer : option}))
        setId(optionId)
    }

    const handleDelete = () =>{
        alert(poll._id)
        dispatch(deletePoll(poll._id))
    }


    return (
        <div className="card-container">
            <div className="detail-container">
                {!controls && (
                    <div className="createdBy">
                        <AccountCircleIcon className="icon" />
                        Created by {poll.user.username}
                    </div>
                )}
                <div className="createdOn">
                    <QueryBuilderIcon className="icon" />
                    Created on {pollDate}
                </div>
            </div>

            <div className="question">
                {poll.question}
            </div>
            <div className="optionsContainer">
                {isAuth ? poll.options.map((op, i) => (
                    <div className={`option ${(op._id == id) ? 'voted' : ''}`} key={op._id}
                        onClick={() => handleVote(op._id, op.option)}>
                        {op.option}
                    </div>
                )) : <p className="simple-message">You have to login to vote.</p>}
            </div>

            <div className="votes">
                <ThumbsUpDownIcon className="icon"/>
                Voted by {poll.voted.length} people
            </div>

            {controls && (
                <div className="delet-btn" onClick={handleDelete}>
                    <DeleteIcon className="icon" />
                </div>
            )}
        </div>
    )
}

export default Poll
