import { createTheme } from "@mui/material/styles";
const appTheme = createTheme({
  palette: {
    //메인 color
    primary: {
      main: "#00FFFF", // <원하는 아이콘 color="primary" /> 했을 때 적용되는 color값
    },
    //서브 color
    secondary: {
      main: "#FF00FF", // <원하는 아이콘 color="secondary" /> 했을 때 적용되는 color값
    },
    //커스텀 color
    custom: {
      main: "#fff000", // <원하는 아이콘 color="custom" /> 했을 때 적용되는 color값
    },
  },
});

export default appTheme;
