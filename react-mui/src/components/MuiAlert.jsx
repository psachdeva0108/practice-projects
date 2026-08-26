import { Stack, Alert } from "@mui/material";
export default function MuiAlert(){
    return(
        <Stack spacing={2}>
            <Alert severity="error"> error alert</Alert>
            <Alert severity="warning"> error alert</Alert>
            <Alert severity="info"> error alert</Alert>
            <Alert severity="success"> error alert</Alert>
        </Stack>
    )
}