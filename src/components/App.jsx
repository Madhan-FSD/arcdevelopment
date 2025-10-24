import { ThemeProvider } from "@mui/material/styles";
import Header from "./ui/Header";
import theme from "./ui/theme";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/customsoftwar" element={<div>Custom Software</div>} />
        <Route path="/mobileapps" element={<div>Mobile Apps</div>} />
        <Route path="/websites" element={<div>Websites</div>} />
        <Route path="/revolution" element={<div>Revolution</div>} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/contact" element={<div>Contact Us</div>} />
        <Route path="/estimate" element={<div>Estimate</div>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
