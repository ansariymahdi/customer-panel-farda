import { createTheme, Shadows } from "@mui/material/styles"

const dummyTheme = createTheme()

const shadows: Shadows = dummyTheme.shadows

shadows[1] = "0px 2px 4px rgba(77, 77, 128, 0.36)"
shadows[2] = "0px 4px 6px rgba(77, 77, 128, 0.3)"
shadows[3] = "0px 6px 8px rgba(77, 77, 128, 0.4)"
shadows[5] = "0px 2px 4px rgba(94, 116, 159, 0.4)" // button
shadows[6] = "0px 4px 1px #FF939A" // error

export default shadows
