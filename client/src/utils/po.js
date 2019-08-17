import axios from 'axios'

const PO = {
    getAll: _ => axios.get('/purchaseorder'),
    getOne: id => axios.get(`/purchaseorder/${id}`),
    postOne: po => axios.post('/purchaseorder', po)
}

export default PO
 