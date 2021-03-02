import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./InputBox.css"
import CancelIcon from '@material-ui/icons/Cancel';
import { createPoll } from '../../utils/redux/Actions';

const InputBox = ({ setIp }) => {

    const dispatch = useDispatch();

    const [question, setQuestion] = useState('')
    const [options, setOptions] = useState([])
    const [fields, setFields] = useState([])
    const [valid, setValid] = useState(true)

    const addFields = () => {
        if (fields.length < 4) {
            setFields((f) => [...fields, f])
        }
        if(fields.length === 3){
           setValid(false) 
        }
        

    }

    const handleChange = (e, i) => {
        console.log(e.target.value)
        options[i] = e.target.value
        setOptions(options)
    }

    const handleSubmit = () => {
        if (question && options) {
            dispatch(createPoll({
                question,
                options
            }))
            setIp(false)
        }
    }



    return (
        <div className="popupScreen">
            <div className="popup">
                <CancelIcon className="cancel" onClick={() => setIp(false)} />
                <h3>Create Poll</h3>

                <div className="input-field">
                    <label htmlFor="question">Enter question:</label>
                    <input placeholder="Enter question" onChange={(e) => setQuestion(e.target.value)}></input>
                </div>

                <div className="options-fields">
                    <label htmlFor="question">Enter options:</label>

                    <div className="field-container">
                        {fields && fields.map((f, i) => (
                            <input placeholder="Enter option"
                                onChange={(e) => handleChange(e, i)} />
                        ))}

                    </div>

                    {valid && (
                        <button onClick={addFields}>
                            Add Options
                        </button>
                    )}

                </div>

                <div className="submit-btn" onClick={handleSubmit}>
                    Submit
                </div>


            </div>
        </div>
    )
}

export default InputBox
