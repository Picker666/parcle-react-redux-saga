// import 
const initialState = {
    num: 0
};
export default function (state=initialState, action) {
    switch (action.type) {
        case 'TYPE1':
            return { ...state, num: action.num};
        case 'TYPE2':
            return state;
        default:
            return state;
    }
}