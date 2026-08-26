import { Stack, Badge } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
export default function MuiBadge(){
    return(
        <Stack spacing={2} direction='row'>
            <Badge badgeContent={5} color="primary">
                <MailIcon/>
            </Badge>
             <Badge badgeContent={5} color="primary" invisible={true}>
                <MailIcon/>
            </Badge>
        </Stack>
    )
}