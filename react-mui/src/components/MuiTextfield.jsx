import { InputAdornment, Stack, TextField,  } from "@mui/material"
import { useState } from "react"
export default function MuiTextfiled(){
    const [value, setValue] = useState('')
    return(
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <TextField label='Name' variant="outlined"/>
                <TextField label='Name' variant="filled"/>
                <TextField label='Name' variant="standard"/>
            </Stack>
             <Stack direction="row" spacing={2}>
                <TextField label='Form Input' required value={value} onChange={(e) => setValue(e.target.value)} error={!value} helperText={!value ? 'Required' : 'don not share password' }/>
                  <TextField label='Form Input' helperText='do not share password' disabled/>
                    <TextField label='Form Input' InputProps ={{readOnly: true}}/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Amount' slotProps={{
                    input : {startAdornment: (<InputAdornment position="start">$</InputAdornment>)},
                }} />
                  <TextField label='Weight' slotProps={{
                    input: {endAdornment: (<InputAdornment position="end">kg</InputAdornment>)},
                }} />
            </Stack>
        </Stack>
    )
}