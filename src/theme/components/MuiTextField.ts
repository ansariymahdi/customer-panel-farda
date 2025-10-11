import { Components } from "@mui/material/styles"

const MuiTextField: Components<any>["MuiTextField"] = {
	defaultProps: {
		variant: "outlined",
		fullWidth: true
	},
	styleOverrides: {
		root: ({ theme }) =>
			theme.unstable_sx({
				color: "text.primary",
				// padding: ' 0.1rem 0.5rem',
				backgroundColor: "white",
				borderRadius: 2,
				"& .Mui-disabled": {
					"& .MuiInputBase-input": {
						WebkitTextFillColor: "#68687E"
					}
				},
				"& .MuiOutlinedInput-root": {
					"&.Mui-focused fieldset": {
						border: "none"
					},
					"&:hover fieldset": {
						border: "none"
					},
					paddingRight: 1
				},
				"& .MuiInputBase-input": {
					fontSize: ".875rem",
					padding: "0.5rem 0.2rem",
					color: "text.primary",
					border: "0px !important;"
				},
				"& .MuiOutlined": {
					borderRadius: "0rem",
					border: "0px !important"
				},
				"& fieldset": {
					borderRadius: "0rem",
					border: "0px solid",
					borderColor: "transparent"
				},
				"&.Mui-focused fieldset": {
					border: "none"
				},
				"& .Mui-error fieldset": {
					border: "none"
				},
				"& .MuiInputBase-multiline": {
					padding: 0,
					lineHeight: 1.5
				}
			})
	}
}

export default MuiTextField
