import React, { useState, useMemo } from 'react'
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Parameters( props ){
    const { onChange } = props;

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

    const fData = useMemo(() => fromData(), []);
    const yData = useMemo(() => yearData(), []);

    const [ entity, setEntity ] = useState(fData.find( i => i.id == props.entity ));
    const [ year, setYear ] = useState(yData.find( i => i.id == props.year));

    const handleOnChange = (year, entity) => {
      if (onChange) onChange(year.id, entity.id)
    }

    return (
      <Stack spacing={2}>
        <Autocomplete          
          disableClearable
          options={fData}
          value={entity}
          onChange={(e, value) => {handleOnChange(year, value); setEntity(value)} }
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="From" />}
        />      
        <Autocomplete
          disableClearable
          options={yData}
          value={year}
          onChange={(e, value) => {handleOnChange(value, entity); setYear(value)} }
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Year" />}
        />      
      </Stack>

    )
}


