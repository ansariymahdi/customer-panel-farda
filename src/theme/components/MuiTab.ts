import { Components } from "@mui/material/styles"

const MuiTab: Components<any>["MuiTab"] = {
	styleOverrides: {
		root: ({ theme }) =>
			theme.unstable_sx({
				color: "text.primary",
				fontWeight: "100 !important",
				"&.Mui-selected": {
					fontWeight: "400 !important"
				}
			})
	}
}

export default MuiTab
