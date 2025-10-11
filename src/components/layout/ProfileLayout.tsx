// app/login/layout.tsx
import * as React from "react"
import Image from "next/image"

import { Box, Paper, Stack } from "@mui/material"

import Header from "../widgets/Header"

export default function ProfileLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<section style={{ paddingRight: 8, paddingLeft: 8 }}>
			<Header />
			<Box sx={{ mt: 4, px: 2.5 }}>
				<Paper
					sx={{
						minHeight: "80vh",
						mb: 4,
						borderRadius: 4,
						position: "relative"
					}}
				>
					{children}

					<Stack
						sx={{
							position: "absolute",
							bottom: 0,
							right: 0,
							left: 0,
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<Image
							src="/images/bg-box-logo.svg"
							alt="insurance-logo"
							width="280"
							height="200"
						/>
					</Stack>
				</Paper>
			</Box>
		</section>
	)
}
