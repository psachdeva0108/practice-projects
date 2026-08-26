import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function MuiAccordian(){
    return(
        <div>
            <Accordion>
                <AccordionSummary
                id="panel1-header"
                aria-controls="panel1-content"
                expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat necessitatibus ut voluptate eligendi quo odit sapiente, optio ipsam porro. Sint, tempore, error tenetur, aut est optio obcaecati provident odio magni totam deserunt quis numquam?</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}