import * as React from "react";
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Home } from "./dashboard";
import { NavAppBar } from "../../components/appBar";
import { NavDrawer } from "../../components/drawer";
import { Albion } from "../albion";
import { BarnetStreet } from "../burnettStreet";
import { AppContext } from "../../libs/context/appContext";

function DashboardContent() {
  const { theme } = React.useContext(AppContext);
  const [open, setOpen] = React.useState(true);

  const mdTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <NavAppBar open={open} toggleDrawer={() => setOpen(!open)} />
          <NavDrawer open={open} toggleDrawer={() => setOpen(!open)} />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/albion" element={<Albion />} />
                <Route path="/barnet-street" element={<BarnetStreet />} />
              </Routes>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
