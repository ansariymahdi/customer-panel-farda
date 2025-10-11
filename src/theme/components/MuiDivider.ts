import { Components } from "@mui/material/styles"

const MuiDivider: Components<any>["MuiDivider"] = {
	styleOverrides: {
		root: ({ theme }) =>
			theme.unstable_sx({
				borderBottomColor: "primary.100"
			}),
		light: ({ theme }) =>
			theme.unstable_sx({
				backgroundColor: "primary.200"
			})
	}
}

export default MuiDivider
