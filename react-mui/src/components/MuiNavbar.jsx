import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
export default function MuiNavabr(){
    return(
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge='start' color="inherit" aria-label="logo">
                    <CatchingPokemonIcon/>
                </IconButton>
                <Typography variant="h6" component='div' sx={{flexGrow: 1}}>
                    Pokemonapp
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Features</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}