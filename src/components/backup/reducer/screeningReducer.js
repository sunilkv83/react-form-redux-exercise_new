export const screeningReducer = (state , action) => {
    // if (localStorage.getItem('screeningData') == null)
    //     localStorage.setItem('screeningData', JSON.stringify([]))

    var list = [];//JSON.parse(localStorage.getItem('screeningData'))
    switch (action.type) {
        case 'INSERT':
            list.push(action.payload)
          //  localStorage.setItem('screeningData', JSON.stringify(list))
            return list;
        default:
        return state;
    }
}

export default screeningReducer;