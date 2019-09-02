import axios from 'axios'

const Notes = {
    getAllNotes: _ => axios.get('/notes'),
    getAllNotesByPO: poId => axios.get(`/notes/po/${poId}`),
    getNoteByUser: uId => axios.get(`/notes/${uId}`),
    postNote: po => axios.post('/notes', po),
}

export default Notes