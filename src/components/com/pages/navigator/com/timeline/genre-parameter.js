import React, { useContext, useMemo } from 'react'
import Stack from 'com/ui/stack';
import { ComponentContext } from '../../context';
import { getGenres } from 'data/enums/genres';
import { Item } from 'style/component';

const GenresParameters = (props) => {
    const context = useContext( ComponentContext );
    const genres = useMemo( ()=> getGenres({all : false}), [])
    const current = context.state.parameters.genre
    const onClick = ( p ) => context.dispatch( { type: "CHANGE_GENRE", payload: p }) 

    return (
      <Stack direction='row' spacing={2}>
        <div>{current}</div>
        <Stack direction='row' spacing={2} style={{ overflowX: "scroll", margin: '0 1rem'}}>
          { genres.map( (g,idx) => 
            <Item key={g} onClick={ () => onClick(g) } selected={(current === g)}>{g}</Item>
          )}
        </Stack>
      </Stack>
    )

}

export default GenresParameters