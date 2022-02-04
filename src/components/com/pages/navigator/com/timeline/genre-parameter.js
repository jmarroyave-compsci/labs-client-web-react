import React, { useContext, useMemo } from 'react'
import { ComponentContext } from '../../context';
import { getGenres } from 'data/enums/genres';
import ParameterList from '../parameter-list'

const GenresParameters = (props) => {
    const context = useContext( ComponentContext );
    const genres = useMemo( ()=> getGenres({all : true, unknown: true}), [])
    const current = context.state.parameters.genre
    const onClick = ( p ) => context.dispatch( { type: "CHANGE_GENRE", payload: p }) 

    return (
      <ParameterList 
        borderWidth="0 0 1px 0"
        data={genres} current={current} onClick={onClick}
      />
    )

}

export default GenresParameters