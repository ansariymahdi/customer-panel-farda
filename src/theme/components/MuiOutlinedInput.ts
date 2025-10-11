import { Components } from "@mui/material/styles"

const MuiOutlinedInput: Components<any>["MuiOutlinedInput"] = {
	styleOverrides: {
		root: ({ theme }) =>
			theme.unstable_sx({
				backgroundColor: "transparent",
				borderRadius: ".5rem",
				"&.Mui-focused": {
					".MuiInputAdornment-root": {
						color: "primary.main"
					},
					"&:has(.MuiSelect-select)": {
						borderRadius: 0
					}
				},
				"&.Mui-error": {
					color: "error.200",
					".MuiOutlinedInput-notchedOutline": {
						borderWidth: 1,
						borderColor: "error.200"
					},
					".MuiInputAdornment-root": {
						color: "error.200"
					}
				},
				".MuiOutlinedInput-notchedOutline": {
					fontSize: "1rem"
				},
				".MuiOutlinedInput-input": {
					fontSize: ".875rem"
				}
			})
	}
}

export default MuiOutlinedInput
