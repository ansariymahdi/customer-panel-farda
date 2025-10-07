import { Components } from "@mui/material/styles"
import theme from ".."

const MuiTabs: Components<typeof theme>['MuiTabs'] = {
    styleOverrides: {
        scrollButtons: ({theme}) => theme.unstable_sx({
            "&.Mui-disabled": {
                width: 0,
            },
        }),
    },
}

export default MuiTabs