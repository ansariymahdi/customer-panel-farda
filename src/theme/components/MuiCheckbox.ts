import { Components } from "@mui/material/styles"

const MuiCheckbox: Components<any>["MuiCheckbox"] = {
	styleOverrides: {
		root: ({ theme }) =>
			theme.unstable_sx({
				// color: 'grey.300',
				"& .MuiSvgIcon-root": {
					width: "16px",
					height: "16px",
					border: "2px solid #6E83A0",
					borderRadius: "20%",
					backgroundColor: "transparent",
					fill: "transparent"
				},
				"&.Mui-checked": {
					"& .MuiSvgIcon-root": {
						color: "#36B37E",
						backgroundColor: "#36B37E"
					}
				},
				"&.Mui-disabled": {
					"& .MuiSvgIcon-root": {
						borderColor: "#B0BEC5", // light gray
						backgroundColor: "#6E83A0", // light disabled bg
						color: "#B0BEC5" // icon color when disabled
					}
				},
				"&.Mui-disabled.Mui-checked": {
					"& .MuiSvgIcon-root": {
						backgroundColor: "#B0BEC5", // same color to show it's disabled
						color: "#ffffff"
					}
				}
			})
	}
}

export default MuiCheckbox
