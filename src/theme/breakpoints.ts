import { BreakpointsOptions } from "@mui/material/styles"

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
      xs: false; // removes the `xs` breakpoint
      sm: false;
      md: false;
      lg: false;
      xl: false;
      mobile: true; // adds the `mobile` breakpoint
      tablet: true;
      desktop: true;
      fullScreen: true;
    }
}

const breakpoints: BreakpointsOptions  = {
    values: {
        mobile: 0,
        tablet: 744,
        desktop: 1440,
        fullScreen: 1280,
    },
}

export default breakpoints