// app/login/layout.tsx
import * as React from "react"
import Image from "next/image"

import { Box, Stack } from "@mui/material"

export default function AuthLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<section
			style={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#f5f5f5",
				backgroundImage: "url('/images/bg-login.webp')"
			}}
		>
			<Stack sx={{ mb: 24 }}>
				<Image
					src="/images/logo/farda-logo.svg"
					alt="farda-logo"
					width="500"
					height="100"
				/>
			</Stack>
			<Box
				sx={{
					minWidth: 550,
					minHeight: 430,
					boxShadow: "0px 4px 4px 0px #00000040",
					backgroundColor: "#EEF0F296",
					backdropFilter: "blur(15spx)",
					borderRadius: 3,
					backgroundImage: " url('/images/logo/bg-logo.svg')",
					backgroundRepeat: "no-repeat"
				}}
			>
				{children}
			</Box>
		</section>
	)
}
