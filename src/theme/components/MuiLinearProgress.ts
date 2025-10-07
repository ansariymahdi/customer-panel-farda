import { Components } from "@mui/material/styles"
import theme from ".."

const MuiLinearProgress: Components<typeof theme>['MuiLinearProgress'] = {
    styleOverrides: {
        root: ({theme}) => theme.unstable_sx({
            backgroundColor: 'primary.800',
        }),
        bar: ({theme}) => theme.unstable_sx({
            backgroundColor: 'success.100',
        }),
    },
}

export default MuiLinearProgress