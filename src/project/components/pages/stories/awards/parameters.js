import React from 'react'
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Parameters( props ){
    const { year, entity, onChange } = props;
    const fromData = () => [
      {label: "Movies", id: "movies"},
    ]
    const yearData = () => {
      const now = new Date() 
      var resp = [];
      for(var i = now.getFullYear(); i > 1920 ; i--){
        resp.push({label: i.toString(), id: i.toString()})
      }
      return resp;
    }

    const fData = fromData();
    const yData = yearData();

    const handleOnChange = (year, entity) => {
      if (onChange) onChange(year, entity)
    }

    return (
      <Stack spacing={2}>
        <Autocomplete
          options={fData}
          value={entity}
          onChange={(e, value) => handleOnChange(year, value.id)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="From" />}
        />      
        <Autocomplete
          options={yData}
          value={year}
          onChange={(e, value) => handleOnChange(value.id, entity)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Year" />}
        />      
      </Stack>

    )
}


