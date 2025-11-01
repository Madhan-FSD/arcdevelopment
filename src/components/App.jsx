import { ThemeProvider } from "@mui/material/styles";
import Header from "./ui/Header";
import theme from "./ui/theme";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./ui/Foooter";
import { useState } from "react";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Header
        value={value}
        setValue={setValue}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />
          }
        />
        <Route
          path="/services"
          element={
            <Services setValue={setValue} setSelectedIndex={setSelectedIndex} />
          }
        />
        <Route
          path="/customsoftware"
          element={
            <CustomSoftware
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />
          }
        />
        <Route
          path="/mobileapps"
          element={
            <MobileApps
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />
          }
        />
        <Route path="/websites" element={<Box>Websites</Box>} />
        <Route path="/revolution" element={<Box>Revolution</Box>} />
        <Route path="/about" element={<Box>About Us</Box>} />
        <Route path="/contact" element={<Box>Contact Us</Box>} />
        <Route path="/estimate" element={<Box>Estimate</Box>} />
      </Routes>
      <Footer
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </ThemeProvider>
  );
}

export default App;
