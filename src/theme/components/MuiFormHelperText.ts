import { Components } from "@mui/material/styles"
import theme from ".."

const MuiFormHelperText: Components<typeof theme>['MuiFormHelperText'] = {
    styleOverrides: {
        root: ({theme}) => theme.unstable_sx({
            fontSize: '.875rem',
            fontWeight: 400,
            lineHeight: "1.5rem",
            ml: 0,
            color: 'primary.200',
            "&.Mui-error": {
                color: 'error.200',
            },
        }),
    },
}

export default MuiFormHelperText