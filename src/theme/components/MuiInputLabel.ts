import { Components } from "@mui/material/styles"

const MuiInputLabel: Components<any>["MuiInputLabel"] = {
	styleOverrides: {
		root: ({ theme }) =>
			theme.unstable_sx({
				color: "primary.200",
				fontSize: "1rem",
				"&.Mui-error": {
					color: "error.200"
				}
			})
	}
}

export default MuiInputLabel
