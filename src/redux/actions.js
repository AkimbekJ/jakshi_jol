import axios from "axios"

const URL = 'http://localhost:4000/tests'


export function getQuestion(id){
    return async (dispatch) => {
        const { data } = await axios(`${URL}/${id}`)
        dispatch({
            type: 'GET_QUESTION',
            payload: data
        })
    }
}