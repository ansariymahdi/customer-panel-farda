import React from "react"
import Image from "next/image"

// import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded"
// import CallRoundedIcon from "@mui/icons-material/CallRounded"
// import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded"
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
// import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded"
import {
	AppBar,
	Avatar,
	Box,
	Button,
	IconButton,
	Stack,
	Toolbar,
	Typography
} from "@mui/material"

import CallIcon from "../icons/CallIcon"
import CurvedDamageIcon from "../icons/CurvedDamageIcon"
import CurvedPolicyIcon from "../icons/CurvedPolicyIcon"
import NotificationIcon from "../icons/NotificationIcon"
import PolicyIcon from "../icons/PolicyIcon"

export default function Header() {
	return (
		<AppBar
			position="static"
			sx={{
				backgroundColor: "#b3e5fc",
				color: "#000",
				boxShadow: "none",
				height: 50,
				borderRadius: 2,
				justifyContent: "center",
				mt: 4
			}}
		>
			<Toolbar sx={{ justifyContent: "space-between", minHeight: "auto" }}>
				{/* Right Side - Logo */}
				<Box
					display="flex"
					gap={1}
					sx={{ position: "relative", alignItems: "center" }}
				>
					<Box
						sx={{
							backgroundColor: "#9FD8EE",
							border: "1px solid #F5F7F8",
							borderRadius: 4,
							p: 2,
							display: "flex"
						}}
					>
						<Image
							src="/images/logo/farda-logo.svg"
							alt="farda-logo"
							width="180"
							height="40"
						/>
					</Box>
					<Stack direction="row" sx={{ width: "100%" }} spacing={1}>
						<Button
							variant="contained"
							sx={{
								// backgroundColor: "#81d4fa",
								color: "#fff",
								borderRadius: 2,
								height: 30,
								"&:hover": { backgroundColor: "#4fc3f7" }
							}}
							startIcon={<PolicyIcon />}
							disableElevation
						>
							بیمه‌های من
						</Button>

						<Button
							variant="text"
							sx={{
								color: "#000",
								borderRadius: 2,
								height: 30,

								"&:hover": { backgroundColor: "#4fc3f7" }
							}}
							disableElevation
							startIcon={<CurvedPolicyIcon />}
						>
							صدور بیمه‌نامه
						</Button>

						<Button
							variant="text"
							sx={{
								// backgroundColor: "#81d4fa",
								color: "#000",
								borderRadius: 2,
								height: 30,

								"&:hover": { backgroundColor: "#4fc3f7" }
							}}
							disableElevation
							startIcon={<CurvedDamageIcon />}
						>
							اطلاعات خسارت
						</Button>
					</Stack>
				</Box>

				{/* Middle - Buttons */}

				{/* Left Side - Profile & Icons */}
				<Stack direction="row" spacing={1} alignItems="center">
					<IconButton sx={{ backgroundColor: "#83C0D7" }}>
						<CallIcon />
					</IconButton>
					<Stack
						flexDirection="row"
						sx={{ backgroundColor: "#83C0D7", borderRadius: 3.5 }}
					>
						<IconButton sx={{ color: "#000" }}>
							<NotificationIcon />
						</IconButton>
						<Avatar
							src="/images/profile.jpg"
							sx={{
								width: 36,
								height: 36,
								border: "2px solid #fff",
								borderRadius: 3.5
							}}
						/>
					</Stack>
				</Stack>
			</Toolbar>
		</AppBar>
	)
}
