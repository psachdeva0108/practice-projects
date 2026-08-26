import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
export default function MuiBreadCrumb(){
    return(
        <Box m={2}>
            <Breadcrumbs aria-label='breadcrumb'>
            <Link underline="hover" href='#'>
            home
            </Link>
            <Link underline="hover" href='#'>
            home
            </Link>
            <Link underline="hover" href='#'>
            home
            </Link>
            <Typography color="text.primary">shoes</Typography>
            </Breadcrumbs>
        </Box>
    )
}