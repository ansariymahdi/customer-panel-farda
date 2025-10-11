import { Components } from "@mui/material/styles"

const MuiTabs: Components<any>["MuiTabs"] = {
	styleOverrides: {
		scrollButtons: ({ theme }) =>
			theme.unstable_sx({
				"&.Mui-disabled": {
					width: 0
				}
			})
	}
}

export default MuiTabs
