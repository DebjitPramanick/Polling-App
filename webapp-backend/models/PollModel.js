import mongoose from 'mongoose'


const OptionSchema = new mongoose.Schema({
    option: String,
    votes: {
        type: Number,
        default: 0
    }
})

const PollSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    question: String,
    options: [OptionSchema],
    voted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    created: {
        type: Date,
        default: Date.now
    }
})

const PollModel = mongoose.model('Poll', PollSchema)
export default PollModel