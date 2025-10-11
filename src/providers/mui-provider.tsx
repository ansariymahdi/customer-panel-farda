import * as React from "react"

import EmotionRegistry from "@/helpers/emotion-registry"
import breakpoints from "@/theme/breakpoints"
import components from "@/theme/components"
import palette from "@/theme/palette"
import shadows from "@/theme/shadows"
import typography from "@/theme/typography"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { faIR } from "@mui/material/locale"

const theme = createTheme(
	{
		direction: "rtl",
		palette: palette,
		breakpoints: {
			values: {
				mobile: 0,
				tablet: 800,
				// laptop: 1024,
				desktop: 1200,
				fullScreen: 1440
			}
		},
		typography,
		shadows,
		components
	},
	faIR
)
export default function MuiProvider({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<EmotionRegistry>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</EmotionRegistry>
	)
}
