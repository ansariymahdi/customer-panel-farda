import {createTheme} from "@mui/material";
import {faIR} from "@mui/material/locale";
import {Theme, ThemeProvider} from "@mui/material/styles";
import {useMemo} from "react";
import {useSelector} from "react-redux";
import breakpoints from "./breakpoints";
import components from "./components";
import shadows from "./shadows";
import typography from "./typography";
import palette from "./palette";
const CustomThemeProvider = ({children}: {children: React.ReactNode}) => {
  const currentPalette = useSelector((state: any) => state.account.pallet);

  const theme: Theme = useMemo(() => {
    return createTheme(
      {
        direction: "rtl",
        palette: currentPalette ? JSON.parse(currentPalette) : palette,
        breakpoints,
        typography,
        shadows,
        components,
      },
      faIR
    );
  }, [currentPalette]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
