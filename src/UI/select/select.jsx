import React from 'react';
import Select from '@material-ui/core/Select'
import { FormControl, InputLabel } from '@material-ui/core';

const MySelect = ({ options, defaultValue, value, onChange }) => {

  return (
    <FormControl variant="outlined" size="small">
      <InputLabel htmlFor="filled-age-native-simple">Сортировка</InputLabel>
      <Select native value={value} onChange={event => { onChange(event.target.value) }}>
        <option value="">{defaultValue}</option>
        {options.map(p => <option key={p.value} value={p.value}>{p.name}</option>)}
      </Select>
    </FormControl>
  );
}
export default MySelect;