export default (state = [], action) => {
    switch (action.type) {
        case  'DELETE_MOVIE_REQUEST':
            return [...action.payload];
        default:
            return state;
    }
}
