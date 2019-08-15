import axios from 'axios'

const User = {
    getAll: _ => axios.get('/users'),
    getOne: id => axios.get(`/users/${id}`)
}

export default User
 