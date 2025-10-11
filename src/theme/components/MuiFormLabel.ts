import { Components } from "@mui/material/styles"

const MuiFormLabel: Components<any>["MuiFormLabel"] = {
	styleOverrides: {
		root: ({ theme }) =>
			theme.unstable_sx({
				color: "#6E83A0",
				fontSize: "1rem",
				"&.Mui-error": {
					color: "error.200"
				},
				"&.Mui-focused": {
					color: "secondary.200"
				}
			})
	}
}

export default MuiFormLabel
