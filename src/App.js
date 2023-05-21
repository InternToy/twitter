import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import AbcIcon from "@mui/icons-material/Abc";
import PublicIcon from "@mui/icons-material/Public";
import Themes from "./themes/appTheme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Themes}>
        {/*색상 변경*/}
        <AbcIcon style={{ color: "blue" }} />
        <AbcIcon color="primary" />
        <AbcIcon color="secondary" />
        {/*사이즈 변경*/}
        <PublicIcon color="custom" />
        <PublicIcon fontSize="large" />
        <PublicIcon fontSize="medium" />
        <PublicIcon fontSize="small" />
      </ThemeProvider>
    </div>
  );
}

export default App;
