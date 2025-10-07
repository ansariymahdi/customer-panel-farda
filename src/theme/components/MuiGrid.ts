import { Components } from "@mui/material/styles";

declare module '@mui/material/Grid' {
    interface GridPropsVariantOverrides {
        form: true;
    }
}

const MuiGrid: Components['MuiGrid'] = {
    defaultProps: {
        columns: {
            mobile: 4,
            tablet: 8,
        },
        spacing: {
            mobile: .5,
            tablet: 1.5,
            desktop: 2.5,
        },
    },
}

export default MuiGrid