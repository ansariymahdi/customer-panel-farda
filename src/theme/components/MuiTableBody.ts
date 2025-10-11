import { Components } from "@mui/material/styles"

const MuiTableBody: Components<any>["MuiTableBody"] = {
	styleOverrides: {
		root: ({ theme }) =>
			theme.unstable_sx({
				".MuiTableRow-root": {
					// '&:last-child td, &:last-child th': { border: 0 }
				}
			})
	}
}

export default MuiTableBody
