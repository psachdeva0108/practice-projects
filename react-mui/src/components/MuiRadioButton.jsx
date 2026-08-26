import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from "@mui/material";
export default function MuiRadioButton(){
    return(
        <Box>
            <FormControl>
                <FormLabel id = 'job-experience-group-label'>
                    years of experience 
                </FormLabel>
                <RadioGroup name="job-ex[erience-group" aria-labelledby="job-experience-group-label">
                    <FormControlLabel control={<Radio/>} label='0-2' value='0-2'/>
                    <FormControlLabel control={<Radio/>} label='3-6' value='3-6'/>
                    <FormControlLabel control={<Radio/>} label='6-10' value='6-10'/>
                </RadioGroup>
            </FormControl>
        </Box>
    )
}