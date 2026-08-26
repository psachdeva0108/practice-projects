import { Box, FormControlLabel, Checkbox } from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
export default function MuiCheckbox(){
    return(
        <Box>
            <Box>
                <FormControlLabel label='i accept terms and condition' control={<Checkbox/>}/>
            </Box>
            <Box>
                <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>}/>
            </Box>
        </Box>
    )
}