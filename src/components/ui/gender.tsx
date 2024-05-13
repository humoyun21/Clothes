import FormControlLabel from '@mui/material/FormControlLabel';

import RadioGroup from '@mui/material/RadioGroup';

import FormLabel from '@mui/material/FormLabel';

import Radio from '@mui/material/Radio';

import FormControl from '@mui/material/FormControl';


export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Male" />
        <FormControlLabel value="male" control={<Radio />} label="Female" />
      </RadioGroup>
    </FormControl>
  );
}
