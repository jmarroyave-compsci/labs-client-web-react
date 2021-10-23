import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Autosuggest from 'react-autosuggest';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from './paper';

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;
  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input,
        },
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
          <span style={{ fontWeight: 500 }}>
            {suggestion}
          </span>
      </div>
    </MenuItem>
  );
}

var loading = false;
var lastQuery = '';
var lastResponse = [];

async function getSuggestions({value}, owner) {
  const inputValue = value.toString().trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  if(inputLength === 0) {
    lastResponse = [];
    return lastResponse;
  }
  if(inputValue == lastQuery) return lastResponse;

  lastQuery = inputValue;
  if(loading) return lastResponse;
  
  lastResponse = await fetchSuggestions(inputValue, owner);
  return lastResponse;
}

async function fetchSuggestions(value, owner){
  const self = owner;
  loading = true;
  return new Promise((resolve, reject)=>{
    setTimeout(async ()=>{
      if(!self.props.onSearchSuggestions) return;
      const data = await self.props.onSearchSuggestions(lastQuery);
      loading = false;
      resolve((data) ? data : []);
    }, 750);
  });
}

function getSuggestionValue(suggestion) {
  return suggestion;
}

const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.65),
    },
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(5),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    textShadow: '1px 1px black',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(5),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '4rem',
      '&:focus': {
        width: '8rem',
      },
    },
    [theme.breakpoints.up('sm')]: {
      width: '6rem',
      '&:focus': {
        width: '10rem',
      },
    },
    [theme.breakpoints.up('md')]: {
      width: '8rem',
      '&:focus': {
        width: '12rem',
      },
    },
  },  
  root: {
    height: 250,
    flexGrow: 1,
  },
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(0),
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
});

class Search extends React.Component {
  constructor(){
    super();

    this.state = {
      single: '',
      suggestions: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSuggestionsFetchRequested = this.handleSuggestionsFetchRequested.bind(this);
    this.handleSuggestionsClearRequested = this.handleSuggestionsClearRequested.bind(this);
    this.handleSuggestionSelected = this.handleSuggestionSelected.bind(this);
    this.handleResultSelected = this.handleResultSelected.bind(this);
  }

  async handleSuggestionsFetchRequested( value ){
    this.setState({last : value, suggestions : await getSuggestions(value, this)});
  }

  handleSuggestionsClearRequested(){
    this.setState({suggestions: [], });
  }

  handleChange( event, { newValue, method }) {
    //console.log("--", method, newValue)
    switch(method){
      case "enter":
        //console.log(newValue, this.state.single);
        this.handleResultSelected(newValue);
        break;
      default:
        this.setState({single : newValue});  
        break;
    }
    
  }

  handleSuggestionSelected(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method}){
    this.handleResultSelected(suggestionValue);
  }

  handleResultSelected(query){
    if(!this.props.onSearchQuery) return;
    this.props.onSearchQuery(query);
  }

  render() {
    const self = this;
    const { classes } = this.props;

    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.suggestions,
      getSuggestionValue: getSuggestionValue,
      renderSuggestion: renderSuggestion,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      onSuggestionSelected: this.handleSuggestionSelected,
    };

    const theme = {
      container: classes.container,
      suggestionsContainerOpen: classes.suggestionsContainerOpen,
      suggestionsList: classes.suggestionsList,
      suggestion: classes.suggestion,
    };

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes: {
              root: classes.inputRoot,
              input: classes.inputInput,
            },
            placeholder: 'Search',
            value: this.state.single,
            onChange: this.handleChange,
          }}
          theme={theme}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
      </div>
    );
  }
}


Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
