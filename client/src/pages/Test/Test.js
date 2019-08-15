import React from 'react'
import User from '../../utils/user.js'

const Test = _ => {

    User.getAll()
        .then(({ data }) => {
            console.log(data)
        })
        .catch(e => console.error(e))

}


export default Test