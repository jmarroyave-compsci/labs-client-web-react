import { fetchTrends } from 'state/entities/trends';
import { fetchPageHome } from 'state/entities/page_home';

export const fetchHome = () => (dispatch) => {
	dispatch(fetchPageHome());
    dispatch(fetchTrends());
}