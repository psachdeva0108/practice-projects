import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
export default function(){
    return(
        <SpeedDial 
        ariaLabel="navigation speed dial"
        sx={{position:'absolute', bottom: 16, right: 16}}
        icon={<SpeedDialIcon/>}
        >
            <SpeedDialAction icon={<ContentCopyOutlinedIcon/>} tooltipTitle='copy'/>
            <SpeedDialAction icon={<PrintIcon/>} tooltipTitle='print'/>
            <SpeedDialAction icon={<ShareIcon/>} tooltipTitle='share'/>
        </SpeedDial>
    )
}