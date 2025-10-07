import {Components} from "@mui/material/styles";
import theme from "..";

const MuiSvgIcon: Components<typeof theme>["MuiSvgIcon"] = {
  styleOverrides: {
    root: ({theme}) =>
      theme.unstable_sx({
        // color: "text.primary", // همون چیزی که می‌خواستی
        fontSize: "1.25rem", // مثال: می‌تونی سایز رو هم تغییر بدی
      }),
  },
};

export default MuiSvgIcon;
