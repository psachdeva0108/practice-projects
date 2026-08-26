import {
    Button,
    Stack,
    IconButton,
    ButtonGroup,
    ToggleButtonGroup,
    ToggleButton
} from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

import { useState } from 'react';

export default function Muibutton() {

    const [Formats, setFormats] = useState(null);

    console.log({
        Formats,
    });

    const handleFormatChange = (_event, updateFormats) => {
        setFormats(updateFormats);
    };

    return (
        <div>
            <Stack spacing={4}>

                {/* Basic Buttons */}
                <Stack spacing={2} direction="row">

                    <Button
                        variant="text"
                        href="https://google.com"
                    >
                        text
                    </Button>

                    <Button variant="contained">
                        contained
                    </Button>

                </Stack>


                {/* Button Colors */}
                <Stack spacing={2} direction="row">

                    <Button variant="contained" color="primary">
                        primary
                    </Button>

                    <Button variant="contained" color="secondary">
                        secondary
                    </Button>

                    <Button variant="contained" color="warning">
                        warning
                    </Button>

                    <Button variant="contained" color="info">
                        info
                    </Button>

                    <Button variant="contained" color="error">
                        error
                    </Button>

                    <Button variant="contained" color="success">
                        success
                    </Button>

                </Stack>


                {/* Button Sizes */}
                <Stack spacing={2} direction="row">

                    <Button variant="contained" size="small">
                        small
                    </Button>

                    <Button variant="contained" size="medium">
                        medium
                    </Button>

                    <Button variant="contained" size="large">
                        large
                    </Button>

                </Stack>


                {/* Buttons with Icons */}
                <Stack spacing={2} direction="row">

                    <Button
                        variant="contained"
                        startIcon={<SendIcon />}
                    >
                        Send
                    </Button>

                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                    >
                        Send
                    </Button>

                    <IconButton>
                        <SendIcon />
                    </IconButton>

                </Stack>


                {/* Button Group */}
                <Stack direction="row">

                    <ButtonGroup variant="contained">

                        <Button>
                            left
                        </Button>

                        <Button>
                            center
                        </Button>

                        <Button>
                            right
                        </Button>

                    </ButtonGroup>

                </Stack>


                {/* Toggle Button Group */}
                <Stack direction="row">

                    <ToggleButtonGroup
                        aria-label="text formatting"
                        value={Formats}
                        onChange={handleFormatChange}
                        exclusive
                    >

                        <ToggleButton
                            value="bold"
                            aria-label="bold"
                        >
                            <FormatBoldIcon />
                        </ToggleButton>

                        <ToggleButton
                            value="italic"
                            aria-label="italic"
                        >
                            <FormatItalicIcon />
                        </ToggleButton>

                        <ToggleButton
                            value="underlined"
                            aria-label="underlined"
                        >
                            <FormatUnderlinedIcon />
                        </ToggleButton>

                    </ToggleButtonGroup>

                </Stack>

            </Stack>
        </div>
    );
}