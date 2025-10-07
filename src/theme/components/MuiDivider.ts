import {Components} from "@mui/material/styles";
import theme from "..";

const MuiDivider: Components<typeof theme>["MuiDivider"] = {
  styleOverrides: {
    root: ({theme}) =>
      theme.unstable_sx({
        borderBottomColor: "primary.100",
      }),
    light: ({theme}) =>
      theme.unstable_sx({
        backgroundColor: "primary.200",
      }),
  },
};

export default MuiDivider;
