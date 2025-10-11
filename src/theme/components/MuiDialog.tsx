import { Components } from "@mui/material"

const MuiDialog: Components<any>["MuiDialog"] = {
	styleOverrides: {
		root: ({ theme }) =>
			theme.unstable_sx({
				width: "100%",
				// "& .MuiDialog-paper": {
				//     width: "90% !important",
				// },
				"& .MuiDialog-container .MuiPaper-root": {
					borderRadius: "0.563rem",
					p: ".5rem"
				},
				"& .MuiDialogContent-root": {
					backgroundColor: "grey.800",
					p: "0.625rem",
					paddingTop: "0.625rem !important",
					borderRadius: ".375rem"
				},
				"& .MuiDialogActions-root": {
					minWidth: 400
				}
			})
	}
}

export default MuiDialog
