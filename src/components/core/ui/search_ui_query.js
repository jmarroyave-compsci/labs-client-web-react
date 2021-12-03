import React from 'react';
import Autosuggest from 'react-autosuggest';
import { withStyles } from "@mui/styles";

const styles = [];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestionValue(suggestion) {
  return suggestion;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion}</span>
  );
}

class Query extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };    
    this.storeInputReference = this.storeInputReference.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.fetchSuggest = this.fetchSuggest.bind(this);
    this.triggerOnChange = this.triggerOnChange.bind(this);
  }
  
  componentDidMount() {
    this.input.focus();
    if(this.props.value){
      this.setState({value: this.props.value});      
    }
  }
  
  onKeyDown(event){
    if(event.keyCode === 13){
      event.preventDefault();      
      this.triggerOnChange(event);
    }
  }

  onChange(event, { newValue, method }) {
    this.setState({value: newValue});
  };

  triggerOnChange(e){
    this.setState({value: e.target.value}, this.props.onChange(e));
  } 
    
  onSuggestionsFetchRequested({ value }) {
    const escapedValue = escapeRegexCharacters(value.trim());
    if (escapedValue === '') {
      return [];
    }   
    this.fetchSuggest(escapedValue);
  };

  fetchSuggest(value){
    var $this = this;
    const params = { 
        params: {
        q: value,
        }
    };

    this.props.server.get('/google/suggest', params, function(response){
      $this.setState({
        suggestions: response
      });
    })
  }

  onSuggestionsClearRequested(){
    this.setState({
      suggestions: []
    });
  };
  
  storeInputReference(autosuggest){
    if (autosuggest !== null) {
      this.input = autosuggest.input;
    }
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      value,
      onChange: this.onChange,
      onKeyDown: this.onKeyDown
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        ref={this.storeInputReference}
        onChange={this.triggerOnChange} /> 
    );
  }
}

export default withStyles(styles)(Query);