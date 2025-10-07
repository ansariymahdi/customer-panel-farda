import { Components } from "@mui/material";
import theme from "..";

const MuiSwitch: Components<typeof theme>['MuiSwitch'] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => theme.unstable_sx({
      width: 46,
      height: 20,
      padding: 0,
      '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: '2px',
        transitionDuration: '300ms',
        '&.Mui-checked': {
          transform: 'translateX(26px)',
          color: '#fff',
          '& + .MuiSwitch-track': {
            backgroundColor: '#214296',
            opacity: 1,
            border: 0,
            ...(ownerState.color === 'secondary' && {
              backgroundColor: '#00B8D9', 
            }),
            ...(ownerState.color === 'error' && {
              backgroundColor: '#F73600', 
            }),
            ...(ownerState.color === 'warning' && {
              backgroundColor: '#FFAB00',
            }),
            ...(ownerState.color === 'success' && {
              backgroundColor: '#36B37E', 
            }),
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.4,
          },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
          color: '#33cf4d',
          border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
          color: theme.palette.grey[800],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.6,
        },
      },
      '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        borderRadius: '2px',
        width: 16,
        height: 16,
      },
      '& .MuiSwitch-track': {
        backgroundColor: '#C2C9D0', 
        opacity: 1,
        borderRadius: '3px',
        transition: theme.transitions.create(['background-color'], {
          duration: 500,
        }),
      },
    }),
  },
};

export default MuiSwitch;