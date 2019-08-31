import axios from 'axios'

const PO = {
    getAll: _ => axios.get('/purchaseorder'),
    getPObyUser: uId => axios.get(`/purchaseorder/${uId}`),
    postOne: po => axios.post('/purchaseorder', po),
    routeUpdate: (id, route) => axios.put(`/purchaseorder/route/${id}`, route)
}

export default PO
 