import { Components } from "@mui/material/styles";
import theme from "..";

const MuiTableCell: Components<typeof theme>['MuiTableCell'] = {
    styleOverrides: {
        root: ({theme}) => theme.unstable_sx({
            borderBottomColor: 'primary.800',
        }),
        head: ({theme}) => theme.unstable_sx({
            color: 'primary.300',
            fontWeight: 100,
        }),
        body: ({theme}) => theme.unstable_sx({
            color: 'grey.200',
        }),
    },
    defaultProps: {
        align: "right",
    },
}

export default MuiTableCell