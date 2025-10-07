import {Components} from "@mui/material/styles";

const MuiTypography: Components["MuiTypography"] = {
  styleOverrides: {
    root: ({theme}: any) =>
      theme.unstable_sx({
        color: "text.primary",
      }),
  },
  defaultProps: {
    fontWeight: "fontWeightRegular",
  },
};

export default MuiTypography;
