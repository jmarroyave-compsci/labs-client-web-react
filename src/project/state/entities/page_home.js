import Server from 'lib/server';
import DataIndex from 'config/data-index';

export const PAGEHOME_FETCHED = 'PAGEHOME_FETCHED';
export const PAGEHOME_LOADING = 'PAGEHOME_LOADING';
export const PAGEHOME_ERROR = 'PAGEHOME_ERROR';

export const PagehomeFetched = (data) => ({type: PAGEHOME_FETCHED,payload: data});
export const PagehomeLoading = (data) => ({type: PAGEHOME_LOADING});
export const PagehomeError = (data) => ({type: PAGEHOME_ERROR,payload: data});

export const fetchPageHome = () => (dispatch) => {
    dispatch(PagehomeLoading());
    const uri = DataIndex.get('page_home', {});
    const params = {};
    const server = new Server(); 
    server.getp(uri, params)
    .then((data)=> {
        dispatch(PagehomeFetched(data));
    })
    .catch((err)=>{
        dispatch(PagehomeError(err));
    });         

}

export const PageHomeReducer = (state = { loading: true, err: null, data: {}}, action) => {
    switch (action.type) {
        case PAGEHOME_FETCHED:
            return {...state, loading: false, data: action.payload};
        case PAGEHOME_LOADING:
            return {...state, loading: true}
        case PAGEHOME_ERROR:
            return {...state, loading: false, err: action.payload};
        default:
            return state;
    }
}