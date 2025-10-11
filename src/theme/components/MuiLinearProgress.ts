import { Components } from "@mui/material/styles"

const MuiLinearProgress: Components<any>["MuiLinearProgress"] = {
	styleOverrides: {
		root: ({ theme }) =>
			theme.unstable_sx({
				backgroundColor: "primary.800"
			}),
		bar: ({ theme }) =>
			theme.unstable_sx({
				backgroundColor: "success.100"
			})
	}
}

export default MuiLinearProgress
