const  initialState ={
    testQuestions: {},

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_QUESTION' : return {
            ...state,testQuestions: action.payload
        }

        default: return state
    }
}