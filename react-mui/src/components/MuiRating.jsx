import { Rating, Stack } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function MuiRating(){
    return(
        <Stack spacing={2}>
            <Rating precision={0.5} size="large" icon={<FavoriteIcon fontSize="inherit"/>} emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>} highlightSelectedOnly/>
        </Stack>
    )
}