import { Box, List, ListItem, ListItemText } from "@mui/material";
export default function MuiListText(){
    return(
        <Box sx={{width:'400px', bgcolor: '#efefef'}}>
            <List>
                <ListItem>
                    <ListItemText primary='list item 1'/>
                </ListItem>
                 <ListItem>
                    <ListItemText primary='list item 2'/>
                </ListItem>
                 <ListItem>
                    <ListItemText primary='list item 3'/>
                </ListItem>
            </List>
        </Box>
    )
}