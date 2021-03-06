import { Menu } from "@mui/icons-material";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  AppBar,
  Collapse,
  Toolbar,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavList from "./components/NavList";

const theme = createTheme({
  palette: {
    primary: {
      main: "#66dabf",
      light: "#9bfff2",
      dark: "#2ba88f",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f7c62f",
      light: "#fff965",
      dark: "#c09600",
      contrastText: "#ffffff",
    },
  },
  spacing: 5,
});

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <Collapse
            in={open}
            orientation="horizontal"
            collapsedSize={55}
            sx={{
              borderRight: 1,
              borderColor: "divider",
              bgcolor: "primary.dark",
            }}
          >
            <NavList setOpen={setOpen} />
          </Collapse>
          <Box sx={{ flexGrow: 1 }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
