import { Box, FormControlLabel, Switch } from "@mui/material";
export default function MuiSwitch(){
    return(
        <Box>
            <FormControlLabel label='dark mode' control={<Switch/>}/>
        </Box>
    )
}