import { Stack, Avatar } from "@mui/material";
export default function MuiAvatar(){
    return(
        <Stack spacing={4}>
            <Stack direction='row' spacing={1}>
                <Avatar>bw</Avatar>
                <Avatar>bw</Avatar>
            </Stack>
        </Stack>
    )
}