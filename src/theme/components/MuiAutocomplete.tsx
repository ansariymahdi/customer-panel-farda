import { Components } from "@mui/material"

import theme from ".."

// import ArrowDropdownGray from "@/icons/ArrowDropdownGray";

const MuiAutocomplete: Components<typeof theme>["MuiAutocomplete"] = {
	styleOverrides: {
		root: ({ theme }) =>
			theme.unstable_sx({
				minHeight: "30px",
				"& .MuiFormHelperText-root": {
					color: "error.800"
				},
				"& .MuiInputBase-root": {
					height: "39px",
					// backgroundColor: '#FFFFFF',
					color: theme.palette.primary[800],

					borderRadius: "0.5rem",
					transition: "all 0.3s ease"
				},
				"& .MuiInputBase-input": {
					height: "30px",
					color: "#6E83A0"
				},
				"& .MuiOutlinedInput-root": {
					"& fieldset": {
						border: "none"
					}
				},
				"& .MuiAutocomplete-popupIndicator": {
					width: "1.75rem",
					height: "1.75rem",
					transition: "transform 0.3s ease",
					"& .MuiSvgIcon-root": {
						width: ".75rem"
					}
				}
			}),
		popper: ({ theme }) => ({
			"&.MuiPopper-root": {
				zIndex: 1300,
				paddingTop: "6px",
				// Dropdown Container
				"& .MuiPaper-root.MuiAutocomplete-paper": {
					boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
					borderRadius: "3px",
					// Listbox Component
					"& .MuiAutocomplete-listbox": {
						padding: "6px 8px",
						maxHeight: "200px",
						// Individual Options
						"& .MuiAutocomplete-option": {
							minHeight: "30px",
							padding: "8px 16px",
							fontSize: "12px",
							backgroundColor: "#F7F7F7",
							borderRadius: "0.375rem",
							"&:not(:last-child)": {
								marginBottom: "5px"
							},
							'&:not([aria-selected="true"])': {
								color: theme.palette.primary[800]
							},
							"&:hover": {},
							'&[aria-selected="true"]': {
								backgroundColor: theme.palette.action.selected,
								color: theme.palette.primary[800]
							},
							"&.Mui-focused": {
								backgroundColor: theme.palette.action.focus
							}
						},
						"& .MuiAutocomplete-loading, & .MuiAutocomplete-noOptions": {
							padding: "16px",
							color: theme.palette.primary[800]
						},
						//  Scrollbar styling
						overflowY: "auto",
						direction: "rtl", // Flips scrollbar to left
						"& > *": {
							direction: "ltr" // Keeps content direction normal
						},
						scrollbarWidth: "thin",
						scrollbarColor: "#778AA6 #F2F2F2",
						scrollBehavior: "smooth"
					}
				}
			}
		})
	},
	defaultProps: {
		// popupIcon: <ArrowDropdownGray />,
	}
}

export default MuiAutocomplete
