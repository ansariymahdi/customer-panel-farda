import { Components } from "@mui/material/styles"
import theme from ".."

const MuiTablePagination: Components<typeof theme>['MuiTablePagination'] = {
    styleOverrides: {
        root: ({theme}) => theme.unstable_sx({
            mt: {
                desktop: 2,
                mobile: 1,
            },
        }),
    },
    defaultProps: {
        rowsPerPageOptions: [
            {label: '۵', value: 5},
            {label: '۱۰', value: 10},
            {label: '۱۵', value: 15},
        ],
        labelDisplayedRows: e => `${e.from.toLocaleString('fa-IR')}–${e.to.toLocaleString('fa-IR')} از ${e.count !== -1 ? e.count.toLocaleString('fa-IR') : `بیش تر از ${e.to.toLocaleString('fa-IR')}`}`,
        labelRowsPerPage: 'تعداد سطر:',
    },
}

export default MuiTablePagination