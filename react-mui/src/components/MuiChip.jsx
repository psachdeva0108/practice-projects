import { Stack, Chip, Avatar } from "@mui/material";
export default function MuiChip(){
    return(
        <Stack direction='row' spacing={1}>
            <Chip label='chip' variant="outlined" avatar={<Avatar>v</Avatar>}/>
            <Chip label='delete' color="error" onclick={() => alert('clicked')} onDelete={() => alert('delete handler called')}/>
        </Stack>
    )
}