import { ThemeProvider } from "@mui/material/styles";
import Header from "./ui/Header";
import theme from "./ui/theme";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Box>Home</Box>} />
        <Route path="/services" element={<Box>Services</Box>} />
        <Route path="/customsoftware" element={<Box>Custom Software</Box>} />
        <Route path="/mobileapps" element={<Box>Mobile Apps</Box>} />
        <Route path="/websites" element={<Box>Websites</Box>} />
        <Route path="/revolution" element={<Box>Revolution</Box>} />
        <Route path="/about" element={<Box>About Us</Box>} />
        <Route path="/contact" element={<Box>Contact Us</Box>} />
        <Route path="/estimate" element={<Box>Estimate</Box>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
