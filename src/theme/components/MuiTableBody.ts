import { Components } from "@mui/material/styles";
import theme from "..";

const MuiTableBody: Components<typeof theme>['MuiTableBody'] = {
    styleOverrides: {
        root: ({theme}) => theme.unstable_sx({
            '.MuiTableRow-root': {
                // '&:last-child td, &:last-child th': { border: 0 }
            },
        }),
    },
}

export default MuiTableBody