import { Stack } from "@mui/material";
import {LoadingButton} from '@mui/lab'
export default function MuiLoadingButton(){
    return(
        <Stack spacing={2} direction='row'>
            <LoadingButton variant="utlined">Submit</LoadingButton>
            <LoadingButton loading variant="utlined">Submit</LoadingButton>
        </Stack>
    )
}