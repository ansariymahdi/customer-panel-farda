import { createTheme, TypographyVariantsOptions } from "@mui/material/styles"

import breakpoints from "./breakpoints"

const dummyTheme = createTheme({
	breakpoints,
	typography: {
		fontFamily: "YekanBakh",
		fontWeightLight: 100,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		h1: {
			fontWeight: 700,
			fontSize: "3.5rem",
			lineHeight: "4.75rem"
		},
		h2: {
			fontSize: "2.5rem",
			lineHeight: "3.375rem"
		},
		h3: {
			fontSize: "2rem",
			lineHeight: "2.75rem"
		},
		h4: {
			fontSize: "1.5rem",
			lineHeight: "2rem"
		},
		h5: {
			fontSize: "1.25rem",
			lineHeight: "2.5rem"
		},
		h6: {
			fontSize: "1rem",
			lineHeight: "1.875rem"
		},
		subtitle1: {
			fontSize: ".875rem",
			lineHeight: "1.25rem"
		},
		subtitle2: {
			fontSize: ".75rem",
			lineHeight: "1rem"
		},
		body1: {
			fontSize: ".625rem",
			lineHeight: "1rem"
		}
	}
})

const typography: TypographyVariantsOptions = {
	...dummyTheme.typography,
	button: {
		...dummyTheme.typography.subtitle1,
		fontWeight: 400,
		[dummyTheme.breakpoints.up("desktop")]: {
			...dummyTheme.typography.h6,
			fontWeight: 400
		}
	}
}

export default typography
