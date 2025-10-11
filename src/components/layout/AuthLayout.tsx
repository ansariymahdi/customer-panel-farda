// app/login/layout.tsx
"use client"

import * as React from "react"
import Image from "next/image"

import { Box, Stack } from "@mui/material"

export default function AuthLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Stack
			component="section"
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#f5f5f5",
				backgroundImage: "url('/images/bg-login.webp')",
				mobile: {
					backgroundPosition: "center"
				}
			}}
		>
			<Box
				sx={(theme) => ({
					position: "relative",
					width: "500px",
					height: "100px",
					mb: 24,
					[theme.breakpoints.down("tablet")]: {
						width: "300px",
						height: "60px"
					},
					[theme.breakpoints.down("mobile")]: {
						width: "220px",
						height: "50px"
					}
				})}
			>
				<Image
					src="/images/logo/farda-logo.svg"
					alt="farda-logo"
					fill
					style={{ objectFit: "contain" }}
				/>
			</Box>
			<Box
				sx={(theme) => ({
					minWidth: 550,
					minHeight: 430,
					boxShadow: "0px 4px 4px 0px #00000040",
					backgroundColor: "#EEF0F296",
					backdropFilter: "blur(15px)",
					borderRadius: 3,
					backgroundImage: "url('/images/logo/bg-logo.svg')",
					backgroundRepeat: "no-repeat",

					[theme.breakpoints.down("tablet")]: {
						minWidth: 350
					},
					[theme.breakpoints.down("mobile")]: {
						minWidth: 300
					}
				})}
			>
				{children}
			</Box>
		</Stack>
	)
}
