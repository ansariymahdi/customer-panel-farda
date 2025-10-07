import {LoadingButton} from "@mui/lab";
import {
  Badge,
  Button,
  FormControlLabel,
  styled,
  Tab,
  TableCell,
  tableCellClasses,
  TabProps,
} from "@mui/material";

export const CustomerFormControlLabel = styled(FormControlLabel)(({theme}) => ({
  ".MuiFormControlLabel-label": {
    ...theme.typography.h6,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.grey[300],
  },
}));

export const CustomButton = styled(Button)<{customColor?: string}>(
  ({theme, customColor}: any) => ({
    ...(customColor === "white" && {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary[500],
      "&:hover": {
        backgroundColor: theme.palette.primary[500],
        color: theme.palette.common.white,
      },
    }),
    ...(customColor === "purple" && {
      backgroundColor: "#BD7FCF",
      color: theme.palette.common.white,
      "&:hover": {
        backgroundColor: "#BD7FCF",
        color: theme.palette.common.white,
      },
    }),
    ...(customColor === "orange" && {
      backgroundColor: theme.palette.warning[100],
      color: theme.palette.common.white,
      "&:hover": {
        backgroundColor: theme.palette.warning[100],
        color: theme.palette.common.white,
      },
    }),
  })
);
export const CustomLoadingButton = styled(LoadingButton)<{
  customColor?: string;
}>(({theme, customColor}: any) => ({
  ...(customColor === "white" && {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary[200],
    "&:hover": {
      backgroundColor: theme.palette.secondary[200],
      color: theme.palette.common.white,
    },
  }),
  ...(customColor === "purple" && {
    backgroundColor: "#BD7FCF",
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: "#BD7FCF",
      color: theme.palette.common.white,
    },
  }),
  ...(customColor === "orange" && {
    backgroundColor: theme.palette.warning[100],
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.warning[100],
      color: theme.palette.common.white,
    },
  }),
}));

export const StyledTableCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== "white", // جلوگيري از پاس‌دادن به DOM
})<{white?: boolean}>(({theme, white}: any) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: white ? "#fff" : theme.palette.grey[800],
    color: theme.palette.text["primary"],
    padding: 4,
    borderBottom: 0,
    fontWeight: 600,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: white ? "#fff" : theme.palette.grey[800],
    color: theme.palette.text["primary"],
    padding: 4,
    borderBottom: 0,
  },
  borderRadius: "6px 6px",
  textAlign: "center",
}));

export const StyledTableCellWhite = styled(TableCell)(({theme}: any) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "white",
    color: theme.palette.secondary[200],
    padding: 4,
    borderBottom: 0,
    fontWeight: 600,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: "white",
    color: theme.palette.secondary[200],
    padding: 4,
    borderBottom: 0,
  },
  borderRadius: "6px  6px",

  textAlign: "center",
}));

export const StyledBadge = styled(Badge)(({theme}) => ({
  "& .MuiBadge-badge": {
    // right: -3,
    // top: 13,
    // border: `2px solid ${theme.palette.background.paper}`,
    // padding: "0 4px",
  },
}));
export const CustomTab = styled(Tab)<TabProps>(({theme}: any) => ({
  borderBottom: "0px !important",
  fontSize: 16,
  minHeight: 32,

  padding: "0px  16px",

  "&.Mui-selected": {
    borderBottom: "0px !important",
    backgroundColor: theme.palette.primary["500"],
    color: "white",
    borderRadius: 8,
    padding: "8px 8px",
  },
}));
