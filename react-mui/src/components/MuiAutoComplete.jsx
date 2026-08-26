import { Stack, Autocomplete, TextField } from "@mui/material";
const skills = ['html', 'js', 'react', 'css']
export default function MuiAutoComplete(){
    return(
        <Stack spacing={2} width = '25px'>
            <Autocomplete  
            options ={skills}
                renderInput = {(params) => <TextField{...params} label='skills'/>} 
                freeSolo
                />
        </Stack>
    )
}