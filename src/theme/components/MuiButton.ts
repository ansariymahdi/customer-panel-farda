import { Components } from "@mui/material/styles"

const MuiButton: Components<any>["MuiButton"] = {
	styleOverrides: {
		root: ({ theme, ownerState }) =>
			theme.unstable_sx({
				borderRadius: 2,

				...(ownerState.variant === "contained"
					? {
							"&:hover": {
								backgroundColor: ownerState.color + ".100",
								boxShadow: "none"
							}
						}
					: ownerState.variant === "outlined" && {
							"&:hover": {
								borderColor: ownerState.color + ".100"
							}
						})
			}),
		containedPrimary: ({ theme }) =>
			theme.unstable_sx({
				backgroundColor: "primary.200",
				color: "white",

				"&:hover": {
					backgroundColor: "primary.100"
				}
			}),
		containedSecondary: ({ theme }) =>
			theme.unstable_sx({
				backgroundColor: "primary.500",
				color: "white",
				"&:hover": {
					backgroundColor: "primary.300"
				}
			}),
		containedInfo: ({ theme }) =>
			theme.unstable_sx({
				backgroundColor: "info.main",
				color: "white"
			}),
		containedError: ({ theme }) =>
			theme.unstable_sx({
				backgroundColor: "error.400",
				color: "white"
			}),
		containedSuccess: ({ theme }) =>
			theme.unstable_sx({
				backgroundColor: "success.400",
				color: "white",
				"&:hover": {
					backgroundColor: "success.300"
				}
			}),
		containedWarning: ({ theme }) =>
			theme.unstable_sx({
				borderColor: "warning.main",
				color: "white",
				backgroundColor: "secondary.400",

				padding: 0,
				"&:hover": {
					backgroundColor: "secondary.200",
					color: "white"
				}
			}),

		outlinedWarning: ({ theme }) =>
			theme.unstable_sx({
				borderColor: "warning.main",
				color: "secondary.200",
				padding: 0,
				"&:hover": {
					backgroundColor: "warning.main",
					color: "white"
				}
			}),
		sizeMedium: ({ theme }) =>
			theme.unstable_sx({
				py: 1
			}),
		sizeSmall: ({ theme }) =>
			theme.unstable_sx({
				fontSize: ".75rem",
				lineHeight: "1rem"
			})
	},
	defaultProps: {
		variant: "contained",
		fullWidth: true,
		disableElevation: false
	}
}

export default MuiButton
