import mongoose from 'mongoose';

const noteScheme = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add title'],
    },
    details: {
        type: String,
        required: [true, 'Please add details'],
    },
}, {
    timestamps: true
});

const note = mongoose.model('Note', noteScheme);
export default note;