import { Components } from "@mui/material/styles"
import theme from ".."

const MuiRadio: Components<typeof theme>['MuiRadio'] = {
    styleOverrides: {
        root: ({ theme }) => theme.unstable_sx({
            // color: 'grey.200',
            '& .MuiSvgIcon-root': {
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                border: '2px solid #6E83A0',
                backgroundColor: 'transparent',
                fill: 'transparent',
            },
            '&.Mui-checked': {
                '& .MuiSvgIcon-root': {
                    color: '#36B37E',
                    backgroundColor: '#36B37E',
                },
            },
        }),
    },
}

export default MuiRadio