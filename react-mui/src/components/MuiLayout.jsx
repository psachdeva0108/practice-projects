import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

export default function MuiLayout() {
  return (
    <Paper sx={{ padding: '32px' }} elevation={4}>
      <Box sx={{ p: 4 }}>
        <Stack
          sx={{ border: "1px solid black", mb: 4 }}
          direction="row"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Box
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              height: "100px",
              width: "100px",
              padding: "16px",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}
          >
            Codevolution
          </Box>

          <Box
            sx={{
              backgroundColor: "success.light",
              height: "100px",
              width: "100px",
              padding: "16px",
            }}
          />
        </Stack>

        <Grid container rowSpacing={2} columnSpacing={1}>
          <Grid item xs={3}>
            <Box sx={{ bgcolor: "primary.light", p: 2 }}>Item 1</Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ bgcolor: "primary.light", p: 2 }}>Item 2</Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ bgcolor: "primary.light", p: 2 }}>Item 3</Box>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ bgcolor: "primary.light", p: 2 }}>Item 4</Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}