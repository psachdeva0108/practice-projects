import { Stack, ImageList, ImageListItem } from "@mui/material";
export default function MuiImageList() {
    return (
        <Stack spacing={4}>
            <ImageList
            sx={{width: 500, height: 450}}
            cols={3}
            rowHeight={164}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}? w=164&h = 164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
        </Stack>
    )
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f', title: 'Fern'

    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25', title: 'Mushrooms'

    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9674779a11af',
        title: 'Tomatobasil'
    }


]