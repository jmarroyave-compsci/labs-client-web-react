import Server from 'lib/server';
import DataIndex from 'config/data-index';

export const TRENDS_FETCHED = 'TRENDS_FETCHED';
export const TRENDS_LOADING = 'TRENDS_LOADING';
export const TRENDS_ERROR = 'TRENDS_ERROR';

export const TrendsFetched = (data) => ({type: TRENDS_FETCHED,payload: data});
export const TrendsLoading = (data) => ({type: TRENDS_LOADING});
export const TrendsError = (data) => ({type: TRENDS_ERROR,payload: data});

export const fetchTrends = () => (dispatch) => {
    dispatch(TrendsLoading());
    const uri = DataIndex.get('trends', {});
    const params = {};
    const server = new Server(); 
    server.getp(uri, params)
    .then((data)=> {
        dispatch(TrendsFetched(data));
    })
    .catch((err)=>{
        dispatch(TrendsError(err));
    });         

}

export const TrendsReducer = (state = { loading: true, err: null, data: {}}, action) => {
    switch (action.type) {
        case TRENDS_FETCHED:
            return {...state, loading: false, data: action.payload};
        case TRENDS_LOADING:
            return {...state, loading: true}
        case TRENDS_ERROR:
            return {...state, loading: false, err: action.payload};
        default:
            return state;
    }
}