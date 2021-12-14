import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { search as searchFetch, fetchSuggestions as searchFetchSuggestions } from 'com/pages/search/automata'

const MIN_QUERY = 3

async function fetchSuggestions(qry, handler) {
  if(!qry || qry.length < MIN_QUERY) return [];

  if(handler){
    return await handler(qry)
  }
}

function onChange(qry, handler) {
  if(!qry || qry.length < MIN_QUERY) return;

  if(handler){
   handler(qry)
  }
}


export default function SearchBox( props ) {
  const appState = useSelector(( state ) => state.app )
  const dispatch = useDispatch();
  const [ loaded, setLoaded ] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [value, setValue] = React.useState(null);
  const loading = open && options.length === 0;

  const onSearchQuery = (qry) => {
    qry = qry.toLowerCase()
    dispatch( searchFetch( { qry : qry } ) )
    setValue("")
  }

  const onSearchSuggestions = async (qry) => {
    qry = qry.toLowerCase()
    var { loading, error, data } = await searchFetchSuggestions( { qry : qry } )
    return data.suggestions;
  }

  React.useEffect(() => {
    let active = true;

    (async () => {
      await setTimeout( async() => {
        var dataSuggestions = await fetchSuggestions(inputValue, onSearchSuggestions);

        if (active) {
          setOptions([...dataSuggestions]);
        }
      }, 1000 * 1)
    })();

    setLoaded(true);

    return () => {
      active = false;
    };
  }, [loading, open, inputValue, onSearchSuggestions.loaded]);


  return (
    <>
      <div style={{display: (loaded) ? 'block' : 'none'}}>
        <Autocomplete
          freeSolo
          clearOnEscape
          sx={{ flexGrow: 1 }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(option, value) => option === value}
          getOptionLabel={(option) => option}
          options={options}
          loading={loading}
          value={value}
          onChange={(event, newValue) => {
            setOptions(newValue ? [newValue, ...options] : options);
            setValue(newValue);
            onChange(newValue, onSearchQuery)
          }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          renderInput={(params) => (
            <TextField
              margin="dense"
              {...params}
              label="Search"
              InputProps={{
                ...params.InputProps,
                type: 'searching',
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      </div>
      <div style={{
          flexGrow: 1, 
          display: (!loaded) ? 'block' : 'none',
          borderRadius: '4px',
          color: 'rgba(0,0,0,0.30)',
          border: '1px solid',
          borderColor: 'rgba(0,0,0,0.25)',
          padding: '1rem',
        }}>
        Search
      </div>
    </>
  );
}

