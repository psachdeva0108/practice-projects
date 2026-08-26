import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";
export default function MuiCard(){
    return(
        <Box width='300px'>
            <Card>
                <CardMedia 
                component='img'
                height='140'
                image='https://plus.unsplash.com/premium_photo-1787232053982-033d0eaa9ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
                alt='image'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component='div'>
                        React 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et corrupti molestiae aut quod tempora mollitia eum aliquid, veniam dolores impedit harum, natus illum praesentium officiis nisi asperiores est atque cumque vitae, ut esse! Labore.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">share</Button>
                    <Button size="small">learn  more</Button>
                </CardActions>
            </Card>
        </Box>
    )
}