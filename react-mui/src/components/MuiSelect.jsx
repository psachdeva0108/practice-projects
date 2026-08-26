import { Box, TextField, MenuItem } from "@mui/material"
import { useState } from "react"
export default function MuiSelect() {
    const [country, setCountry] = useState('');
    console.log({ country })
    const handlechange = (event) => {
        setCountry(event.target.value)
    }
    return (
        <Box width='250px'>
            <TextField label='select country' select value={country} onChange={handlechange} fullWidth>
                <MenuItem value="in">India</MenuItem>
                <MenuItem value="us">USA</MenuItem>
                <MenuItem value="uk">UK</MenuItem>
            </TextField>
        </Box>
    )
}